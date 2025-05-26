<?php

    return [
        'paths' => ['api/*', 'sanctum/csrf-cookie'],
        'allowed_methods' => ['*'],
        // 'allowed_origins' => ['*'], // Para desarrollo. En producción especifica tu dominio frontend
        // 'allowed_origins' => [env('FRONTEND_URL')],
        'allowed_origins' => ['http://localhost:5173'],
        'allowed_origins_patterns' => [],
        'allowed_headers' => ['*'],
        'exposed_headers' => [],
        'max_age' => 0,
        'supports_credentials' => false,
    ];