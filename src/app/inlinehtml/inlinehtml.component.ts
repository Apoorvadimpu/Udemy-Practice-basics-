import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inlinehtml',
  template:`<h1>Hello Udemy</h1>
  <p>Feeling good learning angular</p>`,
                                                                                                                                                                                    
  styleUrls: ['./inlinehtml.component.css']
})
export class InlinehtmlComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
