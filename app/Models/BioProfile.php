<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class BioProfile extends Model
{
    protected $fillable = ['user_id', 'profile_pic', 'tagline', 'address', 'description', 'phone_number'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
