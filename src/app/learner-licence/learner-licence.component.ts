import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learner-licence',
  templateUrl: './learner-licence.component.html',
  styleUrls: ['./learner-licence.component.css']
})
export class LearnerLicenceComponent implements OnInit {

  state=''
  city=''
  
  constructor(
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {
  }
  onLogout(){
    if(confirm("Do You want to logout?")){
     sessionStorage['Authorization']=''
     sessionStorage['email']=''
     sessionStorage['firstName']=''
     this.router.navigate(['/welcome'])
    }
}
onSubmit() {console.log(this.state,this.city,sessionStorage['userId'])
    
     this.userService.learnerLicence(this.state,this.city,sessionStorage['userId']).subscribe(response=>{
       if(response['status']=='success'){
        alert('You have successfully applied for learning licence')
       }
       else{
         alert('You have already applied for Learning Licence')
       }
       this.router.navigate(['/home'])
     })
}
}
