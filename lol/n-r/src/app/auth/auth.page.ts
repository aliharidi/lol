import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  /////variable to check for loading message for login/////
isLoading=false;
  /////variable to check for login/////
isLogin=true;

  constructor(private authService:AuthService,private router:Router,private loadingCtr:LoadingController) { }

  ngOnInit() {
  }
  ////function to login with the login button////
onLogin(){
  this.isLoading=true;
  this.authService.login();
  ////this method to create a loading message for login///
  this.loadingCtr.create({keyboardClose:true,message:'Logging in....'}).then(loadingEl=>{
    loadingEl.present();////this method to show it on screen////
    setTimeout(()=>{////on this function we return isLoading to his main value and dismiss the value of loadingEl////////
      this.isLoading=false;
      loadingEl.dismiss();
      /////this method to set the path after logging in to Discover page //////
      this.router.navigateByUrl('/places/tabs/discover');
      /////this will happen after 1,5 s//////
    } ,1500)
  })

}
////on this function we take the data of the form and print it to chech it/////
onSubmit(form:NgForm){
  if(!form.valid){
    return;
  }
  const email=form.value.email;
  const password=form.value.password;
  console.log(email,password);
  if(this.isLogin){
    ///send a request to login server///
  }else{
    ///send a request to signup server///
  }
}
onSwitchAuthMode(){
  ///to switch modes///
  this.isLogin=!this.isLogin;
}
}
