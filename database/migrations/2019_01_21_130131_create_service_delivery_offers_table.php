<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServiceDeliveryOffersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_delivery_offers', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('service_req_id')->nullable();
            $table->foreign('service_req_id')->references('id')->on('service_requests')->onDelete('cascade')->onUpdate('cascade');
            $table->unsignedInteger('provider_id')->nullable(); 
            $table->foreign('provider_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->double('estimated_cost')->nullable();
            $table->boolean('is_offer_accepted')->nullable()->default(false);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_delivery_offers');
    }
}
