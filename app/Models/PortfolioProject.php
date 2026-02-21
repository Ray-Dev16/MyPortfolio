<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PortfolioProject extends Model
{
    protected $fillable = ['title', 'description', 'action_label', 'url', 'image_path', 'sort_order'];

    protected static function booted(): void
    {
        static::addGlobalScope('order', function ($query) {
            $query->orderBy('sort_order')->orderBy('id');
        });
    }
}
