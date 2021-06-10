<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Auth;

class Admin extends Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next,...$guards){
     if (Auth::guard('admin') && Auth::guard('admin')->user()) {
            return $next($request);
     }

    return redirect('/home/adminlogin');
}

}
