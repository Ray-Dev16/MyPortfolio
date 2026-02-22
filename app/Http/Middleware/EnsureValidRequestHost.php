<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureValidRequestHost
{
    /**
     * Ensure the request has a valid host so URL generation does not throw "Invalid URI: Host is malformed".
     * Behind a proxy (e.g. Render), the Host header can be empty or an internal hostname.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $host = $request->getHost();

        if ($this->hostIsInvalid($host)) {
            $fallbackHost = $this->hostFromAppUrl();
            if ($fallbackHost !== null) {
                $request->server->set('HTTP_HOST', $fallbackHost);
                $request->server->set('SERVER_NAME', $fallbackHost);
            }
        }

        return $next($request);
    }

    private function hostFromAppUrl(): ?string
    {
        $appUrl = config('app.url');
        if ($appUrl === null || $appUrl === '') {
            return null;
        }
        $parsed = parse_url($appUrl);
        $host = $parsed['host'] ?? null;
        if ($host === null || $host === '') {
            return null;
        }
        $port = $parsed['port'] ?? null;
        if ($port !== null && ! in_array((int) $port, [80, 443], true)) {
            return $host.':'.$port;
        }
        return $host;
    }

    private function hostIsInvalid(string $host): bool
    {
        if ($host === '') {
            return true;
        }
        // Likely internal: no dot (e.g. "web", container hostname)
        if (str_contains($host, '.')) {
            return false;
        }
        return $host !== 'localhost' && $host !== '127.0.0.1';
    }
}
