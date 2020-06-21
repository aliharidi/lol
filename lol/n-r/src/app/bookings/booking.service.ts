import {Injectable} from '@angular/core'
import { Booking } from './booking.model'



@Injectable({providedIn:'root'})
export class BookingService{
    private _booking:Booking[]=[////example of a booking place
        {
            id:'xyz',
            placeId:'p1',
            placeTitle:'Manhatten Mansion',
            gestNumber:2,
            userId:'abc'

        }
    ]

    get bookings(){///return the booked place////
        return [...this._booking];
    }

}