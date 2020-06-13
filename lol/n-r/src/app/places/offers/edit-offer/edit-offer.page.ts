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
      if(!paramMap.has('placeId')){
        this.navCtr.navigateBack('/places/tabs/offers');
        return;
      }
      this.place=this.placesService.getplace(paramMap.get('placeId'));
    });
  }

}
