import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras
}                           from '@angular/router';

@Component({
  selector: 'app-filterpane',
  templateUrl: './filterpane.component.html',
  styleUrls: ['./filterpane.component.css']
})
export class FilterpaneComponent implements OnInit {
  filters = [
    {section_name: "mealType", section_text: "Meal Type",  values: [
      {name: "Breakfast", text: "Breakfast"},
      {name: "Lunch", text: "Lunch"},
      {name: "Dinner", text: "Dinner"},
      {name: "Dessert", text: "Desert"}
    ]},
    {section_name: "mealStyle", section_text: "Meal Style",  values: [
      {name: "Italian", text: "Italian"},
      {name: "Chinese", text: "Chinese"},
      {name: "Mexican", text: "Mexican"},
      {name: "American", text: "American"},
    ]},
    {section_name: "rating", section_text: "Rating",  values: [
      {name: "oneStar", text: "One Star", value: 1},
      {name: "twoStars", text: "Two Stars", value: 2},
      {name: "threeStar", text: "Three Stars", value: 3},
      {name: "fourStars", text: "Four Stars", value: 4},
      {name: "fiveStars", text: "Five Stars", value: 5}]},
    {section_name: "time", section_text: "Total Prep & Cooking Time",  values: [
      {name: "less30", text: "Less Than 30 Minutes", bounds:[0,30]},
      {name: "thirtyToOne", text: "30 Minutes - 1 Hour", bounds:[30,60]},
      {name: "oneToTwo", text: "1 - 2 Hours", bounds: [60,120]},
      {name: "twoplus", text: "More than 2 Hours", bounds: [120]}
    ]},
    {section_name: "price", section_text: "Total Cost",  values: [
      {name: "less5", text: "Less Than $5", bounds: [0,5]},
      {name: "5ToTen", text: "$5 - $10", bounds: [5, 10]},
      {name: "10ToTwenty", text: "$10 - $20", bounds: [10, 20]},
      {name: "TwentyPlus", text: "More than $20", bounds: [20]}
    ]},
    {section_name: "appliances", section_text: "Appliances",  values: [
      {name: "Oven", text: "Oven"},
      {name: "Microwave", text: "Microwave"},
      {name: "Blender", text: "Blender"},
      {name: "Stove", text: "Stove"}
    ]},
    {section_name: "popularity", section_text: "popularity",  values: [
      {name: "zeroToTen", text: "0 - 10", bounds: [0,10]},
      {name: "tenToHundred", text: "10 - 100", bounds: [10,100]},
      {name: "hundredPlus", text: "100+", bounds: [100]}
    ]},
    {section_name: "ingredients", section_text: "Ingredients",  values: [
      {name: "Milk", text: "Milk"},
      {name: "Butter", text: "Butter"},
      {name: "Ketchup", text: "Ketchup"},
      {name: "Salt", text: "Salt"}
    ]}


  ];
  tags:String[] = [];
  name:String = "";
  appliances:String[] = [];
  ingredients:String[] = [];
  price:any[] = [];
  time:any[] = [];
  popularity:any[] = [];
  rating:Number[] = [];

  test = 0;

  constructor(private router: Router, private dataService:DataService) { }
  onCheck(e, fi, f): void{
    if(e.target.checked){
      if (f.section_name == "mealType" || f.section_name == "mealStyle")
        this.tags.push(fi.name);
      if (f.section_name == "rating")
        this.rating.push(fi.value);
      if (f.section_name == "time"){
        if (fi.bounds.length == 2)
          this.time.push({$gte:fi.bounds[0], $lte:fi.bounds[1]});
        else
          this.time.push({$gte:fi.bounds[0]});
      }
      if (f.section_name == "price"){
        if (fi.bounds.length == 2)
          this.price.push({$gte:fi.bounds[0], $lte:fi.bounds[1]});
        else
          this.price.push({$gte:fi.bounds[0]});
      }
      if (f.section_name == "appliances")
        this.appliances.push(fi.name);
      if (f.section_name == "popularity"){
        if (fi.bounds.length == 2)
          this.popularity.push({$gte:fi.bounds[0], $lte:fi.bounds[1]});
        else
          this.popularity.push({$gte:fi.bounds[0]});
      }
      if (f.section_name == "ingredients")
        this.ingredients.push(fi.name);
    }else {
      // Handle removal of filters
      if (f.section_name == "mealType" || f.section_name == "mealStyle"){
        var index = this.tags.indexOf(fi.name);
        this.tags.splice(index,1);
      }
      if (f.section_name == "rating"){
        var index = this.rating.indexOf(fi.value);
        this.rating.splice(index,1);
      }
      if (f.section_name == "time"){
        if (fi.bounds.length == 2){
          var index = this.time.findIndex(i => i.$gte === fi.bounds[0]);
          this.time.splice(index,1);
        }
        else{
          var index = this.time.findIndex(i => i.$gte === fi.bounds[0]);
          this.time.splice(index, 1);
        }
      }
      if (f.section_name == "price"){
        if (fi.bounds.length == 2){
          var index = this.price.findIndex(i => i.$gte === fi.bounds[0]);
          this.price.splice(index,1);
        }
        else{
          var index = this.price.findIndex(i => i.$gte === fi.bounds[0]);
          this.price.splice(index,1);
        }
      }
      if (f.section_name == "appliances"){
        var index = this.appliances.indexOf(fi.name);
        this.appliances.splice(index,1);
      }
      if (f.section_name == "popularity"){
        if (fi.bounds.length == 2){
          var index = this.popularity.findIndex(i => i.$gte === fi.bounds[0]);
          this.popularity.splice(index,1);
        }
        else{
          var index = this.popularity.findIndex(i => i.$gte === fi.bounds[0]);
          this.popularity.splice(index,1);
        }
      }
      if (f.section_name == "ingredients"){
        var index = this.ingredients.indexOf(fi.name);
        this.ingredients.splice(index,1);
      }
    }
    var filter: {[k: string]: any} = {};
    if (this.tags.length) filter.tags = this.tags;
    if (this.appliances.length) filter.appliances = this.appliances;
    if (this.ingredients.length) filter.ingredients = this.ingredients;
    if (this.price.length) filter.price = this.price;
    if (this.time.length) filter.time = this.time;
    if (this.popularity.length) filter.popularity = this.popularity;
    if (this.rating.length) filter.rating = this.rating;
    
    this.test++;
    this.dataService.getFilteredRecipes({filter: filter}).subscribe(i => this.reroute(i));

  }
  reroute(recipes){
    var ids = [];
    for (var i = 0; i < recipes.length; i++){
      ids.push(recipes[i]._id);
    }
    let navigationExtras: NavigationExtras = {
      queryParams : {ids: ids},
      replaceUrl: true 
    };
    this.router.navigate(['./browse/filter' + this.test], navigationExtras)
  }
  ngOnInit() {
  }

}
