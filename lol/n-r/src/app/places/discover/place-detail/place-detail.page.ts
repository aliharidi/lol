import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController, ActionSheetController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../places.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
place:Place;
  constructor(private route:ActivatedRoute,private navCtr:NavController,private placesService:PlacesService,
    private modalCtr:ModalController,
    private actionSheetCtr:ActionSheetController
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('placeId')){
        this.navCtr.navigateBack('/places/tabs/discover');
        return;
      }
      this.place=this.placesService.getplace(paramMap.get('placeId'));
    });
  }

  onBookPlace(){
    //this.router.navigateByUrl('/places/tabs/discover');
   // this.navCtr.navigateBack('/places/tabs/discover');
   this.actionSheetCtr.create(
     {
       header:'Choose an Action',
       buttons:[
         {
           text:'Select Date',
           handler:()=>{
             this.openBookingModel('select');
           }

         },
         {
           text:'Random Date',
           handler:()=>{
             this.openBookingModel('random');
           }
         },
         {
           text:'Cancel',
           role:'cancel'
         }
       ]
     }
   ).then(actionSheetEl=>{
     actionSheetEl.present();
   })
    }

  openBookingModel(mode:'select'|'random'){
    console.log(mode);
    this.modalCtr.create({
      component:CreateBookingComponent,componentProps:{ selectedPlace:this.place }
    }).then(modalEl=>{
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData=>{
      console.log(resultData.data,resultData.role);
      if(resultData.role==='confirm'){
        console.log('Booked!');
      }
    });
   
  }
}
