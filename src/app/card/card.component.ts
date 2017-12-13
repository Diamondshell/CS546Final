import { Component, OnInit , Input} from '@angular/core';
import { Recipe } from '../recipe';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CreateRecipeModalComponent } from '../create-recipe-modal/create-recipe-modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() editting: Boolean;
  @Input() deleting: Boolean;
  numChecked=[];
  numUnChecked=[];
  data:any;

  dialogRef: MatDialogRef<CreateRecipeModalComponent>;

  constructor(public dialog: MatDialog) { }
  
  ngOnInit() {
    this.numChecked = new Array(Math.ceil(this.recipe.rating));
    this.numUnChecked = new Array(Math.floor(5-this.recipe.rating));
  }

  editRecipe(){
    this.dialogRef = this.dialog.open(CreateRecipeModalComponent, {data: {id: this.recipe.id, edit: true}});
    this.dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    })
  }
}
