import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-if',
  templateUrl:'./ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  // myarray=["hello","hi","say hi"]
  // myarray=true;
  myarray=false;

  constructor(private route:Router) { }

  ngOnInit() {
  }

}
