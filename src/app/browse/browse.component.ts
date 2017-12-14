import { Component, OnInit } from '@angular/core';
import {RecipeDetail} from '../recipeDetails';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  recipes: RecipeDetail[];
  title:string;
  ngOnInit() {
    window.scrollTo(0, 0);
    const id = this.route.snapshot.paramMap.get('id');
    console.log("here");
    console.log(id);
     if (id && id != "" && id != "all"){ 
       this.title = `Results for ${id}:`;   	
    	this.dataService.getRecipesByLikeName(id)
        .subscribe(res=>this.recipes = res);
    
    } else{
      this.title = "Recipes";   	
      this.dataService.getAllRecipes()
      .subscribe(res=>this.recipes = res);
    }

    //var searchStr = (<HTMLInputElement>document.getElementById("search")).value;
   
  }

}
