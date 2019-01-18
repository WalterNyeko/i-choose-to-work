<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $table = 'education';

    protected $guarded = ['id'];

    /**
     * user education relationship
     */

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
