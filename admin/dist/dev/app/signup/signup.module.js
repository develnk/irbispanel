"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var signup_component_1 = require("./signup.component");
var SignupModule = (function () {
    function SignupModule() {
    }
    return SignupModule;
}());
SignupModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, router_1.RouterModule],
        declarations: [signup_component_1.SignupComponent],
        exports: [signup_component_1.SignupComponent]
    })
], SignupModule);
exports.SignupModule = SignupModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaWdudXAvc2lnbnVwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQywwQ0FBK0M7QUFFL0MsdURBQXFEO0FBUXJELElBQWEsWUFBWTtJQUF6QjtJQUE0QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUE1QixBQUE2QixJQUFBO0FBQWhCLFlBQVk7SUFOeEIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxxQkFBWSxDQUFDO1FBQ3JDLFlBQVksRUFBRSxDQUFDLGtDQUFlLENBQUM7UUFDL0IsT0FBTyxFQUFFLENBQUMsa0NBQWUsQ0FBQztLQUM3QixDQUFDO0dBRVcsWUFBWSxDQUFJO0FBQWhCLG9DQUFZIiwiZmlsZSI6ImFwcC9zaWdudXAvc2lnbnVwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU2lnbnVwQ29tcG9uZW50IH0gZnJvbSAnLi9zaWdudXAuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1NpZ251cENvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1NpZ251cENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWdudXBNb2R1bGUgeyB9XG4iXX0=
