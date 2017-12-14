import { Component, OnInit,HostListener , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDetail } from '../recipeDetails';
import { DataService } from '../data.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { RateModalComponent } from '../rate-modal/rate-modal.component';
import { AuthenticationService } from '../authentication.service';
import { SigninModalComponent } from '../signin-modal/signin-modal.component';

@Component({
  selector: 'app-recipeview',
  templateUrl: './recipeview.component.html',
  styleUrls: ['./recipeview.component.css']
})
export class RecipeviewComponent implements OnInit {

  dialogRef: MatDialogRef<RateModalComponent>;
  dialogRefSignin: MatDialogRef<SigninModalComponent>;

  recipe:RecipeDetail;
     numChecked=[];
     numUnChecked=[];
    
  print(){
    window.print();
  }
  getRecipeById(id):void{
    this.dataService.getRecipeById(id)
    .subscribe(recipeDetail=>this.finishLoad(recipeDetail));
  }
  finishLoad(recipeInfo):void{
    this.recipe=recipeInfo;
    this.numChecked = new Array(Math.ceil(this.recipe.avgRating));
    this.numUnChecked = new Array(Math.floor(5-this.recipe.avgRating));
    window.scrollTo(0, 0);
  }
  constructor( private route: ActivatedRoute, 
    private dataService:DataService, public dialog: MatDialog, private authenticationService: AuthenticationService ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.getRecipeById(id);
  }

  save() {
    var success = this.authenticationService.checkAuthenticated().subscribe(response => this.doSave(response));
  }

  doSave(response){
    if (response.validated){
      this.dataService.getCurrentUser().subscribe(id=>this.dataService.addToFavorites(id._id, this.recipe._id)
                                        .subscribe(res=>res));
      alert("saved");
    }else {
      this.dialogRefSignin = this.dialog.open(SigninModalComponent, {data: {loggedIn: true}});
      this.dialogRefSignin.afterClosed().subscribe((result) => {
        console.log(result);
      });
    }
  }

  displayRateModal(){
    var success = this.authenticationService.checkAuthenticated().subscribe(response => this.displayScreen(response));
  }

  displayScreen(response){
    if (response.validated){
      this.dialogRef = this.dialog.open(RateModalComponent, {width: '600px'});
      this.dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
      });
    }else {
      this.dialogRefSignin = this.dialog.open(SigninModalComponent, {data: {loggedIn: true}});
      this.dialogRefSignin.afterClosed().subscribe((result) => {
        console.log(result);
      });
    }
  }

 
}
