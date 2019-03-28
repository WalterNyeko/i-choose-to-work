<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Notifications\VerifyProvider;

class ServiceProvider extends Controller
{
    /**
     * saving information about the service offered by a service provider
     */
    public function updateService(Request $request, $serviceId)
    {
        $inputs = $request->all();

        $user = $request->user();

        $user->services()->updateExistingPivot($serviceId, 
           $inputs
        );

        $services = $user->services()->get();
        // foreach ($services as $serv ) {
        //     return $serv->pivot->service_id;
        // }
        return $services;
    }

    /**
     * adding a service to a user
     */
    public function addService(Request $request)
    {
        $inputs = $request->except('serviceId');

        $validator = \Validator::make($request->all(), [
            'serviceId' => ['required', 'exists:services,id'],
            'billing_rate_per_hour' => ['numeric']
        ], [
            'serviceId.required' => 'Service is required',
            'serviceId.exists' => 'Service doesnot exist',
            'billing_rate_per_hour.numeric' => 'Please enter a valid figure'
        ]);

        if($validator->fails())
        {
            return response()->json([$validator->errors()], 422);
        }
        else 
        {
            $user = $request->user();

            $userDetails = $user->with('bioProfile')->get();
            // $userDetails = User::with('profile')->find($user->id);

            if($user->hasRole('provider'))
            {
                $user->services()->attach($request->serviceId, $inputs);
            }
            else {
                $user->assignRole(['provider']);
                $user->services()->attach($request->serviceId, $inputs);
            }
            $service = Service::find($request->serviceId);
            $serviceName = $service->name;
            \Notification::route('mail' ,env('ADMIN_EMAIL'))
                        ->notify(new VerifyProvider($userDetails, $serviceName));
            return $user->services()->get();
        }
    
    }

    /**
     * removing a service from a service provider
     */
    public function removeService(Request $request, $serviceId)
    {
        $user = $request->user();

        $user->services()->detach($serviceId);

        return $user->services()->get();
    }
}
