import { Injectable } from '@angular/core';
import { 
   CanActivate,
   ActivatedRouteSnapshot,
   RouterStateSnapshot, 
   Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService : AuthService,
    private router : Router,
    public toastr: ToastrService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (this.authService.isAuthenticated()) {
      return true;
    } 

    this.toastr.error('First you must to signin.');

    this.router.navigate(['/signin']);
    
    return false;
  }
}
