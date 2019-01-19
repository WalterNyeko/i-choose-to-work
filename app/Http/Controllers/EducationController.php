<?php

namespace App\Http\Controllers;

use App\Models\Education;
use Illuminate\Http\Request;

class EducationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $data = $request->all();
        
        $validator = \Validator::make($data, [
            'degree' => ['required', 'max:256'],
            'school' => ['required'],
            'from_period' => ['required', 'numeric'],
            'to_period' => ['required', 'numeric'],
            'description' => ['nullable'],
        ]);

        if ($validator->fails()) {
            return response()->json([$validator->errors()], 422);
        }

        //id needs to be passed from the frontend, this is for testing
        $data['user_id'] = 5;

        Education::create($data);

        return response()->json(['Education Profile Successfully Updated'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Education  $education
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $edu = Education::where('user_id', $id)->with('user')->latest()->get();

        return $edu->toJson();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Education  $education
     * @return \Illuminate\Http\Response
     */
    public function edit(Education $education)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Education  $education
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $edu = Education::find($id);
        $data = $request->all();
        $edu->fill($data);
        $edu->save();
        return response()->json($edu);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Education  $education
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $edu = Education::find($id);

        $edu->delete();

        return response()->json('Item deleted successfully');
        
    }
}
