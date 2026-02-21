<?php

namespace App\Http\Controllers;

use App\Models\PortfolioCertification;
use App\Models\PortfolioExperience;
use App\Models\PortfolioProfile;
use App\Models\PortfolioProject;
use App\Models\PortfolioRecommendation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $profile = PortfolioProfile::singleton();

        return Inertia::render('dashboard', [
            'overview' => [
                'profileName' => $profile->name,
                'projectsCount' => PortfolioProject::count(),
                'experiencesCount' => PortfolioExperience::count(),
                'certificationsCount' => PortfolioCertification::count(),
                'recommendationsCount' => PortfolioRecommendation::count(),
            ],
        ]);
    }
}
