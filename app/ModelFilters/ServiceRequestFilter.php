<?php namespace App\ModelFilters;

use EloquentFilter\ModelFilter;

class ServiceRequestFilter extends ModelFilter
{
    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As [relationMethod => [input_key1, input_key2]].
    *
    * @var array
    */
    public $relations = [];


    /**
     * Filter service relation of the user
     *
     * @param $id
     * @return UserFilter
     */
    public function serviceCategory($id)
    {
        return $this->related('serviceCategories', 'category_id', '=', $id);
    }
}
