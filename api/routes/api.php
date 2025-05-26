<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

// Ruta raíz API (ahora en /api)
Route::get('/', function (): JsonResponse {
    return response()->json([
        'status' => 'success',
        'message' => 'API Laravel 12',
        'endpoints' => [
            'v1' => url('/api/v1')
        ]
    ]);
});

// Versión 1 (accesible en /api/v1)
Route::prefix('v1')->group(function () {
    Route::get('/', [HomeController::class, 'index']);
    Route::get('/about', [AboutController::class, 'index']);
    Route::get('/contact', [ContactController::class, 'index']);
});