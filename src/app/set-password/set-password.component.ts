import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PasswordService } from '../password.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

  password=''
  otpToken=''
  constructor(
    private router:Router,
    private passwordService:PasswordService
  ) { }

  ngOnInit(): void {
  }

  onSetPass(){
    console.log(this.otpToken+this.password)
    this.passwordService.setPassword(this.otpToken,this.password).subscribe(response=>{
      if(response['status']=='success'){
        alert('password changed ')
        this.router.navigate(['/login'])
      }
      else{
        alert('some problem occur')
        this.router.navigate(['/login'])
      }
    })
  }
}
