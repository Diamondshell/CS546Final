"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var of_1 = require("rxjs/observable/of");
var mock_data_1 = require("./mock-data");
// import { Http, Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map';
var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getAllRecipes = function () {
        //return this._http.get("/").map(result => this.result = result.json().data);
        return of_1.of(mock_data_1.recipes);
    };
    DataService.prototype.getCurrentUser = function () {
        //return this._http.get("/").map(result => this.result = result.json().data);
        return of_1.of(mock_data_1.profileInfo);
    };
    DataService.prototype.getRecipeById = function (id) {
        //return this._http.get("/", id).map(result => this.result = result.json().data);
        return of_1.of(mock_data_1.recipeDetail);
    };
    DataService.prototype.updateUserInfo = function (changed) {
        //send changed data to server
        // this._http.post("/", changed);
        console.log(changed);
        return of_1.of("");
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map