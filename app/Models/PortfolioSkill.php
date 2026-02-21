<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PortfolioSkill extends Model
{
    protected $fillable = ['category', 'name', 'sort_order'];

    protected static function booted(): void
    {
        static::addGlobalScope('order', function ($query) {
            $query->orderBy('sort_order')->orderBy('id');
        });
    }

    public static function byCategory(): array
    {
        $skills = self::all()->groupBy('category');

        return [
            'frontend' => $skills->get('frontend', collect())->pluck('name')->values()->all(),
            'backend' => $skills->get('backend', collect())->pluck('name')->values()->all(),
            'tools' => $skills->get('tools', collect())->pluck('name')->values()->all(),
        ];
    }
}
