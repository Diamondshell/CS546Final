import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { Location } from '@angular/common';


@Component({
  selector: 'app-must-log-in',
  templateUrl: './must-log-in.component.html',
  styleUrls: ['./must-log-in.component.css']
})
export class MustLogInComponent implements OnInit {
  dialogRef: MatDialogRef<RegisterModalComponent>
  constructor(public dialog: MatDialog,
    private location: Location) { }

  ngOnInit() {
  }

  goBack():void{
    this.location.back();
  }

  register(){
    this.dialogRef = this.dialog.open(RegisterModalComponent);
    this.dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    })
  }

}
