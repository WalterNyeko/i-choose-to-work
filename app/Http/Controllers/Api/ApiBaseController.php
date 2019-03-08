<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ApiBaseController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth');
        //$this->middleware('check-permissions');
    }
}
