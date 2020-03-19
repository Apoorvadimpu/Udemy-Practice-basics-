import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlinehtmlComponent } from './inlinehtml/inlinehtml.component';
import { HomeComponent } from './home/home.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { BindingComponent } from './binding/binding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';


import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    InlinehtmlComponent,
    HomeComponent,
    NgforComponent,
    NgIfComponent,
    BindingComponent,
    EventbindingComponent,
    // AnimationsComponent, 
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
