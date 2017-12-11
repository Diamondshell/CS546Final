import { Component, OnInit,HostListener , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDetail } from '../recipeDetails';
import { DataService } from '../data.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { RateModalComponent } from '../rate-modal/rate-modal.component';

@Component({
  selector: 'app-recipeview',
  templateUrl: './recipeview.component.html',
  styleUrls: ['./recipeview.component.css']
})
export class RecipeviewComponent implements OnInit {

  dialogRef: MatDialogRef<RateModalComponent>;

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
  constructor( private route: ActivatedRoute, 
    private dataService:DataService, public dialog: MatDialog) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getRecipeById(id);

    this.numChecked = new Array(this.recipe.Rating);
    this.numUnChecked = new Array(5-this.recipe.Rating);
  
  }

  displayRateModal(){
    this.dialogRef = this.dialog.open(RateModalComponent, {width: '600px'});
    this.dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
 
}
