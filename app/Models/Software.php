<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Software extends Model
{
    use HasFactory;
    protected $fillable = [
        'vendor_id',
        'software_name',
        'tagline',
        'software_logo',
        'category_id',
        'software_competitors',
        'summary',
        'description',
    ];

    public function vendor(){
        return $this->hasOne(Vendor::class, 'vendor_id', 'id');
    }

    public function software_media(){
        return $this->hasOne(SoftwareMedia::class,'id','software_id');
    }

}
