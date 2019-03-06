<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ServiceProviderFilterController extends Controller
{
    /**
     * Filter service providers
     *
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        return User::filter($request->all())->get();
    }
}
