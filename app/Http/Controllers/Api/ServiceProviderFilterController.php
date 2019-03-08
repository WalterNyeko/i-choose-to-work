<?php

namespace App\Http\Controllers\Api;

use App\ServiceRequest;
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

    /**
     * Filter Service Requests Per Category
     *
     * @param Request $request
     * @return mixed
     */
    public function filterServiceRequest(Request $request)
    {
        return ServiceRequest::filter($request->all())->paginateFilter();
    }
}
