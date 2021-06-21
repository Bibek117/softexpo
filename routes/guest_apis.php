<?php

use Illuminate\Support\Facades\Route;

Route::get('software-categories',[App\Http\Controllers\Api\SoftwarecategoryController::class,'index'])->name('software');
