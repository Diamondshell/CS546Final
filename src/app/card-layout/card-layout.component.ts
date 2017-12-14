import { Component, OnInit,Input  } from '@angular/core';
import {RecipeDetail} from '../recipeDetails';
import { DataService } from '../data.service';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.css']
})
export class CardLayoutComponent implements OnInit {

 @Input() editting: Boolean;
 @Input() deleting: Boolean;
 @Input() type: String;
  recipes: RecipeDetail[];

  getAllRecipes(): void{
    this.dataService.getAllRecipes()
    .subscribe(recipes => this.recipes = recipes);
  }

  getUserRecipes(): void{
    this.authenticationService.getUserId()
      .subscribe(id =>  this.dataService.getUserRecipes(id)
                        .subscribe(recipes => this.recipes = recipes));
  }

  getUserFavorites(): void{
    this.authenticationService.getUserId()
      .subscribe(id =>  this.dataService.getUserFavorites(id)
                        .subscribe(recipes => this.recipes = recipes));
  }
  constructor(private dataService: DataService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    console.log(this.type);
    if (this.type == 'trending'){
      this.getAllRecipes();
    } else if(this.type == 'user') {
      this.getUserRecipes();
    } else if(this.type == 'saved') {
      this.getUserFavorites();
    }
  }

}
