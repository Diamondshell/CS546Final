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
export class AuthenticationService {

  constructor(private _http: Http) { }

  result: Boolean;
  response: any;

  validated: any;

  authenticateUser(username, password){
  	return this._http.post("/login", {"username":username, "password":password})
  	.map(result => this.response = result.json().data);
  }

  checkAuthenticated(){
  	return this._http.get('/loginstatus')
  		.map(result => this.validted = result.json());
  }
}
