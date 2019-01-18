<?php

use App\User;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Register route  
Route::post('register', 'Api\AuthController@register');

//Login route 
Route::post('login', 'Api\AuthController@login');



Route::group(['prefix' => 'profile'], function() {
    /**
     * bio profile routes
     */
    Route::apiResource('bio', 'BioController');

    /**
     * education profile routes
     */
    Route::apiResource('education', 'EducationController');
    /**
     * Education profile routes
     */
    Route::apiResource('experience', 'ExperienceController');
});

