import { Component, OnInit } from '@angular/core';
import {RecipeDetail} from '../recipeDetails';
import { DataService } from '../data.service';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private dataService: DataService) { }
  recipes: RecipeDetail[];

  ngOnInit() {
    window.scrollTo(0, 0);

    var searchStr = (<HTMLInputElement>document.getElementById("search")).value;
    if (searchStr && searchStr != ""){    	
    	this.dataService.getRecipesByLikeName(searchStr)
    		.subscribe(res=>this.recipes = res);
    }
  }

}
