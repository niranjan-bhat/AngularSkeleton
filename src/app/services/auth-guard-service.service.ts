import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth-service.service';
 
@Injectable({
  providedIn: 'root'
})

export class AuthGuardServiceService implements CanActivate {
 
  constructor(private _router:Router , private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {

      //check some condition  
      if (this.authService.isUserAuthenticated())  {
         
          return true;
      } 
      this._router.navigateByUrl("signin");
      return false;
  }
}