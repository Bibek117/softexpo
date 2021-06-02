<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AppSettingController;


Route::group(['as' => 'api.'], function () {

    //Auth

    //login function for vendor -- middleware set
    Route::post('vendor_login', [App\Http\Controllers\Vendors\LoginController::class, 'login'])->name('login');
    //register -- middleware done
    Route::post('vendor_register', [App\Http\Controllers\Vendors\RegisterController::class, 'register'])->name('register');

    //rem
    Route::post('admin_login', [App\Http\Controllers\Admins\LoginController::class, 'register'])->name('admin_register');
    //----------------Auth sudeep


    //Company profiles---------------------------------------Bibek

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


    //App Settings--Sirjana
    // Route::apiResources([ AppSettingController::class],'appsettings');


    // menubar............................................................Sharmila

    //show all
    Route::get('menubar',[App\Http\Controllers\Api\MenubarController::class,'index'])->name('show_menu');

    //create new menubar
    Route::post('menubar/create' , [App\Http\Controllers\Api\MenubarController::class , 'create'])->name('add_menu');

    //delete existing menubar
    Route::delete('menubar/delete/{id}' , [App\Http\Controllers\Api\MenubarController::class , 'destroy'])->name('delete');

    //show only one menubar using id
    Route::get('menubar/show/{id}',[App\Http\Controllers\Api\MenubarController::class,'show'])->name('show_one_menu');

    // update the exiting menubar
    Route::put('menubar/update/{id}' , [\App\Http\Controllers\Api\MenubarController::class , 'update'])->name('update_menubar');


    Route::middleware(['vendor'])->prefix('vendor')->group(function () {
        Route::get('/check_vendor_company',[App\Http\Controllers\Api\CompanyprofileController::class,'check_vendor_company']);
    });


});
