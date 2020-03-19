// import { Component, OnInit } from '@angular/core';
// import {trigger,state,style,transition,animate,keyframes}  from '@angular/animations'
// @Component({
//   selector: 'app-animations',
//   template:`<p [Animationstate]='state' (click)="animateme()">I will Animate</p>`,
//   styles: [`
//   p{
//     width:200px;
//     background:lightgray;
//     margin:100px auto;
//     text-align:centre;
//     padding:20px;
//     font-size:1.5em;
//   }`],
//   animations:[
//     trigger('Animations',[
//       state('small',style({transform:'scale(1)',})),
//       state('large',style({transform:'scale(1.2)',})),
//       transition('small=>large',animate('300ms ease-in')),
//     ]),

//   ]
// })
// export class AnimationsComponent implements OnInit {
//   state:string='small'

//   constructor() { }

//   animateme(){
//     this.state=(this.state === 'small' ? 'large' : 'small');
//   }
 
//   ngOnInit() {
//   }

// }
