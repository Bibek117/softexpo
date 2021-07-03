<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use App\Models\Software;
use App\Models\Softwarecategories;
// use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //

    public function allLeads(){
        $data = Lead::all();
        return response()->json($data);
    }

    public function allSoftwares(){
        $data = Software::all();
        return response()->json($data);
    }

    public function allCats(){
        $data = Softwarecategories::all();
        return response()->json($data);
    }
}
