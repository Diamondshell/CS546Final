import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { User } from '../user';


import { DataService } from '../data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  @Input() user: User;
  @Input() editting: Boolean;
  oldEmail:string;
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
    let pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
    if(pattern.test(this.user.email)){
  	document.getElementById('editEmail').style.display = "none";
  	document.getElementById('emailObj').style.display = "inline-block";
  	document.getElementById('saveEmail').style.display = "none";
    document.getElementById('editEmailButton').style.display = "inline-block";

    document.getElementById('error').style.display="none";
    this.dataService.updateUserInfo({email: this.user.email});
  }else{
    document.getElementById('error').style.display="block";
  }
    
  }

  saveDescription() {
  	document.getElementById('descrObj').style.display = "inline-block";
  	document.getElementById('editDescr').style.display = "none";
  	document.getElementById('editDescrButton').style.display = "inline-block";
  	document.getElementById('saveDescr').style.display = "none";
  }

}
