import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuardServiceService } from './services/auth-guard-service.service';

const routes: Routes = [
  { path: '',   redirectTo: '/signin', pathMatch: 'full' },
  { path: '',   component: HomeComponent,   canActivate:[AuthGuardServiceService] ,children : 
  [
    {
      path:'dashboard',component:DashboardComponent,canActivate:[AuthGuardServiceService]
    }
  ]},
  { path: '', component: AuthenticationComponent , children: 
  [
    {
      path: 'signin', // child route path
      component: SigninComponent, // child route component that the router renders
    },
    {
      path: 'signup', // child route path
      component: SignupComponent, // child route component that the router renders
    }
   ]},
  {path: '**', component: PageNotFoundComponent}
];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
