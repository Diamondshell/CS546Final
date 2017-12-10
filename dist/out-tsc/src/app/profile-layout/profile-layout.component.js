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
var data_service_1 = require("../data.service");
var ProfileLayoutComponent = /** @class */ (function () {
    function ProfileLayoutComponent(dataService) {
        this.dataService = dataService;
    }
    ProfileLayoutComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.dataService.getCurrentUser()
            .subscribe(function (profileInfo) { return _this.profileInfo = profileInfo; });
    };
    ProfileLayoutComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ProfileLayoutComponent.prototype, "editting", void 0);
    ProfileLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-profile-layout',
            templateUrl: './profile-layout.component.html',
            styleUrls: ['./profile-layout.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], ProfileLayoutComponent);
    return ProfileLayoutComponent;
}());
exports.ProfileLayoutComponent = ProfileLayoutComponent;
//# sourceMappingURL=profile-layout.component.js.map