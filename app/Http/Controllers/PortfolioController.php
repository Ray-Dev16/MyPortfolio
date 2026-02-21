<?php

namespace App\Http\Controllers;

use App\Models\PortfolioCertification;
use App\Models\PortfolioExperience;
use App\Models\PortfolioProfile;
use App\Models\PortfolioProject;
use App\Models\PortfolioRecommendation;
use App\Models\PortfolioSection;
use App\Models\PortfolioSkill;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('portfolio/index', [
            'cards' => [
                ['title' => 'Profile', 'description' => 'Name, location, tagline, avatar, links', 'url' => route('portfolio.profile.edit'), 'icon' => 'user'],
                ['title' => 'About Me', 'description' => 'Introduction and bio', 'url' => route('portfolio.sections.edit', 'about'), 'icon' => 'info'],
                ['title' => 'Education', 'description' => 'Elementary, High School, Senior High, College & strand', 'url' => route('portfolio.education.edit'), 'icon' => 'graduation'],
                ['title' => 'Experience', 'description' => 'Work history', 'url' => route('portfolio.experiences.index'), 'icon' => 'briefcase'],
                ['title' => 'Projects', 'description' => 'Portfolio projects', 'url' => route('portfolio.projects.index'), 'icon' => 'layout-grid'],
                ['title' => 'Tech Stack', 'description' => 'Skills by category', 'url' => route('portfolio.skills.index'), 'icon' => 'settings'],
                ['title' => 'Certifications', 'description' => 'Certifications list', 'url' => route('portfolio.certifications.index'), 'icon' => 'check-circle'],
                ['title' => 'Recommendations', 'description' => 'Testimonials', 'url' => route('portfolio.recommendations.index'), 'icon' => 'message-circle'],
                ['title' => 'Beyond the Screen', 'description' => 'Personal interests', 'url' => route('portfolio.sections.edit', 'beyond_screen'), 'icon' => 'book-open'],
                ['title' => 'Contact / CTA', 'description' => 'Intro text and Get in Touch (email, schedule, community)', 'url' => route('portfolio.contact-cta.edit'), 'icon' => 'mail'],
            ],
        ]);
    }

    public function editProfile(): Response
    {
        $profile = PortfolioProfile::singleton();

        return Inertia::render('portfolio/profile', [
            'profile' => [
                'name' => $profile->name,
                'location' => $profile->location,
                'tagline' => $profile->tagline,
                'avatar_path' => $profile->avatar_path,
                'avatar_url' => $profile->avatar_path ? Storage::disk('public')->url($profile->avatar_path) : null,
                'email' => $profile->email,
                'schedule_url' => $profile->schedule_url,
                'community_url' => $profile->community_url,
                'linkedin_url' => $profile->linkedin_url,
                'github_url' => $profile->github_url,
                'footer_text' => $profile->footer_text,
                'chat_label' => $profile->chat_label,
            ],
        ]);
    }

    public function updateProfile(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'location' => 'nullable|string|max:255',
            'tagline' => 'nullable|string|max:500',
            'avatar_path' => 'nullable|string|max:500',
            'avatar' => 'nullable|image|mimes:jpeg,png,jpg,webp,gif|max:2048',
            'email' => 'required|email',
            'schedule_url' => 'nullable|url|max:500',
            'community_url' => 'nullable|url|max:500',
            'linkedin_url' => 'nullable|url|max:500',
            'github_url' => 'nullable|url|max:500',
            'footer_text' => 'nullable|string|max:500',
            'chat_label' => 'nullable|string|max:100',
        ]);
        $profile = PortfolioProfile::singleton();
        if ($request->hasFile('avatar')) {
            if ($profile->avatar_path && Storage::disk('public')->exists($profile->avatar_path)) {
                Storage::disk('public')->delete($profile->avatar_path);
            }
            $validated['avatar_path'] = $request->file('avatar')->store('portfolio/avatars', 'public');
        }
        unset($validated['avatar']);
        $profile->update($validated);

        return redirect()->route('portfolio.profile.edit')->with('status', 'Profile updated.');
    }

    public function editContactCta(): Response
    {
        $section = PortfolioSection::firstOrCreate(['key' => 'contact_intro'], ['content' => '']);
        $profile = PortfolioProfile::singleton();

        return Inertia::render('portfolio/contact-cta', [
            'contact_intro' => $section->content ?? '',
            'email' => $profile->email ?? '',
            'schedule_url' => $profile->schedule_url ?? '',
            'community_url' => $profile->community_url ?? '',
        ]);
    }

    public function updateContactCta(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'contact_intro' => 'nullable|string',
            'email' => 'required|email',
            'schedule_url' => 'nullable|url|max:500',
            'community_url' => 'nullable|url|max:500',
        ]);
        PortfolioSection::updateOrCreate(
            ['key' => 'contact_intro'],
            ['content' => $validated['contact_intro'] ?? '']
        );
        PortfolioProfile::singleton()->update([
            'email' => $validated['email'],
            'schedule_url' => $validated['schedule_url'] ?? null,
            'community_url' => $validated['community_url'] ?? null,
        ]);

        return redirect()->route('portfolio.contact-cta.edit')->with('status', 'Contact CTA updated.');
    }

    public function editSection(string $key): Response
    {
        $section = PortfolioSection::firstOrCreate(['key' => $key], ['content' => '']);
        $titles = [
            'about' => 'About Me',
            'beyond_screen' => 'Beyond the Screen',
            'contact_intro' => 'Contact / CTA',
        ];

        return Inertia::render('portfolio/section', [
            'key' => $key,
            'title' => $titles[$key] ?? ucfirst(str_replace('_', ' ', $key)),
            'content' => $section->content,
        ]);
    }

    public function updateSection(Request $request, string $key): RedirectResponse
    {
        $validated = $request->validate(['content' => 'nullable|string']);
        PortfolioSection::updateOrCreate(['key' => $key], ['content' => $validated['content'] ?? '']);

        return redirect()->route('portfolio.sections.edit', $key)->with('status', 'Section updated.');
    }

    public function editEducation(): Response
    {
        $section = PortfolioSection::firstOrCreate(['key' => 'education'], [
            'data' => [
                'college' => [
                    'degree' => 'BS Information Technology',
                    'institution' => 'Polytechnic University of the Philippines',
                    'period' => '2022 - 2027',
                    'strand' => '',
                ],
            ],
        ]);
        $data = $section->data ?? [];
        // Support legacy flat format: degree, institution, period → college
        if (isset($data['degree']) && ! isset($data['college'])) {
            $data['college'] = [
                'degree' => $data['degree'] ?? '',
                'institution' => $data['institution'] ?? '',
                'period' => $data['period'] ?? '',
                'strand' => '',
            ];
        }
        return Inertia::render('portfolio/education', [
            'elementary' => array_merge(['school' => '', 'period' => ''], array_intersect_key($data['elementary'] ?? [], array_flip(['school', 'period']))),
            'high_school' => array_merge(['school' => '', 'period' => ''], array_intersect_key($data['high_school'] ?? [], array_flip(['school', 'period']))),
            'senior_high' => array_merge(['school' => '', 'period' => '', 'strand' => ''], array_intersect_key($data['senior_high'] ?? [], array_flip(['school', 'period', 'strand']))),
            'college' => array_merge(['degree' => '', 'institution' => '', 'period' => '', 'strand' => ''], array_intersect_key($data['college'] ?? [], array_flip(['degree', 'institution', 'period', 'strand']))),
        ]);
    }

    public function updateEducation(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'elementary.school' => 'nullable|string|max:255',
            'elementary.period' => 'nullable|string|max:100',
            'high_school.school' => 'nullable|string|max:255',
            'high_school.period' => 'nullable|string|max:100',
            'senior_high.school' => 'nullable|string|max:255',
            'senior_high.period' => 'nullable|string|max:100',
            'senior_high.strand' => 'nullable|string|max:500',
            'college.degree' => 'nullable|string|max:255',
            'college.institution' => 'nullable|string|max:255',
            'college.period' => 'nullable|string|max:100',
            'college.strand' => 'nullable|string|max:500',
        ]);
        $data = [
            'elementary' => [
                'school' => $validated['elementary']['school'] ?? '',
                'period' => $validated['elementary']['period'] ?? '',
            ],
            'high_school' => [
                'school' => $validated['high_school']['school'] ?? '',
                'period' => $validated['high_school']['period'] ?? '',
            ],
            'senior_high' => [
                'school' => $validated['senior_high']['school'] ?? '',
                'period' => $validated['senior_high']['period'] ?? '',
                'strand' => $validated['senior_high']['strand'] ?? '',
            ],
            'college' => [
                'degree' => $validated['college']['degree'] ?? '',
                'institution' => $validated['college']['institution'] ?? '',
                'period' => $validated['college']['period'] ?? '',
                'strand' => $validated['college']['strand'] ?? '',
            ],
        ];
        PortfolioSection::updateOrCreate(
            ['key' => 'education'],
            ['data' => $data]
        );

        return redirect()->route('portfolio.education.edit')->with('status', 'Education updated.');
    }

    public function experiencesIndex(): Response
    {
        $items = PortfolioExperience::withoutGlobalScope('order')->orderBy('sort_order')->orderBy('id')->get();

        return Inertia::render('portfolio/experiences', [
            'experiences' => $items->map(fn ($e) => [
                'id' => $e->id,
                'title' => $e->title,
                'company' => $e->company,
                'period' => $e->period,
                'sort_order' => $e->sort_order,
            ])->values()->all(),
        ]);
    }

    public function experiencesStore(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'company' => 'nullable|string|max:255',
            'period' => 'nullable|string|max:100',
        ]);
        $validated['sort_order'] = PortfolioExperience::max('sort_order') + 1;
        PortfolioExperience::create($validated);

        return back()->with('status', 'Experience added.');
    }

    public function experiencesUpdate(Request $request, int $experience): RedirectResponse
    {
        $model = PortfolioExperience::findOrFail($experience);
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'company' => 'nullable|string|max:255',
            'period' => 'nullable|string|max:100',
        ]);
        $model->update($validated);

        return back()->with('status', 'Experience updated.');
    }

    public function experiencesDestroy(int $experience): RedirectResponse
    {
        PortfolioExperience::findOrFail($experience)->delete();

        return back()->with('status', 'Experience removed.');
    }

    public function projectsIndex(): Response
    {
        $items = PortfolioProject::withoutGlobalScope('order')->orderBy('sort_order')->orderBy('id')->get();

        return Inertia::render('portfolio/projects', [
            'projects' => $items->map(fn ($p) => [
                'id' => $p->id,
                'title' => $p->title,
                'description' => $p->description,
                'action_label' => $p->action_label,
                'url' => $p->url,
                'image_path' => $p->image_path,
                'image_url' => $p->image_path ? asset('storage/'.$p->image_path) : null,
            ])->values()->all(),
        ]);
    }

    public function projectsStore(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'action_label' => 'nullable|string|max:255',
            'url' => 'nullable|string|max:500',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp,gif|max:2048',
        ]);
        $validated['sort_order'] = PortfolioProject::max('sort_order') + 1;
        if ($request->hasFile('image')) {
            $validated['image_path'] = $request->file('image')->store('portfolio/projects', 'public');
        }
        unset($validated['image']);
        PortfolioProject::create($validated);

        return back()->with('status', 'Project added.');
    }

    public function projectsUpdate(Request $request, int $project): RedirectResponse
    {
        $model = PortfolioProject::findOrFail($project);
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'action_label' => 'nullable|string|max:255',
            'url' => 'nullable|string|max:500',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp,gif|max:2048',
        ]);
        if ($request->hasFile('image')) {
            if ($model->image_path && Storage::disk('public')->exists($model->image_path)) {
                Storage::disk('public')->delete($model->image_path);
            }
            $validated['image_path'] = $request->file('image')->store('portfolio/projects', 'public');
        }
        unset($validated['image']);
        $model->update($validated);

        return back()->with('status', 'Project updated.');
    }

    public function projectsDestroy(int $project): RedirectResponse
    {
        PortfolioProject::findOrFail($project)->delete();

        return back()->with('status', 'Project removed.');
    }

    public function certificationsIndex(): Response
    {
        $items = PortfolioCertification::withoutGlobalScope('order')->orderBy('sort_order')->orderBy('id')->get();

        return Inertia::render('portfolio/certifications', [
            'certifications' => $items->map(fn ($c) => [
                'id' => $c->id,
                'name' => $c->name,
                'issuer' => $c->issuer,
                'year' => $c->year,
                'image_path' => $c->image_path,
                'image_url' => $c->image_path ? asset('storage/'.$c->image_path) : null,
                'sort_order' => $c->sort_order,
            ])->values()->all(),
        ]);
    }

    public function certificationsStore(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'issuer' => 'nullable|string|max:255',
            'year' => 'nullable|string|max:20',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp,gif|max:2048',
        ]);
        $validated['sort_order'] = PortfolioCertification::max('sort_order') + 1;
        if ($request->hasFile('image')) {
            $validated['image_path'] = $request->file('image')->store('portfolio/certifications', 'public');
        }
        unset($validated['image']);
        PortfolioCertification::create($validated);

        return back()->with('status', 'Certification added.');
    }

    public function certificationsUpdate(Request $request, int $certification): RedirectResponse
    {
        $model = PortfolioCertification::findOrFail($certification);
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'issuer' => 'nullable|string|max:255',
            'year' => 'nullable|string|max:20',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp,gif|max:2048',
        ]);
        if ($request->hasFile('image')) {
            if ($model->image_path && Storage::disk('public')->exists($model->image_path)) {
                Storage::disk('public')->delete($model->image_path);
            }
            $validated['image_path'] = $request->file('image')->store('portfolio/certifications', 'public');
        }
        unset($validated['image']);
        $model->update($validated);

        return back()->with('status', 'Certification updated.');
    }

    public function certificationsDestroy(int $certification): RedirectResponse
    {
        PortfolioCertification::findOrFail($certification)->delete();

        return back()->with('status', 'Certification removed.');
    }

    public function recommendationsIndex(): Response
    {
        $items = PortfolioRecommendation::withoutGlobalScope('order')->orderBy('sort_order')->orderBy('id')->get();

        return Inertia::render('portfolio/recommendations', [
            'recommendations' => $items->map(fn ($r) => [
                'id' => $r->id,
                'quote' => $r->quote,
                'author' => $r->author,
                'sort_order' => $r->sort_order,
            ])->values()->all(),
        ]);
    }

    public function recommendationsStore(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'quote' => 'required|string',
            'author' => 'nullable|string|max:255',
        ]);
        $validated['sort_order'] = PortfolioRecommendation::max('sort_order') + 1;
        PortfolioRecommendation::create($validated);

        return back()->with('status', 'Recommendation added.');
    }

    public function recommendationsUpdate(Request $request, int $recommendation): RedirectResponse
    {
        $model = PortfolioRecommendation::findOrFail($recommendation);
        $validated = $request->validate([
            'quote' => 'required|string',
            'author' => 'nullable|string|max:255',
        ]);
        $model->update($validated);

        return back()->with('status', 'Recommendation updated.');
    }

    public function recommendationsDestroy(int $recommendation): RedirectResponse
    {
        PortfolioRecommendation::findOrFail($recommendation)->delete();

        return back()->with('status', 'Recommendation removed.');
    }

    public function skillsIndex(): Response
    {
        $skills = PortfolioSkill::withoutGlobalScope('order')->orderBy('category')->orderBy('sort_order')->get();

        return Inertia::render('portfolio/skills', [
            'skills' => [
                'frontend' => $skills->where('category', 'frontend')->values()->all(),
                'backend' => $skills->where('category', 'backend')->values()->all(),
                'tools' => $skills->where('category', 'tools')->values()->all(),
            ],
        ]);
    }

    public function skillsStore(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'category' => 'required|in:frontend,backend,tools',
            'name' => 'required|string|max:255',
        ]);
        $validated['sort_order'] = PortfolioSkill::where('category', $validated['category'])->max('sort_order') + 1;
        PortfolioSkill::create($validated);

        return back()->with('status', 'Skill added.');
    }

    public function skillsDestroy(int $skill): RedirectResponse
    {
        PortfolioSkill::findOrFail($skill)->delete();

        return back()->with('status', 'Skill removed.');
    }
}
