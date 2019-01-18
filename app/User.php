<?php

namespace App;

use App\Models\Education;
use App\Models\BioProfile;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * User to bio profile relationship
     */

     public function bioProfile()
     {
         return $this->hasOne(BioProfile::class , 'user_id');
     }

     /**
      * user education profile relationship
      */

      public function education()
      {
          return $this->hasMany(Education::class, 'user_id');
      }
}
