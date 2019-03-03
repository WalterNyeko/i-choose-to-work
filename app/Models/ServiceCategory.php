<?php

namespace App\Models;

use App\Models\Service;
use App\ServiceRequest;
use Illuminate\Database\Eloquent\Model;

class ServiceCategory extends Model
{
    protected $table = 'service_categories';

    protected $fillable = ['name'];

    /**
     * service categories
     */
    public function services()
    {
        return $this->belongsToMany(Service::class, 'services_to_categories', 'category_id', 'service_id');
    }
    /**
     * Get all of the requests for the category.
     */
    public function requests()
    {
        $requests = array();

        foreach ($this->services as $service)
        {
            foreach ($service->requests as $request)
            {
                
                    $requests[ $request->id] = $requests;
                
            }
        }

        return \Illuminate\Database\Eloquent\Collection::make($requests);
    }
}
