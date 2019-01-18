<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\Request;

class ExperienceController extends Controller
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
            'title' => ['required', 'max:256'],
            'company' => ['required'],
            'from_period' => ['required', 'numeric'],
            'to_period' => ['required', 'numeric'],
            'description' => ['nullable'],
            'is_current' => ['nullable', 'boolean']
        ]);

        if ($validator->fails()) {
            return response()->json([$validator->errors()], 422);
        }

        //id needs to be passed from the frontend, this is for testing
        $data['user_id'] = 5;

        Experience::create($data);

        return response()->json(['Experience Profile Successfully Updated'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Experience  $Experience
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $edu = Experience::where('user_id', $id)->latest()->get();

        return $edu->toJson();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Experience  $Experience
     * @return \Illuminate\Http\Response
     */
    public function edit(Experience $Experience)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Experience  $Experience
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $edu = Experience::find($id);
        $data = $request->all();
        $edu->fill($data);
        $edu->save();
        return response()->json($edu);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Experience  $Experience
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $edu = Experience::find($id);

        $edu->delete();

        return response()->json('Item deleted successfully');

    }
}
