import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-modal',
  templateUrl: './signin-modal.component.html',
  styleUrls: ['./signin-modal.component.css']
})
export class SigninModalComponent {

  constructor(public dialogRef: MatDialogRef<SigninModalComponent>, private authenticationService: AuthenticationService, private router: Router) {}

  register(){
  	document.getElementById('sign-in').style.display = 'none';
  	document.getElementById('register').style.display = 'inline-block';
  }

  login() {
  	document.getElementById('register').style.display = 'none';
  	document.getElementById('sign-in').style.display = 'inline-block';
  }

  authenticateUser(): void {/*
    var att = document.createAttribute("disabled");
    document.getElementById("sign-in").setAttributeNode(att);
    (<HTMLButtonElement>document.getElementById("sign-in")).value="Loading";*/
    var results;
    var username = (<HTMLInputElement>document.getElementById("username")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    var success = this.authenticationService.authenticateUser(username, password).subscribe(response => this.updateLoginStatus(response));
  }


  updateLoginStatus(status) {
    if (status == true){
      this.dialogRef.close('');
      this.checkIfLoggedIn();
      // this.router.navigate(['./home']);
    }
    else {
      var error = document.getElementById("error");
      error.style.display="block";
    }
  }

  checkIfLoggedIn(): void{
      var results;
      var success = this.authenticationService.checkAuthenticated().subscribe(response => this.updateScreen(response));
    }
    
  updateScreen(result):void{
    if(result.validated){
      document.getElementById('si').style.display="none";
      document.getElementById('so').style.display="inline-block";
      document.getElementById('user').innerHTML=`Hello ${result.username}`;
      document.getElementById('user').style.display="inline-block";
    }
  }
}
