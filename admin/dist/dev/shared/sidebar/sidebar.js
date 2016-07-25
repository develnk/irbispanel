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
var common_1 = require('@angular/common');
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
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sidebar-cmp',
            templateUrl: 'sidebar.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zaWRlYmFyL3NpZGViYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCx1QkFBaUQsaUJBQWlCLENBQUMsQ0FBQTtBQVVuRTtJQUFBO1FBQ0MsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQVcsRUFBRSxDQUFDO0lBV3ZCLENBQUM7SUFWQSxzQ0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUNELHlDQUFjLEdBQWQsVUFBZSxPQUFZO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNyQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN6QixDQUFDO0lBQ0YsQ0FBQztJQW5CRjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLGNBQWM7WUFDM0IsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsd0JBQWUsRUFBRSx3QkFBZSxDQUFDO1NBQ2pFLENBQUM7O3dCQUFBO0lBZUYsdUJBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLHdCQUFnQixtQkFhNUIsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc2lkZWJhci9zaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnc2lkZWJhci1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ3NpZGViYXIuaHRtbCcsXG5cdGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgQ09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCB7XG5cdGlzQWN0aXZlID0gZmFsc2U7XG5cdHNob3dNZW51OiBzdHJpbmcgPSAnJztcblx0ZXZlbnRDYWxsZWQoKSB7XG5cdFx0dGhpcy5pc0FjdGl2ZSA9ICF0aGlzLmlzQWN0aXZlO1xuXHR9XG5cdGFkZEV4cGFuZENsYXNzKGVsZW1lbnQ6IGFueSkge1xuXHRcdGlmIChlbGVtZW50ID09PSB0aGlzLnNob3dNZW51KSB7XG5cdFx0XHR0aGlzLnNob3dNZW51ID0gJzAnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNob3dNZW51ID0gZWxlbWVudDtcblx0XHR9XG5cdH1cbn1cbiJdfQ==
