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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvc2lkZWJhci9zaWRlYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFRMUMsSUFBYSxnQkFBZ0I7SUFON0I7UUFPQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBVyxFQUFFLENBQUM7SUFXdkIsQ0FBQztJQVZBLHNDQUFXLEdBQVg7UUFDQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBQ0QseUNBQWMsR0FBZCxVQUFlLE9BQVk7UUFDMUIsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7SUFDRixDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLGdCQUFnQjtJQU41QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSxjQUFjO0tBQzNCLENBQUM7R0FFVyxnQkFBZ0IsQ0FhNUI7QUFiWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnc2lkZWJhci1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ3NpZGViYXIuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWRlYmFyQ29tcG9uZW50IHtcblx0aXNBY3RpdmUgPSBmYWxzZTtcblx0c2hvd01lbnU6IHN0cmluZyA9ICcnO1xuXHRldmVudENhbGxlZCgpIHtcblx0XHR0aGlzLmlzQWN0aXZlID0gIXRoaXMuaXNBY3RpdmU7XG5cdH1cblx0YWRkRXhwYW5kQ2xhc3MoZWxlbWVudDogYW55KSB7XG5cdFx0aWYgKGVsZW1lbnQgPT09IHRoaXMuc2hvd01lbnUpIHtcblx0XHRcdHRoaXMuc2hvd01lbnUgPSAnMCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2hvd01lbnUgPSBlbGVtZW50O1xuXHRcdH1cblx0fVxufVxuIl19
