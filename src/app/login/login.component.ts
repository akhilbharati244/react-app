import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email=""
  password=""
  user:User=new User();
  constructor(
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.userService
    .login(this.email, this.password,'USER')
    .subscribe(response => {
      const token = response['token']
      
      console.log(response['token'])
      console.log(token)
       sessionStorage["userId"]= response['userId']
       sessionStorage["email"]= response['email']
       sessionStorage["Authorization"]=token
       sessionStorage["photo"]=response['photo']
       sessionStorage["firstName"]=response['firstName']
       this.user=response;
       console.log(this.user)
       this.router.navigate(['/home'])

    }, error => alert('Invalid Email or Password try again!')
    )
  }
}
