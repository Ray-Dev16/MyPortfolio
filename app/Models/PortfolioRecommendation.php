<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PortfolioRecommendation extends Model
{
    protected $fillable = ['quote', 'author', 'sort_order'];

    protected static function booted(): void
    {
        static::addGlobalScope('order', function ($query) {
            $query->orderBy('sort_order')->orderBy('id');
        });
    }
}
