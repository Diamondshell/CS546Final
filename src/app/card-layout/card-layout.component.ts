import { Component, OnInit,Input  } from '@angular/core';
import {Recipe} from '../recipe';
import { DataService } from '../data.service';
@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.css']
})
export class CardLayoutComponent implements OnInit {

 @Input() editting: Boolean;
  recipes: Recipe[];

  getAllRecipes(): void{
    this.dataService.getAllRecipes()
    .subscribe(recipes => this.recipes = recipes);
  }
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAllRecipes();
  }

}
