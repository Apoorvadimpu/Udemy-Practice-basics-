import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InlinehtmlComponent } from './inlinehtml/inlinehtml.component';
import { HomeComponent } from './home/home.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { BindingComponent } from './binding/binding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { DemoComponent } from './demo/demo.component';


const routes: Routes = [
  {
    path:'inline-html',
    component: InlinehtmlComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'ngFor',
    component: NgforComponent
  },
  {
    path:'ngIf',
    component: NgIfComponent
  },
  {
    path:'binding',
    component: BindingComponent
  },
  {
    path:'eventbinding',
    component: EventbindingComponent
  },
  {
    path:'component-interaction',
    component: ComponentInteractionComponent
  },
  {
    path:'demo',
    component: DemoComponent
  },

  {
    path:'',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
