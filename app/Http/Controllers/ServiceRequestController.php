<?php

namespace App\Http\Controllers;

use App\User;
use App\Models\Service;
use App\ServiceRequest;
use Illuminate\Http\Request;
use App\Models\ServiceCategory;
use App\Models\ServiceDeliveryOffer;
use App\Notifications\RequestNotification;


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
            'address' => ['required'], 
            'service_id' => ['required', 'exists:services,id'],
            'description' => ['required'],
            'expected_start_date' => ['required', 'date'],
            'payment_method' => ['required']
        ],[]);
        $user = $request->user();
        if($validator->fails())
        {
            return response()->json(['errors' => $validator->errors()], 422);
        }


        // $req = ServiceRequest::create($request->all());

        $req = $user->serviceRequests()->create($request->all());


        return response()->json(['message' => 'Request Successful', 'id' => $req->id], 200);
    }

    /**
     * list service providers that offer a given service by id
     */

    public function providers($id)
    {
        $service = Service::find($id);

        $providers = $service->providers()->with('bioProfile', 'services')->get();

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
            'estimated_cost' => ['numeric'],
            'service_req_id' => ['required', 'exists:service_requests,id'],
        ],
        [
            'service_req_id.required' => 'Invalid Service request',
            'service_req_id.exists' => 'Invalid Service request',

        ]
        );

        if ($validator->fails()) {
           return response()->json(['errors' => $validator->errors()], 422);
        }

        $offer = ServiceDeliveryOffer::create([
            'estimated_cost' => $request->estimated_cost,
            'service_req_id' => $request->service_req_id,
            'provider_id' => $request->user()->id,
            'delivery_date' => $request->delivery_date,
            'description' => $request->description
        ]);
        $user = User::find($request->user()->id);
        \Notification::route('mail', $user->email)
            ->notify(new RequestNotification());
        // if($user->hasRole('provider'))
        // {
            
        // }
        // else 
        // {
        //     $role = [
        //         'role' => 'Please sign up as a Service Provider'
        //     ];
        //     return response()->json(['errors' => $role ], 422);
        // }

        return $offer;
    }

    /**
     * return users service requests
     */
    public function getRequestByUser(Request $request)
    {
        $user = $request->user();
        $requests = $user->serviceRequests()->latest()->with(['service'])->get();

        return response()->json($requests);
    }

    /**
     * get all user offers for a request
     */
    public function getUserOffers(Request $request)
    {
        $user = $request->user();

        $offers = $user->offers()->latest()->with(['seviceRequest'])->get();

        return response()->json($offers);
    }

    /**
     * hire request 
     * 
     */
}
