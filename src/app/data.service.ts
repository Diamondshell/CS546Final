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

  getUserRecipes(id):Observable<RecipeDetail[]>{
    return this._http.get(`/recipes/user/${id}`)
      .map(result => this.response = result.json());
  }

  getUserFavorites(id):Observable<RecipeDetail[]>{
    return this._http.get(`/favorites/user/${id}`)
      .map(result => this.response = result.json());
  }

  getCurrentUser():Observable<User>{
    return this._http.get('/getUserFromCookies')
      .map(result => this.response = result.json());
    //return of(profileInfo);
  }

  getRecipeById(id):Observable<RecipeDetail>{
    return this._http.get('/recipe/' + id)
      .map(result => this.response = result.json());
    //return of(recipeDetail);
  }

  updateUserInfo(username, changed){
    console.log(changed);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //send changed data to server
    return this._http.put(`/user/${username}`, changed, {headers: headers})
      .map(result => result.json());
    //return of("");
  }

}
