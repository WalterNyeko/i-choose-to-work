<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'WelcomeController@welcome');

Route::get('/users/{id?}', 'WelcomeController@laravel')->where('id', '[0-9]+')->middleware('auth');


Route::resource('jobs', 'jobs\JobController');

/**
 * service request view with services
 */

Route::get('request', 'ServiceRequestController@index')->name('service.index');

/**
 * service request form
 */
Route::get('request/{id}', 'ServiceRequestController@create')->middleware('auth');


Auth::routes(['verify' => true]);

/**
 * service providers by service
 */
Route::get('providers/{id}', 'ServiceRequestController@providers')->middleware('auth');

/**
 * service biding
 */
Route::get('bid/{id}', 'ServiceRequestController@bid')->middleware(['role:provider']);


Route::get('service-requests', function(){
    return view('services.requests');
});

Route::get('/home', 'HomeController@index')->name('home');

