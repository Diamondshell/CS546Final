import { Component, OnInit , Input} from '@angular/core';
import {Recipe} from '../recipe';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() editting: Boolean;
  constructor() { }
  onSelect():void {
    //view card
  }
  ngOnInit() {
   
  }

}
