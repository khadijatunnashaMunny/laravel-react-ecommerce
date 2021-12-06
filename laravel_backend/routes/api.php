<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserAuth\RegisterController;
use App\Http\Controllers\Admin\CategoryController;

Route::post('/register', [RegisterController::class, 'register']);
Route::post('/category', [CategoryController::class, 'category']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
