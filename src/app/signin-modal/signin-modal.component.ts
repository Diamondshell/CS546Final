import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.css'],
})
export class SigninModalComponent {

  constructor(public dialogRef: MatDialogRef<SigninModalComponent>) {}

}
