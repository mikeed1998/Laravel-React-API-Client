<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureApiRoutes();
    }

    protected function configureApiRoutes(): void
    {
        Route::middleware('api')->group(function () {
            Route::prefix('v1')->group(function () {
                Route::get('/', function () {
                    return response()->json(['message' => 'API v1']);
                });
                
                // Más rutas API v1...
            });
        });
    }
}
