import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../places.model';
import { SegmentChangeEventDetail } from '@ionic/core'

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
loadedPlaces:Place[];////this variable is equal an array of place struct//////
  constructor(private placesService:PlacesService) { }

  ngOnInit() {
        ////here we return the places in loadedPlaces///
    this.loadedPlaces=this.placesService.places;
  }
////function to chech the segment change/////
  onFilterUpdate(event:CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail);
  }
}
