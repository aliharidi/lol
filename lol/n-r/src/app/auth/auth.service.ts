import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ///variable to check if the user login or log out///////
private _userIsAuthinticated=false;
/////function to get the value of the variable///////
get userIsAuthinticated(){
  return this._userIsAuthinticated;
}
  constructor() { }
////function to login//////
login(){
  this._userIsAuthinticated=true;
}
///////function to logout/////
logout(){
  this._userIsAuthinticated=false;
}


}
