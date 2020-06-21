import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
loadedBookings:Booking[];///make variable as an array of booking structure////
  constructor(private bookingService:BookingService) { }

  ngOnInit() {
    ///return booking palces to loadedBookings////
    this.loadedBookings=this.bookingService.bookings;
  }
onCancelBooking(bookingId:string,slidingEl:IonItemSliding)
{///ffunction to cancel booking////
slidingEl.close();
}
}
