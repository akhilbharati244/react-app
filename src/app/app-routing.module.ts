import { ContactUsComponent } from './contact-us/contact-us.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VehicleRegistrationComponent } from './vehicle-registration/vehicle-registration.component';
import { PermanentLicenceComponent } from './permanent-licence/permanent-licence.component';
import { LearnerLicenceComponent } from './learner-licence/learner-licence.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UserService } from './user.service';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {path:'welcome',component:WelcomeComponent},
 {path:'login',component:LoginComponent},
 {path:'home',component:HomeComponent,canActivate:[UserService]},
 {path:'signup',component:SignupComponent},
 {path:'update-profile',component:UpdateProfileComponent,canActivate:[UserService]},
 {path:'learner-licence',component:LearnerLicenceComponent,canActivate:[UserService]},
 {path:'permanent-licence',component:PermanentLicenceComponent,canActivate:[UserService]},
 {path:'vehicle-registration',component:VehicleRegistrationComponent,canActivate:[UserService]},
 {path:'forget-password',component:ForgetPasswordComponent},
 {path:'set-password',component:SetPasswordComponent},
 {path:'contact-us',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
