import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  bookingdtls :any = [];

  constructor( private http: Http) {};
  // @ViewChild('showModal') myTemplate: TemplateRef<any>;

  ngOnInit(){
    this.bookingdtls=[
      {
        id:'1',
        customerName:'gowtham',
        address:'chennai',
      },
      {
        id:'2',
        customerName:'Kiri',
        address:'CMBT'
      }
    ]
  }
  addUser(){
    this.http.get("http://192.168.0.105:8080/api/booking/all").subscribe(res => {
      console.log(res)
    })
  }
}
