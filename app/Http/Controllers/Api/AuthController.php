<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
            'roles' => ['required'],
            'roles.*' => ['exists:roles,name']
        ],[
            'roles.*.exists' => 'Role doesnot exist.',
            'roles.required' => 'Please select atleast one Role.',
            'password.min' => 'Password must atleast be 6 characters.',
            'password.required' => 'Password is required',
            'password.confirmed' => 'Please confirm password.',
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'Email is already taken.'
        ]);

        if($validator->fails())
        {
            return response()->json([$validator->errors()], 422);
        }
        else {
            $data = [
                'email' => $request->email,
                'password' => $request->password,
            ];
            $user = User::create([
                        'name' => $request->name,
                        'email' => $request->email,
                        'password' => Hash::make($data['password']),
                    ]);

            $user->assignRole($request->roles);

            return $this->grant_token($data);
        
        }
    }

    public function grant_token($data)
    {
        $http = new Client();

        $response = $http->post('http://localhost:8004/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => '2',
                'client_secret' => 'KTooL3sT5Mo4ehUPQDt6ts3RDuavwuHBykjVEvu5',
                'username' => $data['email'],
                'password' => $data['password'],
                'scope' => '*',
            ],
        ]);
        
        return json_decode((string)$response->getBody(), true);
        
    }


    public function login(Request $request)
    {
        $data = [
            'email' => $request->email,
            'password' => $request->password
        ];

        $validator = \Validator::make($data, [
            'email' => ['required', 'exists:users,email'],
            'password' => ['required',]
        ], [
            'email.exists' => 'Wrong email address',
            'email.required' => 'Email is required',
            'password.required' => 'Password is required'
        ]);

        if ($validator->fails()) 
        {
            return response()->json([$validator->errors()], 422);
        }
        else 
        {
            if (\Auth::attempt($data) )
            {
                return $this->grant_token($data);
            }
            else 
            {
                return response()->json(['error' => 'Wrong credentials'], 403);
            }
            
        }


    }
}
