<?php

namespace App\Http\Controllers\Api;

use App\ServiceRequest;
use App\User;
use App\Utils\GeoLocation;
use Bodunde\GoogleGeocoder\Geocoder;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\ApiBaseController;
use League\Geotools\Coordinate\Ellipsoid;
use Toin0u\Geotools\Facade\Geotools;

class ServiceProviderFilterController extends ApiBaseController
{
    /**
     * Filter service providers
     *
     * @param Request $request
     * @return mixed
     */
    public function index(Request $request)
    {
        return User::filter($request->all())->paginateFilter();
    }

    /**
     * Filter Service Requests Per Category
     *
     * @param Request $request
     * @return mixed
     */
    public function filterServiceRequest(Request $request)
    {
        return ServiceRequest::filter($request->all())->paginateFilter();
    }

    public function filterServiceProvidersInParticularLocation(Request $request, $locationOfServiceRequest = NULL, Geocoder $geocoder)
    {
        $address = $locationOfServiceRequest;

        if (!$locationOfServiceRequest) {
            //Get location of currently logged user
            $currentUser = $request->user();
            $currentUserBioProfile  = $currentUser->bioProfile()->first();
            $address = $currentUserBioProfile->address;
        }

        $geoCoordinates = GeoLocation::getGeocodeFromGoogle($address);
        dd($geoCoordinates);

        $coordA   = Geotools::coordinate([48.8234055, 2.3072664]);
        $coordB   = Geotools::coordinate([43.296482, 5.36978]);
        $distance = Geotools::distance()->setFrom($coordA)->setTo($coordB);
        dd($distance->in('km')->haversine());

        $coordinatesOfAddress = $geocoder->getCoordinates('55 Moleye Street, Yaba');
        dd($coordinatesOfAddress);


        
    }
}
