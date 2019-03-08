<?php
namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class UserFilter extends ModelFilter
{
    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As [relationMethod => [input_key1, input_key2]].
    *
    * @var array
    */
    public $relations = [];

    /**
     * Filter user name
     *
     * @param $name
     * @return UserFilter
     */
    public function name($name)
    {
        return $this->where(function($q) use ($name)
        {
            return $q->where('name', 'LIKE', "%$name%");
        });
    }

    /**
     * Filter service relation of the user
     *
     * @param $id
     * @return UserFilter
     */
    public function service($id)
    {
        return $this->related('services', 'service_id', '=', $id);
    }

    /**
     * Experience In Months Filter
     *
     * @param $experienceInMonths
     * @return UserFilter
     */
    public function experienceInMonths($experienceInMonths)
    {
        return  $this->related('services', 'experience_in_months', '=', $experienceInMonths);
    }

    /**
     * Billing Rate Per Hour Filter
     *
     * @param $billingRatePerHour
     * @return UserFilter
     */
    public function billingRatePerHour($billingRatePerHour)
    {
        return $this->related('services', 'billing_rate_per_hour', '=', $billingRatePerHour);
    }

    /**
     * Is Available Filter
     *
     * @param $isAvailable
     * @return UserFilter
     */
    public function isAvailable($isAvailable)
    {
        return $this->related('services', 'isAvailable', '=', $isAvailable);
    }

}
