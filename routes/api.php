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
    if ($user->hasRole('provider')) {
        return response()->json(['user' => $user, 'role' => 'provider'], 200);
    } 

    if (!$user->hasRole('provider')) {
        return response()->json(['user' => $user, 'role' => 'public'], 200);
    } 
    
});

//test sms 
Route::post('send', 'ServiceRequestController@sendSmso');

//auth routes
Route::group(['prefix' => 'auth'], function () {
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

//make offer by user to a service provider
Route::post('make-offer', 'ServiceRequestController@makeOffer')->middleware('auth:api');

/**
 * get user requests
 */
Route::get('my-requests', 'ServiceRequestController@getRequestByUser')->middleware('auth:api');

/**
 * get user offers
 */
Route::get('my-offers', 'ServiceRequestController@getUserOffers')->middleware('auth:api');


Route::group(['prefix' => 'profile'], function () {
    /**
     * entire profile
     */
    Route::get('/{id}', function ($id) {
        $user = User::with(['bioProfile', 'services', 'serviceRequests'])->find($id);
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
Route::get('/categories-wth-request/{id}', function ($id) {
    $cat = ServiceCategory::find($id);
    return $cat->requests->get();
});



Route::namespace('Api')->group(function () {

    // Search Api
    Route::prefix('search')->group(function () {
        Route::get('services', 'SearchServiceController@search');
        Route::get('services/requests/', 'SearchServiceRequestController@search');
        Route::get('services/requests/location', 'SearchServiceRequestController@searchByLocation');
        Route::get('services/requests/any', 'SearchServiceRequestController@searchByAnything');
    });

    // Partner
    Route::get('partners', 'PartnerController@index');
    Route::get('partners/{id}', 'PartnerController@show');

    // Service Requests
    Route::get('services/requests/{id}', 'ServiceRequestController@show');
    Route::post('services/requests', 'ServiceRequestController@store')->middleware('auth:api');
    Route::get('services/user/requests','ServiceRequestController@userServiceRequests')->middleware('auth:api');
    Route::get('services/recent/requests', 'ServiceRequestController@recentServiceRequests');
    Route::get('services/{category}/requests', 'ServiceRequestController@categoryServiceRequests');
    Route::get('services/requests/service/{service}', 'ServiceRequestController@serviceServiceRequests');
    //delete service request
    Route::delete('delete/services/requests/{id}', 'ServiceRequestController@destroy');

    // Cancelled/Not Service Requests
    Route::get('services/requests/true/cancelled', 'ServiceRequestController@cancelledServiceRequests');
    Route::get('services/requests/false/cancelled', 'ServiceRequestController@notCancelledServiceRequests');
    Route::post('services/requests/cancelled', 'ServiceRequestController@cancelRequest')
        ->middleware('auth:api', 'check-permissions');

    // Filters
    Route::get('services/filters/providers', 'ServiceProviderFilterController@index');
    Route::get('services/filters/requests', 'ServiceProviderFilterController@filterServiceRequest');
    Route::get('services/filters/location', 'ServiceProviderFilterController@filterServiceProvidersInParticularLocation');

    // User Profiles
    Route::post('user/password/update', 'BioProfileController@updatePassword')->middleware('auth:api');
    Route::post('user/profile/update','BioProfileController@updateBioProfile')->middleware('auth:api');

    // Ratings
    Route::post('ratings','ReviewController@store')->middleware('auth:api');
    Route::get('ratings/{id}', 'ReviewController@ratingPercentage');
    Route::get('ratings/average/{id}', 'ReviewController@averageRating');
    Route::get('ratings/count/{id}', 'ReviewController@countRating');

    // Service Delivery Offers
    Route::get('delivery/recent/offers', 'ServiceDeliveryOfferController@recentOffers');
    //accepting an offer
    Route::post('delivery/offers/acceptance', 'ServiceDeliveryOfferController@acceptDeliveryOffer')
        ->middleware('auth:api', 'check-permissions');
    Route::delete('delete/services/offers/{id}', 'BidController@destroy');
    //editing service request offer
    Route::post('delivery/services/update/{id}', 'BidController@update');
    //getting offers
    Route::get('delivery/requests/services/offers/{id}', 'ServiceDeliveryOfferController@serviceRequestOffers');

});


Route::fallback(function () {
    return response()->json(['message' => 'Not Found.'], 404);
})->name('api.fallback.404');


