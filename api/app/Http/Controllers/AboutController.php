<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class AboutController extends Controller
{
    public function index(): JsonResponse {
        return response()->json([
            'status' => 200,
            'message' => 'Mensaje desde la API',
            'data' => ['C', 'C++', 'Java', 'C#', 'TypeScript', 'Python']
        ]);
    }
}
