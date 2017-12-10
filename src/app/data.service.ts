import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import {User } from './user';
import { RecipeDetail } from './recipeDetails';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {recipes, profileInfo, recipeDetail } from './mock-data';
@Injectable()
export class DataService {

  getAllRecipes():Observable<Recipe[]>{
      return of(recipes);
  }

  getCurrentUser():Observable<User>{
    return of(profileInfo);
  }
  getRecipeById(id):Observable<RecipeDetail>{
    return of(recipeDetail);
  }
  updateUserInfo(changed){
    //send changed data to server
    console.log(changed);
    return of("");
  }

  constructor() { }

}
