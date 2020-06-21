import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../places.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../places.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
place:Place;
  constructor(private placesService:PlacesService,private route:ActivatedRoute,private navCtr:NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('placeId')){///here we check if the place is on the places then wil get the id of it and edit if not it will just back to offer page//////////////
        this.navCtr.navigateBack('/places/tabs/offers');
        return;
      }
      this.place=this.placesService.getplace(paramMap.get('placeId'));
    });
  }

}
