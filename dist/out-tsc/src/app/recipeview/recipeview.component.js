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
var router_1 = require("@angular/router");
var data_service_1 = require("../data.service");
var material_1 = require("@angular/material");
var rate_modal_component_1 = require("../rate-modal/rate-modal.component");
var RecipeviewComponent = /** @class */ (function () {
    function RecipeviewComponent(route, dataService, dialog) {
        this.route = route;
        this.dataService = dataService;
        this.dialog = dialog;
        this.numChecked = [];
        this.numUnChecked = [];
    }
    RecipeviewComponent.prototype.print = function () {
        window.print();
    };
    RecipeviewComponent.prototype.getRecipeById = function (id) {
        var _this = this;
        this.dataService.getRecipeById(id)
            .subscribe(function (recipeDetail) { return _this.recipe = recipeDetail; });
    };
    RecipeviewComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.getRecipeById(id);
        this.numChecked = new Array(this.recipe.Rating);
        this.numUnChecked = new Array(5 - this.recipe.Rating);
    };
    RecipeviewComponent.prototype.displayRateModal = function () {
        this.dialogRef = this.dialog.open(rate_modal_component_1.RateModalComponent, { width: '600px' });
        this.dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    RecipeviewComponent = __decorate([
        core_1.Component({
            selector: 'app-recipeview',
            templateUrl: './recipeview.component.html',
            styleUrls: ['./recipeview.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            data_service_1.DataService, material_1.MatDialog])
    ], RecipeviewComponent);
    return RecipeviewComponent;
}());
exports.RecipeviewComponent = RecipeviewComponent;
//# sourceMappingURL=recipeview.component.js.map