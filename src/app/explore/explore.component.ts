import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("enter on init");
    console.log(AOS);
    AOS.init();
  }

}

