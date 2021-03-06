import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MustLogInComponent } from './must-log-in/must-log-in.component';

import { RedirectComponent } from './redirect/redirect.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: HomeComponent},
  { path: 'userprofile', component: ProfileLayoutComponent ,pathMatch: 'full'  },
  { path: 'savedrecipes', component: SavedRecipesComponent,pathMatch: 'full' },
  { path: 'userrecipes', component: UserRecipesComponent ,pathMatch: 'full'},
  {path: 'browse/:id', component: BrowseComponent,pathMatch: 'full', data:{recipes:"asdf"}},
  {path: 'recipe/:id', component: RecipeviewComponent,pathMatch: 'full'},
  {path: 'redirect/:id', component: RedirectComponent,pathMatch: 'full'},
  {path: 'forbidden', component:MustLogInComponent},
  {path: '**', component:PageNotFoundComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}