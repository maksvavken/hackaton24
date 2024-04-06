import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-ng-app';
  markers = [
    { lng: 16.62662018, lat: 49.2125578 },
    { lng: 20.62662019, lat: 50.2125579 },
    // add more coordinates as needed
  ];
  }
