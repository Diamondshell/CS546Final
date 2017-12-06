import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.css']
})
export class SigninModalComponent {

  constructor(public dialogRef: MatDialogRef<SigninModalComponent>) {}

  register(){
  	document.getElementById('sign-in').style.display = 'none';
  	document.getElementById('register').style.display = 'inline-block';
  }

  login() {
  	document.getElementById('register').style.display = 'none';
  	document.getElementById('sign-in').style.display = 'inline-block';
  }

}
