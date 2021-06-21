<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SoftwareRequest;
use App\Models\AppSetting;
use Illuminate\Http\Request;
use App\Models\Software;
use Illuminate\Support\Facades\Config;

class SoftwareController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $datas = Software::all();
        foreach($datas as $data){
           $value = $data->software_competitors;
           if(strpos($value, "+") !== false){
               $data->software_competitors = (explode("+",$value));
        }
    }
        return response()->json($datas,200);
    }

    /**
     * Show the form for creating a new resource.
     *Store a newly created resource in storage.
     * @return \Illuminate\Http\Response
     * @param  \Illuminate\Http\Request  $request
     */
    public function create(SoftwareRequest $request)
    {
        // return $request;
        $software = new Software;
        $software->vendor_id = $request->input('vendor_id');
        $software->software_name = $request->input('software_name');
        $software->tagline = $request->input('tagline');

        $software->category_id = $request->input('category_id');
        $data = $request->software_competitors;
        if(is_array($data) == 1){
            $stringData = (implode("+",$data));
            $software->software_competitors = $stringData;
        }else{
            $software->software_competitors = $request->input('software_competitors');
        }
        $software->summary = $request->input('summary');
        $software->description = $request->input('description');
        $software->save();
        return response()->json(['msg'=>'Saved','data'=>$software],201);
    }

    //logo upload
    public function Handlelogo(Request $request){
        // dd($request);
        $request->validate([
            'id'=>'required',
            'file'=>'mimes:png,jpg|max:1024|required'
        ]);
        if(($request->hasFile('file')) && ($request->id != null)){
            $file = $request->file;
            $id = $request->id;
            $data = Software::find($id);
            $filename = $data->name."_".time().".png";
            $file->storeAs('public/softwares/',$filename);
            $data->software_logo = Config::get('app.url').'/storage/softwares/'.$filename;
            $data->save();
            return response()->json(['msg'=>'saved'],200);
        }else{
            return response()->json(['msg'=>'please input file and id'],500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $software = Software::find($id);
        $value = $software->software_competitors;
        if(strpos($value, "+") !== false){
            $software->software_competitors = (explode("+",$value));
        }
        return response($software,200);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SoftwareRequest $request, $id)
    {
        $software =  Software::find($id);
        $software->vendor_id = $request->input('vendor_id');
        $software->software_name = $request->input('software_name');
        $software->tagline = $request->input('tagline');
        $software->software_logo = $request->input('software_logo');
        $software->category_id = $request->input('category_id');
        $data = $request->software_competitors;
        if(is_array($data) == 1){
            $stringData = (implode("+",$data));
            $software->software_competitors = $stringData;
        }else{
            $software->software_competitors = $request->input('software_competitors');
        }
        $software->summary = $request->input('summary');
        $software->description = $request->input('description');
        $software->save();
        return response()->json(['message'=>'Software successfully updated','CreatedData'=>$software],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $software = Software::find($id);
        $isdeleted = $software->delete();
        return response()->json(['message'=>'Company profile deleted successfully','isdeleted' =>$isdeleted],200);
    }
}
