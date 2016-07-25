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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var topnav_1 = require('../../../shared/topnav/topnav');
var sidebar_1 = require('../../../shared/sidebar/sidebar');
var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dashboard-cmp',
            templateUrl: 'dashboard.html',
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES, topnav_1.TopNavComponent, sidebar_1.SidebarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFFcEQsdUJBQThCLCtCQUErQixDQUFDLENBQUE7QUFDOUQsd0JBQStCLGlDQUFpQyxDQUFDLENBQUE7QUFVakU7SUFBQTtJQUFrQyxDQUFDO0lBUm5DO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsZ0JBQWdCO1lBQzdCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLHdCQUFlLEVBQUUsMEJBQWdCLENBQUM7U0FDbkUsQ0FBQzs7MEJBQUE7SUFFZ0MseUJBQUM7QUFBRCxDQUFsQyxBQUFtQyxJQUFBO0FBQXRCLDBCQUFrQixxQkFBSSxDQUFBIiwiZmlsZSI6ImxheW91dHMvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtUb3BOYXZDb21wb25lbnR9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC90b3BuYXYvdG9wbmF2JztcbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NpZGViYXIvc2lkZWJhcic7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2Rhc2hib2FyZC1jbXAnLFxuICB0ZW1wbGF0ZVVybDogJ2Rhc2hib2FyZC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBUb3BOYXZDb21wb25lbnQsIFNpZGViYXJDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IHsgfVxuIl19
