import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rate-modal',
  templateUrl: './rate-modal.component.html',
  styleUrls: ['./rate-modal.component.css']
})
export class RateModalComponent implements OnInit {

  constructor(private dataService: DataService, public dialogRef: MatDialogRef<RateModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  rating: Number = 1;
  submit(){
  	// alert("HELLO");
  	var commentStr = (<HTMLInputElement>document.getElementById("comment")).value;
  	this.dataService.getCurrentUser()
  		.subscribe(user=>this.dataService.addRating(this.data.recipeId, user._id, this.rating)
  			.subscribe(res=>res));

  	this.dataService.getCurrentUser()
  		.subscribe(user=>this.dataService.addComment(this.data.recipeId, user._id, commentStr)
  			.subscribe(res=>this.reload()));
  }

  reload(){
  	this.dialogRef.close('');
  }

  getChangedValue(e){
  	console.log(e);
  }

  ngOnInit() {
  }

}
