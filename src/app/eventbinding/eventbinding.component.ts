import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor(private route:Router) { }

  myFunction(event){
    alert("event occured");
    console.log(event);

  }
  
  myFunction1(event){
    // alert("event occured");
    console.log(event);

  }

  ngOnInit() {
  }

}
