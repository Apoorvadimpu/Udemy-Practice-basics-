import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import{FormsModule} from '@anguar/forms;
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlinehtmlComponent } from './inlinehtml/inlinehtml.component';
import { HomeComponent } from './home/home.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { BindingComponent } from './binding/binding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';


import { DemoComponent } from './demo/demo.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { from } from 'rxjs';

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
    DemoComponent,
    ComponentInteractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
