<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ServiceDeliveryOfferCollection;
use App\Models\ServiceDeliveryOffer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ServiceDeliveryOfferController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function recentOffers()
    {
        $offers = ServiceDeliveryOffer::latest()->take(5)->get();
        return new ServiceDeliveryOfferCollection($offers);
    }

    /**
     * Service Request Acceptance
     *
     * @param Request $request
     * @return ServiceRequestResource|\Illuminate\Http\JsonResponse
     */
    public function acceptDeliveryOffer(Request $request)
    {

        try {

            $serviceDeliveryOffer = '';
            $serviceDeliveryOfferId = ServiceDeliveryOffer::whereId($request->id)->update(['is_offer_accepted' => 1]);
            if ($serviceDeliveryOfferId) {
                /* Return the service request that has been cancelled */
                $serviceDeliveryOffer = ServiceDeliveryOffer::find($request->id);
            } else {
                return response()->json(['message' => 'No service delivery offer specified']);
            }

            return new \App\Http\Resources\ServiceDeliveryOffer($serviceDeliveryOffer);

        } catch (\Exception $e) {
            return response()->json(['message' => 'Service delivery offer acceptance failed']);
        }

    }
}
