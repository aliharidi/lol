import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
form:FormGroup;
  constructor() { }

  ngOnInit() {////Doing the ReactForm programly////
    this.form=new FormGroup({
      title: new FormControl(null,{
        updateOn:'blur',
        validators:[Validators.required]
      }),
      description:new FormGroup(null,{
        updateOn:'blur',
        validators:[Validators.required,Validators.maxLength(180)]
      }),
      price:new FormGroup(null,{
        updateOn:'blur',
        validators:[Validators.required,Validators.min(1)]
      }),
      dateFrom:new FormGroup(null,{
        updateOn:'blur',
        validators:[Validators.required]
      }),
      dateTo:new FormGroup(null,{
        updateOn:'blur',
        validators:[Validators.required]
      })
    });
  }
  ////checking of crearte new offer////
  onCreateOffer(){
    console.log(this.form);
  }

}
