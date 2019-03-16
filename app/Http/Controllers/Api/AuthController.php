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
    public function register(Request $request)
    {
        $data = $request->all();

        $validator = \Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:6'],
            'phone' => ['numeric', 'required', 'unique:bio_profiles,phone_number'],
        ], [
            'password.min' => 'Password must atleast be 6 characters.',
            'password.required' => 'Password is required',
            'password.confirmed' => 'Please confirm password.',
            'email.email' => 'Please enter a valid email address.',
            'email.unique' => 'Email is already taken.',
            'phone.numeric' => 'Please enter a valid phone number',
            'phone.required' => 'The phone number is required',
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

            if($data['role'] === 'public')
            {
                $user->assignRole(['public']);
            }

            if($data['role'] === 'provider')
            {
                $user->assignRole(['public', 'provider']);
            }
            

            $data1 = [
                'email' => $data['email'],
                'password' => $data['password'],
            ];

            return $this-> grant_token($data1, $request);    
        }
    }


    public function grant_token($data, $request)
    {
        $params = [
            'grant_type' => 'password',
            'client_id' => env('CLIENT_ID'),
            'client_secret' => env('CLIENT_SECRET'),
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
