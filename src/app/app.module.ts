import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import {  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { HomeComponent } from './home/home.component';
import { FilterpaneComponent } from './filterpane/filterpane.component';
import { BrowseComponent } from './browse/browse.component';
import { SigninModalComponent } from './signin-modal/signin-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardLayoutComponent,
    HomeComponent,
    FilterpaneComponent,
    BrowseComponent,
    SigninModalComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  entryComponents: [SigninModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
