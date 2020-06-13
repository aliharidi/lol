import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _userIsAuthinticated=false;
get userIsAuthinticated(){
  return this._userIsAuthinticated;
}
  constructor() { }

login(){
  this._userIsAuthinticated=true;
}
logout(){
  this._userIsAuthinticated=false;
}


}
