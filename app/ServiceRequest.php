<?php

namespace App;

use App\Models\Service;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\ServiceDeliveryOffer;
use Laravel\Scout\Searchable;

class ServiceRequest extends Model
{
    use Searchable;

    use SoftDeletes;

    protected $table = 'service_requests';

    protected $guarded = ['id'];

    protected $dates = ['deleted_on'];

    protected $casts = ['questions' => 'array'];

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

    /**
     * Get the index name for the model.
     *
     * @return string
     */
    public function searchableAs()
    {
        return 'service_requests_index';
    }

    /**
     * Get the questions inform of an array.
     *
     * @param  string  $value
     * @return string
     */
    public function getQuestionsAttribute($value)
    {
        return unserialize($value);
    }

    /**
     * Set the questions inform of an array.
     *
     * @param  string  $value
     * @return void
     */
    public function setQuestionsAttribute($value)
    {
        $this->attributes['questions'] = serialize($value);
    }


}
