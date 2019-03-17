<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\Rating;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\ApiBaseController;

class ReviewController extends ApiBaseController
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = $this->validateRequest($request->all());

        if ($validator->fails()) {

            return response()->json(['errors' => $validator->errors()], 422);
        }

        try {

            //Get current logged user doing the rating
            $currentUser = $request->user();

            // Get user id to be rated from the request
            $userId = $request->user_id;
            $user = User::find($userId);

            $rating = $user->rating([
                'title' => '',
                'body' => '',
                'rating' => $request->rating,
            ], $currentUser);

        } catch (\Exception $e) {
            return response()->json(['message' => 'Rating failed, please try again later']);
        }

        return new Rating($rating);
    }

    /**
     * Get the rating percentage
     *
     * @param $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function ratingPercentage($id)
    {
        try {
            $user = User::findOrFail($id);
            $ratingPercentage = $user->ratingPercent();
        } catch (\Exception $e) {
            return response()->json(['message' => 'User rating not available']);
        }
        return response(['rating' => $ratingPercentage]);
    }

    /**
     * Get rate count for a user
     *
     * @param $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function countRating($id)
    {
        try {
            $user = User::findOrFail($id);
            $rateCount = $user->countRating();
        } catch (\Exception $e) {
            return response()->json(['message' => 'User rating not available']);
        }
        return response(['rateCount' => $rateCount]);
    }

    /**
     * Get average rating for a user
     *
     * @param $id
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function averageRating($id)
    {
        try {
            $user = User::findOrFail($id);
            $averageRate = $user->averageRating();
        } catch (\Exception $e) {
            return response()->json(['message' => 'User rating not available']);
        }
        return response(['averageRate' => $averageRate]);
    }

    /**
     * Validate Request Data
     *
     * @param $data
     * @return mixed
     */
    private function validateRequest($data)
    {
        $validator = \Validator::make($data,
            [
                'user_id' => ['required'],
                'rating' => ['required'],
            ], []);

        return $validator;
    }
}
