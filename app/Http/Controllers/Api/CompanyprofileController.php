<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Traits\AuthTrait;
use App\Http\Requests\CompanyRequest;
use Illuminate\Http\Request;
use App\Models\Companyprofile;
use App\Models\Vendor;
use Illuminate\Support\Facades\Validator;
use Auth;
use Illuminate\Support\Facades\Auth as FacadesAuth;

class CompanyprofileController extends Controller
{
    use AuthTrait;
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
        $formData = $request->all();
        $formData["vendor_id"] = $this->get_current_user_passport("vendor")->id;
        $formData["logo"] = "https://www.tutorialspoint.com/android/images/logo.png";
        $data = Companyprofile::create($formData);
        return response()->json(['message'=>'Company profile created successfully','data'=>$data],201);
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

    public function check_vendor_company(){
        // dd($user);
        $vendor = $this->get_current_user_passport("vendor");
        $data = Companyprofile::where('vendor_id',$vendor->id)->first();
        if($data){
        return response()->json($data,200);
        }
        return null;
    }


}
