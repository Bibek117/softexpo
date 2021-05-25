<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(['as' => 'api.'], function () {

    Route::post('vendor_login', [App\Http\Controllers\Vendors\LoginController::class, 'login'])->name('login');

    Route::post('vendor_register', [App\Http\Controllers\Vendors\RegisterController::class, 'register'])->name('register');

    Route::post('admin_login', [App\Http\Controllers\Admins\LoginController::class, 'register'])->name('admin_register');

    Route::group(['middleware' => ['auth:api']], function () {

        //code here

    });

});