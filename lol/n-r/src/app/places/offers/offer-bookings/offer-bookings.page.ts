import { Component, OnInit } from '@angular/core';
import { Place } from '../../places.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  palce:Place;

  constructor(private route:ActivatedRoute,private navCtr:NavController,private placesService:PlacesService) { }

  ngOnInit() {///here we check if the place is on the places then wil get the id of it and book if not it will just back to offer page//////////////
    this.route.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('placeId')){
        this.navCtr.navigateBack('/places/tabs/offers');
        return;
      }
      this.palce=this.placesService.getplace(paramMap.get('placeId'));
    });
  }

}
