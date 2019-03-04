<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    /**
     * Get all of the owning reviewable models.
     */
    public function reviewable()
    {
        return $this->morphTo();
    }
}
