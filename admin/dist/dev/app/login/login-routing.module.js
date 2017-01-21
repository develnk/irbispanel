"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_service_1 = require("../auth-guard.service");
var auth_service_1 = require("../auth.service");
var login_component_1 = require("./login.component");
var loginRoutes = [
    { path: '', component: login_component_1.LoginComponent }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(loginRoutes)
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: [
            auth_guard_service_1.AuthGuard,
            auth_service_1.AuthService
        ]
    })
], LoginRoutingModule);
exports.LoginRoutingModule = LoginRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXFEO0FBQ3JELDBDQUF1RDtBQUN2RCw0REFBNkQ7QUFDN0QsZ0RBQXVEO0FBQ3ZELHFEQUF5RDtBQUV6RCxJQUFNLFdBQVcsR0FBVztJQUN4QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7Q0FDMUMsQ0FBQztBQWNGLElBQWEsa0JBQWtCO0lBQS9CO0lBQWlDLENBQUM7SUFBRCx5QkFBQztBQUFELENBQWpDLEFBQWtDLElBQUE7QUFBckIsa0JBQWtCO0lBWjlCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLHFCQUFZLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztTQUNyQztRQUNELE9BQU8sRUFBRTtZQUNMLHFCQUFZO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDUCw4QkFBUztZQUNULDBCQUFXO1NBQ2Q7S0FDSixDQUFDO0dBQ1csa0JBQWtCLENBQUc7QUFBckIsZ0RBQWtCIiwiZmlsZSI6ImFwcC9sb2dpbi9sb2dpbi1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSAgICAgICAgICAgIGZyb20gJy4uL2F1dGgtZ3VhcmQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9ICAgICAgICAgIGZyb20gJy4uL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9ICAgICAgIGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcblxuY29uc3QgbG9naW5Sb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQobG9naW5Sb3V0ZXMpXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFJvdXRlck1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEF1dGhHdWFyZCxcbiAgICAgICAgQXV0aFNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luUm91dGluZ01vZHVsZSB7fVxuIl19
