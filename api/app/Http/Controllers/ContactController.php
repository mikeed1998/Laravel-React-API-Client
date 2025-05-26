<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index(): JsonResponse {
        return response()->json([
            'status' => 200,
            'message' => 'Contact'
        ]);
    }
}
