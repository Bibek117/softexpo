<?php

use Illuminate\Support\Facades\Route;

Route::post('admin_login', [App\Http\Controllers\Admins\LoginController::class, 'login'])->name('admin_login');

//guarded routes
Route::middleware(['admin'])->prefix('appAdmin')->group(function () {
    Route::post('/logout',[App\Http\Controllers\Admins\LoginController::class, 'logout']);
    Route::get('/getNotifications',[App\Http\Controllers\Admin\NotificationController::class, 'getAll']);
    Route::get('/getUnreadNotifications',[App\Http\Controllers\Admin\NotificationController::class, 'getUnread']);
    Route::get('/notification/done/{id}',[App\Http\Controllers\Admin\NotificationController::class, 'done']);
    Route::get('company/show/{id}', [App\Http\Controllers\Api\CompanyprofileController::class, 'show'])->name('show_one_company');
    Route::get('company/approve/{id}', [App\Http\Controllers\Api\CompanyprofileController::class, 'approve'])->name('approve');
});
