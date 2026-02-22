<?php

namespace App\Support;

use Illuminate\Support\Facades\Storage;

/**
 * Centralized access to portfolio media storage (images only: avatar, projects, certifications, beyond_screen).
 * Uses the disk configured in config/filesystems.portfolio_media_disk (public or r2).
 */
final class PortfolioMedia
{
    public static function diskName(): string
    {
        return config('filesystems.portfolio_media_disk', 'public');
    }

    /**
     * Return the public URL for an image path, or null if path is empty.
     */
    public static function url(?string $path): ?string
    {
        if ($path === null || $path === '') {
            return null;
        }
        /** @var \Illuminate\Filesystem\FilesystemAdapter $adapter */
        $adapter = Storage::disk(self::diskName());

        return $adapter->url($path);
    }

    /**
     * Store an uploaded image and return the stored path (for DB). Use disk from config.
     */
    public static function storeImage($file, string $directory): string
    {
        return $file->store($directory, self::diskName());
    }

    public static function exists(string $path): bool
    {
        return Storage::disk(self::diskName())->exists($path);
    }

    public static function delete(string $path): bool
    {
        return Storage::disk(self::diskName())->delete($path);
    }
}
