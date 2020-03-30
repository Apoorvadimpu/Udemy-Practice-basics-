import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  @Input('alias') element:{name:string,type:string,servertype:string}; //alias can be used app.component.ts to bind to the component-interaction.component
  constructor(private route:Router) { }
  // @Input() message:string;
  ngOnInit() {
  }

}
