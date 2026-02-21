<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PortfolioSection extends Model
{
    protected $fillable = ['key', 'content', 'data'];

    protected function casts(): array
    {
        return [
            'data' => 'array',
        ];
    }

    public static function getByKey(string $key): ?self
    {
        return self::where('key', $key)->first();
    }

    public static function getContent(string $key, string $default = ''): string
    {
        $section = self::getByKey($key);

        return $section?->content ?? $default;
    }

    public static function getData(string $key): ?array
    {
        $section = self::getByKey($key);

        return $section?->data;
    }
}
