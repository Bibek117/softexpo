<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Auth;

class Admin extends Midlleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next){
     if (Auth::guard('admin') && Auth::guard('admin')->user()) {
            return $next($request);
     }

    return response()->json(['Not authorized', 401]);
}

}
