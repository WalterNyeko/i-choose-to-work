<?php

namespace App\Http\Controllers\Api;

use App\Models\Service;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SearchServiceController extends Controller
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
            $services = Service::search($request->get('q'))->get();

            //Return services if they exist else return the error
            return $services->count() ? $services : $error;

        }

        return $error;

    }

}
