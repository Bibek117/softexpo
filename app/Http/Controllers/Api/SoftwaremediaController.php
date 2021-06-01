<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\SoftwaremediaRequest;
use App\Models\SoftwareMedia;
use Illuminate\Support\Facades\Storage;

class SoftwaremediaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *Store a newly created resource in storage.
     * @return \Illuminate\Http\Response
     */
    public function create(SoftwaremediaRequest $request)
    {
        //return $request;
       // @dd($request);
        $software_media = new SoftwareMedia;
        $software_media->software_id = $request->input('software_id');

        //screenshots file upload
        if($request->hasFile('screenshots')){ 
            $screenshots = $request->screenshots;
            if(is_array($screenshots) == 1){
                $temp1 =[];
                foreach($screenshots as $screenshot){
                    $filename = $screenshot->getClientOriginalName();
                   $screenshot->storeAs('public/screenshots/',$filename);
                   $temp1[] = $filename;
                }
                $data= (implode("+",$temp1));
                $software_media->screenshots = $data;
        }else{
            $filename = $screenshots->getClientOriginalName();
            $screenshots->storeAs('public/screenshots/',$filename);
            $screenshots = $filename;
            $software_media->screenshots = $screenshots;
           }
        }

        $software_media->video_link = $request->input('video_link');
        $software_media->brochure_link =$request->input('brochure_link');

        //ebooks file upload
        if($request->ebooks == null){
            $software_media->ebooks = $request->input('ebooks');
        }else{
            if((is_array($request->ebooks))==1){
                $temp2 = [];
                foreach($request->ebooks as $ebook){
                    $filename = $ebook->getClientOriginalName();
                   $ebook->storeAs('public/ebooks/',$filename);
                   $temp2[] = $filename;
                }
                $data= (implode("+",$temp2));
                $software_media->ebooks = $data;
           }else{
            $filename = $request->ebooks->getClientOriginalName();
            $request->ebooks->storeAs('public/ebooks/',$filename);
            $request->ebooks = $filename;
            $software_media->ebooks = $request->ebooks;
            }
          }
    
        

        //whitepapers
        if($request->whitepapers == null){
            $software_media->whitepapers = $request->input('whitepapers');
        }else{
            if((is_array($request->whitepapers))==1){
                $temp3 =[];
                foreach($request->whitepapers as $whitepaper){
                    $filename = $whitepaper->getClientOriginalName();
                   $whitepaper->storeAs('public/whitepapers/',$filename);
                   $temp3[] = $filename;
                }
                $data= (implode("+",$temp3));
                $software_media->whitepapers = $data;
        }else{
            $filename = $request->whitepapers->getClientOriginalName();
            $request->whitepapers->storeAs('public/whitepapers/',$filename);
            $request->whitepapers = $filename;
            $software_media->whitepapers = $request->whitepapers;
           }
        }

        //pdf
       
        if($request->pdf == null){
            $software_media->pdf = $request->input('pdf');
        }else{
            if((is_array($request->pdf))==1){
                $temp4 = [];
                foreach($request->pdf as $pdfs){
                    $filename = $pdfs->getClientOriginalName();
                   $pdfs->storeAs('public/pdf/',$filename);
                   $temp4[] = $filename;
                }
                $data= (implode("+",$temp4));
               $software_media->pdf = $data;
        }else{
            $filename = $request->pdf->getClientOriginalName();
            $request->pdf->storeAs('public/pdf/',$filename);
           $request->pdf = $filename;
            $software_media->pdf = $request->pdf;
           }
        }
        //guides
        if($request->guides == null){
            $software_media->guides = $request->input('guides');
        }else{
            if((is_array($request->guides))==1){
                $temp5 =[];
                foreach($request->guides as $guide){
                    $filename = $ebook->getClientOriginalName();
                   $guide->storeAs('public/guides/',$filename);
                   $temp5[]= $filename;
                }
                $data= (implode("+",$temp5));
                $software_media->guides = $data;
        }else{
            $filename = $request->guides->getClientOriginalName();
            $request->guides->storeAs('public/guides/',$filename);
            $request->guides = $filename;
            $software_media->guides = $request->guides;
           }
        }
        $software_media->save();
        return response()->json(['message'=>'Data saved  successfully','status'=>201,'CreatedData'=>$software_media]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

   

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       
       $data = SoftwareMedia::find($id);
       $isDeleted =$data->delete();
       $value = $data->screenshots; 
       if(strpos($value, "+") !== false){
           $data->screenshots = (explode("+",$value));
           foreach($data->screenshots as $one){
              unlink(storage_path('app\public\screenshots\\'.$one));
           }
       }else{
        unlink(storage_path('app\public\screenshots\\'.$value));
       }
       
       if($data->ebooks != null){
        $value = $data->ebooks; 
        if(strpos($value, "+") !== false){
            $data->ebooks = (explode("+",$value));
            foreach($data->ebooks as $ebook){
               unlink(storage_path('app\public\ebooks\\'.$ebook));
            }
        }else{
         unlink(storage_path('app\public\ebooks\\'.$value));
        }
       }
       if($data->whitepapers != null){
        $value = $data->whitepapers; 
        if(strpos($value, "+") !== false){
            $data->whitepapers = (explode("+",$value));
            foreach($data->whitepapers as $whitepaper){
               unlink(storage_path('app\public\whitepapers\\'.$whitepaper));
            }
        }else{
         unlink(storage_path('app\public\whitepapers\\'.$value));
        }
       }
       if($data->pdf != null){
        $value = $data->pdf; 
        if(strpos($value, "+") !== false){
            $data->pdf = (explode("+",$value));
            foreach($data->pdf as $one){
               unlink(storage_path('app\public\pdf\\'.$one));
            }
        }else{
         unlink(storage_path('app\public\pdf\\'.$value));
        }
       }
       if($data->guides != null){
        $value = $data->guides; 
        if(strpos($value, "+") !== false){
            $data->guides = (explode("+",$value));
            foreach($data->guides as $guide){
               unlink(storage_path('app\public\guides\\'.$guide));
            }
        }else{
         unlink(storage_path('app\public\guides\\'.$value));
        }
       }
       if($isDeleted == true){
           return response()->json(['message'=>'Deleted successfully','status'=>200,'isdeleted'=>$isDeleted]);
       }else{
           return response()->json(['message'=>'Cannot delete something went wrong']);
       }  
    }
}