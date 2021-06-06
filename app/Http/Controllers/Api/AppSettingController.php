<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\AppSetting;
use Illuminate\Http\Request;
use App\Http\Requests\AppsettingRequest;

class AppSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data =  AppSetting::all();
        return response()->json($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(AppsettingRequest $request)
    {
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AppsettingRequest $request)
    {
        $data = AppSetting::all();
        dd($data);
        if(count($data)>0 && count($data)<2)
        {
            $appset = AppSetting::create($request->all());
            return response()->json(['message' => 'Appsetting created successfully', 'appsettingdata' => $appset],201);
        }
        else
        {
            return response()->json(['message' => 'Appsetting already exists']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(AppSetting $appsetting)
    {
        $data = AppSetting::find($appsetting->id);
        return response()->json($data, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AppsettingRequest $request, AppSetting $appsetting)
    {
        AppSetting::find($appsetting->id)->update($request->all());
        return response()->json(['message' => 'App Setting updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(AppSetting $appsetting)
    {
        // $asdelete = AppSetting::find($appsetting->id);
        $appsetting->delete();
        return response()->json(['message' => 'App setting deleted successfully'], 200);
    }
}