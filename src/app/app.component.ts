import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'Hotel';
  ngOnInit() {

  }
}

