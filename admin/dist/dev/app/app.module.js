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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var login_module_1 = require("./login/login.module");
var signup_module_1 = require("./signup/signup.module");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var shared_module_1 = require("./shared/shared.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(app_routes_1.routes),
            login_module_1.LoginModule,
            signup_module_1.SignupModule,
            dashboard_module_1.DashboardModule,
            shared_module_1.SharedModule.forRoot()
        ],
        declarations: [app_component_1.AppComponent],
        providers: [{
                provide: common_1.APP_BASE_HREF,
                useValue: '/'
            }],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsOERBQTBEO0FBQzFELDBDQUFnRDtBQUNoRCwwQ0FBK0M7QUFDL0Msc0NBQTJDO0FBQzNDLGlEQUErQztBQUMvQywyQ0FBc0M7QUFFdEMscURBQW1EO0FBQ25ELHdEQUFzRDtBQUN0RCxpRUFBK0Q7QUFDL0Qsd0RBQXNEO0FBcUJ0RCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLFNBQVM7SUFuQnJCLGVBQVEsQ0FBQztRQUNULE9BQU8sRUFBRTtZQUNSLGdDQUFhO1lBQ2IsaUJBQVU7WUFDVixxQkFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBTSxDQUFDO1lBQzVCLDBCQUFXO1lBQ1gsNEJBQVk7WUFDWixrQ0FBZTtZQUNmLDRCQUFZLENBQUMsT0FBTyxFQUFFO1NBQ3RCO1FBQ0QsWUFBWSxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUM1QixTQUFTLEVBQUUsQ0FBQztnQkFDWCxPQUFPLEVBQUUsc0JBQWE7Z0JBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7YUFDM0IsQ0FBQztRQUNGLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7S0FFekIsQ0FBQzs7R0FFVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcblxuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tICcuL2xvZ2luL2xvZ2luLm1vZHVsZSc7XG5pbXBvcnQgeyBTaWdudXBNb2R1bGUgfSBmcm9tICcuL3NpZ251cC9zaWdudXAubW9kdWxlJztcbmltcG9ydCB7IERhc2hib2FyZE1vZHVsZSB9IGZyb20gJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRCcm93c2VyTW9kdWxlLFxuXHRcdEh0dHBNb2R1bGUsXG5cdFx0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcblx0XHRMb2dpbk1vZHVsZSxcblx0XHRTaWdudXBNb2R1bGUsXG5cdFx0RGFzaGJvYXJkTW9kdWxlLFxuXHRcdFNoYXJlZE1vZHVsZS5mb3JSb290KClcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50XSxcblx0cHJvdmlkZXJzOiBbe1xuXHRcdHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXG5cdFx0dXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXG5cdH1dLFxuXHRib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=
