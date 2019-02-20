<?php

namespace App\Http\Controllers\Api;

use App\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Route;
use GuzzleHttp\Exception\GuzzleException;

class AuthController extends Controller
{

    public function grant_token($data, $request)
    {
        $params = [
            'grant_type' => 'password',
            'client_id' => '4',
            'client_secret' => '5TDSVWuWybJ4Z28DHzZfr9mfX3njMMBlqiB0Cvbh',
            'username' => $data['email'],
            'password' => $data['password'],
            'scope' => '*',
        ];
        $request->request->add($params);

        $requestToken = Request::create("oauth/token", "POST");
        $response = Route::dispatch($requestToken);

        $token =  $response;

        return $token;
        
        
        // $token = json_decode((string)$response->getBody(), true);

        // return \Json(['token' => $token->getBody(), 'user' => $user, 'isProvider' => $isProvider], 200);
        
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
                // $user = \Auth::user();
                // $isProvider = $this->isProvider($user);
                return $this->grant_token($data, $request);
            }
            else 
            {
                return response()->json(['error' => 'Wrong credentials'], 403);
            }
            
        }


    }
    /**
     * check if the user is a service provider
     */
    public function isProvider($user)
    {
        // $user = $request->user();

        if($user->hasRole('provider'))
        {
            return true;
        }
        else 
        {
            return false;
        }
    }
    /**
     * change account type to service provider
     */
    public function becomeProvider(Request $request)
    {
        $user = $request->user();

        $user->syncRoles(['provider', 'public']);

        return response()->json('Successfully registered as a Service Provider');
    }
}
