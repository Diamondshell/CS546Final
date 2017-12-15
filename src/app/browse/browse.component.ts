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
    
    if (id && id != "" && id != "all" && id.substring(0,6) != "filter"){ 
       this.title = `Results for ${id}:`;   	
    	this.dataService.getRecipesByLikeName(id)
        .subscribe(res=>this.recipes = res);
    
    } else{
      this.title = "Recipes";
      this.route.queryParams.subscribe(params => {
        const term = params['ids'];
        console.log(term);
        if (term){
          this.recipes = [];
          for (var i = 0; i < term.length; i++){
            this.dataService.getRecipeById(term[i]).subscribe(res=>this.recipes.push(res));
          }
        }
        //this.service.get(term).then(result => { console.log(result); });
      });
      this.route.data.subscribe(v =>console.log(v));
      this.dataService.getAllRecipes()
      .subscribe(res=>this.recipes = res);
    }

    //var searchStr = (<HTMLInputElement>document.getElementById("search")).value;
   
  }

}
