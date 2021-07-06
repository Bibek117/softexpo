<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    //
    public function getAll(){
        $data = Admin::where('user_role',0)->get();
    }
}
