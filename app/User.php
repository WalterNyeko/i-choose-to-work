<?php

namespace App;

use App\Models\Skills;
use App\Models\Service;
use App\ServiceRequest;
use App\Models\Education;
use App\Models\BioProfile;
use App\Models\Experience;
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

    protected $touches = ['skills'];
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

      /**
       * user experience profile relationship
       */
      public function experience()
      {
          return $this->hasMany(Experience::class, 'user_id');
      }

      /**
       * user skills relationship
       */
      public function skills()
      {
          return $this->belongsToMany(Skills::class, 'profile__skills', 'user_id', 'skills_id')->withTimestamps();
      }

      /**
       * services relationship
       */

       public function services()
     {
         return $this->belongsToMany(Service::class, 'service_provider_map', 'user_id', 'service_id');
     }

     /**
      * service requests
      */

      public function serviceRequests()
      {
          return $this->hasMany(ServiceRequest::class, 'customer_id');
      }

      
}
