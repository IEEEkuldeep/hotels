import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HotelsService } from '../hotels.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(private route: Router, private activateRoute: ActivatedRoute, private hotelService: HotelsService) { }

  id: any;
  hotelData:any
  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    console.log("Id in Hotel Components", this.id);
    this.getHotelDetailsById();
  }

  getHotelDetailsById() {
    this.hotelData = this.hotelService.getHotelsDetailsById(this.id);
    console.log("HOTELSDATASINGLE",this.hotelData);
    
  }
  onBack(): void {
    this.route.navigate(['']);
  }
}
