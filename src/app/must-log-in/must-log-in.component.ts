import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { Location } from '@angular/common';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-must-log-in',
  templateUrl: './must-log-in.component.html',
  styleUrls: ['./must-log-in.component.css']
})
export class MustLogInComponent implements OnInit {
  dialogRef: MatDialogRef<RegisterModalComponent>
  constructor(public dialog: MatDialog,
    private location: Location,
    private authenticationService: AuthenticationService,
    private router: Router) { }

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
      // this.dialogRef.close('');
      this.checkIfLoggedIn();
      this.router.navigate(['./home']);
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
