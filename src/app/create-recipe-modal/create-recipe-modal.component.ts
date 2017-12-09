import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-create-recipe-modal',
  templateUrl: './create-recipe-modal.component.html',
  styleUrls: ['./create-recipe-modal.component.css']
})
export class CreateRecipeModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateRecipeModalComponent>) { }

  ngOnInit() {
  }

}
