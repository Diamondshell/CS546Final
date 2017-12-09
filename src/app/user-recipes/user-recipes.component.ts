import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CreateRecipeModalComponent } from '../create-recipe-modal/create-recipe-modal.component';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.css']
})
export class UserRecipesComponent implements OnInit {
	dialogRef: MatDialogRef<CreateRecipeModalComponent>;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  createRecipe(){
  	this.dialogRef = this.dialog.open(CreateRecipeModalComponent, {width: '600px'});
  	this.dialogRef.afterClosed().subscribe((result) => {
  		console.log(result);
  	});
  }

}
