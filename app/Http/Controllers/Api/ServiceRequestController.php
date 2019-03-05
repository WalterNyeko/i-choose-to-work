<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\ServiceRequestRequest;
use App\ServiceRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceRequest as ServiceRequestResource;

class ServiceRequestController extends Controller
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

        //$serviceRequest = $user->serviceRequests()->create($request->all());
        $serviceRequest = ServiceRequest::create($request->all());
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
}
