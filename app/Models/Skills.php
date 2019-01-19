<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Skills extends Model
{
    protected $table = 'skills';

    protected $guarded = ['id'];

    protected $touches = ['<users></users>'];

    /**
     * skills user relationship
     */
    
     public function users()
     {
         return $this->belongsToMany(User::class, 'profile__skills', 'skills_id', 'user_id')->withTimestamps();;
     }
}
