<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddExtraFieldsOnServiceDeliveryOffers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('service_delivery_offers', function (Blueprint $table) {
            $table->date('delivery_date')->nullable()->after( 'estimated_cost');
            $table->text('description')->nullable()->after('is_offer_accepted');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('service_delivery_offers', function (Blueprint $table) {
            $table->dropColumn('delivery_date');
            $table->dropColumn('description');
        });
    }
}
