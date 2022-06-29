import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  constructor(private hotelService: HotelsService) { }

  ngOnInit(): void {
    console.log("Details Componets load");
    this.getHotelsDetails();
  }

  hotelData: any;
  values: any;
  data:any;
  sendData(value: any) {
    console.log("ANOTHEr Components", value);
    this.values = value;
    console.log("CITY NAME", value.destination);
    
     this.hotelData = this.hotelData.filter((hotel:any) => hotel.city == value.destination)
    // console.log("Filtered Data",this.data);
    
    // books.filter(book => book.store_id === this.store.id)
  }

  allHotels(){
    this.getHotelsDetails();
  }
  getHotelsDetails() {
    this.hotelService.getHotels().subscribe((data) => {
      this.hotelData = data;
      console.log("Hotels Data", data);
      
    },
      (error) => {
        console.log("Error AA Gyi");

      })
  }

}
