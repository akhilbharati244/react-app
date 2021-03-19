import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news:any=[]
  user:User=new User()
  constructor(
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.onLoad()
    this.loadNews()

  }
 onLoad(){
   this.user.firstName=sessionStorage['firstName']
   console.log(this.user.firstName)
   this.user.token=sessionStorage['Authorization']
   this.user.email=sessionStorage['email']
 }
 onLogout(){
   if(confirm("Do You want to logout?")){
    sessionStorage['Authorization']=''
    sessionStorage['email']=''
    sessionStorage['firstName']=''
    this.router.navigate(['/welcome'])
   }

  
 }
 loadNews(){
   console.log('in load news')
   this.userService.fetchNews().subscribe(response=>{
      this.news=response
      console.log(this.news)
   })
 }

}
