import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <app-demo (emitevent)="emitonfun($event)"></app-demo>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  servers=[{name:'harry',type:'Sever',servertype:'nginx'}];

  // message: any;
  // messagerecieve($event){
  // this.message=$event;
  // }


  emitonfun(Data:{typeName:string,servertypeName:string}){
     this.servers.push({name:'harry',type :Data.typeName,servertype:Data.servertypeName});
  }


  // message="Im the parent from app.componenet";
  //<app-component-interaction *ngFor=" let server of servers" [element]="server"> </app-component-interaction>
  //alias can be used app.component.ts to bind to the component-interaction.component



  //(emitevent)="emits($event)
  //(messageEvent)="messagerecieve($event)
}
