import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav(){
  	document.getElementById('user_sidenav').style.width = "250px";
    document.getElementById('closebtn').style.transition = "1s";
    document.getElementById('closebtn').style.display = "block";
    requestAnimationFrame(()=> document.getElementById('closebtn').style.opacity = "1");
  }

  closeNav(){
    document.getElementById('closebtn').style.transition = "0.2s";
    requestAnimationFrame(() => document.getElementById('closebtn').style.opacity = "0");
  	document.getElementById('user_sidenav').style.width = "0";
  }

}
