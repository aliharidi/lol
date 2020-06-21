import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../places.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
offers:Place[];////this variable is equal an array of place struct//////
  constructor(private placesService:PlacesService) { }

  ngOnInit() {
    ////here we return the places in offers///
    this.offers=this.placesService.places;
  }
  /////here at this function we check the place we want edit//// 
  onEdit(offerId:string){
    console.log('Editing item',offerId);
  }

}
