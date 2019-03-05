<?php

namespace App\Http\Resources;

use App\Http\Resources\User as UserResource;
use App\Http\Resources\Service as ServiceResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceRequest extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);
        return [
            'id' => $this->id,
            'customer' => $this->customer,
            'address' => $this->address,
            'service' => $this->service,
            'offer' => $this->offers,
            'description' => $this->description,
            'payment_method' => $this->payment_method,
            'questions' => $this->questions,
            'cancelled' => $this->cancelled,
            'expected_start_date' => $this->expected_start_date,
            'created_at' => $this->created_at,
        ];
    }
}
