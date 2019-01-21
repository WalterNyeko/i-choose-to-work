<?php

namespace App\Models;

use App\Models\ServiceDeliveryOffer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ServiceAppointment extends Model
{
    use SoftDeletes;

    protected $table = 'service_appointments';

    protected $guarded = ['id'];

    protected $dates = ['deleted_at', 'service_deliver_on', 'service_deliver_end_date'];
    
    /**
     * service delivery offer
     */
    public function offer()
    {
        return $this->belongsTo(ServiceDeliveryOffer::class, 'servive_delivery_offer_id');
    }

}
