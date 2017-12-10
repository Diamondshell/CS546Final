import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

import { DataService } from '../data.service';
@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.css']
})
export class ProfileLayoutComponent implements OnInit {

  @Input() editting: Boolean;
  profileInfo:User;
  getCurrentUser():void{
    this.dataService.getCurrentUser()
    .subscribe(profileInfo=>this.profileInfo=profileInfo);
  }
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getCurrentUser();
  }


  

}
