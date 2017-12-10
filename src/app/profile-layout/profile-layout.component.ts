import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-profile-layout',
  templateUrl: './profile-layout.component.html',
  styleUrls: ['./profile-layout.component.css']
})
export class ProfileLayoutComponent implements OnInit {

	@Input() editting: Boolean;
  constructor() { }

  ngOnInit() {
  }


  profileInfo = [
   {username: "Food Eater 9000", email: "foo9000@eater.com", description: "I like to eat food. 9000 food."}   
 ]

}
