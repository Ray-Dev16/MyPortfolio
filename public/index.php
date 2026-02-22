<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require __DIR__.'/../vendor/autoload.php';

// Force host from APP_URL before Request is created (avoids "Invalid URI: Host is malformed" behind proxies e.g. Render).
$appUrl = $_ENV['APP_URL'] ?? getenv('APP_URL') ?: '';
if ($appUrl !== '') {
    $parsed = parse_url($appUrl);
    if (isset($parsed['host']) && $parsed['host'] !== '') {
        $host = $parsed['host'];
        $port = isset($parsed['port']) && ! in_array((int) $parsed['port'], [80, 443], true) ? ':'.$parsed['port'] : '';
        $_SERVER['HTTP_HOST'] = $host.$port;
        $_SERVER['SERVER_NAME'] = $host;
    }
}

// Bootstrap Laravel and handle the request...
/** @var Application $app */
$app = require_once __DIR__.'/../bootstrap/app.php';

$app->handleRequest(Request::capture());
