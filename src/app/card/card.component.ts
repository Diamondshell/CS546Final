import { Component, OnInit , Input} from '@angular/core';
import { RecipeDetail } from '../recipeDetails';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CreateRecipeModalComponent } from '../create-recipe-modal/create-recipe-modal.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() recipe: RecipeDetail;
  @Input() editting: Boolean;
  @Input() deleting: Boolean;
  numChecked=[];
  numUnChecked=[];
  data:any;

  dialogRef: MatDialogRef<CreateRecipeModalComponent>;

  constructor(private dataService: DataService, public dialog: MatDialog) { }
  
  ngOnInit() {
    this.numChecked = new Array(Math.round(this.recipe.avgRating));
    this.numUnChecked = new Array(5 - Math.round(this.recipe.avgRating));
  }

  editRecipe(){
    this.dialogRef = this.dialog.open(CreateRecipeModalComponent, {data: {id: this.recipe._id, edit: true}});
    this.dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    })
  }

  deleteRecipe(){
    if (this.editting) {
      //Means they can edit, wihch means they're on their recipes page.
      //So they're deleting the recipe from existance, not their favorites.
      this.dataService.deleteRecipe(this.recipe._id).subscribe(result=>window.location.reload());
    } else{
      //Deleting from favorites
      this.dataService.getCurrentUser().subscribe(user=>this.dataService.getUserFavoritesReal(user._id)
          .subscribe(favorites=>this.deleteFavorite(favorites)));
    }
  }

  deleteFavorite(favorites){
    for (var i = 0; i < favorites.length; i++){
        console.log(favorites[i]);
      if (favorites[i].recipeId == this.recipe._id){
        this.dataService.deleteFavorite(favorites[i]._id).subscribe(result=>window.location.reload());
      }
    }
  }
}
