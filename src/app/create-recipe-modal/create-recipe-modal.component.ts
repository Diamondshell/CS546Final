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

  constructor(private route: ActivatedRoute, private dataService:DataService, public dialogRef: MatDialogRef<CreateRecipeModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  getRecipeById(id):void{
  	this.dataService.getRecipeById(id).subscribe(recipeDetail=>this.recipe=recipeDetail);
  }

  ngOnInit() {
  	if(this.data){
  		this.getRecipeById(this.data.id);
  		document.getElementById('heading').innerHTML = "Edit Recipe";
  		document.getElementById('finishButton').innerHTML = "Save Recipe!";
  	}else{
  		this.recipe = new RecipeDetail();
  		this.recipe.name = "";
	  	this.recipe.appliances = [];
	  	this.recipe.cookTime = 0;
	  	this.recipe.description = "";
	  	this.recipe.ingredients = [];
	  	this.recipe.price = 0;

	  	document.getElementById('heading').innerHTML = "Create Recipe";
	  	document.getElementById('finishButton').innerHTML = "Create Recipe!";
  	}
  }


}
