<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(['as' => 'api.'], function () {

    Route::post('vendor_login', [App\Http\Controllers\Vendors\LoginController::class, 'login'])->name('login');

    Route::post('vendor_register', [App\Http\Controllers\Vendors\RegisterController::class, 'register'])->name('register');

    Route::post('admin_login', [App\Http\Controllers\Admins\LoginController::class, 'register'])->name('admin_register');

    //Company profiles---------------------------------------

     //show all 
    Route::get('company',[App\Http\Controllers\Api\CompanyprofileController::class,'index'])->name('show_all_company'); 
    // id required and show individual       
    Route::get('company/show/{id}',[App\Http\Controllers\Api\CompanyprofileController::class,'show'])->name('show_one_company'); 
     //create new company profile
    Route::post('company/create',[App\Http\Controllers\Api\CompanyprofileController::class,'create'])->name('new_company');  
    //update existing company profile and id required
    Route::put('company/update/{id}',[App\Http\Controllers\Api\CompanyprofileController::class,'update'])->name('update_company'); 
    //delete existing company profile and id required
    Route::delete('company/delete/{id}',[App\Http\Controllers\Api\CompanyprofileController::class,'destroy'])->name('delete_company');

    //-------------------------------------company profiles




    Route::group(['middleware' => ['auth:api']], function () {

        //code here

    });
 
});