<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Permission;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = array(
            ['name' => 'user.view'],
            ['name' => 'user.create'],
            ['name' => 'user.update'],
            ['name' => 'user.delete'],

            ['name' => 'service.view'],
            ['name' => 'service.create'],
            ['name' => 'service.update'],
            ['name' => 'service.delete'],

            ['name' => 'service_request.view'],
            ['name' => 'service_request.create'],
            ['name' => 'service_request.update'],
            ['name' => 'service_request.delete'],
            ['name' => 'service_request.cancel'],

            ['name' => 'service_categories.view'],
            ['name' => 'service_categories.create'],
            ['name' => 'service_categories.update'],
            ['name' => 'service_categories.delete'],

            ['name' => 'questions.view'],
            ['name' => 'questions.create'],
            ['name' => 'questions.update'],
            ['name' => 'questions.delete'],

            ['name' => 'ratings.view'],
            ['name' => 'ratings.create'],
            ['name' => 'ratings.update'],
            ['name' => 'ratings.delete'],

            ['name' => 'partners.view'],
            ['name' => 'partners.create'],
            ['name' => 'partners.update'],
            ['name' => 'partners.delete'],

            ['name' => 'profile_skills.view'],
            ['name' => 'profile_skills.create'],
            ['name' => 'profile_skills.update'],
            ['name' => 'profile_skills.delete'],

            ['name' => 'service_delivery_offers.view'],
            ['name' => 'service_delivery_offers.create'],
            ['name' => 'service_delivery_offers.update'],
            ['name' => 'service_delivery_offers.delete'],

            ['name' => 'service_appointments.view'],
            ['name' => 'service_appointments.create'],
            ['name' => 'service_appointments.update'],
            ['name' => 'service_appointments.delete'],
            ['name' => 'service_appointments.access'],

            ['name' => 'service_provider_map.view'],
            ['name' => 'service_provider_map.create'],
            ['name' => 'service_provider_map.update'],
            ['name' => 'service_provider_map.delete'],

            ['name' => 'skills.view'],
            ['name' => 'skills.create'],
            ['name' => 'skills.update'],
            ['name' => 'skills.delete'],

            ['name' => 'bio_profiles.view'],
            ['name' => 'bio_profiles.create'],
            ['name' => 'bio_profiles.update'],
            ['name' => 'bio_profiles.delete'],

            ['name' => 'education.view'],
            ['name' => 'education.create'],
            ['name' => 'education.update'],
            ['name' => 'education.delete'],

            ['name' => 'experiences.view'],
            ['name' => 'experiences.create'],
            ['name' => 'experiences.update'],
            ['name' => 'experiences.delete'],

            ['name' => 'hire_requests.view'],
            ['name' => 'hire_requests.create'],
            ['name' => 'hire_requests.update'],
            ['name' => 'hire_requests.delete'],

            ['name' => 'jobs.view'],
            ['name' => 'jobs.create'],
            ['name' => 'jobs.update'],
            ['name' => 'jobs.delete'],

            ['name' => 'ban_users'],
            ['name' => 'dashboard.data'],
        );

        $insert_data = array();
        $time_stamp = Carbon::now()->toDateTimeString();
        foreach ($data as $d) {
            $d['guard_name'] = 'web';
            $d['created_at'] = $time_stamp;
            $insert_data[] = $d;
        }
        Permission::insert($insert_data);
    }
}
