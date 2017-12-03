import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { HomeComponent } from './home/home.component';
import { FilterpaneComponent } from './filterpane/filterpane.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardLayoutComponent,
    HomeComponent,
    FilterpaneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
