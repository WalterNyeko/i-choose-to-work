<?php

namespace App;

use App\Models\Skills;
use App\Models\Service;
use App\ServiceRequest;
use App\Models\Education;
use App\Models\BioProfile;
use App\Models\Experience;
use EloquentFilter\Filterable;
use Laravel\Passport\HasApiTokens;
use App\Models\ServiceDeliveryOffer;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Trexology\ReviewRateable\Contracts\ReviewRateable;
use Trexology\ReviewRateable\Traits\ReviewRateable as ReviewRateableTrait;

class User extends Authenticatable implements MustVerifyEmail, ReviewRateable
{
    use HasApiTokens, Notifiable, HasRoles;
    use Filterable;
    use ReviewRateableTrait;

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
        return $this->hasOne(BioProfile::class, 'user_id');
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
        return $this->belongsToMany(Service::class, 'service_provider_map', 'user_id', 'service_id')->withPivot('billing_rate_per_hour', 'experience_in_months', 'description', 'isVerified', 'isAvailable', 'created_at', 'updated_at');
    }

    /**
     * service requests
     */

    public function serviceRequests()
    {
        return $this->hasMany(ServiceRequest::class, 'customer_id');
    }

    /**
     * user request offers
     */
    public function offers()
    {
        return $this->hasMany(ServiceDeliveryOffer::class, 'provider_id');
    }


}
