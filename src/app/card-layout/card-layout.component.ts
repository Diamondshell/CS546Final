import { Component, OnInit,Input  } from '@angular/core';
import {Recipe} from '../recipe';
@Component({
  selector: 'app-card-layout',
  templateUrl: './card-layout.component.html',
  styleUrls: ['./card-layout.component.css']
})
export class CardLayoutComponent implements OnInit {
 recipes = [
   {name: "bread", content: "How To Make"},
   {name: "Eggs", content: "How To Make"},
   {name: "Salads", content: "How To Make"},
   {name: "Salads", content: "How To Make"},
   {name: "Salads", content: "How To Make"},
   {name: "Salads", content: "How To Make"},
   {name: "Salads", content: "How To Make"},
   {name: "Salads", content: "How To Make"},
   {name: "Salads", content: "How To Make"},
   {name: "Salads", content: "How To Make"},
   {name: "Salads", content: "How To Make"},
 ]
  constructor() { }

  ngOnInit() {
  }

}
