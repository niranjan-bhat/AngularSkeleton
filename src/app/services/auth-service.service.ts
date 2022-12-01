import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authChangeSub = new Subject<boolean>()
  public authChanged = this._authChangeSub.asObservable();
  private dummyJWT ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }
  
  public isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("token");
 
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    return false;
  }

  public signin(username:string,password:string){
    localStorage.setItem("token", this.dummyJWT);
    this._authChangeSub.next(true);
  }

  public signout(){
    localStorage.removeItem("token");
    this._authChangeSub.next(false);
  }
}
