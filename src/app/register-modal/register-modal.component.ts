import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent implements OnInit {

  newPass:String;
  newPassConf:String;
  newEmail:String
  newUser:String;

  constructor(public dialogRef: MatDialogRef<RegisterModalComponent>, private dataService: DataService, private router: Router) {}

  ngOnInit() {
  }

  doRegistration(){
  	if (this.newPass != this.newPassConf) {
      alert("Passwords must match!");
      return;
    }
    this.dataService.createNewUser(this.newUser, this.newEmail, this.newPass).subscribe(res=>
      this.dialogRef.close(''));
  }
}
