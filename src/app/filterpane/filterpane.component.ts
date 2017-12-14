import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterpane',
  templateUrl: './filterpane.component.html',
  styleUrls: ['./filterpane.component.css']
})
export class FilterpaneComponent implements OnInit {
  filters = [
    {section_name: "mealType", section_text: "Meal Type",  values: [
      {name: "breakfast", text: "Breakfast"},
      {name: "lunch", text: "Lunch"},
      {name: "dinner", text: "Dinner"},
      {name: "dessert", text: "Desert"}
    ]},
    {section_name: "mealStyle", section_text: "Meal Style",  values: [
      {name: "italian", text: "Italian"},
      {name: "chinese", text: "Chinese"},
      {name: "mexican", text: "Mexican"},
      {name: "american", text: "American"},
    ]},
    {section_name: "rating", section_text: "Rating",  values: [
      {name: "oneStar", text: "One Star"},
      {name: "twoStars", text: "Two Stars"},
      {name: "threeStar", text: "Three Stars"},
      {name: "fourStars", text: "Four Stars"},
      {name: "fiveStars", text: "Five Stars"}]},
    {section_name: "time", section_text: "Total Prep & Cooking Time",  values: [
      {name: "less30", text: "Less Than 30 Minutes"},
      {name: "thirtyToOne", text: "30 Minutes - 1 Hour"},
      {name: "oneToTwo", text: "1 - 2 Hours"},
      {name: "twoplus", text: "More than 2 Hours"}
    ]},
    {section_name: "price", section_text: "Total Cost",  values: [
      {name: "less5", text: "Less Than $5"},
      {name: "5ToTen", text: "$5 - $10"},
      {name: "10ToTwenty", text: "$10 - $20"},
      {name: "TwentyPlus", text: "More than $20"}
    ]},
    {section_name: "appliances", section_text: "Appliances",  values: [
      {name: "oven", text: "Oven"},
      {name: "microwave", text: "Microwave"},
      {name: "blender", text: "Blender"},
      {name: "stove", text: "Stove"}
    ]},
    {section_name: "popularity", section_text: "popularity",  values: [
      {name: "zeroToTen", text: "0 - 10"},
      {name: "tenToHundred", text: "10 - 100"},
      {name: "hundredPlus", text: "100+"}
    ]},
    {section_name: "ingredients", section_text: "Ingredients",  values: [
      {name: "milk", text: "Milk"},
      {name: "butter", text: "Butter"},
      {name: "ketchup", text: "Ketchup"},
      {name: "salt", text: "Salt"}
    ]}


  ];
  constructor() { }
  onCheck(e, fi): void{
    if(e.target.checked){
      console.log(fi);
    }
  }
  ngOnInit() {
  }

}
