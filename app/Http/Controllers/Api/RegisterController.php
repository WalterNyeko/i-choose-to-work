<?php

namespace App\Http\Controllers\Api;

use App\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    /***
     * register a normal user
     * @param name
     * @param email
     * @param phone number
     * @param password
     * saves to user and profile tables
     */
    public function registerNormal(Request $request)
    {
        $data = $request->all();

        $validator = \Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
            'phone' => ['numeric', 'required', 'unique:bio_profiles,phone_number']
        ], [
            'password.min' => 'Password must atleast be 6 characters.',
            'password.required' => 'Password is required',
            'password.confirmed' => 'Please confirm password.',
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'Email is already taken.',
            'phone.numeric' => 'Please enter a valid phone number',
            'phone.required' => 'The phone number is required'
        ]);

        if ($validator->fails()) {
            return response()->json([$validator->errors()], 422);
        }
        else 
        {
            //create the user 
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($data['password']),
            ]);
            //
            $user->bioProfile()->create([
                'profile_pic' => 'user.png',
                'phone_number' => $request->phone
            ]);

            $user->assignRole('public');

            return $user;
        }
    }

    /***
     * register a service provider
     * @param name
     * @param email
     * @param phone number
     * @param password
     * @services they ofer
     * saves to user, profile tables and services
     */
    public function registerPublic(Request $request)
    {
        $data = $request->all();

        $validator = \Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
            'phone' => ['numeric', 'required', 'unique:bio_profiles,phone_number'],
            'services.*' => ['exists:services,id'],
        ], [
            'password.min' => 'Password must atleast be 6 characters.',
            'password.required' => 'Password is required',
            'password.confirmed' => 'Please confirm password.',
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'Email is already taken.',
            'phone.numeric' => 'Please enter a valid phone number',
            'phone.required' => 'The phone number is required',
            'services.*.exists' => 'Invalid service'
        ]);

        if ($validator->fails()) {
            return response()->json([$validator->errors()], 422);
        }
        else 
        {
            //create the user 
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($data['password']),
            ]);
            //
            $user->bioProfile()->create([
                'profile_pic' => 'user.png',
                'phone_number' => $request->phone
            ]);

            $user->services()->attach($request->services);

            $user->assignRole(['public', 'provider']);

            return $user;
        }
    }

    
}
