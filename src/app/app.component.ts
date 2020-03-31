import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-demo (emitevent)="emitonfun($event)"></app-demo>
  <hr>
  <h3>Result:</h3>
  <div *ngFor='let server of servers'>
  <label><strong>Server Name: </strong>{{server.name}}</label>
  <br>
  <label><strong>Server Type: </strong>{{server.servertype}}</label>
  <hr>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  servers = [{ name: 'harry', type: 'Sever', servertype: 'nginx' }];

  // message: any;
  // messagerecieve($event){
  // this.message=$event;
  // }


  emitonfun(Data: { typeName: string, servertypeName: string }) {
    // console.log(Data);
    this.servers.push({ name: Data.typeName, type: "server", servertype: Data.servertypeName });
  }


  // message="Im the parent from app.componenet";
  //<app-component-interaction *ngFor=" let server of servers" [element]="server"> </app-component-interaction>
  //alias can be used app.component.ts to bind to the component-interaction.component



  //(emitevent)="emits($event)
  //(messageEvent)="messagerecieve($event)
}
