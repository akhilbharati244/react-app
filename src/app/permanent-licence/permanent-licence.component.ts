import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permanent-licence',
  templateUrl: './permanent-licence.component.html',
  styleUrls: ['./permanent-licence.component.css']
})
export class PermanentLicenceComponent implements OnInit {
  permitType=''
  vehicleType=''
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
  onSubmit(){
     this.userService.permanentLicence(this.permitType,this.vehicleType).subscribe(response=>{
       if(response['status']=='success'){
         alert('You have successfully apllied for Licence')
       }
       else if(response['status']=='error'){
         alert('Please apply first Learning Licence In Case you have applied wait till confirmation')
       }else
         alert('You have already Registered Permanent Licence ')
       this.router.navigate(['/home'])
     })
  }
}
