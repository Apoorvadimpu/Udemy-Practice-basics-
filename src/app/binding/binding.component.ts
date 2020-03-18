import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor(private route:Router) { }

  Source="http://i1.ytimg.com/vi/TmHcfI6HoKA/maxresdefault.jpg";

  ngOnInit() {
  }

}
