<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\WelcomeController;
use App\Http\Middleware\NoCacheHeaders;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::get('/', WelcomeController::class)->middleware(NoCacheHeaders::class)->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');
    Route::redirect('dashboard/portfolio', '/dashboard')->name('portfolio.index');

    Route::prefix('dashboard/portfolio')->name('portfolio.')->group(function () {
        Route::get('profile', [PortfolioController::class, 'editProfile'])->name('profile.edit');
        Route::put('profile', [PortfolioController::class, 'updateProfile'])->name('profile.update');
        Route::get('sections/{key}', [PortfolioController::class, 'editSection'])->name('sections.edit')->where('key', 'about|beyond_screen|contact_intro');
        Route::put('sections/{key}', [PortfolioController::class, 'updateSection'])->name('sections.update')->where('key', 'about|beyond_screen|contact_intro');
        Route::get('education', [PortfolioController::class, 'editEducation'])->name('education.edit');
        Route::put('education', [PortfolioController::class, 'updateEducation'])->name('education.update');

        Route::get('contact-cta', [PortfolioController::class, 'editContactCta'])->name('contact-cta.edit');
        Route::put('contact-cta', [PortfolioController::class, 'updateContactCta'])->name('contact-cta.update');

        Route::get('experiences', [PortfolioController::class, 'experiencesIndex'])->name('experiences.index');
        Route::post('experiences', [PortfolioController::class, 'experiencesStore'])->name('experiences.store');
        Route::put('experiences/{experience}', [PortfolioController::class, 'experiencesUpdate'])->name('experiences.update');
        Route::delete('experiences/{experience}', [PortfolioController::class, 'experiencesDestroy'])->name('experiences.destroy');

        Route::get('projects', [PortfolioController::class, 'projectsIndex'])->name('projects.index');
        Route::post('projects', [PortfolioController::class, 'projectsStore'])->name('projects.store');
        Route::match(['put', 'post'], 'projects/{project}', [PortfolioController::class, 'projectsUpdate'])->name('projects.update');
        Route::delete('projects/{project}', [PortfolioController::class, 'projectsDestroy'])->name('projects.destroy');

        Route::get('certifications', [PortfolioController::class, 'certificationsIndex'])->name('certifications.index');
        Route::post('certifications', [PortfolioController::class, 'certificationsStore'])->name('certifications.store');
        Route::match(['put', 'post'], 'certifications/{certification}', [PortfolioController::class, 'certificationsUpdate'])->name('certifications.update');
        Route::delete('certifications/{certification}', [PortfolioController::class, 'certificationsDestroy'])->name('certifications.destroy');

        Route::get('recommendations', [PortfolioController::class, 'recommendationsIndex'])->name('recommendations.index');
        Route::post('recommendations', [PortfolioController::class, 'recommendationsStore'])->name('recommendations.store');
        Route::put('recommendations/{recommendation}', [PortfolioController::class, 'recommendationsUpdate'])->name('recommendations.update');
        Route::delete('recommendations/{recommendation}', [PortfolioController::class, 'recommendationsDestroy'])->name('recommendations.destroy');

        Route::get('skills', [PortfolioController::class, 'skillsIndex'])->name('skills.index');
        Route::post('skills', [PortfolioController::class, 'skillsStore'])->name('skills.store');
        Route::delete('skills/{skill}', [PortfolioController::class, 'skillsDestroy'])->name('skills.destroy');
    });
});

require __DIR__.'/settings.php';
