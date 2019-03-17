<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ServiceDeliveryOffer extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'estimated_cost' => $this->estimated_cost,
            'delivery_date' => $this->delivery_date,
            'is_offer_accepted' => $this->is_offer_accepted,
            'description' => $this->description,
            'service_request' => $this->seviceRequest,
            'provider' => $this->provider,
            'appointment' => $this->appointments,
            'created_at' => $this->created_at,
        ];
    }
}
