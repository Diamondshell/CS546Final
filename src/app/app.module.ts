import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatInputModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatToolbarModule, MatCardModule, MatSelectModule, MatOptionModule, MatButtonToggleModule } from '@angular/material/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { HomeComponent } from './home/home.component';
import { FilterpaneComponent } from './filterpane/filterpane.component';
import { BrowseComponent } from './browse/browse.component';

import { RecipeviewComponent } from './recipeview/recipeview.component';

import { SigninModalComponent } from './signin-modal/signin-modal.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRecipesComponent } from './user-recipes/user-recipes.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { CreateRecipeModalComponent } from './create-recipe-modal/create-recipe-modal.component';
import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';

import {DataService} from './data.service';
import { AppRoutingModule } from './/app-routing.module';
import { RateModalComponent } from './rate-modal/rate-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardLayoutComponent,
    HomeComponent,
    FilterpaneComponent,
    BrowseComponent,

    RecipeviewComponent,

    SigninModalComponent,
    UserNavComponent,
    ProfileComponent,
    UserRecipesComponent,
    SavedRecipesComponent,
    CreateRecipeModalComponent,
    ProfileLayoutComponent,
    RateModalComponent

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
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  entryComponents: [SigninModalComponent, CreateRecipeModalComponent, RateModalComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
