<?php

namespace App;

use App\Models\Service;
use Carbon\Carbon;
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
     * @param  string $value
     * @return string
     */
    public function getQuestionsAttribute($value)
    {
        return unserialize($value);
    }

    /**
     * Set the questions inform of an array.
     *
     * @param  string $value
     * @return void
     */
    public function setQuestionsAttribute($value)
    {
        $this->attributes['questions'] = serialize($value);
    }

    /**
     * Return Created At Column Inform of Difference for Humans such as (2 Days ago, 3 mins ago)
     *
     * @param $value
     * @return mixed
     */
    public function getCreatedAtAttribute($value)
    {
        $newCreatedAt = new Carbon($value);
        return $newCreatedAt->diffForHumans();
    }

    /**
     * Scope a query to only include cancelled requests.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeCancelled($query)
    {
        return $query->where('cancelled', 1);
    }

    /**
     * Scope a query to only include cancelled requests.
     *
     * @param \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeNotCancelled($query)
    {
        return $query->where('cancelled', 0);
    }

    /**
     * Get Latest Service Requests
     *
     * @param $query
     * @return mixed
     */
    public function scopeLatest($query)
    {
        return $query->orderBy('created_at', 'desc');
    }


}
