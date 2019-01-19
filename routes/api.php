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
     * entire profile
     */
    Route::get('/{id}', function($id){
        $user = User::with(['education', 'skills', 'bioProfile', 'experience'])->find($id) ;
        return response()->json($user);
    });
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

    /**
     * adding skills to profile
     */
    Route::post('skills', 'ProfileSkillsController@store');

    /**
     * get users with a particular skill
     */

     Route::get('skill/{id}', 'ProfileSkillsController@getUserBySkill');
});


