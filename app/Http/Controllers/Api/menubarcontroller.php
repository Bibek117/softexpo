<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\menubar;
use Illuminate\Http\Request;

class menubarcontroller extends Controller
{
   
    public function index()
    {
        $menubar = menubar::all();
        return response()->json($menubar,200);
        // return response()->json(["message"=>"APi CALLEd"] , 200);
    }
    // public function test(){
    //     return response()->json(["message"=>"APi CALLEd"] , 200);
    // }

    
    public function create()
    {
        //
    }

    
    public function store(Request $request)
    {
        //
    }

    
    public function show($id)
    {
        //
    }

    
    public function edit($id)
    {
        //
    }

    
    public function update(Request $request, $id)
    {
        //
    }

    
    public function destroy($id)
    {
        //
    }
}
