<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('portfolio_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('name')->default('');
            $table->string('location')->default('');
            $table->string('tagline')->default('');
            $table->string('avatar_path')->nullable();
            $table->string('email')->default('');
            $table->string('schedule_url')->nullable();
            $table->string('community_url')->nullable();
            $table->string('linkedin_url')->nullable();
            $table->string('github_url')->nullable();
            $table->string('footer_text')->default('');
            $table->string('chat_label')->default('Chat with Ren');
            $table->timestamps();
        });

        Schema::create('portfolio_sections', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique(); // about, education, beyond_screen, contact_intro
            $table->text('content')->nullable();
            $table->json('data')->nullable(); // for structured data e.g. education: {degree, institution, period}
            $table->timestamps();
        });

        Schema::create('portfolio_experiences', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('company')->default('');
            $table->string('period')->default(''); // e.g. "2024 - Present"
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('portfolio_projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('action_label')->nullable(); // "View Case Study" or "domain.com"
            $table->string('url')->nullable();
            $table->string('image_path')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('portfolio_certifications', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('issuer')->default('');
            $table->string('year')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('portfolio_recommendations', function (Blueprint $table) {
            $table->id();
            $table->text('quote');
            $table->string('author')->default('');
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('portfolio_skills', function (Blueprint $table) {
            $table->id();
            $table->string('category'); // frontend, backend, tools
            $table->string('name');
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('portfolio_skills');
        Schema::dropIfExists('portfolio_recommendations');
        Schema::dropIfExists('portfolio_certifications');
        Schema::dropIfExists('portfolio_projects');
        Schema::dropIfExists('portfolio_experiences');
        Schema::dropIfExists('portfolio_sections');
        Schema::dropIfExists('portfolio_profiles');
    }
};
