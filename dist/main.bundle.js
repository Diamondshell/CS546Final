webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browse_browse_component__ = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipeview_recipeview_component__ = __webpack_require__("../../../../../src/app/recipeview/recipeview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_recipes_user_recipes_component__ = __webpack_require__("../../../../../src/app/user-recipes/user-recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__saved_recipes_saved_recipes_component__ = __webpack_require__("../../../../../src/app/saved-recipes/saved-recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_layout_profile_layout_component__ = __webpack_require__("../../../../../src/app/profile-layout/profile-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__must_log_in_must_log_in_component__ = __webpack_require__("../../../../../src/app/must-log-in/must-log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__redirect_redirect_component__ = __webpack_require__("../../../../../src/app/redirect/redirect.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'userprofile', component: __WEBPACK_IMPORTED_MODULE_7__profile_layout_profile_layout_component__["a" /* ProfileLayoutComponent */], pathMatch: 'full' },
    { path: 'savedrecipes', component: __WEBPACK_IMPORTED_MODULE_6__saved_recipes_saved_recipes_component__["a" /* SavedRecipesComponent */], pathMatch: 'full' },
    { path: 'userrecipes', component: __WEBPACK_IMPORTED_MODULE_5__user_recipes_user_recipes_component__["a" /* UserRecipesComponent */], pathMatch: 'full' },
    { path: 'browse/:id', component: __WEBPACK_IMPORTED_MODULE_3__browse_browse_component__["a" /* BrowseComponent */], pathMatch: 'full' },
    { path: 'recipe/:id', component: __WEBPACK_IMPORTED_MODULE_4__recipeview_recipeview_component__["a" /* RecipeviewComponent */], pathMatch: 'full' },
    { path: 'redirect/:id', component: __WEBPACK_IMPORTED_MODULE_10__redirect_redirect_component__["a" /* RedirectComponent */], pathMatch: 'full' },
    { path: 'forbidden', component: __WEBPACK_IMPORTED_MODULE_9__must_log_in_must_log_in_component__["a" /* MustLogInComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_8__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#wrapper {\r\n    max-width: 1300px;\r\n    min-width: 440px;\r\n    margin: 0px auto;\r\n    width:100%;\r\n    padding:0px;\r\n    border:none;\r\n    background-color: #e8eef2;\r\n    text-align: center;\r\n    position: relative;\r\n    min-height:100%;\r\n    height:auto;\r\n   \r\n    \r\n}\r\n\r\n#logo{\r\n    width: 300px;\r\n    height: 50px;\r\n   margin-top:20px;\r\n   outline:none;\r\n\r\n}\r\n\r\nheader{\r\n    overflow: hidden;\r\n    width:100%;\r\n    background-color: #77b6ea;\r\n    display:block;\r\n    \r\n   \r\n   \r\n}\r\nli.logo{\r\n    cursor:pointer;\r\n}\r\nnav{\r\n    padding:10px  15px;\r\n    margin-top:-30px;\r\n}\r\n\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #77b6ea;\r\n}\r\n\r\nli {\r\n    float: left;\r\n    height:90px;\r\n    outline:none;\r\n    \r\n}\r\n\r\nli p {\r\n    background-color: #e8eef2;\r\n    cursor: default;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\nli p, li input {\r\n    display: block;\r\n    color: black;\r\n  \r\n    text-decoration: none;\r\n    padding: 14px 16px;\r\n    \r\n}\r\n@media(max-width: 800px){\r\n    li.searchText{\r\n        width: calc(100% - 400px) !important;\r\n    }\r\n    li.browse{\r\n        margin-left: 325px !important;\r\n    }\r\n  \r\n}\r\n@media (max-width: 645px) {\r\n    li.logo{\r\n        width: 100%;\r\n    }\r\n    li.searchText {\r\n        width: calc(100% - 60px) !important;\r\n        display:block;\r\n        \r\n    }\r\n    li.search{\r\n        clear: right;\r\n    }\r\n    li.browse{\r\n        margin-left: 25px !important;\r\n        float:left;\r\n    }\r\n    li.random{\r\n        float: right;\r\n    }\r\n  \r\n  \r\n    \r\n}\r\n\r\n/* Change the link color to #111 (black) on hover */\r\nli p:hover {\r\n    background-color:  #c7d3dd;\r\n}\r\n\r\nli.searchText{\r\n    margin: 0px;\r\n    margin-left:10px;\r\n    width: calc(100% - 86px - 150px - 300px - 120px);\r\n    padding: 15px;\r\n    min-width:100px;\r\n    padding-right:0px;\r\n    border: 0px;\r\n}\r\nli.searchText input {\r\n  /*  width: calc(90% - 10px);*/\r\n  width: 100%;\r\n  height:57px;\r\n  margin-top: 1px;\r\n}\r\n\r\nli.search {\r\n    margin: 0px;\r\n    text-align: left;\r\n\r\n}\r\n\r\nli.browse{\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    \r\n}\r\n\r\n\r\n\r\n.so{\r\n    display: none;\r\n    padding: 6px 15px;\r\n    border-radius: 6px;\r\n    outline: none;\r\n    float: right;\r\n    margin-top: 5px;\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n    margin-bottom: 0px;\r\n\r\n}\r\n.signIn{\r\n    border:none;\r\n    padding: 6px 15px;\r\n    border-radius: 6px;\r\n    outline: none;\r\n    float: right;\r\n    margin-top: 5px;\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n#bar{\r\n    background-color: #77b6ea;\r\n    display:block;\r\n    padding: 5px 15px;\r\n    height: 45px;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.user{\r\n    float:right;\r\n    color: rgb(0, 0, 0);\r\n    text-decoration: none;\r\n    border-bottom: 1px dashed rgb(104, 103, 103);\r\n    display:none;\r\n    margin-left: 10px;\r\n}\r\n.user:hover {\r\n    color: rgb(46, 45, 45);\r\n    text-decoration: none;\r\n    border-bottom: 1px dashed rgb(104, 103, 103);\r\n}\r\n.signIn:hover {\r\n    background-color:  #c7d3dd;\r\n   \r\n}\r\n\r\n.body_wrapper {\r\n    margin: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.searchBar {\r\n    height: 100%;\r\n    border: 0px;\r\n}\r\n/*\r\nnav{\r\n    width: 100%;\r\n    background-color: #77b6ea;\r\n}\r\n\r\nnav  ul {\r\n  \r\n    list-style-type: none;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    position: relative;\r\n    margin-top:0px;\r\n    padding: 0;\r\n    background-color: #77b6ea;\r\n    display: inline-block;  \r\n\r\n    width: 100%;\r\n}\r\n header li {\r\n    float: left;\r\n    margin-top:5px;\r\n    margin:10px;\r\n    overflow:hidden;\r\n}\r\n\r\nli.searchText{\r\n    margin: 0px;\r\n    margin-left:10px;\r\n    width:40%;\r\n   \r\n}\r\nli.search {\r\n    margin: 0px;\r\n    text-align: left;\r\n\r\n}\r\n\r\nli.browse{\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    \r\n}\r\n\r\n li p , li input{\r\n    display: block;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    width: 100%;\r\n    background-color:  #e8eef2;\r\n   border-color: #e8eef2;\r\n   outline:none;\r\n   border: none;\r\n   \r\n  \r\n }\r\n li p:hover{\r\n    border-radius: 5px;\r\n    background-color: black;\r\n\r\n}*/\r\n/*\r\nli p, li input{\r\n    display: block;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    width: 100%;\r\n       \r\n    }\r\n  */\r\n.float-clear{\r\n    clear:both;\r\n}\r\nfooter {\r\n    background-color: #77b6ea;\r\n    display:block;\r\n    float:none;\r\n    clear:both;\r\n    padding: 25px;\r\n    position: absolute;\r\n    width: calc(100%);\r\n    bottom: 0px;\r\n}\r\nfooter.footerInfo {\r\n\r\n    font-family: Palanquin;\r\n    display:block;\r\n    float:none;\r\n    clear:both;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 10px;\r\n    background-color: #a2abaa;\r\n}\r\n@media print{\r\n    .signIn{\r\n        display:none !important;\r\n    }\r\n    .searchText, .search, .browse, .random{\r\n        display: none !important;\r\n    }\r\n    footer{\r\n        display:none;\r\n    }\r\n    #wrapper{\r\n        position:absolute;\r\n    }\r\n}\r\n\r\n.spacer{\r\n    display:block;\r\n    clear:both;\r\n    height:200px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id = \"wrapper\">\n  <div id=\"bar\">\n\n    <button title=\"Sign In\" (click)=\"signIn()\" class=\"signIn\" id=\"si\">Sign In <i class = \"fa fa-sign-in\"></i></button>\n      <a routerLink = \"/userprofile\" class=\"user\" id=\"user\">hello</a>\n      <button title = \"Sign Out\" (click)=\"signOut()\" class = \"so\" id=\"so\">Sign Out <i class = \"fa fa-sign-out\"></i></button>\n\n    </div>\n<div class = \"float-clear\"></div>\n<header>\n    <nav>\n      \n      <ul>\n      <li class= \"logo\"><img routerLink=\"/\" id= \"logo\" src = \"assets/Bonappetelli.png\" alt = \"logo\" ></li>\n        \n      <li class = \"searchText\"><input id=\"search\"  [(ngModel)]=\"text\" title = \"Search\" type=\"text\" placeholder=\"Search\" class=\"searchBar\"></li>\n      <li (click)=\"search()\" class = \"search\" ><p title = \"Search\"><i class = \"fa fa-search\"></i></p></li>\n      <li class = \"browse\" routerLink=\"/browse/all\"><p title = \"Browse\" (click)=\"browse()\">Browse</p></li>\n      <li class = \"random\"><p title = \"Random Recipe\" (click)=\"displayRandomRecipeModal()\">Random Recipe</p></li>\n       </ul>\n    </nav>\n</header>\n\n\n<router-outlet></router-outlet>\n\n  <div class = \"float-clear\"></div>\n  <div class = \"spacer\"></div>\n  <footer>\n      <div class = \"footerInfo\">\n        <i class = \"fa fa-copyright\"></i> 2017 Bon Appetelli\n        <p>Justin Barish, Zach Hackett, Mark Knapp, Jack Kraszewski, Thomas Pyle</p>\n      \n        <div id = \"socialMedia\">\n          <a href=\"https://www.facebook.com\" title=\"facebook\"><i class = \"fa fa-facebook-square\"></i></a>\n          <a href=\"https://www.twitter.com\" title= \"twitter\"><i class = \"fa fa-twitter-square\"></i></a>\n          <a href=\"https://www.instagram.com\" title=\"instagram\"><i class = \"fa fa-instagram\"></i></a>\n        </div>\n      </div>\n    </footer>\n\n</div>\n<div class = \"float-clear\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_modal_signin_modal_component__ = __webpack_require__("../../../../../src/app/signin-modal/signin-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__random_recipe_modal_random_recipe_modal_component__ = __webpack_require__("../../../../../src/app/random-recipe-modal/random-recipe-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(location, dialog, authenticationService, router) {
        this.location = location;
        this.dialog = dialog;
        this.authenticationService = authenticationService;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.checkIfLoggedIn();
    };
    AppComponent.prototype.signOut = function () {
        var serverRes;
        this.authenticationService.logoutUser().subscribe(function (response) { return serverRes = response; });
        document.getElementById('si').style.display = "block";
        document.getElementById('so').style.display = "none";
        document.getElementById('user').style.display = "none";
        this.router.navigate(['./home']);
    };
    AppComponent.prototype.signIn = function () {
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__signin_modal_signin_modal_component__["a" /* SigninModalComponent */]);
        this.dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    AppComponent.prototype.displayRandomRecipeModal = function () {
        this.otherDialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__random_recipe_modal_random_recipe_modal_component__["a" /* RandomRecipeModalComponent */]);
        this.otherDialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    AppComponent.prototype.checkIfLoggedIn = function () {
        var _this = this;
        var results;
        var success = this.authenticationService.checkAuthenticated().subscribe(function (response) { return _this.updateScreen(response); });
    };
    AppComponent.prototype.updateScreen = function (result) {
        if (result.validated) {
            document.getElementById('si').style.display = "none";
            document.getElementById('so').style.display = "block";
            document.getElementById('user').innerHTML = "Hello " + result._id;
            document.getElementById('user').style.display = "block";
        }
    };
    AppComponent.prototype.search = function () {
        if (!(this.text)) {
            this.router.navigate(["./redirect/all"]);
        }
        else {
            this.router.navigate(["./redirect/" + this.text]);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material___ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__card_card_component__ = __webpack_require__("../../../../../src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_layout_card_layout_component__ = __webpack_require__("../../../../../src/app/card-layout/card-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filterpane_filterpane_component__ = __webpack_require__("../../../../../src/app/filterpane/filterpane.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__browse_browse_component__ = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__recipeview_recipeview_component__ = __webpack_require__("../../../../../src/app/recipeview/recipeview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signin_modal_signin_modal_component__ = __webpack_require__("../../../../../src/app/signin-modal/signin-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_nav_user_nav_component__ = __webpack_require__("../../../../../src/app/user-nav/user-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_recipes_user_recipes_component__ = __webpack_require__("../../../../../src/app/user-recipes/user-recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__saved_recipes_saved_recipes_component__ = __webpack_require__("../../../../../src/app/saved-recipes/saved-recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__create_recipe_modal_create_recipe_modal_component__ = __webpack_require__("../../../../../src/app/create-recipe-modal/create-recipe-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__profile_layout_profile_layout_component__ = __webpack_require__("../../../../../src/app/profile-layout/profile-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__rate_modal_rate_modal_component__ = __webpack_require__("../../../../../src/app/rate-modal/rate-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__random_recipe_modal_random_recipe_modal_component__ = __webpack_require__("../../../../../src/app/random-recipe-modal/random-recipe-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__must_log_in_must_log_in_component__ = __webpack_require__("../../../../../src/app/must-log-in/must-log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__register_modal_register_modal_component__ = __webpack_require__("../../../../../src/app/register-modal/register-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__redirect_redirect_component__ = __webpack_require__("../../../../../src/app/redirect/redirect.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__card_layout_card_layout_component__["a" /* CardLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__filterpane_filterpane_component__["a" /* FilterpaneComponent */],
                __WEBPACK_IMPORTED_MODULE_10__browse_browse_component__["a" /* BrowseComponent */],
                __WEBPACK_IMPORTED_MODULE_11__recipeview_recipeview_component__["a" /* RecipeviewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__signin_modal_signin_modal_component__["a" /* SigninModalComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user_nav_user_nav_component__["a" /* UserNavComponent */],
                __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__user_recipes_user_recipes_component__["a" /* UserRecipesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__saved_recipes_saved_recipes_component__["a" /* SavedRecipesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__create_recipe_modal_create_recipe_modal_component__["a" /* CreateRecipeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_18__profile_layout_profile_layout_component__["a" /* ProfileLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_22__rate_modal_rate_modal_component__["a" /* RateModalComponent */],
                __WEBPACK_IMPORTED_MODULE_23__random_recipe_modal_random_recipe_modal_component__["a" /* RandomRecipeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_24__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_25__must_log_in_must_log_in_component__["a" /* MustLogInComponent */],
                __WEBPACK_IMPORTED_MODULE_26__register_modal_register_modal_component__["a" /* RegisterModalComponent */],
                __WEBPACK_IMPORTED_MODULE_28__redirect_redirect_component__["a" /* RedirectComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material___["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material___["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material___["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material___["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material___["n" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material___["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material___["l" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material___["m" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material___["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material___["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material___["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_21__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_http__["c" /* HttpModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_12__signin_modal_signin_modal_component__["a" /* SigninModalComponent */], __WEBPACK_IMPORTED_MODULE_17__create_recipe_modal_create_recipe_modal_component__["a" /* CreateRecipeModalComponent */], __WEBPACK_IMPORTED_MODULE_22__rate_modal_rate_modal_component__["a" /* RateModalComponent */], __WEBPACK_IMPORTED_MODULE_23__random_recipe_modal_random_recipe_modal_component__["a" /* RandomRecipeModalComponent */], __WEBPACK_IMPORTED_MODULE_26__register_modal_register_modal_component__["a" /* RegisterModalComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_19__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_20__authentication_service__["a" /* AuthenticationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(_http) {
        this._http = _http;
    }
    AuthenticationService.prototype.authenticateUser = function (username, password) {
        var _this = this;
        return this._http.post("/login", { "username": username, "password": password })
            .map(function (result) { return _this.response = result.json().data; });
    };
    AuthenticationService.prototype.checkAuthenticated = function () {
        var _this = this;
        return this._http.get('/loginstatus')
            .map(function (result) { return _this.validated = result.json(); });
    };
    AuthenticationService.prototype.logoutUser = function () {
        var _this = this;
        return this._http.post('/logout', {})
            .map(function (result) { return _this.response = result.json().data; });
    };
    AuthenticationService.prototype.getUserId = function () {
        return this._http.get('/getUserId')
            .map(function (result) { return result.json()._id; });
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/browse/browse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\napp-filterpane:hover{\r\n    display:block;\r\n}\r\napp-card-layout{\r\n    display:block;\r\n    float:left;\r\n    width: calc(100% - 210px);\r\n}\r\n\r\n@media (max-width: 500px) {\r\n\r\n   app-filterpane{\r\n   /* white-space: nowrap;*/\r\n    overflow:hidden;\r\n  \r\n    float:none;\r\n    clear:both;\r\n\r\n    display:block;\r\n    width:100%;\r\n   }\r\n  \r\n\r\n   app-card-layout{\r\n       width: 100% !important;\r\n   }\r\n}\r\n\r\nh1{\r\n   margin:10px;\r\n   font-size: 1.5em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<app-filterpane></app-filterpane>\n<app-card-layout *ngIf=\"recipes\" [type]=\"'browse'\" [recipes]=\"recipes\" [editting]=\"false\"></app-card-layout>"

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BrowseComponent = (function () {
    function BrowseComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    BrowseComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        var id = this.route.snapshot.paramMap.get('id');
        console.log("here");
        console.log(id);
        if (id && id != "" && id != "all") {
            this.title = "Results for " + id + ":";
            this.dataService.getRecipesByLikeName(id)
                .subscribe(function (res) { return _this.recipes = res; });
        }
        else {
            this.title = "Recipes";
            this.dataService.getAllRecipes()
                .subscribe(function (res) { return _this.recipes = res; });
        }
        //var searchStr = (<HTMLInputElement>document.getElementById("search")).value;
    };
    BrowseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-browse',
            template: __webpack_require__("../../../../../src/app/browse/browse.component.html"),
            styles: [__webpack_require__("../../../../../src/app/browse/browse.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], BrowseComponent);
    return BrowseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/card-layout/card-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    margin:15px;\r\n}\r\n\r\nli{\r\n    list-style: none;\r\n    display: -webkit-box !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-height: 100%;\r\n    height:100%;\r\n    position: relative;\r\n  /*\r\n    \r\n    flex: 0 1  calc(33% - 30px);\r\n    box-sizing: border-box;\r\n    */\r\n    /*float: left;*/\r\n   /* width: calc(30% - 30px);*/\r\n\r\n   \r\n}\r\n\r\np{\r\n    display:none;\r\n}\r\nul{\r\n    width: 90%;\r\n    max-width: 1240px;\r\n    margin: 0 auto;\r\n    display: -ms-grid !important;\r\n    display: grid !important;\r\n    \r\n   -ms-grid-columns: 1fr;\r\n    \r\n       grid-template-columns: 1fr;\r\n   -ms-grid-rows: auto;\r\n       grid-template-rows: auto;\r\n   grid-gap: 20px;\r\n    padding: 0px;\r\n}\r\n/*\r\n@media (max-width: 900px) {\r\n    li { \r\n       max-width:  calc(50% - 30px);\r\n    }\r\n }\r\n \r\n @media (max-width: 650px) {\r\n    li { \r\n       float: none;\r\n       max-width:  calc(100% - 30px);\r\n    }\r\n }*/\r\n @media only screen and (min-width: 750px) {\r\n    ul {\r\n      -ms-grid-columns: 1fr 1fr;\r\n          grid-template-columns: 1fr 1fr;\r\n    }  \r\n  }\r\n\r\n  @media only screen and (min-width: 1000px) {\r\n    ul {\r\n      -ms-grid-columns: 1fr 1fr 1fr;\r\n          grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/card-layout/card-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<p id = \"no-results\">No Search Results Found</p>\n<ul class = \"cards\">\n\t<ng-container *ngIf=\"recipes && recipes.length\">\n\t  <li *ngFor=\"let r of recipes\"  class= \"card\">\n\t    <app-card [recipe] = \"r\" [editting]=\"editting\" [deleting]=\"deleting\"></app-card>\n\t  </li>\n\t</ng-container>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/card-layout/card-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardLayoutComponent = (function () {
    function CardLayoutComponent(dataService, authenticationService) {
        this.dataService = dataService;
        this.authenticationService = authenticationService;
    }
    CardLayoutComponent.prototype.getAllRecipes = function () {
        var _this = this;
        this.dataService.getTopRecipes()
            .subscribe(function (recipes) { return _this.recipes = recipes; });
    };
    CardLayoutComponent.prototype.getUserRecipes = function () {
        var _this = this;
        this.authenticationService.getUserId()
            .subscribe(function (id) { return _this.dataService.getUserRecipes(id)
            .subscribe(function (recipes) { return _this.recipes = recipes; }); });
    };
    CardLayoutComponent.prototype.getUserFavorites = function () {
        var _this = this;
        this.authenticationService.getUserId()
            .subscribe(function (id) { return _this.dataService.getUserFavorites(id)
            .subscribe(function (recipes) { return _this.recipes = recipes; }); });
    };
    CardLayoutComponent.prototype.ngOnInit = function () {
        console.log(this.type);
        if (this.type == 'trending') {
            this.getAllRecipes();
        }
        else if (this.type == 'user') {
            this.getUserRecipes();
        }
        else if (this.type == 'saved') {
            this.getUserFavorites();
        }
        else if (this.type == 'browse') {
            if (this.recipes.length < 1) {
                document.getElementById('no-results').style.display = "block";
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CardLayoutComponent.prototype, "editting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CardLayoutComponent.prototype, "deleting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], CardLayoutComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CardLayoutComponent.prototype, "recipes", void 0);
    CardLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card-layout',
            template: __webpack_require__("../../../../../src/app/card-layout/card-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/card-layout/card-layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]])
    ], CardLayoutComponent);
    return CardLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/card/card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 450px;\r\n    margin: auto;\r\n    text-align: center;\r\n    background-color: rgb(255, 249, 249);\r\n    padding: 5px;\r\n    border-radius: 10px 0px 10px 0px;\r\n    font-family: Palanquin;\r\n}\r\na{\r\n    text-decoration: none;\r\n}\r\nheader {\r\n    color: rgb(48, 47, 47);\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n    margin-top: 0px;\r\n    padding-top: 0px;\r\n}\r\n.main-content {\r\n    width: 90%;\r\n    float: left;\r\n    position: relative;\r\n    vertical-align: middle;\r\n}\r\n#options{\r\n    width: 10%;\r\n    float:right;\r\n    vertical-align: middle;\r\n}\r\nfooter {\r\n    display: inline-block;\r\n    vertical-align: bottom;\r\n    width: 100%;\r\n}\r\nbutton{\r\n    background-color: transparent;\r\n    outline: none;\r\n    background-repeat:no-repeat;\r\n    border: none;\r\n    cursor:pointer;\r\n    overflow: hidden;\r\n    font-size: 1.25em;\r\n    display: none;\r\n}\r\n.card:hover .edit-options{\r\n    display: block;\r\n}\r\n\r\n.card:hover .delete-options{\r\n    display: block;\r\n}\r\n.card:hover{\r\n   /* background-color: rgb(230, 222, 222);*/\r\n   background-color: #c7d3dd;\r\n}\r\nbutton:hover{\r\n    border-radius: 5px;\r\n    background-color: rgb(184, 179, 179);\r\n}\r\na:active{\r\n  color:rgb(48, 47, 47);  \r\n}\r\na{\r\n    color:rgb(48, 47, 47);  \r\n}\r\na:visited{\r\n    color:rgb(48, 47, 47);  \r\n}\r\n\r\n.rating li {\r\n    float:left;\r\n\r\n}\r\n.rating i{\r\n    font-size: 22px;\r\n    color: gray;\r\n}\r\n.rating{\r\n    width:200px;;    \r\n    display:block;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n\r\n.rating i.checked {\r\n    float:left;\r\n    color: orange;\r\n}\r\n.float-clear{\r\n    clear:both;\r\n}\r\nul{\r\n    list-style: none;\r\n}\r\nh2{\r\n    margin-bottom: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"card\">\n    <a routerLink=\"/recipe/{{recipe._id}}\">\n<header>\n    <h2>{{recipe.name}}</h2>\n</header>\n<div class = \"main-content\">\n    <p>{{recipe.description}}</p>\n</div>\n</a>\n<div id=\"options\">\n    <button [class.edit-options] = \"editting\" (click)=\"editRecipe()\" title = \"Edit recipe\" id = \"edit\"><i class=\"fa fa-pencil\"></i></button>\n    <button (click)=\"deleteRecipe()\" [class.delete-options] = \"deleting\" (click)=\"deleteRecipe()\" title = \"Delete recipe\" id = \"edit\"><i class=\"fa fa-trash-o\"></i></button>\n</div>\n<a routerLink=\"/recipe/{{recipe._id}}\">\n<footer>\n    <div class = \"rating\" title =\"{{recipe.avgRating}} Star(s)\">\n        <ul>\n          <li  *ngFor=\"let i of numChecked\"> <i class=\"fa fa-star checked\" ></i></li>\n          <li  *ngFor=\"let i of numUnChecked\"> <i class=\"fa fa-star\"></i></li>   \n        </ul>\n    </div>\n    <div class = \"float-clear\"></div>\n</footer>\n  </a>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipeDetails__ = __webpack_require__("../../../../../src/app/recipeDetails.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_recipe_modal_create_recipe_modal_component__ = __webpack_require__("../../../../../src/app/create-recipe-modal/create-recipe-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardComponent = (function () {
    function CardComponent(dataService, dialog) {
        this.dataService = dataService;
        this.dialog = dialog;
        this.numChecked = [];
        this.numUnChecked = [];
    }
    CardComponent.prototype.ngOnInit = function () {
        this.numChecked = new Array(Math.ceil(this.recipe.avgRating));
        this.numUnChecked = new Array(Math.floor(5 - this.recipe.avgRating));
    };
    CardComponent.prototype.editRecipe = function () {
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__create_recipe_modal_create_recipe_modal_component__["a" /* CreateRecipeModalComponent */], { data: { id: this.recipe._id, edit: true } });
        this.dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    CardComponent.prototype.deleteRecipe = function () {
        var _this = this;
        if (this.editting) {
            //Means they can edit, wihch means they're on their recipes page.
            //So they're deleting the recipe from existance, not their favorites.
            this.dataService.deleteRecipe(this.recipe._id).subscribe(function (result) { return window.location.reload(); });
        }
        else {
            //Deleting from favorites
            this.dataService.getCurrentUser().subscribe(function (user) { return _this.dataService.getUserFavoritesReal(user._id)
                .subscribe(function (favorites) { return _this.deleteFavorite(favorites); }); });
        }
    };
    CardComponent.prototype.deleteFavorite = function (favorites) {
        for (var i = 0; i < favorites.length; i++) {
            console.log(favorites[i]);
            if (favorites[i].recipeId == this.recipe._id) {
                this.dataService.deleteFavorite(favorites[i]._id).subscribe(function (result) { return window.location.reload(); });
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__recipeDetails__["a" /* RecipeDetail */])
    ], CardComponent.prototype, "recipe", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "editting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], CardComponent.prototype, "deleting", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__("../../../../../src/app/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialog */]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/create-recipe-modal/create-recipe-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  height: 100%;\n  width: 100%;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.directions {\n  width: 100%;\n  height: 100px;\n}\n\n.taDirections {\n  resize: none;\n  height: 100px;\n  max-height: 100px;\n}\n\n.submit {\n  box-shadow: 3px 4px 0px 0px #1564ad;\n  box-sizing: border-box;\n  background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);\n  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#79bbff', endColorstr='#378de5',GradientType=0);\n  background-color:#77b6ea;\n  border-radius:5px;\n  border:1px solid #337bc4;\n  display:inline-block;\n  cursor:pointer;\n  color:#ffffff;\n  font-family:Palanquin;\n  font-size:17px;\n  font-weight:bold;\n  padding:12px 44px;\n  text-decoration:none;\n  text-shadow:0px 1px 0px #000000;\n  text-align: center;\n  line-height: 0px;\n  width: 100%;\n  height: 2em;\n}\n.submit:hover {\n  background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);\n  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#378de5', endColorstr='#79bbff',GradientType=0);\n  background-color:#378de5;\n}\n\n.submit:active {\n  position:relative;\n  top:1px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-recipe-modal/create-recipe-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"recipe\" id=\"createRecipeForm\">\n\t<h1 mat-dialog-title id=\"heading\">{{headingStr}}</h1>\n\t<form ngNoForm>\n\t\t<table>\n\t\t\t<tr>\n\t\t\t  <mat-form-field title=\"RecipeName\" class=\"input\">\n\t\t\t    <input [(ngModel)]=\"recipe.name\" matInput placeholder=\"Recipe Name\" value={{recipe.name}}>\n\t\t\t  </mat-form-field>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t  <mat-form-field title=\"Description\" class=\"input\">\n\t\t\t  \t<textarea [(ngModel)]=\"recipe.description\" matInput matTextAreaAutosize placeholder=\"Description\" type=\"password\" value={{recipe.description}}></textarea>\n\t\t\t  </mat-form-field>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<mat-form-field title=\"Ingredients\" class=\"input\">\n\t\t\t\t\t<textarea [(ngModel)]=\"recipe.ingredients\" matInput matTextAreaAutosize value={{recipe.ingredients}} placeholder=\"Ingredients (comma separated list)\"></textarea>\n\t\t\t\t</mat-form-field>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<mat-form-field title=\"Appliances\" class=\"input\">\n\t\t\t\t\t<textarea [(ngModel)]=\"recipe.appliances\" matInput matTextAreaAutosize value={{recipe.appliances}} placeholder=\"Appliances needed (comma separated list)\"></textarea>\n\t\t\t\t</mat-form-field>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<mat-form-field title=\"Cost\" class=\"input\">\n\t\t\t\t\t<input  [(ngModel)]=\"recipe.price\" matInput placeholder=\"Estimate cost to make\" type=\"number\" value={{recipe.price}}>\n\t\t\t\t</mat-form-field>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<mat-form-field title=\"Time\" class=\"input\">\n\t\t\t\t\t<input [(ngModel)]=\"recipe.cookTime\" matInput value={{recipe.cookTime}} placeholder=\"Time to make (in minutes)\" type=\"number\">\n\t\t\t\t</mat-form-field>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<mat-form-field title=\"Tags\" class=\"input\">\n\t\t\t\t\t<input [(ngModel)]=\"recipe.tags\" matInput placeholder=\"Tags (comma separated list)\" type=\"text\" value={{recipe.tags}}>\n\t\t\t\t</mat-form-field>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<mat-label>Directions:</mat-label>\n\t\t\t\t<mat-form-field title=\"Steps\" class=\"directions\">\n\t\t\t\t\t<textarea matInput [(ngModel)]=\"recipe.steps\" matTextareaAutosize placeholder=\"(comma separated list)\" type=\"text\" class=\"taDirections\" value={{recipe.steps}}></textarea>\n\t\t\t\t</mat-form-field>\n\t\t\t</tr>\n\t  \t<button mat-raised-button class=\"submit\" (click)=\"submit()\" id=\"finishButton\">{{submitStr}}</button>\n\t\t</table>\n\t</form>\n</div>\n\n\n<!-- Ingredients, Appliances, Cost, Time, Steps, Tags -->"

/***/ }),

/***/ "../../../../../src/app/create-recipe-modal/create-recipe-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRecipeModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipeDetails__ = __webpack_require__("../../../../../src/app/recipeDetails.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CreateRecipeModalComponent = (function () {
    function CreateRecipeModalComponent(route, dataService, dialogRef, data) {
        this.route = route;
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CreateRecipeModalComponent.prototype.getRecipeById = function (id) {
        var _this = this;
        this.dataService.getRecipeById(id).subscribe(function (recipeDetail) { return _this.doLoad(recipeDetail); });
    };
    CreateRecipeModalComponent.prototype.submit = function () {
        var _this = this;
        this.recipe.appliances = this.recipe.appliances.toString().split(',');
        this.recipe.tags = this.recipe.tags.toString().split(',');
        this.recipe.ingredients = this.recipe.ingredients.toString().split(',');
        this.recipe.steps = this.recipe.steps.toString().split(',');
        if (this.data) {
            this.dataService.updateRecipeById(this.data.id, this.recipe).subscribe(function (result) { return result; });
        }
        else {
            this.recipe.popularity = 0;
            this.dataService.getCurrentUser().subscribe(function (result) { return _this.finishSend(result); });
        }
    };
    CreateRecipeModalComponent.prototype.finishSend = function (id) {
        this.recipe.userid = id._id;
        this.dataService.createNewRecipe(this.recipe).subscribe(function (result) { return result; });
    };
    CreateRecipeModalComponent.prototype.doLoad = function (result) {
        this.recipe = result;
        this.headingStr = "Edit Recipe";
        this.submitStr = "Save Recipe!";
        // document.getElementById('heading').innerHTML = "Edit Recipe";
        // document.getElementById('finishButton').innerHTML = "Save Recipe!";
    };
    CreateRecipeModalComponent.prototype.ngOnInit = function () {
        if (this.data) {
            this.getRecipeById(this.data.id);
        }
        else {
            this.recipe = new __WEBPACK_IMPORTED_MODULE_4__recipeDetails__["a" /* RecipeDetail */]();
            this.recipe.name = "";
            this.recipe.appliances = [];
            this.recipe.cookTime = 0;
            this.recipe.description = "";
            this.recipe.ingredients = [];
            this.recipe.price = 0;
            this.headingStr = "Create Recipe";
            this.submitStr = "Create Recipe!";
            // document.getElementById('heading').innerHTML = "Create Recipe";
            // document.getElementById('finishButton').innerHTML = "Create Recipe!";
        }
    };
    CreateRecipeModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create-recipe-modal',
            template: __webpack_require__("../../../../../src/app/create-recipe-modal/create-recipe-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-recipe-modal/create-recipe-modal.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], CreateRecipeModalComponent);
    return CreateRecipeModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getAllRecipes = function () {
        var _this = this;
        return this._http.get('/recipes')
            .map(function (result) { return _this.response = result.json(); });
        // return of(recipes);
    };
    DataService.prototype.getTopRecipes = function () {
        var _this = this;
        return this._http.get('/recipes/top')
            .map(function (result) { return _this.response = result.json(); });
        // return of(recipes);
    };
    DataService.prototype.getUserRecipes = function (id) {
        var _this = this;
        return this._http.get("/recipes/user/" + id)
            .map(function (result) { return _this.response = result.json(); });
    };
    DataService.prototype.getUserFavorites = function (id) {
        var _this = this;
        return this._http.get("/favorites/user/" + id)
            .map(function (result) { return _this.response = result.json(); });
    };
    DataService.prototype.getUserFavoritesReal = function (id) {
        var _this = this;
        return this._http.get("/favoritesreal/user/" + id)
            .map(function (result) { return _this.response = result.json(); });
    };
    DataService.prototype.getCurrentUser = function () {
        var _this = this;
        return this._http.get('/getUserFromCookies')
            .map(function (result) { return _this.response = result.json(); });
        //return of(profileInfo);
    };
    DataService.prototype.getRecipeById = function (id) {
        var _this = this;
        return this._http.get("/recipe/" + id)
            .map(function (result) { return _this.response = result.json(); });
        //return of(recipeDetail);
    };
    DataService.prototype.getRecipesByLikeName = function (str) {
        var _this = this;
        return this._http.get("/recipes/byname/" + str)
            .map(function (result) { return _this.response = result.json(); });
    };
    DataService.prototype.createNewRecipe = function (recipe) {
        var _this = this;
        return this._http.post('/recipe', recipe)
            .map(function (result) { return _this.response = result.json(); });
    };
    DataService.prototype.addToFavorites = function (id, recipe) {
        var _this = this;
        return this._http.post('/favorite', { userId: id, recipeId: recipe })
            .map(function (result) { return _this.response = result.json(); });
    };
    DataService.prototype.addRating = function (recipe, userid, rating) {
        var _this = this;
        return this._http.post('/rating', { userId: userid, recipeId: recipe, rating: Number(rating) })
            .map(function (result) { return _this.response = result.json(); });
    };
    DataService.prototype.addComment = function (recipe, userid, comment) {
        var _this = this;
        return this._http.post('/comment', { userId: userid, recipeId: recipe, comment: comment })
            .map(function (result) { return _this.response = result.json(); });
    };
    DataService.prototype.updateRecipeById = function (id, changed) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //send changed data to server
        return this._http.put("/recipe/" + id, changed, { headers: headers })
            .map(function (result) { return result.json(); });
    };
    DataService.prototype.updateUserInfo = function (username, changed) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //send changed data to server
        return this._http.put("/user/" + username, changed, { headers: headers })
            .map(function (result) { return result.json(); });
        //return of("");
    };
    DataService.prototype.deleteRecipe = function (id) {
        return this._http.delete("/recipe/" + id)
            .map(function (result) { return result.json(); });
    };
    DataService.prototype.deleteFavorite = function (id) {
        return this._http.delete("/favorite/" + id)
            .map(function (result) { return result.json(); });
    };
    DataService.prototype.createNewUser = function (username, email, pass) {
        return this._http.post('/user', { password: pass, username: username, email: email, description: "I am the default description. Change me!" })
            .map(function (result) { return result.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/filterpane/filterpane.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "aside {\r\n    float: left;\r\n    width: 100%;\r\n    text-align: left;\r\n}\r\nli {\r\n    list-style: none;\r\n}\r\n\r\nul {\r\n    padding-left: 3px;\r\n}\r\n@media (max-width: 500px) {\r\n    .filter-group {\r\n        width:calc(50% - 30px);\r\n        float:left;\r\n        display:none;\r\n        z-index: 1;\r\n    }\r\n    aside:hover .filter-group{\r\n        display:block;\r\n    }\r\n}\r\nh2, h3{\r\n    font-size: 1.1em;\r\n    text-align: center;\r\n}\r\n.bar{\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    font-size:1.1em;\r\n    display:block;\r\n    width: 100%;\r\n}\r\n.filter-group{\r\n   border-radius: 10px;\r\n    margin: 5px 2px;\r\n    padding:5px;\r\n    background-color: rgb(255, 241, 241);\r\n    text-align: left;\r\n    overflow:auto;\r\n    height:140px;\r\n    font-size:.8em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/filterpane/filterpane.component.html":
/***/ (function(module, exports) {

module.exports = "<aside>\n  <div class=\"bar\">\n    <h2>Filters</h2>\n  \n    <ul> \n        <li *ngFor=\"let f of filters\" class = \"filter-group\">\n          <h3>{{f.section_text}}</h3>\n          <ul>\n              <li *ngFor=\"let fi of f.values\" class = \"filters\">\n                <input type=\"checkbox\" id={{fi.name}} name={{fi.name}} (click)=\"onCheck($event, fi)\">\n                <label for={{fi.name}}>{{fi.text}}</label>\n              </li>\n          </ul>\n        </li>\n      </ul>\n   \n  </div>\n</aside>\n\n"

/***/ }),

/***/ "../../../../../src/app/filterpane/filterpane.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterpaneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterpaneComponent = (function () {
    function FilterpaneComponent() {
        this.filters = [
            { section_name: "mealType", section_text: "Meal Type", values: [
                    { name: "breakfast", text: "Breakfast" },
                    { name: "lunch", text: "Lunch" },
                    { name: "dinner", text: "Dinner" }
                ] },
            { section_name: "mealStyle", section_text: "Meal Style", values: [
                    { name: "italian", text: "Italian" },
                    { name: "chinese", text: "Chinese" },
                    { name: "mexican", text: "Mexican" },
                    { name: "american", text: "American" },
                ] },
            { section_name: "rating", section_text: "Rating", values: [
                    { name: "oneStar", text: "One Star" },
                    { name: "twoStars", text: "Two Stars" },
                    { name: "threeStar", text: "Three Stars" },
                    { name: "fourStars", text: "Four Stars" },
                    { name: "fiveStars", text: "Five Stars" }
                ] },
            { section_name: "time", section_text: "Total Prep & Cooking Time", values: [
                    { name: "less30", text: "Less Than 30 Minutes" },
                    { name: "thirtyToOne", text: "30 Minutes - 1 Hour" },
                    { name: "oneToTwo", text: "1 - 2 Hours" },
                    { name: "twoplus", text: "More than 2 Hours" }
                ] }
        ];
    }
    FilterpaneComponent.prototype.onCheck = function (e, fi) {
        if (e.target.checked) {
            console.log(fi);
        }
    };
    FilterpaneComponent.prototype.ngOnInit = function () {
    };
    FilterpaneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-filterpane',
            template: __webpack_require__("../../../../../src/app/filterpane/filterpane.component.html"),
            styles: [__webpack_require__("../../../../../src/app/filterpane/filterpane.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterpaneComponent);
    return FilterpaneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-layout {\r\n    display: block;\r\n    width: 100% !important;\r\n    position: relative;\r\n }\r\n h1{\r\n    font-size:2em;\r\n    \r\n}\r\nhr {\r\n    width: 60%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class = \"card-layout\">\n  <h1>Trending Recipes:</h1>\n  <hr>\n   <app-card-layout [type]=\"'trending'\" [editting]=\"false\"></app-card-layout>\n</section>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/must-log-in/must-log-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#register {\r\n    display: none;\r\n  }\r\n  \r\n#to_register, #to_login {\r\n    cursor:pointer;\r\n    color:blue;\r\n    text-decoration:underline;\r\n}\r\nsection {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 450px;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    text-align: center;\r\n    background-color: rgb(255, 249, 249);\r\n    padding: 5px;\r\n    border-radius: 10px 0px 10px 0px;\r\n    font-family: Palanquin;\r\n}\r\n\r\n#error {\r\n  color: red;\r\n  display: none;\r\n  margin: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/must-log-in/must-log-in.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <h1>You must be logged in to view this content.</h1>\n  <article>\n      <div id=\"sign-in\">\n          <form>\n            <mat-form-field title=\"Username\" class=\"input\">\n              <input matInput placeholder=\"Username\" value=\"\" id=\"username\">\n            </mat-form-field>\n            <br>\n            <mat-form-field title=\"Password\" class=\"input\">\n              <input matInput placeholder=\"Password\" type=\"password\" id=\"password\">\n            </mat-form-field>\n            <br>\n            <p id=\"error\">Invalid username or password.</p>\n            <br>\n           <!-- <button mat-raised-button class=\"back\" (click)=\"goBack()\" value=\"Return\">Return</button>-->\n            \n            <button mat-raised-button class=\"submit\" (click)=\"authenticateUser()\" value=\"Sign-In\">Sign-In</button>\n                 \n          </form>\n    \n          <footer class=\"footer\">\n            <p class=\"change_link\">\n              Not a member yet?\n              <span (click)=\"register()\" id=\"to_register\">Join us</span>\n            </p>\n          </footer>\n        </div>\n  </article>\n \n</section>"

/***/ }),

/***/ "../../../../../src/app/must-log-in/must-log-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MustLogInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_modal_register_modal_component__ = __webpack_require__("../../../../../src/app/register-modal/register-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MustLogInComponent = (function () {
    function MustLogInComponent(dialog, location, authenticationService, router) {
        this.dialog = dialog;
        this.location = location;
        this.authenticationService = authenticationService;
        this.router = router;
    }
    MustLogInComponent.prototype.ngOnInit = function () {
    };
    MustLogInComponent.prototype.goBack = function () {
        this.location.back();
    };
    MustLogInComponent.prototype.register = function () {
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__register_modal_register_modal_component__["a" /* RegisterModalComponent */]);
        this.dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    MustLogInComponent.prototype.authenticateUser = function () {
        var _this = this;
        var results;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var success = this.authenticationService.authenticateUser(username, password).subscribe(function (response) { return _this.updateLoginStatus(response); });
    };
    MustLogInComponent.prototype.updateLoginStatus = function (status) {
        if (status == true) {
            // this.dialogRef.close('');
            this.checkIfLoggedIn();
            this.router.navigate(['./home']);
        }
        else {
            var error = document.getElementById("error");
            error.style.display = "block";
        }
    };
    MustLogInComponent.prototype.checkIfLoggedIn = function () {
        var _this = this;
        var results;
        var success = this.authenticationService.checkAuthenticated().subscribe(function (response) { return _this.updateScreen(response); });
    };
    MustLogInComponent.prototype.updateScreen = function (result) {
        if (result.validated) {
            document.getElementById('si').style.display = "none";
            document.getElementById('so').style.display = "inline-block";
            document.getElementById('user').innerHTML = "Hello " + result._id;
            document.getElementById('user').style.display = "inline-block";
        }
    };
    MustLogInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-must-log-in',
            template: __webpack_require__("../../../../../src/app/must-log-in/must-log-in.component.html"),
            styles: [__webpack_require__("../../../../../src/app/must-log-in/must-log-in.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]])
    ], MustLogInComponent);
    return MustLogInComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Error: Page Not Found!\n</h1>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile-layout/profile-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile-layout/profile-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-nav></app-user-nav>\n<div *ngIf=\"profileInfo\" class= \"profile\">\n    <app-profile [user]=\"profileInfo\" [editting]=\"editting\"></app-profile>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile-layout/profile-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileLayoutComponent = (function () {
    function ProfileLayoutComponent(dataService) {
        this.dataService = dataService;
    }
    ProfileLayoutComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.dataService.getCurrentUser()
            .subscribe(function (profileInfo) { return _this.updateUser(profileInfo); });
    };
    ProfileLayoutComponent.prototype.updateUser = function (info) {
        this.profileInfo = info;
    };
    ProfileLayoutComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ProfileLayoutComponent.prototype, "editting", void 0);
    ProfileLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-layout',
            template: __webpack_require__("../../../../../src/app/profile-layout/profile-layout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile-layout/profile-layout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ProfileLayoutComponent);
    return ProfileLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#userProfileWrapper {\n    clear:both;\n    margin: auto;\n    padding-top:30px;\n      text-align: center;\n}\n#innerwrapper{\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    max-width: 450px;\n    margin: auto;\n  \n    text-align: center;\n    background-color: rgb(255, 249, 249);\n   \n    border-radius: 10px 0px 10px 0px;\n    font-family: Palanquin;\n    padding:30px 10px;\n}\n\n.profile div {\n    padding-bottom: 5px;\n    margin-bottom: 10px;\n}\n\n#userEmail {\n\tmargin-left: 5px;\n}\n\n#userDescr {\n\tmargin-left: 5px;\n}\n\nbutton{\n    background-color: transparent;\n    outline: none;\n    background-repeat:no-repeat;\n    border: none;\n    cursor:pointer;\n    overflow: hidden;\n    font-size: 1.25em;\n}\nbutton:hover{\n    border-radius: 5px;\n    background-color: rgb(184, 179, 179);\n}\n\ninput {\n\tdisplay: none;\n}\n\nbutton[title=\"Save\"] {\n\tdisplay: none;\n}\n#error{\n    display:none;\n    color:red;\n    margin-top: 3px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"profile\" id=\"userProfileWrapper\">\n\t<div id=\"innerwrapper\">\n\t\t<h1 id=\"username\">\n\t\t\t{{user._id}}\n\t\t</h1>\n\n\t\t<div id=\"email\">\n\t\t\t<label id=\"userEmail\" class=\"pull-left\" for=\"editEmail\">Email:</label>\n\t\t\t<span id=\"emailObj\">{{user.email}}</span>\n\t\t\t<input matInput type=\"text\" [(ngModel)]=\"user.email\" placeholder=\"{{user.email}}\" id=\"editEmail\">\n\t\t\t<button title = \"Edit email\" (click)=\"editEmail()\" id= \"editEmailButton\" name=\"editEmailButton\"><i class=\"fa fa-pencil\"></i></button>\n\t\t\t<button title=\"Save\" (click)=\"saveEmail()\" id=\"saveEmail\"><i class=\"fa fa-check\"></i></button>\n\t\t\t<p id=\"error\">Must give a valid email</p>\n\t\t</div>\n\n\t\t<div id=\"description\">\n\t\t\t<label id=\"userDescr\" class=\"pull-left\" for=\"editDescr\">Description:</label>\n\t\t\t<span id=\"descrObj\">{{user.description}}</span>\n\t\t\t<input type=\"text\" [(ngModel)]=\"user.description\" placeholder=\"{{user.description}}\" id=\"editDescr\" name=\"editDescr\">\n\t\t\t<button title = \"Edit description\" (click)=\"editDescription()\" id = \"edit\"><i class=\"fa fa-pencil\" id=\"editDescrButton\"></i></button>\n\t\t\t<button title=\"Save\" (click)=\"saveDescription()\" id=\"saveDescr\"><i class=\"fa fa-check\"></i></button>\n\t\t</div>\n\t</div>\t\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(dataService) {
        this.dataService = dataService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.editEmail = function () {
        document.getElementById('emailObj').style.display = "none";
        document.getElementById('editEmail').style.display = "inline-block";
        document.getElementById('editEmailButton').style.display = "none";
        document.getElementById('saveEmail').style.display = "inline-block";
    };
    ProfileComponent.prototype.editDescription = function () {
        document.getElementById('descrObj').style.display = "none";
        document.getElementById('editDescr').style.display = "inline-block";
        document.getElementById('editDescrButton').style.display = "none";
        document.getElementById('saveDescr').style.display = "inline-block";
    };
    ProfileComponent.prototype.saveEmail = function () {
        var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
        if (pattern.test(this.user.email)) {
            document.getElementById('editEmail').style.display = "none";
            document.getElementById('emailObj').style.display = "inline-block";
            document.getElementById('saveEmail').style.display = "none";
            document.getElementById('editEmailButton').style.display = "inline-block";
            document.getElementById('error').style.display = "none";
            this.dataService.updateUserInfo(this.user._id, { email: this.user.email }).subscribe(function (result) { return result; });
        }
        else {
            document.getElementById('error').style.display = "block";
        }
    };
    ProfileComponent.prototype.saveDescription = function () {
        document.getElementById('descrObj').style.display = "inline-block";
        document.getElementById('editDescr').style.display = "none";
        document.getElementById('editDescrButton').style.display = "inline-block";
        document.getElementById('saveDescr').style.display = "none";
        this.dataService.updateUserInfo(this.user._id, { description: this.user.description }).subscribe(function (result) { return result; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */])
    ], ProfileComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ProfileComponent.prototype, "editting", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/random-recipe-modal/random-recipe-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nli {\r\n    list-style: none;\r\n}\r\n\r\nul {\r\n    padding-left: 3px;\r\n}\r\n\r\n\r\nh2, h3{\r\n    font-size: 1.1em;\r\n    text-align: center;\r\n}\r\n\r\n.filter-group{\r\n   border-radius: 10px;\r\n    margin: 5px 2px;\r\n    padding:5px;\r\n    background-color: #e8eef2c0;\r\n    text-align: left;\r\n    overflow:auto;\r\n    height:140px;\r\n    font-size:.8em;\r\n}\r\n.filter-group {\r\n    width:calc(50% - 10px);\r\n    float:left;\r\n    z-index: 1;\r\n}\r\n\r\n#randomRecipeModalWrapper {\r\n    margin: auto;\r\n    float: center;\r\n}\r\n.submit {\r\n    box-sizing: border-box;\r\n    background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);\r\n    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#79bbff', endColorstr='#378de5',GradientType=0);\r\n    background-color:#007eb6;\r\n    border-radius:5px;\r\n    border:1px solid #337bc4;\r\n    display:inline-block;\r\n    cursor:pointer;\r\n    color:#ffffff;\r\n    font-family:Palanquin;\r\n    font-size:17px;\r\n    font-weight:bold;\r\n    padding:12px 44px;\r\n    text-decoration:none;\r\n    text-shadow:0px 1px 0px #000000;\r\n    text-align: center;\r\n    line-height: 0px;\r\n    width: 100%;\r\n    height: 2em;\r\n  }\r\n  .submit:hover {\r\n    background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);\r\n    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#378de5', endColorstr='#79bbff',GradientType=0);\r\n    background-color:#378de5;\r\n  }\r\n  \r\n  .submit:active {\r\n    position:relative;\r\n    top:1px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/random-recipe-modal/random-recipe-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"randomRecipeModalWrapper\">\n  <form ngNoForm>\n    <h2 mat-dialog-title id=\"RandomLabel\">Random Recipe</h2>\n    <h3 mat-dialog-title a>*Choose any or none*</h3>\n      <ul> \n          <li *ngFor=\"let f of filters\" class = \"filter-group\">\n            <h3>{{f.section_text}}</h3>\n            <ul>\n                <li *ngFor=\"let fi of f.values\" class = \"filters\">\n                  <input type=\"checkbox\" id={{fi.name}} name={{fi.name}} (click)=\"onCheck($event, fi)\">\n                  <label for={{fi.name}}>{{fi.text}}</label>\n                </li>\n            </ul>\n          </li>\n        </ul>\n      <button  mat-raised-button class=\"submit\" type=\"submit\" value=\"submit\">Randomize!</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/random-recipe-modal/random-recipe-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomRecipeModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RandomRecipeModalComponent = (function () {
    function RandomRecipeModalComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.filters = [
            { section_name: "mealType", section_text: "Meal Type", values: [
                    { name: "breakfast", text: "Breakfast" },
                    { name: "lunch", text: "Lunch" },
                    { name: "dinner", text: "Dinner" }
                ] },
            { section_name: "mealStyle", section_text: "Meal Style", values: [
                    { name: "italian", text: "Italian" },
                    { name: "chinese", text: "Chinese" },
                    { name: "mexican", text: "Mexican" },
                    { name: "american", text: "American" },
                ] },
            { section_name: "rating", section_text: "Rating", values: [
                    { name: "oneStar", text: "One Star" },
                    { name: "twoStars", text: "Two Stars" },
                    { name: "threeStar", text: "Three Stars" },
                    { name: "fourStars", text: "Four Stars" },
                    { name: "fiveStars", text: "Five Stars" }
                ] },
            { section_name: "time", section_text: "Total Prep & Cooking Time", values: [
                    { name: "less30", text: "Less Than 30 Minutes" },
                    { name: "thirtyToOne", text: "30 Minutes - 1 Hour" },
                    { name: "oneToTwo", text: "1 - 2 Hours" },
                    { name: "twoplus", text: "More than 2 Hours" }
                ] }
        ];
    }
    RandomRecipeModalComponent.prototype.ngOnInit = function () {
    };
    RandomRecipeModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-random-recipe-modal',
            template: __webpack_require__("../../../../../src/app/random-recipe-modal/random-recipe-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/random-recipe-modal/random-recipe-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */]])
    ], RandomRecipeModalComponent);
    return RandomRecipeModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/rate-modal/rate-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\n  height: 100%;\n  width: 100%;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.directions {\n  width: 100%;\n  height: 100px;\n}\n\n.taDirections {\n  resize: none;\n  height: 100px;\n  max-height: 100px;\n}\n\n.submit {\n  box-shadow: 3px 4px 0px 0px #1564ad;\n  box-sizing: border-box;\n  background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);\n  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#79bbff', endColorstr='#378de5',GradientType=0);\n  background-color:#007eb6;\n  border-radius:5px;\n  border:1px solid #337bc4;\n  display:inline-block;\n  cursor:pointer;\n  color:#ffffff;\n  font-family:Palanquin;\n  font-size:17px;\n  font-weight:bold;\n  padding:12px 44px;\n  text-decoration:none;\n  text-shadow:0px 1px 0px #000000;\n  text-align: center;\n  line-height: 0px;\n  width: 100%;\n  height: 2em;\n}\n.submit:hover {\n  background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);\n  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#378de5', endColorstr='#79bbff',GradientType=0);\n  background-color:#378de5;\n}\n\n.submit:active {\n  position:relative;\n  top:1px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/rate-modal/rate-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"createRecipeForm\">\n\t<h1 mat-dialog-title>Rate This Recipe!</h1>\n\t<form>\n\t\t<table>\n\t\t\t<tr>\n\t\t\t  <mat-form-field title=\"Rating\" class=\"input\">\n\t\t\t    <mat-select  id=\"rating\" placeholder=\"Rating\" value=\"\" [(value)]=\"rating\">\n\t\t\t    \t<mat-option value=\"1\">1</mat-option>\n\t\t\t    \t<mat-option value=\"2\">2</mat-option>\n\t\t\t    \t<mat-option value=\"3\">3</mat-option>\n\t\t\t    \t<mat-option value=\"4\">4</mat-option>\n\t\t\t    \t<mat-option value=\"5\">5</mat-option>\n\t\t\t    </mat-select>\n\t\t\t  </mat-form-field>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t  <mat-form-field title=\"Review\" class=\"input\">\n\t\t\t  \t<textarea id=\"comment\" matInput matTextAreaAutosize placeholder=\"Review\" type=\"text\"></textarea>\n\t\t\t  </mat-form-field>\n\t\t\t</tr>\n\t  \t<button mat-raised-button   class=\"submit\" (click)=\"submit()\" value=\"Rate\">Submit!</button>\n\t\t</table>\n\t</form>\n</div>\n\n\n<!-- Ingredients, Appliances, Cost, Time, Steps, Tags -->"

/***/ }),

/***/ "../../../../../src/app/rate-modal/rate-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var RateModalComponent = (function () {
    function RateModalComponent(dataService, dialogRef, data) {
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.rating = 1;
    }
    RateModalComponent.prototype.submit = function () {
        var _this = this;
        // alert("HELLO");
        var commentStr = document.getElementById("comment").value;
        this.dataService.getCurrentUser()
            .subscribe(function (user) { return _this.dataService.addRating(_this.data.recipeId, user._id, _this.rating)
            .subscribe(function (res) { return res; }); });
        this.dataService.getCurrentUser()
            .subscribe(function (user) { return _this.dataService.addComment(_this.data.recipeId, user._id, commentStr)
            .subscribe(function (res) { return _this.reload(); }); });
    };
    RateModalComponent.prototype.reload = function () {
        this.dialogRef.close('');
    };
    RateModalComponent.prototype.getChangedValue = function (e) {
        console.log(e);
    };
    RateModalComponent.prototype.ngOnInit = function () {
    };
    RateModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rate-modal',
            template: __webpack_require__("../../../../../src/app/rate-modal/rate-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/rate-modal/rate-modal.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], Object])
    ], RateModalComponent);
    return RateModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/recipeDetails.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetail; });
var RecipeDetail = (function () {
    function RecipeDetail() {
    }
    return RecipeDetail;
}());

;


/***/ }),

/***/ "../../../../../src/app/recipeview/recipeview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section{\r\n    background-color:rgb(255, 249, 249);\r\n    width:90%;\r\n    margin: 10px auto;\r\n    border-radius: 10px 0px 10px 0px;\r\n    padding: 10px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    box-shadow: 5px 10px 50px grey;\r\n}\r\nsection{\r\n    position: relative;\r\n}\r\nh1{\r\n    font-size: 2em;\r\n}\r\nh2{\r\n    text-align: left;\r\n}\r\narticle{\r\n    padding:10px;\r\n}\r\n#top ul{\r\n    list-style: none;\r\n}\r\n.lower ul{\r\n  text-align: left;\r\n}\r\n#des{\r\n    text-align: left;\r\n}\r\n#left-pane{\r\n    position: relative;\r\n    display:block;\r\n    float: left;\r\n    width:calc(65% - 20px);\r\n    \r\n}\r\n#left-pane > p {\r\n    text-align: center;\r\n    float: none;\r\n    margin-top: 20px;\r\n}\r\n.bottom-right {\r\n    position: relative;\r\n    display:block;\r\n    float:left;\r\n    width:calc(50% - 20px);\r\n}\r\n.bottom-left{\r\n    position: relative;\r\n    display:block;\r\n    float: left;\r\n    width:calc(50% - 20px);\r\n    \r\n}\r\n#right-pane {\r\n    position: relative;\r\n    display:block;\r\n    float:left;\r\n    width:calc(35% - 20px);\r\n}\r\n\r\n.bottom-center{\r\n    clear:both;\r\n    position: relative;\r\n    display:block;\r\n    width:100%;\r\n\r\n}\r\n.recipe-details p{\r\n    float:left;\r\n    display:block;\r\n    margin:0px 5px;\r\n    text-align:center;\r\n    width: calc(33% - 15px);\r\n    border-right: 1px solid gray;\r\n   \r\n    \r\n}\r\n.recipe-details p:last-child{\r\n    border-right: none;\r\n}\r\n.recipe-details{\r\n  \r\n    text-align: center;\r\n    width: 100%;\r\n   \r\n}\r\n.recipe-details{\r\n    margin-top: 20px;\r\n}\r\n#left-pane ul{\r\n    clear:both;\r\n    width:100%;\r\n    display:block;\r\n    padding:0px;\r\n\r\n}\r\n.float-clear{\r\n    clear:both;\r\n}\r\n.rating li {\r\n    float:left;\r\n\r\n}\r\n.rating i{\r\n    font-size: 22px;\r\n    color: gray;\r\n}\r\n.rating{\r\n    width:120px;;    \r\n    display:block;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n\r\n.rating i.checked {\r\n    float:left;\r\n    color: orange;\r\n}\r\nol{\r\n    text-align: left;\r\n}\r\n.tags ul{\r\n    list-style: none;\r\n}\r\n.tags li{\r\n    float: left;\r\n    display: block;\r\n    margin: 0px 0px 0px 10px;\r\n}\r\n.tags p{\r\n    float: left;\r\n    display: block;\r\n    margin: 0px;\r\n}\r\n.ratings ul{\r\n    list-style: none;\r\n    height: 100%;\r\n    padding: 0px;\r\n}\r\n.ratings{\r\n    cursor: default;\r\n    padding:0px;\r\n    margin: 0 auto;\r\n    height: auto;\r\n    display: block;\r\n}\r\n.ratings ul{\r\n    width: auto;\r\n    background-color: #e8eef2;\r\n    overflow: hidden;\r\n    height:auto;\r\n}\r\n.ratings ul > div{\r\n    display:inline-block;\r\n    width: calc( 33% - 10px);\r\n    height:100%;\r\n}\r\n.ratings li{\r\n    display: block ;\r\n    text-align: center ;\r\n    margin: 0px 5px;\r\n    background-color:none;\r\n    padding: 10px;\r\n\r\n \r\n \r\n\r\n}\r\n\r\n.ratings div:hover {\r\n    background-color: #c7d3dd;\r\n}\r\n@media (max-width: 700px) {\r\n   article{\r\n       \r\n      width: 100% !important;\r\n      float: none;\r\n   }\r\n}\r\nimg{\r\n    width:100%;\r\n    height:auto;\r\n}\r\n@media print{\r\n    section{\r\n        position: absolute;\r\n        background-color:rgb(255, 255, 255);\r\n        width:90%;\r\n        margin: 10px auto;\r\n        border-radius:  0px;\r\n        padding: 10px;\r\n        position: relative;\r\n        overflow: hidden;\r\n        box-shadow:none;\r\n    }\r\n    .ratings{\r\n        display:none;\r\n    }\r\n    article{\r\n       width: 100%;\r\n       clear:both;\r\n    }\r\n    .comments{\r\n        display:none;\r\n    }\r\n \r\n}\r\n.comments header{\r\n    height: 44px;\r\n}\r\n.comments h2{\r\n    display: block;\r\n    width: 110px;\r\n    float: left;\r\n    padding:0px;\r\n    margin: 0px;\r\n}\r\n.comments .newcomment{\r\n    display:block;\r\n    width: 110px;\r\n    float: right;\r\n    background-color:#e8eef2;\r\n    outline:none;\r\n    border:none;\r\n    padding:10px;\r\n}\r\n.comments .newcomment:hover{\r\n   background-color: #c7d3dd;\r\n}\r\n.comments ul{\r\n    list-style: none;\r\n    text-align: left;\r\n}\r\n.comments h3 {\r\n    margin: 3px;\r\n}\r\n.comments ul div {\r\n   \r\n    display: block;\r\n    border-bottom: 1px solid gray;\r\n}\r\n.comments li{\r\n    padding: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipeview/recipeview.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"recipe\">\n  <div id = \"top\">\n  <article id = \"left-pane\">\n      <h1>{{recipe.name}}</h1>\n     \n   \n    <div class = \"rating\" title =\"{{recipe.Rating}} Star(s)\">\n        <ul>\n          <li  *ngFor=\"let i of numChecked\"> <i class=\"fa fa-star checked\" ></i></li>\n          <li  *ngFor=\"let i of numUnChecked\"> <i class=\"fa fa-star\"></i></li>   \n        </ul>\n    </div>\n      <div class = \"float-clear\"></div>\n      <div class = \"recipe-details\">\n          <p title=\"Total Cost\"><i class=\"fa fa-dollar\" title=\"Total Cost\"></i> {{recipe.price}}</p>\n          <p title=\"Total Time\"><i class=\"fa fa-clock-o\" ></i> {{recipe.cookTime}}</p>\n          <p title=\"Popularity\"><i class=\"fa fa-fire\" ></i> {{recipe.popularity}}</p>\n        </div>\n      <div class = \"float-clear\"></div>\n      <p>Posted By: {{recipe.poster}}</p>\n    <p id = \"des\">{{recipe.description}}</p>\n    \n    <div class = \"float-clear\"></div>\n    <div class = \"ratings\">\n      <ul>\n        <div (click)=\"displayRateModal()\"><li title = \"Rate this Recipe\" id=\"rate\" >Rate This Recipe</li></div>\n        <div (click)=\"print()\"><li  title = \"Print this Recipe\" id=\"print\">Print</li>  </div>\n        <div (click)=\"save()\"><li title = \"Save this Recipe as a Favorite\" id=\"save\" >Save To Favorites</li></div>\n        \n      </ul>\n      <div class = \"float-clear\"></div>\n    </div>\n    <div class = \"float-clear\"></div>\n    \n  </article>\n <article id = \"right-pane\">\n  <img src= \"assets/fudge.jpg\" width=200 height=300 alt = \"Picture of Recipe\" title = \"Picture of Recipe\">\n  <div class = \"tags\">\n      <p><strong>Tags:</strong></p>\n      <ul >\n        <li *ngFor=\"let t of recipe.tags\">{{t}}</li>\n      </ul>\n  </div>\n  <div class = \"float-clear\"></div>  \n</article>\n  <div class = \"float-clear\"></div>\n  <hr>\n</div>\n<div class=\"lower\">\n  <article class = \"bottom-left\">\n      <div class = \"ingredients\">\n          <h2>Ingredients:</h2>\n          <ul >\n            <li *ngFor=\"let i of recipe.ingredients\">{{i}}</li>\n          </ul>\n        </div>\n  </article>\n \n\n  <article class = \"bottom-right\">\n      <div class = \"appliances\">\n          <h2>Appliances:</h2>\n          <ul class=\"appliances\">\n              <li *ngFor=\"let a of recipe.appliances\">{{a}}</li>\n          </ul>\n        </div>\n  </article>\n  <div class = \"float-clear\"></div>\n  <hr>\n</div>\n <article class=\"bottom-center\">\n    \n    <div class = \"steps\">\n      <h2>Steps:</h2>\n      <ol>\n          <li *ngFor=\"let s of recipe.steps\">{{s}}</li>\n      </ol>\n      </div>\n      <div class = \"float-clear\"></div>\n  </article>\n \n <div class = \"float-clear\"></div>\n  <hr>\n  <article class = \"comments\">\n    <header>\n        <h2>Comments:</h2>\n        <button class=\"newcomment\" (click)=\"displayRateModal()\">Add Comment</button>    \n    </header>\n    <div class = \"float-clear\"></div>\n    <ul>\n      <li *ngFor=\"let c of recipe.comments\">\n        <div>\n          <h3>{{c.userId}}</h3>  \n          <p>{{c.comment}}</p>\n        </div>\n      </li>\n    </ul>\n  </article>\n</section>\n<div class = \"float-clear\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/recipeview/recipeview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rate_modal_rate_modal_component__ = __webpack_require__("../../../../../src/app/rate-modal/rate-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_modal_signin_modal_component__ = __webpack_require__("../../../../../src/app/signin-modal/signin-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecipeviewComponent = (function () {
    function RecipeviewComponent(route, dataService, dialog, authenticationService) {
        this.route = route;
        this.dataService = dataService;
        this.dialog = dialog;
        this.authenticationService = authenticationService;
        this.numChecked = [];
        this.numUnChecked = [];
    }
    RecipeviewComponent.prototype.print = function () {
        window.print();
    };
    RecipeviewComponent.prototype.getRecipeById = function (id) {
        var _this = this;
        this.dataService.getRecipeById(id)
            .subscribe(function (recipeDetail) { return _this.finishLoad(recipeDetail); });
    };
    RecipeviewComponent.prototype.finishLoad = function (recipeInfo) {
        this.recipe = recipeInfo;
        this.numChecked = new Array(Math.ceil(this.recipe.avgRating));
        this.numUnChecked = new Array(Math.floor(5 - this.recipe.avgRating));
        window.scrollTo(0, 0);
    };
    RecipeviewComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        console.log(id);
        this.getRecipeById(id);
    };
    RecipeviewComponent.prototype.save = function () {
        var _this = this;
        var success = this.authenticationService.checkAuthenticated().subscribe(function (response) { return _this.doSave(response); });
    };
    RecipeviewComponent.prototype.doSave = function (response) {
        var _this = this;
        if (response.validated) {
            this.dataService.getCurrentUser().subscribe(function (id) { return _this.dataService.addToFavorites(id._id, _this.recipe._id)
                .subscribe(function (res) { return document.getElementById("save").innerHTML = "Saved to favorites!"; }); });
        }
        else {
            this.dialogRefSignin = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__signin_modal_signin_modal_component__["a" /* SigninModalComponent */], { data: { loggedIn: true } });
            this.dialogRefSignin.afterClosed().subscribe(function (result) {
                console.log(result);
            });
        }
    };
    RecipeviewComponent.prototype.displayRateModal = function () {
        var _this = this;
        var success = this.authenticationService.checkAuthenticated().subscribe(function (response) { return _this.displayScreen(response); });
    };
    RecipeviewComponent.prototype.displayScreen = function (response) {
        var _this = this;
        if (response.validated) {
            this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__rate_modal_rate_modal_component__["a" /* RateModalComponent */], { width: '600px', data: { recipeId: this.recipe._id } });
            this.dialogRef.afterClosed().subscribe(function (result) {
                console.log(result);
                _this.dataService.getRecipeById(_this.recipe._id).subscribe(function (res) { return _this.recipe = res; });
            });
        }
        else {
            this.dialogRefSignin = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__signin_modal_signin_modal_component__["a" /* SigninModalComponent */], { data: { loggedIn: true } });
            this.dialogRefSignin.afterClosed().subscribe(function (result) {
                console.log(result);
            });
        }
    };
    RecipeviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipeview',
            template: __webpack_require__("../../../../../src/app/recipeview/recipeview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/recipeview/recipeview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__authentication_service__["a" /* AuthenticationService */]])
    ], RecipeviewComponent);
    return RecipeviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/redirect/redirect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/redirect/redirect.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/redirect/redirect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RedirectComponent = (function () {
    function RedirectComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    RedirectComponent.prototype.ngOnInit = function () {
        var text = this.route.snapshot.paramMap.get('id');
        this.router.navigate(["./browse/" + text]);
    };
    RedirectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-redirect',
            template: __webpack_require__("../../../../../src/app/redirect/redirect.component.html"),
            styles: [__webpack_require__("../../../../../src/app/redirect/redirect.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RedirectComponent);
    return RedirectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register-modal/register-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".submit {\r\n   box-sizing: border-box;\r\n    background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);\r\n    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#79bbff', endColorstr='#378de5',GradientType=0);\r\n    background-color:#007eb6;\r\n    border-radius:5px;\r\n    border:1px solid #337bc4;\r\n    display:inline-block;\r\n    cursor:pointer;\r\n    color:#ffffff;\r\n    font-family:Palanquin;\r\n    font-size:17px;\r\n    font-weight:bold;\r\n    padding:12px 44px;\r\n    text-decoration:none;\r\n    text-shadow:0px 1px 0px #000000;\r\n    text-align: center;\r\n    line-height: 0px;\r\n    width: 100%;\r\n    height: 2em;\r\n  }\r\n  .submit:hover {\r\n    background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);\r\n    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#378de5', endColorstr='#79bbff',GradientType=0);\r\n    background-color:#378de5;\r\n  }\r\n  \r\n  .submit:active {\r\n    position:relative;\r\n    top:1px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register-modal/register-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"register\">\n  <form ngNoForm>\n    <mat-form-field>\n      <input matInput required=\"required\" placeholder=\"Username\">\n    </mat-form-field>\n    <p>\n      <mat-form-field>\n        <input matInput required=\"required\" type=\"email\" placeholder=\"Email Address\">\n      </mat-form-field>\n    </p>\n    <p>\n      <mat-form-field class=\"demo-full-width\">\n        <input matInput required=\"required\" type=\"password\" placeholder=\"Password\">\n      </mat-form-field>\n      <mat-form-field class=\"password\">\n        <input matInput required=\"required\" type=\"password\" placeholder=\"Confirm Password\">\n      </mat-form-field>\n    </p>\n    <button mat-raised-button class=\"submit\" type=\"submit\" value=\"Register!\">Register!</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/register-modal/register-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterModalComponent = (function () {
    function RegisterModalComponent() {
    }
    RegisterModalComponent.prototype.ngOnInit = function () {
    };
    RegisterModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-modal',
            template: __webpack_require__("../../../../../src/app/register-modal/register-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register-modal/register-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterModalComponent);
    return RegisterModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/saved-recipes/saved-recipes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-card-layout{\r\n    display:block;\r\n    float:left;\r\n    width: calc(100% - 210px);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/saved-recipes/saved-recipes.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-nav></app-user-nav>\n<h1>My Saved Recipes</h1>\n<app-filterpane></app-filterpane>\n<app-card-layout [type]=\"'saved'\" [editting]=\"false\" [deleting]=\"true\"></app-card-layout>"

/***/ }),

/***/ "../../../../../src/app/saved-recipes/saved-recipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedRecipesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SavedRecipesComponent = (function () {
    function SavedRecipesComponent() {
    }
    SavedRecipesComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    SavedRecipesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-saved-recipes',
            template: __webpack_require__("../../../../../src/app/saved-recipes/saved-recipes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/saved-recipes/saved-recipes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SavedRecipesComponent);
    return SavedRecipesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signin-modal/signin-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".submit {\n   box-sizing: border-box;\n  background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);\n  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#79bbff', endColorstr='#378de5',GradientType=0);\n  background-color:#507c94;\n  border-radius:5px;\n  border:1px solid #337bc4;\n  display:inline-block;\n  cursor:pointer;\n  color:#ffffff;\n  font-family:Palanquin;\n  font-size:17px;\n  font-weight:bold;\n  padding:12px 44px;\n  text-decoration:none;\n  text-shadow:0px 1px 0px #000000;\n  text-align: center;\n  line-height: 0px;\n  width: 100%;\n  height: 2em;\n}\n.submit:hover {\n  background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);\n  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#378de5', endColorstr='#79bbff',GradientType=0);\n  background-color:#378de5;\n}\n\n.submit:active {\n  position:relative;\n  top:1px;\n}\n\n#register {\n  display: none;\n}\n\n#to_register, #to_login {\n     cursor:pointer;\n     color:blue;\n     text-decoration:underline;\n}\n\n#to_register:hover, #to_login:hover {\n  text-decoration: none;\n  text-shadow: 1px 1px 1px #555;\n}\n\n#error {\n  color: red;\n  display: none;\n  margin: 0;\n}\n\n#sign-in {\n  width: 200px;\n}\n\ninput {\n  width: 100%;\n}\n\nbutton:disabled,\nbutton[disabled]{\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  text-align: center;\n  text-transform: uppercase;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  padding: 6px 12px;\n  font-size: 1.4rem;\n  border-radius: 3px;\n  border: 1px solid transparent;\n  text-decoration: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.btn-primary {\n  color: white;\n  border-color: #1e88e5;\n  background-color:#007eb6 !important;\n  background: linear-gradient(to bottom, #64b5f6 0%, #42a5f5 100%);\n  box-shadow: inset 0 1px #bbdefb, 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n\n.btn:hover, .btn:focus, .btn.focus {\n    text-decoration: none;\n    color: #fff;\n}\n\n.btn-primary:hover, .btn-primary:focus, .btn-primary.focus {\n    border-color: #42a5f5;\n    background: linear-gradient(to bottom, #90caf9 0%, #64b5f6 100%);\n    box-shadow: inset 0 1px #e3f2fd, 0 2px 3px rgba(0, 0, 0, 0.2);\n}\n\n.btn-primary:active, .btn-primary.active {\n    border-color: #1976d2;\n    color: #bbdefb;\n    background: linear-gradient(to bottom, #42a5f5 0%, #1e88e5 100%);\n    box-shadow: inset 0 2px 2px #1976d2;\n}\n\n.btn-primary.disabled, .btn-primary[disabled], fieldset[disabled] .btn-primary {\n    background: #90caf9;\n    border-color: #64b5f6;\n}\n\n.btn.disabled, .btn[disabled], fieldset[disabled] .btn {\n    cursor: not-allowed;\n    pointer-events: none;\n    box-shadow: none;\n}\n\n#gotta_log{\n  display: none;\n  padding-bottom: 10px;\n  color: #B20F0F;\n  text-decoration: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signin-modal/signin-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n\t<div id=\"wrapper\">\n\t\t<span id=\"gotta_log\">You must log in to access that!</span>\n\t\t<div id=\"sign-in\">\n\t\t\t<form>\n\t\t\t  <mat-form-field title=\"Username\" class=\"input\">\n\t\t\t    <input id=\"login_id\" matInput placeholder=\"Username\" value=\"\">\n\t\t\t  </mat-form-field>\n\t\t\t  <br>\n\t\t\t  <mat-form-field title=\"Password\" class=\"input\">\n\t\t\t  \t<input id=\"login_pass\" matInput placeholder=\"Password\" type=\"password\">\n\t\t\t  </mat-form-field>\n\t\t\t  <br>\n\t\t\t  <p id=\"error\">Invalid username or password.</p>\n\t\t\t  <br>\n\t\t\t  <button [disabled]=\"isDisabled\" data-dismiss=\"modal\" class=\"btn btn-primary submit\" (click)=\"authenticateUser()\" value=\"Sign-In\" id=\"sign-in\">Sign-In</button>\n\t\t\t</form>\n\n\t\t\t<footer class=\"footer\">\n\t\t\t\t<p class=\"change_link\">\n\t\t\t\t\tNot a member yet?\n\t\t\t\t\t<span (click)=\"register()\" id=\"to_register\">Join us</span>\n\t\t\t\t</p>\n\t\t\t</footer>\n\t\t</div>\n\n\t\t<div id=\"register\">\n\t    <form ngNoForm>\n        <mat-form-field>\n          <input [(ngModel)]=\"newUser\" matInput required=\"required\" placeholder=\"Username\">\n        </mat-form-field>\n        <p>\n        \t<mat-form-field>\n        \t\t<input [(ngModel)]=\"newEmail\" matInput required=\"required\" type=\"email\" placeholder=\"Email Address\">\n        \t</mat-form-field>\n        </p>\n\t      <p>\n\t        <mat-form-field class=\"demo-full-width\">\n\t          <input [(ngModel)]=\"newPass\" matInput required=\"required\" type=\"password\" placeholder=\"Password\">\n\t        </mat-form-field>\n\t        <mat-form-field class=\"password\">\n\t        \t<input [(ngModel)]=\"newPassConf\" matInput required=\"required\" type=\"password\" placeholder=\"Confirm Password\">\n\t        </mat-form-field>\n\t      </p>\n\t      <button mat-raised-button class=\"submit\" (click)=\"doRegister()\" value=\"Register!\">Register!</button>\n\t    </form>\n\n\t    <footer class=\"footer\">\n\t    \t<p class=\"change_link\">\n\t    \t\tAlready a member?\n\t    \t\t<span (click)=\"login()\" id=\"to_login\">Login</span>\n\t    \t</p>\n\t    </footer>\n\t\t</div>\n\t</div>\n</div>\n\n<!-- Username, email, password, description -->"

/***/ }),

/***/ "../../../../../src/app/signin-modal/signin-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SigninModalComponent = (function () {
    function SigninModalComponent(dialogRef, dataService, authenticationService, router, loggedIn) {
        this.dialogRef = dialogRef;
        this.dataService = dataService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.loggedIn = loggedIn;
        this.isDisabled = false;
    }
    SigninModalComponent.prototype.register = function () {
        document.getElementById('sign-in').style.display = 'none';
        document.getElementById('register').style.display = 'inline-block';
    };
    SigninModalComponent.prototype.login = function () {
        document.getElementById('register').style.display = 'none';
        document.getElementById('sign-in').style.display = 'inline-block';
    };
    SigninModalComponent.prototype.authenticateUser = function () {
        var _this = this;
        this.isDisabled = true;
        var results;
        var username = document.getElementById("login_id").value;
        var password = document.getElementById("login_pass").value;
        var success = this.authenticationService.authenticateUser(username, password).subscribe(function (response) { return _this.updateLoginStatus(response); });
    };
    SigninModalComponent.prototype.updateLoginStatus = function (status) {
        if (status == true) {
            this.dialogRef.close('');
            this.checkIfLoggedIn();
            // this.router.navigate(['./home']);
        }
        else {
            this.isDisabled = false;
            var error = document.getElementById("error");
            error.style.display = "block";
        }
    };
    SigninModalComponent.prototype.checkIfLoggedIn = function () {
        var _this = this;
        var results;
        var success = this.authenticationService.checkAuthenticated().subscribe(function (response) { return _this.updateScreen(response); });
    };
    SigninModalComponent.prototype.updateScreen = function (result) {
        if (result.validated) {
            document.getElementById('si').style.display = "none";
            document.getElementById('so').style.display = "inline-block";
            document.getElementById('user').innerHTML = "Hello " + result._id;
            document.getElementById('user').style.display = "inline-block";
        }
    };
    SigninModalComponent.prototype.doRegister = function () {
        var _this = this;
        if (this.newPass != this.newPassConf) {
            alert("Passwords must match!");
            return;
        }
        this.dataService.createNewUser(this.newUser, this.newEmail, this.newPass).subscribe(function (res) {
            return _this.dialogRef.close('');
        });
    };
    SigninModalComponent.prototype.ngOnInit = function () {
        if (this.loggedIn) {
            document.getElementById('gotta_log').style.display = "block";
        }
    };
    SigninModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin-modal',
            template: __webpack_require__("../../../../../src/app/signin-modal/signin-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signin-modal/signin-modal.component.css")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], Object])
    ], SigninModalComponent);
    return SigninModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-nav/user-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidenav {\n\theight: calc(100% - 169px);\n\twidth: 0;\n\tposition: absolute;\n\tz-index: 1;\n\ttop: 0;\n\tleft: 0;\n\tbackground-color: #111;\n\toverflow-x: hidden;\n\ttransition: 0.5s;\n}\n\n.sidenav a {\n\tpadding: 8px 8px 8px 32px;\n\ttext-decoration: none;\n\tfont-size: 25px;\n\tcolor: #a2abaa;\n\tdisplay: block;\n\ttext-align: left;\n\ttransition: 0.3s;\n\ttext-overflow: hidden;\n\twhite-space: nowrap;\n}\n\n.sidenav a:hover {\n\tcolor: #f1f1f1;\n}\t\n\n.sidenav .closebtn {\n\tposition: absolute;\n\ttop: 0;\n\tright: 20px;\n  font-size: 24px;\n  display: none;\n  opacity: 0;\n  transition: 1s;\n}\n\n.open{\n    margin-top: 50px;\n    margin-left: 10px;\n    font-size: 14pt;\n    color: #e8eef2;\n}\n\n.sideDiv {\n\twidth:100% !important;\n\tleft: 10px;\n\tposition: relative;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-nav/user-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sideDiv\"><span id=\"open\" class=\"fa fa-bars\"(click)=\"openNav()\"></span></div>\n<div id=\"user_sidenav\" class=\"sidenav\">\n\t<a title=\"close navigation\" href=\"javascript:void(0)\" class=\"closebtn transform\" id=\"closebtn\" (click)=\"closeNav()\"><i class=\"fa fa-times closeUserNav\"></i></a>\n\t<a routerLink=\"/userprofile\">Profile</a>\n\t<a routerLink=\"/userrecipes\">My Recipes</a>\n\t<a routerLink=\"/savedrecipes\">My Saved Recipes</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-nav/user-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserNavComponent = (function () {
    function UserNavComponent() {
    }
    UserNavComponent.prototype.ngOnInit = function () {
    };
    UserNavComponent.prototype.openNav = function () {
        document.getElementById('user_sidenav').style.width = "250px";
        document.getElementById('closebtn').style.transition = "1s";
        document.getElementById('closebtn').style.display = "block";
        requestAnimationFrame(function () { return document.getElementById('closebtn').style.opacity = "1"; });
    };
    UserNavComponent.prototype.closeNav = function () {
        document.getElementById('closebtn').style.transition = "0.2s";
        requestAnimationFrame(function () { return document.getElementById('closebtn').style.opacity = "0"; });
        document.getElementById('user_sidenav').style.width = "0";
    };
    UserNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-nav',
            template: __webpack_require__("../../../../../src/app/user-nav/user-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-nav/user-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserNavComponent);
    return UserNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-recipes/user-recipes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".createRecipe{\n\tfloat: right;\n\tmargin-right: 10px;\n  border:none;\n  padding: 6px 15px;\n  border-radius: 6px;\n  outline: none;\n  float: right;\n  margin-top: 5px;\n}\n\n.createRecipe:hover {\n    background-color:  #c7d3dd;\n   \n}\napp-card-layout{\n  display:block;\n  float:left;\n  width: calc(100% - 210px);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-recipes/user-recipes.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-nav></app-user-nav>\n<h1>My Recipes</h1>\n<div class=\"buttonWrapper\">\n\t<button class=\"createRecipe\" (click)=\"createRecipe()\">Create Recipe <i class=\"fa fa-plus-square-o\"></i></button>\n</div>\n<app-filterpane></app-filterpane>\n<app-card-layout [type]=\"'user'\" [editting]=\"true\" [deleting] =\"true\"></app-card-layout>"

/***/ }),

/***/ "../../../../../src/app/user-recipes/user-recipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRecipesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_recipe_modal_create_recipe_modal_component__ = __webpack_require__("../../../../../src/app/create-recipe-modal/create-recipe-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserRecipesComponent = (function () {
    function UserRecipesComponent(dialog) {
        this.dialog = dialog;
    }
    UserRecipesComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    UserRecipesComponent.prototype.createRecipe = function () {
        this.dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__create_recipe_modal_create_recipe_modal_component__["a" /* CreateRecipeModalComponent */], { width: '600px' });
        this.dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    UserRecipesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-recipes',
            template: __webpack_require__("../../../../../src/app/user-recipes/user-recipes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-recipes/user-recipes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]])
    ], UserRecipesComponent);
    return UserRecipesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map