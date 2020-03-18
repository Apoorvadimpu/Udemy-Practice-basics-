import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngfor',
  templateUrl:"./ngfor.component.html",
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
    
  obj={
    location:"Bellary",
    Business:"Reliance",
    Qualification:"Masters"
  }


  list:any[]=[{
    "place":"panvel"
},
{
  "place":"Mansarovar"
},
{
  "place":"rio"
},
];

  constructor(private route:Router) { }

  ngOnInit() {
  }

}
