"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var index_1 = require("./name-list/index");
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [index_1.NameListService]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule],
        declarations: [],
        exports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule]
    })
], SharedModule);
exports.SharedModule = SharedModule;
var SharedModule_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQThEO0FBQzlELDBDQUErQztBQUMvQyx3Q0FBNkM7QUFDN0MsMENBQStDO0FBRS9DLDJDQUFvRDtBQVlwRCxJQUFhLFlBQVk7SUFBekI7SUFPQSxDQUFDO0lBTlUsb0JBQU8sR0FBZDtRQUNJLE1BQU0sQ0FBQztZQUNILFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLHVCQUFlLENBQUM7U0FDL0IsQ0FBQztJQUNOLENBQUM7SUFDTCxtQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksWUFBWTtJQU54QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLHFCQUFZLENBQUM7UUFDckMsWUFBWSxFQUFFLEVBQUU7UUFDaEIsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxtQkFBVyxFQUFFLHFCQUFZLENBQUM7S0FDckQsQ0FBQztHQUVXLFlBQVksQ0FPeEI7QUFQWSxvQ0FBWSIsImZpbGUiOiJhcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi9uYW1lLWxpc3QvaW5kZXgnO1xuXG4vKipcbiogRG8gbm90IHNwZWNpZnkgcHJvdmlkZXJzIGZvciBtb2R1bGVzIHRoYXQgbWlnaHQgYmUgaW1wb3J0ZWQgYnkgYSBsYXp5IGxvYWRlZCBtb2R1bGUuXG4qL1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbXSxcbiAgICBleHBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUm91dGVyTW9kdWxlXVxufSlcblxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogU2hhcmVkTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbTmFtZUxpc3RTZXJ2aWNlXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==
