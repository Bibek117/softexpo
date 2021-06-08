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
        $alldata =  SoftwareMedia::all();
            foreach($alldata as $datas){
                //screenshots
               $temp6 = $datas->screenshots;
                    if(strpos($temp6,"+") !== false){
                        $array = (explode("+",$temp6));
                          foreach($array as $arr){
                             $path_arrray[] = public_path('app/public/screenshots/'.$arr);   
                            }
                      $datas->screenshots = $path_arrray;
                  $path_arrray = [];
            }else{
              $datas->screenshots =  (storage_path('app/public/screenshots/'.$temp6));
          }

          //ebooks
           $temp7 = $datas->ebooks;
          if($temp7 != null){
              if(strpos($temp7,"+") !== false){
                 $array = (explode("+",$temp7));
                   foreach($array as $arr){
                     $path_arrray[] = public_path('app/public/ebooks/'.$arr);   
                      }
                  $datas->ebooks = $path_arrray;
                 $path_arrray = [];
             }else{
            $datas->ebooks =  (storage_path('app/public/ebooks/'.$temp7));
            }
          }

          $temp8 = $datas->whitepapers;
          if($temp8 != null){
             if(strpos($temp8,"+") !== false){
                $array = (explode("+",$temp8));
                  foreach($array as $arr){
                     $path_arrray[] = public_path('app/public/whitepapers/'.$arr);   
                      }
                  $datas->whitepapers = $path_arrray;
                $path_arrray = [];
           }else{
            $datas->whitepapers =  (storage_path('app/public/whitepapers/'.$temp8));
            }
         }
       $temp9 = $datas->pdf;
       if($temp9 != null){
        if(strpos($temp9,"+") !== false){
            $array = (explode("+",$temp9));
            foreach($array as $arr){
                $path_arrray[] = public_path('app/public/pdf/'.$arr);   
            }
            $datas->pdf = $path_arrray;
            $path_arrray = [];
        }else{
            $datas->pdf=  (storage_path('app/public/pdf/'.$temp9));     
        }

       }
       $temp10 = $datas->guides;
       if($temp10 != null){
        if(strpos($temp10,"+") !== false){
            $array = (explode("+",$temp10));
            foreach($array as $arr){
                $path_arrray[] = public_path('app/public/guides/'.$arr);   
            }
            $datas->guides = $path_arrray;
        }else{
            $datas->guides =  (storage_path('app/public/guides/'.$temp10));
        }
       }
          $path_arrray = [];
       } 
       return response()->json(['$alldata',200]);
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
            $software_media->screenshots = $filename;
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
            $software_media->ebooks =$filename;
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
            $software_media->whitepapers = $filename;
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
            $software_media->pdf = $filename;
           }
        }
        //guides
        if($request->guides == null){
            $software_media->guides = $request->input('guides');
        }else{
            if((is_array($request->guides))==1){
                $temp5 =[];
                foreach($request->guides as $guide){
                    $filename = $guide->getClientOriginalName();
                   $guide->storeAs('public/guides/',$filename);
                   $temp5[]= $filename;
                }
                $data= (implode("+",$temp5));
                $software_media->guides = $data;
        }else{
            $filename = $request->guides->getClientOriginalName();
            $request->guides->storeAs('public/guides/',$filename);
            $software_media->guides = $filename;
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
        $data = SoftwareMedia::find($id);
        $temp6 = $data->screenshots;
        if(strpos($temp6,"+") !== false){
            $array = (explode("+",$temp6));
            foreach($array as $arr){
                $path_arrray[] = public_path('app/public/screenshots/'.$arr);   
            }
            $data->screenshots = $path_arrray;
            $path_arrray = [];
        }else{
            $data->screenshots =  (storage_path('app/public/screenshots/'.$temp6));
        }
       $temp7 = $data->ebooks;
       if($temp7 != null){
        if(strpos($temp7,"+") !== false){
            $array = (explode("+",$temp7));
            foreach($array as $arr){
                $path_arrray[] = (storage_path('app/public/ebooks/'.$arr));   
            }
            $data->ebooks = $path_arrray;
            $path_arrray = [];
        }else{
            $data->ebooks =  (storage_path('app/public/ebooks/'.$temp7));
        }
       }
       $temp8 = $data->whitepapers;
       if($temp8 != null){
        if(strpos($temp8,"+") !== false){
            $array = (explode("+",$temp8));
            foreach($array as $arr){
                $path_arrray[] = public_path('app/public/whitepapers/'.$arr);   
            }
            $data->whitepapers = $path_arrray;
            $path_arrray = [];
        }else{
            $data->whitepapers =  (storage_path('app/public/whitepapers/'.$temp8));
            
        }
       }
       $temp9 = $data->pdf;
       if($temp9 != null){
        if(strpos($temp9,"+") !== false){
            $array = (explode("+",$temp9));
            foreach($array as $arr){
                $path_arrray[] = public_path('app/public/pdf/'.$arr);   
            }
            $data->pdf = $path_arrray;
            $path_arrray = [];
        }else{
            $data->pdf=  (storage_path('app/public/pdf/'.$temp9));     
        }

       }
       $temp10 = $data->guides;
       if($temp10 != null){
        if(strpos($temp10,"+") !== false){
            $array = (explode("+",$temp10));
            foreach($array as $arr){
                $path_arrray[] = public_path('app/public/guides/'.$arr);   
            }
            $data->guides = $path_arrray;
            $path_arrray = [];
        }else{
            $data->guides =  (storage_path('app/public/guides/'.$temp10));
        }
       }
       return response()->json($data,200);
    }

   

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SoftwaremediaRequest $request, $id)
    {
        $data = SoftwareMedia::find($id);
        $data->software_id = $request->input('software_id');
        if($request->hasFile('screenshots')){
            $value = $data->screenshots; 

            //delete file
            if(strpos($value, "+") !== false){
                $data->screenshots = (explode("+",$value));
                foreach($data->screenshots as $one){
                   unlink(storage_path('app/public/screenshots/'.$one));
                }
            }else{
                   unlink(storage_path('app/public/screenshots/'.$value));
            }

             //upload file
            $screenshots = $request->screenshots;
            if(is_array($screenshots) == 1){
                $temp1 =[];
                foreach($screenshots as $screenshot){
                    $filename = $screenshot->getClientOriginalName();
                   $screenshot->storeAs('public/screenshots/',$filename);
                   $temp1[] = $filename;
                }
                $stringForm= (implode("+",$temp1));
                $data->screenshots = $stringForm;
        }else{
            $filename = $screenshots->getClientOriginalName();
            $screenshots->storeAs('public/screenshots/',$filename);
            $data->screenshots = $filename;
           }
        } 

        $data->video_link = $request->input('video_link');
        $data->brochure_link =$request->input('brochure_link');
         

        //ebooks
        if($request->hasFile('ebooks')){
            if($data->ebooks != null){
                $value = $data->ebooks; 
                if(strpos($value, "+") !== false){
                    $data->ebooks = (explode("+",$value));
                    foreach($data->ebooks as $ebook){
                       unlink(storage_path('app/public\ebooks/'.$ebook));
                    }
                }else{
                 unlink(storage_path('app/public/ebooks/'.$value));
                }
               }
               if($request->ebooks == null){
                $data->ebooks = $request->input('ebooks');
            }else{
                if((is_array($request->ebooks))==1){
                    $temp2 = [];
                    foreach($request->ebooks as $ebook){
                        $filename = $ebook->getClientOriginalName();
                       $ebook->storeAs('public/ebooks/',$filename);
                       $temp2[] = $filename;
                    }
                    $stringForm= (implode("+",$temp2));
                    $data->ebooks = $stringForm;
               }else{
                $filename = $request->ebooks->getClientOriginalName();
                $request->ebooks->storeAs('public/ebooks/',$filename);
                $data->ebooks = $filename;
                }
              }
        }
        //whitepapers
        if($request->hasFile('whitepapers')){
            if($data->whitepapers != null){
                $value = $data->whitepapers; 
                if(strpos($value, "+") !== false){
                    $data->whitepapers = (explode("+",$value));
                    foreach($data->whitepapers as $whitepaper){
                       unlink(storage_path('app/public/whitepapers/'.$whitepaper));
                    }
                }else{
                 unlink(storage_path('app/public/whitepapers/'.$value));
                }
               }
               if($request->whitepapers == null){
                $data->whitepapers = $request->input('whitepapers');
            }else{
                if((is_array($request->whitepapers))==1){
                    $temp3 =[];
                    foreach($request->whitepapers as $whitepaper){
                        $filename = $whitepaper->getClientOriginalName();
                       $whitepaper->storeAs('public/whitepapers/',$filename);
                       $temp3[] = $filename;
                    }
                    $stringForm= (implode("+",$temp3));
                    $data->whitepapers = $stringForm;
            }else{
                $filename = $request->whitepapers->getClientOriginalName();
                $request->whitepapers->storeAs('public/whitepapers/',$filename);
                $data->whitepapers = $filename;
               }
            }
      }

      //pdf
      if($request->hasFile('pdf')){
        if($data->pdf != null){
            $value = $data->pdf; 
            if(strpos($value, "+") !== false){
                $data->pdf = (explode("+",$value));
                foreach($data->pdf as $one){
                   unlink(storage_path('app/public/pdf/'.$one));
                }
            }else{
             unlink(storage_path('app/public/pdf/'.$value));
            }
          }
             
        if($request->pdf == null){
            $data->pdf = $request->input('pdf');
        }else{
            if((is_array($request->pdf))==1){
                $temp4 = [];
                foreach($request->pdf as $pdfs){
                    $filename = $pdfs->getClientOriginalName();
                   $pdfs->storeAs('public/pdf/',$filename);
                   $temp4[] = $filename;
                }
                $stringForm= (implode("+",$temp4));
               $data->pdf = $stringForm;
        }else{
            $filename = $request->pdf->getClientOriginalName();
            $request->pdf->storeAs('public/pdf/',$filename);
            $data->pdf = $filename;
           }
        }
    }
      
    //guides
    if($data->guides != null){
        $value = $data->guides; 
        if(strpos($value, "+") !== false){
            $data->guides = (explode("+",$value));
            foreach($data->guides as $guide){
               unlink(storage_path('app/public/guides/'.$guide));
            }
        }else{
         unlink(storage_path('app/public/guides/'.$value));
        }
       }
       if($request->guides == null){
        $data->guides = $request->input('guides');
    }else{
        if((is_array($request->guides))==1){
            $temp5 =[];
            foreach($request->guides as $guide){
                $filename = $guide->getClientOriginalName();
               $guide->storeAs('public/guides/',$filename);
               $temp5[]= $filename;
            }
            $stringForm= (implode("+",$temp5));
            $data->guides = $stringForm;
    }else{
        $filename = $request->guides->getClientOriginalName();
        $request->guides->storeAs('public/guides/',$filename);
        $data->guides = $filename;
       }
    }
    $data->save();
    return response()->json(['message'=>'Software media successfully updated','UpdatedData'=>$data],200);

       
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
              unlink(storage_path('app/public/screenshots/'.$one));
           }
       }else{
        unlink(storage_path('app/public/screenshots/'.$value));
       }
       
       if($data->ebooks != null){
        $value = $data->ebooks; 
        if(strpos($value, "+") !== false){
            $data->ebooks = (explode("+",$value));
            foreach($data->ebooks as $ebook){
               unlink(storage_path('app/public\ebooks/'.$ebook));
            }
        }else{
         unlink(storage_path('app/public/ebooks/'.$value));
        }
       }
       if($data->whitepapers != null){
        $value = $data->whitepapers; 
        if(strpos($value, "+") !== false){
            $data->whitepapers = (explode("+",$value));
            foreach($data->whitepapers as $whitepaper){
               unlink(storage_path('app/public/whitepapers/'.$whitepaper));
            }
        }else{
         unlink(storage_path('app/public/whitepapers/'.$value));
        }
       }
       if($data->pdf != null){
        $value = $data->pdf; 
        if(strpos($value, "+") !== false){
            $data->pdf = (explode("+",$value));
            foreach($data->pdf as $one){
               unlink(storage_path('app/public/pdf/'.$one));
            }
        }else{
         unlink(storage_path('app/public/pdf/'.$value));
        }
       }
       if($data->guides != null){
        $value = $data->guides; 
        if(strpos($value, "+") !== false){
            $data->guides = (explode("+",$value));
            foreach($data->guides as $guide){
               unlink(storage_path('app/public/guides/'.$guide));
            }
        }else{
         unlink(storage_path('app/public/guides/'.$value));
        }
       }
       if($isDeleted == true){
           return response()->json(['message'=>'Deleted successfully','isdeleted'=>$isDeleted],200 );
       }else{
           return response()->json(['message'=>'Cannot delete something went wrong']);
       }  
    }
}