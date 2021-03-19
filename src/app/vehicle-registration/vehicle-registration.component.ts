import { Vehicle_reg } from './../vehicle';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-vehicle-registration',
  templateUrl: './vehicle-registration.component.html',
  styleUrls: ['./vehicle-registration.component.css']
})
export class VehicleRegistrationComponent implements OnInit {

  vehicle:Vehicle_reg=new Vehicle_reg()
  submitted
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
  console.log(this.vehicle)
  this.vehicle.userId=sessionStorage['userId']
  this.userService.vehicleReg(this.vehicle).subscribe(response=>{
    alert('Vehicle registered successfully')
  })
}
}
