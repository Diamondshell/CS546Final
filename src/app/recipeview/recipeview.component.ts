import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-recipeview',
  templateUrl: './recipeview.component.html',
  styleUrls: ['./recipeview.component.css']
})
export class RecipeviewComponent implements OnInit {
  recipe = {
    Name: "Ketchup Fudge",
    Description:"A Horrific Fudge Recipe, just like your mom never used to made",
    Rating: 1,
    Price: 6.57,
    Cooking_Time: 25,
    poster: "Jack K.",
    Appliance: ["Blender", "Microwave"],
    Popularity: -5,
    Tags: ["What", "Fudge", "Unusual"],
    Ingredients: ["White Chocolate Chips", "Ketchup", "Maple Syrup"],
    Steps: ["Lose all sense of self", "Make this"]};
     numChecked=[];
     numUnChecked=[];

  print(){
    window.print();
  }
  constructor() { }

  ngOnInit() {
    this.numChecked = new Array(this.recipe.Rating);
    this.numUnChecked = new Array(5-this.recipe.Rating);
  
  }
 
}
