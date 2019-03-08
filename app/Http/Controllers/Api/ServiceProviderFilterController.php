<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\ApiBaseController;

class ServiceProviderFilterController extends ApiBaseController
{
    /**
     * Filter service providers
     *
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        return User::filter($request->all())->paginateFilter();
    }
}
