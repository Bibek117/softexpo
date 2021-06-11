<?php

use Illuminate\Support\Facades\Route;

Route::post('admin_login', [App\Http\Controllers\Admins\LoginController::class, 'login'])->name('admin_login');
