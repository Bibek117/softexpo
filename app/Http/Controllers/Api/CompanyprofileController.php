<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyRequest;
use Illuminate\Http\Request;
use App\Models\Companyprofile;
use Illuminate\Support\Facades\Validator;

class CompanyprofileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Companyprofile::all();
        return response()->json($data,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(CompanyRequest $request)
    {
        $data = Companyprofile::create($request->all());
        return response()->json(['message'=>'Company profile created successfully','status'=>201,'createddata'=>$data]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Companyprofile::find($id);
        return response()->json($data,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CompanyRequest $request, $id)
    {
        $isupdated = Companyprofile::find($id)->update($request->all());
         return response()->json(['message'=>'Company profile updated','isupdated'=>$isupdated],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $company = Companyprofile::find($id);
        $isdeleted = $company->delete();
        return response()->json(['message'=>'Company profile deleted successfully','isdeleted' =>$isdeleted],200);
    }
}
