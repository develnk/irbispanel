"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var index_1 = require("./signup/index");
var dashboard_routes_1 = require("./dashboard/dashboard.routes");
var can_deactivate_guard_service_1 = require("./can-deactivate-guard.service");
var selective_preloading_strategy_1 = require("./selective-preloading-strategy");
var index_2 = require("./login/index");
exports.appRoutes = index_1.SignupRoutes.concat(dashboard_routes_1.DashboardRoutes, [
    { path: 'login', component: index_2.LoginComponent }
]);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(exports.appRoutes, { preloadingStrategy: selective_preloading_strategy_1.SelectivePreloadingStrategy })
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: [
            can_deactivate_guard_service_1.CanDeactivateGuard,
            selective_preloading_strategy_1.SelectivePreloadingStrategy
        ]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLDBDQUF1RDtBQUN2RCxzQ0FBeUM7QUFDekMsd0NBQThDO0FBQzlDLGlFQUErRDtBQUMvRCwrRUFBb0U7QUFDcEUsaUZBQWdGO0FBRWhGLHVDQUErQztBQUVsQyxRQUFBLFNBQVMsR0FDbEIsb0JBQVksUUFDWixrQ0FBZTtJQUNsQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLHNCQUFjLEVBQUU7R0FDM0M7QUFpQkYsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBK0IsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBL0IsQUFBZ0MsSUFBQTtBQUFuQixnQkFBZ0I7SUFmNUIsZUFBUSxDQUFDO1FBQ1QsT0FBTyxFQUFFO1lBQ1IscUJBQVksQ0FBQyxPQUFPLENBQ25CLGlCQUFTLEVBQ1QsRUFBRSxrQkFBa0IsRUFBRSwyREFBMkIsRUFBRSxDQUNuRDtTQUNEO1FBQ0QsT0FBTyxFQUFFO1lBQ1IscUJBQVk7U0FDWjtRQUNELFNBQVMsRUFBRTtZQUNWLGlEQUFrQjtZQUNsQiwyREFBMkI7U0FDM0I7S0FDRCxDQUFDO0dBQ1csZ0JBQWdCLENBQUc7QUFBbkIsNENBQWdCIiwiZmlsZSI6ImFwcC9hcHAucm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2lnbnVwUm91dGVzIH0gZnJvbSAnLi9zaWdudXAvaW5kZXgnO1xuaW1wb3J0IHsgRGFzaGJvYXJkUm91dGVzIH0gZnJvbSAnLi9kYXNoYm9hcmQvZGFzaGJvYXJkLnJvdXRlcyc7XG5pbXBvcnQgeyBDYW5EZWFjdGl2YXRlR3VhcmQgfSBmcm9tIFwiLi9jYW4tZGVhY3RpdmF0ZS1ndWFyZC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTZWxlY3RpdmVQcmVsb2FkaW5nU3RyYXRlZ3kgfSAgIGZyb20gJy4vc2VsZWN0aXZlLXByZWxvYWRpbmctc3RyYXRlZ3knO1xuXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgYXBwUm91dGVzOiBSb3V0ZXMgPSBbXG5cdC4uLlNpZ251cFJvdXRlcyxcblx0Li4uRGFzaGJvYXJkUm91dGVzLFxuXHR7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdFJvdXRlck1vZHVsZS5mb3JSb290KFxuXHRcdFx0YXBwUm91dGVzLFxuXHRcdFx0eyBwcmVsb2FkaW5nU3RyYXRlZ3k6IFNlbGVjdGl2ZVByZWxvYWRpbmdTdHJhdGVneSB9XG5cdFx0KVxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Um91dGVyTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdENhbkRlYWN0aXZhdGVHdWFyZCxcblx0XHRTZWxlY3RpdmVQcmVsb2FkaW5nU3RyYXRlZ3lcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XG4iXX0=
