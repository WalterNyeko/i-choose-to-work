<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\ServiceRequestRequest;
use App\Http\Resources\ServiceRequestCollection;
use App\Models\ServiceCategory;
use App\ServiceRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\ApiBaseController;
use App\Http\Resources\ServiceRequest as ServiceRequestResource;

class ServiceRequestController extends ApiBaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        /* Validate the request */
        $validator = $this->validateRequest($data);

        /*Get the user for the request*/
        $user = $request->user();

        /* Check for validation failure */
        if($validator->fails())
        {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $serviceRequest = $user->serviceRequests()->create($request->all());
        // $serviceRequest = ServiceRequest::create($request->all());
        return new ServiceRequestResource($serviceRequest);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        try {
            $serviceRequest = ServiceRequest::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'message', 'The service request is either deleted or not existing'
            ]);
        }
        return new ServiceRequestResource($serviceRequest);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
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
                'address' => ['required'],
                'service_id' => ['required', 'exists:services,id'],
                'description' => ['required'],
                'expected_start_date' => ['required', 'date'],
                'payment_method' => ['required']
            ],[]);

        return $validator;
    }

    /**
     * Get All Cancelled Service Requests
     *
     * @return ServiceRequestCollection
     */
    public function cancelledServiceRequests()
    {
        $serviceRequests = ServiceRequest::cancelled()->get();
        return new ServiceRequestCollection($serviceRequests);
    }

    /**
     * Get All Non Cancelled Service Requests
     *
     * @return ServiceRequestCollection
     */
    public function notCancelledServiceRequests()
    {
        $serviceRequests = ServiceRequest::notCancelled()->get();
        return new ServiceRequestCollection($serviceRequests);
    }


    /**
     * Cancel Service Request
     *
     * @param Request $request
     * @return ServiceRequestResource
     */
    public function cancelRequest(Request $request)
    {

        try {

            $serviceRequest = '';
            $serviceRequestId = ServiceRequest::whereId($request->id)->update(['cancelled' => 1]);
            if ($serviceRequestId) {
                /* Return the service request that has been cancelled */
                $serviceRequest = ServiceRequest::find($request->id);
            } else {
                return response()->json(['message' => 'Cancelling request failed']);
            }

            return new ServiceRequestResource($serviceRequest);

        } catch (\Exception $e) {
            return response()->json(['message' => 'Cancelling request failed']);
        }


    }

    /**
     * Service Request Acceptance
     *
     * @param Request $request
     * @return ServiceRequestResource|\Illuminate\Http\JsonResponse
     */
    public function acceptRequest(Request $request)
    {

        try {

            $serviceRequest = '';
            $serviceRequestId = ServiceRequest::whereId($request->id)->update(['acceptance' => 1]);
            if ($serviceRequestId) {
                /* Return the service request that has been cancelled */
                $serviceRequest = ServiceRequest::find($request->id);
            } else {
                return response()->json(['message' => 'No service request specified']);
            }

            return new ServiceRequestResource($serviceRequest);

        } catch (\Exception $e) {
            return response()->json(['message' => 'Service request acceptance failed']);
        }

    }

    /**
     * Get Service Requests For Logged In User
     *
     * @param Request $request
     * @return ServiceRequestCollection
     */
    public function userServiceRequests(Request $request)
    {
        $currentUser = $request->user();
        $serviceRequests = $currentUser->serviceRequests;
        return new ServiceRequestCollection($serviceRequests);

    }

    /**
     * Get Service Requests for a Category
     * @param Request $request
     * @param $category
     * @return ServiceRequestCollection
     */
    public function categoryServiceRequests(Request $request, $category)
    {
        $serviceCategory = ServiceCategory::findOrFail($category);
        $serviceRequests = $serviceCategory->serviceRequests;
        // dd($serviceRequests);
        return new ServiceRequestCollection($serviceRequests);
    }

    /**
     * Get 5 latest service requests.
     *
     * @return ServiceRequestCollection
     */
    public function recentServiceRequests()
    {
        $serviceRequests = ServiceRequest::latest()->take(5)->get();
        return new ServiceRequestCollection($serviceRequests);

    }
}
