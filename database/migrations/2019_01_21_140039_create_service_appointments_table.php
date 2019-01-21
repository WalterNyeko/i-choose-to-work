<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServiceAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_appointments', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('servive_delivery_offer_id')->nullable();
            $table->foreign('servive_delivery_offer_id')->references('id')->on('service_delivery_offers')->onDelete('cascade')->onUpdate('cascade');
            $table->date('service_deliver_on')->nullable();
            $table->time('service_start_time')->nullable();
            $table->date('service_deliver_end_date')->nullable();
            $table->time('service_end_time')->nullable();
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
        Schema::dropIfExists('service_appointments');
    }
}
