<?php

namespace Database\Seeders;

use App\Models\PortfolioCertification;
use App\Models\PortfolioExperience;
use App\Models\PortfolioProfile;
use App\Models\PortfolioProject;
use App\Models\PortfolioRecommendation;
use App\Models\PortfolioSection;
use App\Models\PortfolioSkill;
use Illuminate\Database\Seeder;

/**
 * Default portfolio content. firstOrCreate only adds missing rows; it does not overwrite.
 * Warning: php artisan migrate:fresh --seed wipes all data (including your admin edits) and re-runs this seeder.
 * To keep your edits, use "php artisan migrate" for new migrations instead of migrate:fresh.
 */
class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        PortfolioProfile::firstOrCreate([], [
            'name' => 'Renielyn Lenon',
            'location' => 'San Juan City, Metro Manila, Philippines',
            'tagline' => 'Aspiring Full-Stack Developer | Student Freelancer | UI/UX & SEO',
            'email' => 'rblenon18@gmail.com',
            'footer_text' => 'Developed in San Juan City, Metro Manila, Philippines',
            'chat_label' => 'Chat with Ren',
        ]);

        $sections = [
            'about' => 'From Civil Engineering to IT, I blend structural precision with digital innovation. As a student freelancer, I\'ve always tried to bridge academic theory with real-world execution, using my background in Marketing Analysis to create high-impact experiences. Today, I am an Aspiring Full-Stack Developer and UI/UX Designer combining expertise in WordPress, SEO, and Data Analytics to build meaningful connections between brands and their audience.',
            'education' => null,
            'beyond_screen' => 'When I step away from the tech world, I focus on Muay Thai, the gym, dance, and travel to fuel my creativity and well-being, ensuring I return to my projects with fresh energy and perspective.',
            'contact_intro' => 'Available for UI/UX and WordPress freelance projects, with added support in SEO, Google Search Console (GSC), Google My Business (GMB), and email campaigns.',
        ];

        foreach ($sections as $key => $content) {
            PortfolioSection::firstOrCreate(['key' => $key], [
                'content' => $content,
                'data' => $key === 'education' ? [
                    'degree' => 'BS Information Technology',
                    'institution' => 'Polytechnic University of the Philippines',
                    'period' => '2022 - 2027',
                ] : null,
            ]);
        }

        $experiences = [
            ['title' => 'WordPress Designer/Developer & SEO Specialist', 'company' => 'Freelance', 'period' => '2024 - Present', 'sort_order' => 0],
            ['title' => 'Marketing Analyst', 'company' => 'JG Superstore', 'period' => '2023', 'sort_order' => 1],
            ['title' => 'Content Associate', 'company' => 'JG Superstore', 'period' => '2023', 'sort_order' => 2],
            ['title' => 'Technical Support Representative', 'company' => 'ASUS Startek', 'period' => '2022', 'sort_order' => 3],
        ];
        foreach ($experiences as $e) {
            PortfolioExperience::firstOrCreate(
                ['title' => $e['title'], 'company' => $e['company']],
                $e
            );
        }

        $projects = [
            ['title' => 'PawsitiveCare', 'description' => 'Secure multi-role pet care management via Laravel.', 'action_label' => 'View Case Study', 'url' => '#', 'sort_order' => 0],
            ['title' => 'Mr. Beans Coffee Co.', 'description' => 'E-commerce Coffee Store - UI/UX, WordPress & SEO Optimization', 'action_label' => 'mrbeans.online', 'url' => 'https://mrbeans.online', 'sort_order' => 1],
            ['title' => 'KodeCraze', 'description' => 'Tech Trends & AI Platform - Founder/Content Strategy.', 'action_label' => 'kodecraze.com', 'url' => 'https://kodecraze.com', 'sort_order' => 2],
            ['title' => 'OneClique Studio', 'description' => 'Multimedia Team - UI/UX, WordPress & SEO Optimization', 'action_label' => 'onecliquestudio.com', 'url' => 'https://onecliquestudio.com', 'sort_order' => 3],
        ];
        foreach ($projects as $p) {
            PortfolioProject::firstOrCreate(['title' => $p['title']], $p);
        }

        $certs = [
            ['name' => 'Associate Data Analyst', 'issuer' => 'DataCamp', 'year' => '2025', 'sort_order' => 0],
            ['name' => 'Intermediate SQL', 'issuer' => 'DataCamp', 'year' => '2025', 'sort_order' => 1],
            ['name' => 'Intermediate Python', 'issuer' => 'DataCamp', 'year' => '2025', 'sort_order' => 2],
        ];
        foreach ($certs as $c) {
            PortfolioCertification::firstOrCreate(['name' => $c['name'], 'issuer' => $c['issuer']], $c);
        }

        $recs = [
            ['quote' => '"She have a better taste design and good at details."', 'author' => 'Roy M.', 'sort_order' => 0],
            ['quote' => '"Highly professional and delivered on time."', 'author' => 'Client', 'sort_order' => 1],
        ];
        foreach ($recs as $r) {
            PortfolioRecommendation::firstOrCreate(['quote' => $r['quote']], $r);
        }

        $skills = [
            ['category' => 'frontend', 'name' => 'HTML', 'sort_order' => 0],
            ['category' => 'frontend', 'name' => 'CSS', 'sort_order' => 1],
            ['category' => 'frontend', 'name' => 'JavaScript', 'sort_order' => 2],
            ['category' => 'frontend', 'name' => 'Blade', 'sort_order' => 3],
            ['category' => 'frontend', 'name' => 'Tailwind CSS', 'sort_order' => 4],
            ['category' => 'frontend', 'name' => 'Vite', 'sort_order' => 5],
            ['category' => 'frontend', 'name' => 'Figma', 'sort_order' => 6],
            ['category' => 'backend', 'name' => 'PHP', 'sort_order' => 0],
            ['category' => 'backend', 'name' => 'Laravel', 'sort_order' => 1],
            ['category' => 'backend', 'name' => 'Python', 'sort_order' => 2],
            ['category' => 'backend', 'name' => 'Node.js', 'sort_order' => 3],
            ['category' => 'backend', 'name' => 'MySQL', 'sort_order' => 4],
            ['category' => 'backend', 'name' => 'PostgreSQL', 'sort_order' => 5],
            ['category' => 'backend', 'name' => 'Supabase', 'sort_order' => 6],
            ['category' => 'tools', 'name' => 'Git & GitHub', 'sort_order' => 0],
            ['category' => 'tools', 'name' => 'WordPress', 'sort_order' => 1],
            ['category' => 'tools', 'name' => 'SEO Optimization', 'sort_order' => 2],
            ['category' => 'tools', 'name' => 'Google Analytics', 'sort_order' => 3],
        ];
        foreach ($skills as $s) {
            PortfolioSkill::firstOrCreate(['category' => $s['category'], 'name' => $s['name']], $s);
        }
    }
}
