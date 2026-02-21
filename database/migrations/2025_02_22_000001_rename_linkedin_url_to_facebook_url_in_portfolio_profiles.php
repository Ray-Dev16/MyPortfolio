<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('portfolio_profiles', function (Blueprint $table) {
            $table->string('facebook_url')->nullable()->after('community_url');
        });
        DB::table('portfolio_profiles')->update([
            'facebook_url' => DB::raw('linkedin_url'),
        ]);
        Schema::table('portfolio_profiles', function (Blueprint $table) {
            $table->dropColumn('linkedin_url');
        });
    }

    public function down(): void
    {
        Schema::table('portfolio_profiles', function (Blueprint $table) {
            $table->string('linkedin_url')->nullable()->after('community_url');
        });
        DB::table('portfolio_profiles')->update([
            'linkedin_url' => DB::raw('facebook_url'),
        ]);
        Schema::table('portfolio_profiles', function (Blueprint $table) {
            $table->dropColumn('facebook_url');
        });
    }
};
