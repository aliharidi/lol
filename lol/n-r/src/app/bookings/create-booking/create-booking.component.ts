import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../places/places.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
@Input() selectedPlace:Place;
  constructor(private modalCtr:ModalController) { }

  ngOnInit() {}



  onBookPlace(){
    ///here to show message when comfirm////
    this.modalCtr.dismiss({message:'this is dumy message'},'confirm');
  }

  onCancel(){
    ////here not show anything when cancel////
    this.modalCtr.dismiss(null, 'cancel');

  }
}
