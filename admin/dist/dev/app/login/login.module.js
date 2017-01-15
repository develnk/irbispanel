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
var login_component_1 = require("./login.component");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule, router_1.RouterModule],
        declarations: [login_component_1.LoginComponent],
        exports: [login_component_1.LoginComponent]
    })
], LoginModule);
exports.LoginModule = LoginModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0Msd0NBQTZDO0FBQzdDLDBDQUErQztBQUMvQyxxREFBbUQ7QUFRbkQsSUFBYSxXQUFXO0lBQXhCO0lBQTJCLENBQUM7SUFBRCxrQkFBQztBQUFELENBQTNCLEFBQTRCLElBQUE7QUFBZixXQUFXO0lBTnZCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLG1CQUFXLEVBQUUscUJBQVksRUFBRSxxQkFBWSxDQUFDO1FBQ2xELFlBQVksRUFBRSxDQUFDLGdDQUFjLENBQUM7UUFDOUIsT0FBTyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztLQUM1QixDQUFDO0dBRVcsV0FBVyxDQUFJO0FBQWYsa0NBQVciLCJmaWxlIjoiYXBwL2xvZ2luL2xvZ2luLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbTG9naW5Db21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtMb2dpbkNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbk1vZHVsZSB7IH1cbiJdfQ==
