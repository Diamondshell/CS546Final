import { Component, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SigninModalComponent } from './signin-modal/signin-modal.component';
import { RandomRecipeModalComponent } from './random-recipe-modal/random-recipe-modal.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dialogRef: MatDialogRef<SigninModalComponent>;
  otherDialogRef: MatDialogRef<RandomRecipeModalComponent>;

  constructor(public dialog: MatDialog){
  }

  signIn(){
  	this.dialogRef = this.dialog.open(SigninModalComponent);
  	this.dialogRef.afterClosed().subscribe((result) => {
  		console.log(result);
  	});
  }

  displayRandomRecipeModal(){
    this.otherDialogRef = this.dialog.open(RandomRecipeModalComponent);
    this.otherDialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    })
  }
}