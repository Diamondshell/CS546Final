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
var FilterpaneComponent = /** @class */ (function () {
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
        core_1.Component({
            selector: 'app-filterpane',
            templateUrl: './filterpane.component.html',
            styleUrls: ['./filterpane.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FilterpaneComponent);
    return FilterpaneComponent;
}());
exports.FilterpaneComponent = FilterpaneComponent;
//# sourceMappingURL=filterpane.component.js.map