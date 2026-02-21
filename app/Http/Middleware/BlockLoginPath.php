<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class BlockLoginPath
{
    /**
     * Block the default /login path so the login page is only available at the hidden URL.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->is('login') && $request->isMethod('GET')) {
            abort(404);
        }

        return $next($request);
    }
}
