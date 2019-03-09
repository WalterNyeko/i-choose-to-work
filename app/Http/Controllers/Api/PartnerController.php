<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\PartnerCollection;
use App\Http\Resources\Partner as PartnerResource;
use App\Models\Partner;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Http\Controllers\Api\ApiBaseController;

class PartnerController extends ApiBaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $partners = Partner::all();
        return new PartnerCollection($partners);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //Handle exception incase the model is not found
        try {
            $partner = Partner::findOrFail($id);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message', 'The partner is either deleted or not existing']);
        }
        return new PartnerResource($partner);
    }

}
