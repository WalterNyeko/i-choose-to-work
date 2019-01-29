<?php

namespace App\Http\Controllers;

use App\User;
use App\Models\Service;
use App\ServiceRequest;
use Illuminate\Http\Request;
use App\Models\ServiceCategory;
use App\Models\ServiceDeliveryOffer;


class ServiceRequestController extends Controller
{
    /**
     * return the page for categories and service for the user to select 
     */
    public function index()
    {
        return view('services.index');
    }

    /**
     * service request form
     */

    public function create($id)
    {
        return view('services.create', ['id' => $id]);
    }

    /**
     * post request 
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $validator = \Validator::make($data, 
        [
            'customer_id' => ['required', 'exists:users,id'],
            'address' => ['required'], 
            'service_id' => ['required', 'exists:services,id'],
            'description' => ['required', 'min:15'],
            'expected_start_date' => ['required', 'date']
        ],[]);
        if($validator->fails())
        {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        
        $req = ServiceRequest::create($request->all());

        return response()->json(['message' => 'Request Successful', 'id' => $req->id], 200);
    }

    /**
     * list service providers that offer a given service by id
     */

    public function providers($id)
    {
        $service = Service::find($id);

        $providers = $service->providers()->get();

        return $providers->toJson();    
    }

    /**
     * distance calculator
     */
    public function distance($lat1, $lon1, $lat2, $lon2, $unit)
    {
        if (($lat1 == $lat2) && ($lon1 == $lon2)) {
            return 0;
        } else {
            $theta = $lon1 - $lon2;
            $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) + cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
            $dist = acos($dist);
            $dist = rad2deg($dist);
            $miles = $dist * 60 * 1.1515;
            $unit = strtoupper($unit);

            // if ($unit == "K") {
            //     return ($miles * 1.609344);
            // } else if ($unit == "N") {
            //     return ($miles * 0.8684);
            // } else {
            //     return $miles;
            // }
            if($miles * 1.609344 > 50)
            {
                return "You are too far from me";
            }
        }
    }

    /**
     * list all service requests
     */

    public function allRequests($id = null)
    {
        if ($id == null) {
            $requests = ServiceRequest::latest()->with(['customer', 'service'])->get();
        }
        else 
        {
            $requests = ServiceRequest::where('service_id', $id)->latest()->with(['customer', 'service'])->get();
        }

        return $requests->toJson();
    }

    /**
     * find a service category a request belongs to 
     */
    public function serviceCategory($id)
    {
        $cat = ServiceCategory::find($id);

        $services = $cat->services()->has('requests')->with(['requests.service', 'requests.customer'])->get();

        $array = [];
        
        return $services;
        

    }

    /**
     * bidding on a project
     */
    public function bid($id)
    {
        return view('services.bid')->withId($id);
    }

    /**
     * send bid request
     */
    public function offer(Request $request)
    {   
        $data = $request->all();
        $validator = \Validator::make($data, [
            'estimated_cost' => ['required', 'numeric'],
            'provider_id' => ['required', 'exists:users,id'],
            'service_req_id' => ['required', 'exists:service_requests,id']
        ],
        [
            'provider_id.required' => 'Please login with a service provider account to apply for a job',
            'provider_id.exists' => 'Invalid User id',
            'service_req_id.required' => 'Invalid Service request',
            'service_req_id.exists' => 'Invalid Service request',

        ]
        );

        if ($validator->fails()) {
           return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::find($request->provider_id);
        if($user->hasRole('provider'))
        {
            $offer = ServiceDeliveryOffer::create($request->all());
        }
        else 
        {
            $role = [
                'role' => 'Please sign up as a Service Provider'
            ];
            return response()->json(['errors' => $role ], 422);
        }

        return $offer;
    }
}
