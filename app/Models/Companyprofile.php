<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Companyprofile extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'website',
        'vendor_id',
        'country',
        'email',
        'state',
        'city',
        'address',
        'pincode',
        'number_of_employee',
        'number_of_customers',
        'GST_IN',
        'RC',
        'HSC',
        'YOE',
        'logo'
    ];
}