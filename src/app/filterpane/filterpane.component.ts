import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterpane',
  templateUrl: './filterpane.component.html',
  styleUrls: ['./filterpane.component.css']
})
export class FilterpaneComponent implements OnInit {
  filters = [
    {name: "breakfast", text: "Breakfast"},
    {name: "lunch", text: "Lunch"},
    {name: "dinner", text: "Dinner"},
    {name: "breakfast", text: "Breakfast"},
    {name: "lunch", text: "Lunch"},
    {name: "dinner", text: "Dinner"},
    {name: "breakfast", text: "Breakfast"},
    {name: "lunch", text: "Lunch"},
    {name: "dinner", text: "Dinner"},
    {name: "breakfast", text: "Breakfast"},
    {name: "lunch", text: "Lunch"},
    {name: "dinner", text: "Dinner"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
