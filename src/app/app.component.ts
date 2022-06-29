import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotels';
  values: any;
  sendData(value:any) {
    console.log("ANOTHEr Components",value);
    this.values = value;
  }
}
