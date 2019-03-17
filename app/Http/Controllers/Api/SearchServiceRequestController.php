<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ServiceRequestCollection;
use App\ServiceRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\ApiBaseController;

class SearchServiceRequestController extends ApiBaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
        //Error message to be shown when no keywords defined
        $error = ['error' => 'No results found, please try with different keywords.'];

        //Check if the user enter some keyword
        if ($request->has('q')) {
            //Using the laravel scout syntax to search the services table
            $serviceRequests = ServiceRequest::search($request->get('q'))->get();

            //Return services if they exist else return the error
            return $serviceRequests->count() ? new ServiceRequestCollection($serviceRequests) : $error;

        }

        return $error;
    }

    /**
     * Get Service Requests By Location
     *
     * @param Request $request
     * @return array|\Illuminate\Database\Eloquent\Collection
     */
    public function searchByLocation(Request $request)
    {
        //Error message to be shown when no keywords defined
        $error = ['error' => 'No results found, please try with different keywords.'];

        //Check if the user enter some keyword
        if ($request->has('q')) {
            //Using the laravel scout syntax to search the services table
            $serviceRequests = ServiceRequest::where('address', 'LIKE', '%'.$request->get('q').'%')->get();

            //Return services if they exist else return the error
            return $serviceRequests->count() ? new ServiceRequestCollection($serviceRequests) : $error;

        }

        return $error;
    }

}
