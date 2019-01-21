<?php

namespace App\Models;

use App\User;
use App\ServiceRequest;
use App\Models\ServiceAppointment;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ServiceDeliveryOffer extends Model
{
    use SoftDeletes;
    protected $table = 'service_delivery_offers';

    protected $guarded = ['id'];

    protected $dates = ['deleted_at'];

    protected $casts = ['is_offer_accepted'];

    /**
     * service request relationship
     */

     public function seviceRequest()
     {
         return $this->belongsTo(ServiceRequest::class, 'service_req_id');
     }

     /**
      * provider relationship
      */

    public function provider()
    {
        return $this->belongsTo(User::class, 'provider_id');
    }

    /**
     * appointments relationship
     */

    public function appointments()
    {
        return $this->hasMany(ServiceAppointment::class, 'servive_delivery_offer_id');
    }


}
