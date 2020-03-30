import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @Output() emitevent = new EventEmitter<{ typeName: string, servertypeName: string }>();
  //  message:string="hello";
  // @Output() messageEvent=new EventEmitter<string>();
  // name: string="";
  // type:string="";
  // servertype:string="";
  newname = "";
  newname1 = "";

  emits() {
    console.log(this.newname);
    console.log(this.newname1);
    this.emitevent.emit({ typeName: this.newname, servertypeName: this.newname1 })
  }

  emits1() {
    this.emitevent.emit({ typeName: this.newname, servertypeName: this.newname1 })
  }
  // sendmeassage(){
  //   this.messageEvent.emit(this.message);
  // }
  constructor(private route: Router) { }

  ngOnInit() {
  }

}
