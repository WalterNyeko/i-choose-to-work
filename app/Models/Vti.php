<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vti extends Model
{
    protected $table = 'vtis';

    protected $fillable = [
        'name',
        'logo',
        'location',
        'about',
    ];

        /**
     * Get the users for the vti.
     */
    public function users()
    {
        return $this->hasMany('App\User');
    }

    /**
     * Get the users for the vti.
     */
    public function backpackUsers()
    {
        return $this->hasMany('App\Models\BackpackUser');
    }

    /**
     * Get the courses for the vtis.
     */
    public function courses()
    {
        return $this->hasMany('App\Models\Course');
    }

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new LatestScope);
    }
}
