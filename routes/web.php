<?php

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




Auth::routes(['verify' => true]);

Route::get('/home', 'HomeController@index')->name('home');
