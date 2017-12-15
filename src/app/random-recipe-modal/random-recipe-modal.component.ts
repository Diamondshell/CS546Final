import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';
import { Router} from '@angular/router';
import { DataService } from '../data.service';

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
    ]}
  ];

  tags:String[] = [];
  time:any[] = [];
  rating:Number[] = [];

  constructor(private router: Router, public dialogRef: MatDialogRef<RandomRecipeModalComponent>, private dataService:DataService) { }
  onDoCheck(e, fi, f): void{
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
    }

  }

  getRandom(){

    var filter: {[k: string]: any} = {};
    if (this.tags.length) filter.tags = this.tags;
    if (this.time.length) filter.time = this.time;
    if (this.rating.length) filter.rating = this.rating;

    console.log(filter);

    this.dataService.getRandomRecipe({filter: filter})
      .subscribe(i => this.router.navigate(['./recipe/' + i._id]));
    this.dialogRef.close('')
  }
  ngOnInit() {
  }

}
