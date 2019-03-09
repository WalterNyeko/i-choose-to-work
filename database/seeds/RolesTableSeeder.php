<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *check-permissions
     * @return void
     */
    public function run()
    {
        $data = [
            ['name' => 'admin'],
            ['name' => 'provider'],
            ['name' => 'public'],
            ['name' => 'banned']
        ];

        $insert_data = [];
        $time_stamp = Carbon::now()->toDateTimeString();

        foreach ($data as $d) {
            $d['guard_name'] = 'web';
            $d['created_at'] = $time_stamp;
            $insert_data[] = $d;
        }

        Role::insert($insert_data);

        //Assign Admin User Admin Role
        $admin = \App\User::whereEmail('admin@admin.com')->first();
        $admin->assignRole('admin');

        //Assign Customer User Public Role
        $customer = \App\User::whereEmail('customer@customer.com')->first();
        $customer->assignRole('public');

        //Assign Provider User Provider Role
        $provider = \App\User::whereEmail('provider@provider.com')->first();
        $provider->assignRole('provider');

        //Assign Banned User Banned Role
        $banned = \App\User::whereEmail('banned@banned.com')->first();
        $banned->assignRole('banned');

        $adminRole = Role::whereName('admin')->first();
        $adminRole->givePermissionTo([
            'service_request.view',
            'service_request.create',
            'service_request.update',
            'service_request.delete',
            'service_request.cancel'
        ]);

    }
}
