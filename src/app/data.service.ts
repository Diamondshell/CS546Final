import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import {User } from './user';
import { RecipeDetail } from './recipeDetails';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {recipes, profileInfo, recipeDetail } from './mock-data';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  response: any;

  getAllRecipes():Observable<RecipeDetail[]>{
    return this._http.get('/recipes')
      .map(result => this.response = result.json());
    // return of(recipes);
  }

  getTopRecipes():Observable<RecipeDetail[]>{
    return this._http.get('/recipes/top')
      .map(result => this.response = result.json());
    // return of(recipes);
  }

  getUserRecipes(id):Observable<RecipeDetail[]>{
    return this._http.get(`/recipes/user/${id}`)
      .map(result => this.response = result.json());
  }

  getUserFavorites(id):Observable<RecipeDetail[]>{
    return this._http.get(`/favorites/user/${id}`)
      .map(result => this.response = result.json());
  }

  getUserFavoritesReal(id):Observable<RecipeDetail[]>{
    return this._http.get(`/favoritesreal/user/${id}`)
      .map(result => this.response = result.json());
  }

  getCurrentUser():Observable<User>{
    return this._http.get('/getUserFromCookies')
      .map(result => this.response = result.json());
    //return of(profileInfo);
  }

  getRecipeById(id):Observable<RecipeDetail>{
    return this._http.get(`/recipe/${id}`)
      .map(result => this.response = result.json());
    //return of(recipeDetail);
  }

  createNewRecipe(recipe):Observable<RecipeDetail>{
    return this._http.post('/recipe', recipe)
      .map(result => this.response = result.json());
  }

  addToFavorites(id, recipe):Observable<RecipeDetail>{
    return this._http.post('/favorite', {userId: id, recipeId: recipe})
      .map(result => this.response = result.json());
  }

  updateRecipeById(id, changed) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //send changed data to server
    return this._http.put(`/recipe/${id}`, changed, {headers: headers})
      .map(result => result.json());
  }

  updateUserInfo(username, changed){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //send changed data to server
    return this._http.put(`/user/${username}`, changed, {headers: headers})
      .map(result => result.json());
    //return of("");
  }

  deleteRecipe(id){
    return this._http.delete(`/recipe/${id}`)
      .map(result=>result.json());
  }

  deleteFavorite(id){
    return this._http.delete(`/favorite/${id}`)
      .map(result=>result.json());
  }

}
