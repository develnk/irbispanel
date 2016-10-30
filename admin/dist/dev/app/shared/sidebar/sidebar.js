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
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);
exports.SidebarComponent = SidebarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2lkZWJhci9zaWRlYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFRMUM7SUFMQTtRQU1DLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFXLEVBQUUsQ0FBQztJQVd2QixDQUFDO0lBVkEsc0NBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ2hDLENBQUM7SUFDRCx5Q0FBYyxHQUFkLFVBQWUsT0FBWTtRQUMxQixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDckIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztJQUNGLENBQUM7SUFDRix1QkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYkQ7SUFMQyxnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSxjQUFjO0tBQzNCLENBQUM7O29CQWNEO0FBYlksMkJBQUEsZ0JBQWdCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdzaWRlYmFyLWNtcCcsXG5cdHRlbXBsYXRlVXJsOiAnc2lkZWJhci5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IHtcblx0aXNBY3RpdmUgPSBmYWxzZTtcblx0c2hvd01lbnU6IHN0cmluZyA9ICcnO1xuXHRldmVudENhbGxlZCgpIHtcblx0XHR0aGlzLmlzQWN0aXZlID0gIXRoaXMuaXNBY3RpdmU7XG5cdH1cblx0YWRkRXhwYW5kQ2xhc3MoZWxlbWVudDogYW55KSB7XG5cdFx0aWYgKGVsZW1lbnQgPT09IHRoaXMuc2hvd01lbnUpIHtcblx0XHRcdHRoaXMuc2hvd01lbnUgPSAnMCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2hvd01lbnUgPSBlbGVtZW50O1xuXHRcdH1cblx0fVxufVxuIl19
