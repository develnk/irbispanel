"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.isActive = false;
        this.showMenu = '';
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sidebar-cmp',
        templateUrl: 'sidebar.html'
    })
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2lkZWJhci9zaWRlYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFPMUMsSUFBYSxnQkFBZ0I7SUFMN0I7UUFNQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBVyxFQUFFLENBQUM7SUFXdkIsQ0FBQztJQVZBLHNDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBQ0QseUNBQWMsR0FBZCxVQUFlLE9BQVk7UUFDMUIsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7SUFDRixDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLGdCQUFnQjtJQUw1QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSxjQUFjO0tBQzNCLENBQUM7R0FDVyxnQkFBZ0IsQ0FhNUI7QUFiWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnc2lkZWJhci1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ3NpZGViYXIuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCB7XG5cdGlzQWN0aXZlID0gZmFsc2U7XG5cdHNob3dNZW51OiBzdHJpbmcgPSAnJztcblx0ZXZlbnRDYWxsZWQoKSB7XG5cdFx0dGhpcy5pc0FjdGl2ZSA9ICF0aGlzLmlzQWN0aXZlO1xuXHR9XG5cdGFkZEV4cGFuZENsYXNzKGVsZW1lbnQ6IGFueSkge1xuXHRcdGlmIChlbGVtZW50ID09PSB0aGlzLnNob3dNZW51KSB7XG5cdFx0XHR0aGlzLnNob3dNZW51ID0gJzAnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNob3dNZW51ID0gZWxlbWVudDtcblx0XHR9XG5cdH1cbn1cbiJdfQ==
