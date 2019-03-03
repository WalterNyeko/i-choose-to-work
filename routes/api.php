<?php

use App\User;
use Illuminate\Http\Request;
use App\Models\ServiceCategory;

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
    $user = $request->user();
    if($user->hasRole('provider'))
    {
        return response()->json(['user' => $user, 'role' => 'provider'], 200);
    }
    else {
        return reponse()->json([$user, 'role' => 'public'], 200);
    }
});

//auth routes
Route::group(['prefix' => 'auth'], function() {
    Route::post('register-public', 'Api\RegisterController@registerNormal');
    Route::post('register-provider', 'Api\RegisterController@registerPublic');
});


//service provider update  
Route::post('service-provider/{id}', 'Api\ServiceProvider@updateService')->middleware('auth:api');  

//add a service to a service provider
Route::post('add/service-provider', 'Api\ServiceProvider@addService')->middleware('auth:api');  

//remove a sevice from a service provider by service provider
Route::get('remove/service/{id}', 'Api\ServiceProvider@removeService')->middleware('auth:api');


//check the role of the user
Route::get('/is-provider', 'Api\AuthController@isProvider')->middleware('auth:api');


//Register route  
Route::post('register', 'Api\AuthController@register');

//Login route 
Route::post('login', 'Api\AuthController@login');

/**
 * service category route
 */
Route::apiResource('categories', 'ServiceCategoryController');

Route::get('services1', 'ServiceController@all');

Route::apiResource('services', 'ServiceController');

Route::get('servicess/{id}', 'ServiceController@index2');

Route::post('request', 'ServiceRequestController@store')->middleware('auth:api');


//return service providers that offer a given service
Route::get('providers/{id}', 'ServiceRequestController@providers');

//return all service requests or requests for a given service
Route::get('all-requests/{id?}', 'ServiceRequestController@allRequests');

//return requests for a given service categories
Route::get('cat-requests/{id}', 'ServiceRequestController@serviceCategory');


//bid on a project
Route::post('bid', 'ServiceRequestController@offer')->middleware('auth:api');

/**
 * get user requests
 */
Route::get('my-requests', 'ServiceRequestController@getRequestByUser')->middleware('auth:api');

/**
 * get user offers
 */
Route::get('my-offers', 'ServiceRequestController@getUserOffers')->middleware('auth:api');


Route::group(['prefix' => 'profile'], function() {
    /**
     * entire profile
     */
    Route::get('/{id}', function($id){
        $user = User::with(['education', 'skills', 'bioProfile', 'experience', 'services', 'serviceRequests'])->find($id) ;
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

//get questions according to service  
Route::get('/questions/{id}', 'Api\QuestionsController@getQuestions');

//test 
Route::get('/categories-wth-request/{id}', function($id) {
    $cat = ServiceCategory::find($id);
    return $cat->requests->get();
});

Route::fallback(function () {
    return response()->json(['message' => 'Not Found.'], 404);
})->name('api.fallback.404');


