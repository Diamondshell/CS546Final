import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeDetail } from '../recipeDetails';
@Component({
  selector: 'app-create-recipe-modal',
  templateUrl: './create-recipe-modal.component.html',
  styleUrls: ['./create-recipe-modal.component.css']
})
export class CreateRecipeModalComponent implements OnInit {

	recipe:RecipeDetail;
  headingStr:String;
  submitStr:String;

  constructor(private route: ActivatedRoute, private dataService:DataService, public dialogRef: MatDialogRef<CreateRecipeModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  getRecipeById(id):void{
  	this.dataService.getRecipeById(id).subscribe(recipeDetail=>this.doLoad(recipeDetail));
  }

  submit(){
    this.recipe.appliances = this.recipe.appliances.toString().split(',');
    this.recipe.tags = this.recipe.tags.toString().split(',');
    this.recipe.ingredients = this.recipe.ingredients.toString().split(',');
    this.recipe.steps = this.recipe.steps.toString().split(',');
    if (this.data) {
      this.dataService.updateRecipeById(this.data.id, this.recipe).subscribe(result=>result);
    }
    else {
      this.recipe.popularity = 0;
      this.dataService.getCurrentUser().subscribe(result => this.finishSend(result));
    }
  }

  finishSend(id){
    this.recipe.userid = id._id;
    this.dataService.createNewRecipe(this.recipe).subscribe(result=>result);
  }

  doLoad(result) {
    this.recipe=result;
    this.headingStr = "Edit Recipe";
    this.submitStr = "Save Recipe!";
    // document.getElementById('heading').innerHTML = "Edit Recipe";
    // document.getElementById('finishButton').innerHTML = "Save Recipe!";
  }

  ngOnInit() {
  	if(this.data){
  		this.getRecipeById(this.data.id);
  	}else{
  		this.recipe = new RecipeDetail();
  		this.recipe.name = "";
	  	this.recipe.appliances = [];
	  	this.recipe.cookTime = 0;
	  	this.recipe.description = "";
	  	this.recipe.ingredients = [];
	  	this.recipe.price = 0;

      this.headingStr = "Create Recipe";
      this.submitStr = "Create Recipe!";
	  	// document.getElementById('heading').innerHTML = "Create Recipe";
	  	// document.getElementById('finishButton').innerHTML = "Create Recipe!";
  	}
  }



}
