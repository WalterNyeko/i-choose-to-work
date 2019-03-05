<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Models\Partner::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence(3),
        'logo' => 'https://www.freelogodesign.org/Content/css/images/images/editor.png',
        'description' => $faker->text(50),
        'link' => $faker->url,
    ];
});