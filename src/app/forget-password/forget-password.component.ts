import { PasswordService } from './../password.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
email=''
  constructor(
    private router:Router,
    private passwordService:PasswordService
  ) { }

  ngOnInit(): void {
  }
  onforgetPass(){
   this.passwordService.forgetPassword(this.email).subscribe(response=>{
     if(response['status']=='success'){
       alert('Otp sent to '+this.email)
       sessionStorage['email']=this.email
       this.router.navigate(['/set-password'])
     }
     else{
       alert('some problem occur')
     }
   })
  }
}
