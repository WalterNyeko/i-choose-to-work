<?php

namespace App\Http\Middleware;

use App\ServiceRequest;
use Closure;

class CheckPermissionsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Get current user
        $currentUser = $request->user();

        if ($currentUser->hasRole('banned')) {
            abort(403, 'You have been banned from accessing the system');
        }else {
            if ($currentUser->hasRole('admin') ) {
                // You can perform all logic here for the admin
            }
            if (!check_user_permissions($request)) {
                abort(403, 'Forbidden Acess to this Resource');
            }
        }


        return $next($request);
    }

}
