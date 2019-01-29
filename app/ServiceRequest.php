<?php

namespace App;

use App\Models\Service;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\ServiceDeliveryOffer;

class ServiceRequest extends Model
{
    use SoftDeletes;

    protected $table = 'service_requests';

    protected $guarded = ['id'];

    protected $dates = ['deleted_on'];

    /**
     * service relationship
     */

     public function service()
     {
         return $this->belongsTo(Service::class, 'service_id');
     }

     /***
      * customer or user relationship
      */

      public function customer()
      {
          return $this->belongsTo(User::class, 'customer_id');
      }

      /**
       * offers relationship 
       */
      public function offers()
      {
          return $this->hasMany(ServiceDeliveryOffer::class, 'service_req_id');
      }
}
