"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var grid_component_1 = require("./grid.component");
var GridModule = (function () {
    function GridModule() {
    }
    return GridModule;
}());
GridModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule],
        declarations: [grid_component_1.GridComponent],
        exports: [grid_component_1.GridComponent]
    })
], GridModule);
exports.GridModule = GridModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZ3JpZC9ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUUvQyxtREFBaUQ7QUFRakQsSUFBYSxVQUFVO0lBQXZCO0lBQTBCLENBQUM7SUFBRCxpQkFBQztBQUFELENBQTFCLEFBQTJCLElBQUE7QUFBZCxVQUFVO0lBTnRCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7UUFDdkIsWUFBWSxFQUFFLENBQUMsOEJBQWEsQ0FBQztRQUM3QixPQUFPLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO0tBQzNCLENBQUM7R0FFVyxVQUFVLENBQUk7QUFBZCxnQ0FBVSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2dyaWQvZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW0dyaWRDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtHcmlkQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEdyaWRNb2R1bGUgeyB9XG4iXX0=
