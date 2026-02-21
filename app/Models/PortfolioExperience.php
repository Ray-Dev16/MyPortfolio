<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PortfolioExperience extends Model
{
    protected $fillable = ['title', 'company', 'period', 'sort_order'];

    protected static function booted(): void
    {
        static::addGlobalScope('order', function ($query) {
            $query->orderBy('sort_order')->orderBy('id');
        });
    }
}
