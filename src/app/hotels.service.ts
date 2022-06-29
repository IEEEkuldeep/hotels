import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) { }



  getHotels() {
    return this.http.get("https://fake-hotel-api.herokuapp.com/api/hotels");
  }
  getHotelsDetailsById(id: string) {
    console.log("Service Id Found", id);

    //return this.http.get("http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=",{ params: id },);
  }
}
