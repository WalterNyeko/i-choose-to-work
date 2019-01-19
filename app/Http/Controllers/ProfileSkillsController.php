<?php

namespace App\Http\Controllers;

use App\User;
use App\Models\Skills;
use Illuminate\Http\Request;
use App\Models\Profile_Skills;

class ProfileSkillsController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $skills = $request->skills; 

        $user = User::find(6);

        $user->skills()->syncWithoutDetaching($skills);

        return response()->json('Skill(s) successfully added');
    }

   

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Profile_Skills  $profile_Skills
     * @return \Illuminate\Http\Response
     */
    public function destroy(Requets $request, $id)
    {
        $user = User::find($id);

        $skills = $request->skills;

        $user->skills()->detach($request->skills);

        return response()->json('Skill removed successfully');
    }

    /**
     * get users with a skill
     */

    public function getUserBySkill($id)
    {
        $skill = Skills::find($id);

        $users = $skill->users()->get();

        return $users->toArray();
    }
}
