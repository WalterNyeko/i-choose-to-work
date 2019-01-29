<?php

namespace App\Models;

use App\Models\Service;
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
}
