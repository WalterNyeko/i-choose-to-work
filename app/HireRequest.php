<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HireRequest extends Model
{
    protected $table = 'hire_request';
    protected $guarded = [];
    protected $casts = [
        'is_accepted' => 'boolean'
    ];
}
