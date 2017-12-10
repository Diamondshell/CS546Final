import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user'

import { DataService } from '../data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  @Input() user: User;
  @Input() editting: Boolean;
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  editEmail(){
  	document.getElementById('emailObj').style.display = "none";
  	document.getElementById('editEmail').style.display = "inline-block";
  	document.getElementById('editEmailButton').style.display = "none";
  	document.getElementById('saveEmail').style.display = "inline-block";
  }

  editDescription(){
		document.getElementById('descrObj').style.display = "none";
  	document.getElementById('editDescr').style.display = "inline-block";
  	document.getElementById('editDescrButton').style.display = "none";
  	document.getElementById('saveDescr').style.display = "inline-block";
    this.dataService.updateUserInfo({description: this.user.description});
  }

  saveEmail(){
  	document.getElementById('editEmail').style.display = "none";
  	document.getElementById('emailObj').style.display = "inline-block";
  	document.getElementById('saveEmail').style.display = "none";
    document.getElementById('editEmailButton').style.display = "inline-block";
    this.dataService.updateUserInfo({email: this.user.email});
    
  }

  saveDescription() {
  	document.getElementById('descrObj').style.display = "inline-block";
  	document.getElementById('editDescr').style.display = "none";
  	document.getElementById('editDescrButton').style.display = "inline-block";
  	document.getElementById('saveDescr').style.display = "none";
  }

}
