import { Component, OnInit,HostListener , Input} from '@angular/core';

import { RecipeDetail } from '../recipeDetails';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recipeview',
  templateUrl: './recipeview.component.html',
  styleUrls: ['./recipeview.component.css']
})
export class RecipeviewComponent implements OnInit {
  @Input() id: number;
  recipe:RecipeDetail;
     numChecked=[];
     numUnChecked=[];
    
  print(){
    window.print();
  }
  getRecipeById(id):void{
    this.dataService.getRecipeById(id)
    .subscribe(recipeDetail=>this.recipe=recipeDetail);
  }
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getRecipeById(this.id);

    this.numChecked = new Array(this.recipe.Rating);
    this.numUnChecked = new Array(5-this.recipe.Rating);
  
  }
 
}
