import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor() { }
  @Output() public senddata = new EventEmitter<any>();

  ngOnInit(): void {
    for (let index = 1; index < 15; index++) {
      this.peoples.push(index);
    }
     
  }


  peoples: any = [];

  OnSubmit(searchdata: any) {
    console.log("FormData", searchdata.value);
    this.senddata.emit(searchdata.value);
  
    
  }

}
