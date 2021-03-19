import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  userId=''
    address=''
    bloodGroup=''
    state=''
    city=''
    firstName=''
    lastName=''
    contactNo=''
    token=''
    email=''
    aadharNumber=''
    panNumber=''
    gender=''
    eduQualification=''
    dateOfBirth=''
    pLicence=''
    lLicence:any
    vehicles:any=[]
    aadharCardPhoto=''
    user=null

  
  submitted
  constructor(
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.loadUser()
  }

  loadUser(){
   this.userService.loadUser(sessionStorage['email']).subscribe(response=>{
     this.user=response
            this.userId=this.user['userId']
            this.address=this.user['address']
            this.bloodGroup=this.user['bloodGroup']
            this.state=this.user['state']
            this.city=this.user['city']
            this.firstName=this.user['firstName']
            this.lastName=this.user['lastName']
            this.contactNo=this.user['contactNo']
            this.email=this.user['email']
            this.aadharNumber=this.user['aadharNumber']
            this.panNumber=this.user['panNumber']
            this.gender=this.user['gender']
            this.eduQualification=this.user['eduQualification']
            this.dateOfBirth=this.user['dateOfBirth']
            this.pLicence=this.user['pLicence']
            this.vehicles=this.user['vehicles']
            this.aadharCardPhoto=this.user['aadharCardPhoto']
            console.log(this.user)
   })
  }

  onLogout(){
    if(confirm("Do You want to logout?")){
     sessionStorage['Authorization']=''
     sessionStorage['email']=''
     sessionStorage['firstName']=''
     this.router.navigate(['/welcome'])
    }
 
   
  }
  onUpdate(){
    this.userService.updateUser(this.user).subscribe(response => {
    
      alert("You have successfully Registered..!")
      console.log(this.user)
      console.log(response)
       sessionStorage["firstName"]=this.user.firstName
        this.router.navigate(['/home'])
            
    } )
  }
  onSubmit() {
   
    this.onUpdate();    
  }
}
