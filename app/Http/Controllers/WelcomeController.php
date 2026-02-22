<?php

namespace App\Http\Controllers;

use App\Models\PortfolioCertification;
use App\Models\PortfolioExperience;
use App\Models\PortfolioProfile;
use App\Models\PortfolioProject;
use App\Models\PortfolioRecommendation;
use App\Models\PortfolioSection;
use App\Models\PortfolioSkill;
use App\Support\PortfolioMedia;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class WelcomeController extends Controller
{
    /**
     * Landing page: all content is loaded from the same DB as the admin.
     * Changes saved in the admin (Profile, About, Education, etc.) appear here.
     */
    public function __invoke(Request $request)
    {
        $profile = PortfolioProfile::singleton();
        $sections = PortfolioSection::all()->keyBy('key');

        $education = $sections->get('education');
        $educationData = $education?->data ?? [
            'elementary' => ['school' => '', 'period' => ''],
            'high_school' => ['school' => '', 'period' => ''],
            'senior_high' => ['school' => '', 'period' => '', 'strand' => ''],
            'college' => [
                'degree' => 'BS Information Technology',
                'institution' => 'Polytechnic University of the Philippines',
                'period' => '2022 - 2027',
                'strand' => '',
            ],
        ];
        // Support legacy flat format for education
        if (isset($educationData['degree']) && ! isset($educationData['college'])) {
            $educationData['college'] = [
                'degree' => $educationData['degree'] ?? '',
                'institution' => $educationData['institution'] ?? '',
                'period' => $educationData['period'] ?? '',
                'strand' => '',
            ];
        }

        return Inertia::render('welcome', [
            'canRegister' => Features::enabled(Features::registration()),
            'portfolio' => [
                'profile' => [
                    'name' => $profile->name,
                    'location' => $profile->location,
                    'tagline' => $profile->tagline,
                    'avatar_path' => PortfolioMedia::url($profile->avatar_path),
                    'email' => $profile->email,
                    'schedule_url' => $profile->schedule_url,
                    'community_url' => $profile->community_url,
                    'facebook_url' => $profile->facebook_url,
                    'github_url' => $profile->github_url,
                    'footer_text' => $profile->footer_text,
                    'chat_label' => $profile->chat_label,
                ],
                'about' => PortfolioSection::getContent('about', 'From Civil Engineering to IT, I blend structural precision with digital innovation. As a student freelancer, I\'ve always tried to bridge academic theory with real-world execution, using my background in Marketing Analysis to create high-impact experiences. Today, I am an Aspiring Full-Stack Developer and UI/UX Designer combining expertise in WordPress, SEO, and Data Analytics to build meaningful connections between brands and their audience.'),
                'education' => $educationData,
                'beyond_screen' => PortfolioSection::getContent('beyond_screen', 'When I step away from the tech world, I focus on Muay Thai, the gym, dance, and travel to fuel my creativity and well-being, ensuring I return to my projects with fresh energy and perspective.'),
                'beyond_screen_images' => array_map(
                    fn ($path) => PortfolioMedia::url($path) ?? '',
                    (PortfolioSection::getData('beyond_screen') ?? [])['images'] ?? [],
                ),
                'contact_intro' => PortfolioSection::getContent('contact_intro', 'Available for UI/UX and WordPress freelance projects, with added support in SEO, Google Search Console (GSC), Google My Business (GMB), and email campaigns.'),
                'experiences' => PortfolioExperience::all()->map(fn ($e) => [
                    'id' => $e->id,
                    'title' => $e->title,
                    'company' => $e->company,
                    'period' => $e->period,
                ])->values()->all(),
                'projects' => PortfolioProject::all()->map(fn ($p) => [
                    'id' => $p->id,
                    'title' => $p->title,
                    'description' => $p->description,
                    'action' => $p->action_label ?? $p->url,
                    'href' => $p->url ?? '#',
                    'image' => PortfolioMedia::url($p->image_path),
                ])->values()->all(),
                'certifications' => PortfolioCertification::all()->map(fn ($c) => [
                    'id' => $c->id,
                    'name' => $c->name,
                    'issuer' => $c->issuer,
                    'year' => $c->year,
                    'image' => PortfolioMedia::url($c->image_path),
                ])->values()->all(),
                'recommendations' => PortfolioRecommendation::all()->map(fn ($r) => [
                    'id' => $r->id,
                    'quote' => $r->quote,
                    'author' => $r->author,
                ])->values()->all(),
                'techStack' => PortfolioSkill::byCategory(),
            ],
        ]);
    }

    /**
     * Full Tech Stack page (public).
     */
    public function fullTechStack()
    {
        $profile = PortfolioProfile::singleton();
        $techStack = PortfolioSkill::byCategory();

        return Inertia::render('tech-stack', [
            'profile' => [
                'name' => $profile->name,
                'footer_text' => $profile->footer_text,
            ],
            'techStack' => $techStack,
        ]);
    }

    /**
     * Selected Projects page (public) with pagination.
     */
    public function selectedProjects(Request $request)
    {
        $profile = PortfolioProfile::singleton();
        $paginator = PortfolioProject::paginate(8);
        $projects = collect($paginator->items())->map(fn ($p) => [
            'id' => $p->id,
            'title' => $p->title,
            'description' => $p->description,
            'action' => $p->action_label ?? $p->url,
            'href' => $p->url ?? '#',
            'image' => PortfolioMedia::url($p->image_path),
        ])->values()->all();

        return Inertia::render('projects', [
            'profile' => [
                'name' => $profile->name,
                'footer_text' => $profile->footer_text,
            ],
            'projects' => $projects,
            'pagination' => [
                'current_page' => $paginator->currentPage(),
                'last_page' => $paginator->lastPage(),
                'per_page' => $paginator->perPage(),
                'total' => $paginator->total(),
                'links' => $paginator->linkCollection()->toArray(),
            ],
        ]);
    }
}
