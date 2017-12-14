import { Component, TemplateRef, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SigninModalComponent } from './signin-modal/signin-modal.component';
import { RandomRecipeModalComponent } from './random-recipe-modal/random-recipe-modal.component';
import {AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dialogRef: MatDialogRef<SigninModalComponent>;
  otherDialogRef: MatDialogRef<RandomRecipeModalComponent>;
  text: string;
  constructor(private location: Location,public dialog: MatDialog, private authenticationService: AuthenticationService, private router: Router){
  }

  ngOnInit() {
    this.checkIfLoggedIn();
  }

  signOut(){
    var serverRes;
    this.authenticationService.logoutUser().subscribe(response => serverRes = response);
    document.getElementById('si').style.display="block";
    document.getElementById('so').style.display="none";
    document.getElementById('user').style.display="none";
    this.router.navigate(['./home']);

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

  checkIfLoggedIn(): void{
    var results;
    var success = this.authenticationService.checkAuthenticated().subscribe(response => this.updateScreen(response));
  }

  updateScreen(result):void{
    if(result.validated){
      document.getElementById('si').style.display="none";
      document.getElementById('so').style.display="block";
      document.getElementById('user').innerHTML=`Hello ${result._id}`;
      document.getElementById('user').style.display="block";
    }
  }

  search():void{
    if(!(this.text)){
      this.router.navigate(["./redirect/all"]);
    }else{

    this.router.navigate([`./redirect/${this.text}`]);
    }
  }
  
}
