import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-random-recipe-modal',
  templateUrl: './random-recipe-modal.component.html',
  styleUrls: ['./random-recipe-modal.component.css']
})
export class RandomRecipeModalComponent implements OnInit {
  filters = [
    {section_name: "mealType", section_text: "Meal Type",  values: [
      {name: "breakfast", text: "Breakfast"},
      {name: "lunch", text: "Lunch"},
      {name: "dinner", text: "Dinner"}
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
    ]}
  ];


  constructor(public dialogRef: MatDialogRef<RandomRecipeModalComponent>) { }

  ngOnInit() {
  }

}
