import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rate-modal',
  templateUrl: './rate-modal.component.html',
  styleUrls: ['./rate-modal.component.css']
})
export class RateModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RateModalComponent>) { }

  ngOnInit() {
  }

}
