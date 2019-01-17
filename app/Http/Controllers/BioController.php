<?php

namespace App\Http\Controllers;

use App\User;
use App\Models\BioProfile;
use Illuminate\Http\Request;


class BioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bios = BioProfile::all();

        return $bios->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //$inputs = [];
        $inputs = $request->all();
        $validator = \Validator::make($inputs, [
            'profile_pic' => ['nullable'],
            'tagline' => ['required', 'min:4', 'max:150'],
            'phone_number' => ['nullable', 'numeric'],
            'address' => ['required'],
            'description' => ['required']
        ]);

        if($validator->fails())
        {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // $bio =BioProfile::create([
        //         'user_id' => 7,
        //         'profile_pic' => $request->profile_pic,
        //         'tagline' => $request->tagline,
        //         'phone_number' => $request->phone_number,
        //         'address' => $request->address,
        //         'description' => $request->description
        //     ]);

        //$inputs = [$request->all()];

        $bio = new BioProfile();
        //this is for testing though in production the user id must be picked
        $user = User::find(9);

        $bio->profile_pic = $request->profile_pic;
        $bio->tagline = $request->tagline;
        $bio->phone_number = $request->phone_number;
        $bio->address = $request->address;
        $bio->description = $request->description;

        // $bio->save();
        $user->bioProfile()->save($bio);

        return response()->json($bio);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $bio = BioProfile::where('user_id', $id)->first();

        if($bio)
        {
            return $bio->toJson();
        }
        else
        {
            return response()->json(['Profile Not found'], 404);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $bio = BioProfile::where('user_id', $id)->first();
        if(!$bio)
        {
            return response()->json(['You dont have a profile'], 404);
        }



        $bio = BioProfile::where('user_id', $id)->update([
                'profile_pic' => $request->profile_pic,
                'tagline' => $request->tagline,
                'phone_number' => $request->phone_number,
                'address' => $request->address,
                'description' => $request->description
        ]);
        

        return response()->json('Details Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
