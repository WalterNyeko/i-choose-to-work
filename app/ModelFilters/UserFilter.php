<?php namespace App\ModelFilters;

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



}
