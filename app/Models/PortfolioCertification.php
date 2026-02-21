<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PortfolioCertification extends Model
{
    protected $fillable = ['name', 'issuer', 'year', 'sort_order'];

    protected static function booted(): void
    {
        static::addGlobalScope('order', function ($query) {
            $query->orderBy('sort_order')->orderBy('id');
        });
    }
}
