<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PortfolioProfile extends Model
{
    protected $table = 'portfolio_profiles';

    protected $fillable = [
        'name',
        'location',
        'tagline',
        'avatar_path',
        'email',
        'schedule_url',
        'community_url',
        'facebook_url',
        'github_url',
        'footer_text',
        'chat_label',
    ];

    public static function singleton(): self
    {
        $profile = self::first();
        if (! $profile) {
            $profile = self::create([
                'name' => 'Renielyn Lenon',
                'location' => 'San Juan City, Metro Manila, Philippines',
                'tagline' => 'Aspiring Full-Stack Developer | Student Freelancer | UI/UX & SEO',
                'email' => 'rblenon18@gmail.com',
                'footer_text' => 'Developed in San Juan City, Metro Manila, Philippines',
                'chat_label' => 'Chat with Ren',
            ]);
        }

        return $profile;
    }
}
