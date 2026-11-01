<?php

use App\Http\Controllers\Api\ManagedServerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/servers', [ManagedServerController::class, 'index']);
Route::post('/servers', [ManagedServerController::class, 'store']);
Route::get('/servers/{server}',[ManagedServerController::class,'show']);
Route::put('/servers/{server}', [ManagedServerController::class,'update']);
Route::delete('/servers/{server}',[ManagedServerController::class,'delete']);
