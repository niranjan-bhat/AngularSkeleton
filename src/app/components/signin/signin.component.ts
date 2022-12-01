import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent {

  constructor(private authService:AuthService, private _router: Router){}

  signin(){
    this.authService.signin("","");
    this._router.navigateByUrl('dashboard')
  }

}
