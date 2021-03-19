import { Vehicle_reg } from './vehicle';
import { User } from './user';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate{

  url= 'http://rtomanagement.us-east-2.elasticbeanstalk.com/auth'
  userurl='http://rtomanagement.us-east-2.elasticbeanstalk.com/user'
  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }
  login(email: string, password: string,role:string) :Observable<any>{
    const body = {
      email: email,
      password: password,
      role:role
    }

    return this.httpClient.post(this.url + '/signin', body)
  }

  signup(user:User){
    user.role="USER"

    return this.httpClient.post(this.url+"/create",user)
  }
  loadUser(email:String){
    return this.httpClient.get(this.userurl+"/getUpdate/"+email)
  }
  updateUser(user:any){
    console.log(user.panNumber)
    return this.httpClient.put(this.userurl+'/update', user)
  }
  learnerLicence(state:string,city:string,userId:string){
    const body={
      state:state,
      rtoOffice:city,
      userId:userId

    }
    return this.httpClient.post(this.userurl+'/applyLearningLicence/'+sessionStorage['email'],body)
  }
  permanentLicence(permitType:string,vehicleType:string){
    const body={
      permitType:permitType,
      vehicleType:vehicleType
    }
    return this.httpClient.post(this.userurl+'/applyPermanentLicence/'+sessionStorage['email'],body)

  }
  vehicleReg(vehicle:Vehicle_reg){
    vehicle.status='PENDING'
    return this.httpClient.post(this.userurl+'/vehicle_reg/'+sessionStorage['email'],vehicle)
  }
  fetchNews(){
    return this.httpClient.get('http://rtomanagement.us-east-2.elasticbeanstalk.com/admin/news')
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage['Authorization']) {
      // user is already logged in
      // launch the component
      return true
    }

    // force user to login
    this.router.navigate(['/login'])

    // user has not logged in yet
    // stop launching the component
    return false
  }

}
