"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var _1 = require("@angular/material/");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var card_component_1 = require("./card/card.component");
var card_layout_component_1 = require("./card-layout/card-layout.component");
var home_component_1 = require("./home/home.component");
var filterpane_component_1 = require("./filterpane/filterpane.component");
var browse_component_1 = require("./browse/browse.component");
var signin_modal_component_1 = require("./signin-modal/signin-modal.component");
var user_nav_component_1 = require("./user-nav/user-nav.component");
var profile_component_1 = require("./profile/profile.component");
var user_recipes_component_1 = require("./user-recipes/user-recipes.component");
var saved_recipes_component_1 = require("./saved-recipes/saved-recipes.component");
var create_recipe_modal_component_1 = require("./create-recipe-modal/create-recipe-modal.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                card_component_1.CardComponent,
                card_layout_component_1.CardLayoutComponent,
                home_component_1.HomeComponent,
                filterpane_component_1.FilterpaneComponent,
                browse_component_1.BrowseComponent,
                signin_modal_component_1.SigninModalComponent,
                user_nav_component_1.UserNavComponent,
                profile_component_1.ProfileComponent,
                user_recipes_component_1.UserRecipesComponent,
                saved_recipes_component_1.SavedRecipesComponent,
                create_recipe_modal_component_1.CreateRecipeModalComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                _1.MatDialogModule,
                _1.MatInputModule,
                _1.MatButtonModule,
                _1.MatCardModule,
                _1.MatToolbarModule,
                _1.MatIconModule,
                _1.MatOptionModule,
                _1.MatSelectModule,
                _1.MatButtonToggleModule,
                animations_1.BrowserAnimationsModule,
                _1.MatFormFieldModule
            ],
            entryComponents: [signin_modal_component_1.SigninModalComponent, create_recipe_modal_component_1.CreateRecipeModalComponent],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map