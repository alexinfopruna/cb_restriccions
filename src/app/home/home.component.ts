import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $(".data-ini").css("color", "red");
  }

}
