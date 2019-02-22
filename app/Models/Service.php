<?php

namespace App\Models;

use App\User;
use App\ServiceRequest;
use App\Models\ServiceCategory;
use Illuminate\Database\Eloquent\Model;
use Symfony\Component\Console\Question\Question;

class Service extends Model
{
    protected $table = 'services';

    protected $fillable = ['name', 'description', 'category_id'];

    /**
     * service category relationship
     */
    public function categories()
    {
        return $this->belongsToMany(ServiceCategory::class, 'services_to_categories', 'service_id', 'category_id');
    }

    /**
     * services providers relationship
     */

     public function providers()
     {
         return $this->belongsToMany(User::class, 'service_provider_map', 'service_id', 'user_id');
     }

     /**
      * request relations
      */
    public function requests()
    {
        return $this->hasMany(ServiceRequest::class, 'service_id');
    }

    /**
     * service has many questions
     */
    public function questions()
    {
        return $this->hasMany(Question::class, 'service_id');
    }
}
