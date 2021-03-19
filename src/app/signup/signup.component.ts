import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User=new User();
  submitted
  constructor(
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.user.role='USER'
  }
  onSignup(){
    this.userService.signup(this.user).subscribe(response => {
    
      if(response['status']=="error")
      {
        alert("Email is already registered with us")
        this.router.navigate(['/signup'])
      }
      else
      {
        alert("You have successfully Registered..!")
        console.log(this.user)
        console.log(response)
        this.router.navigate(['/login'])
 
      }
        
    }, error => alert('Please Enter all the Details')
    )
  }
  onSubmit() {
   
    this.onSignup();    
  }


}
