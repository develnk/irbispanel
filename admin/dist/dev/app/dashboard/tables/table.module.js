"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var table_component_1 = require("./table.component");
var TableModule = (function () {
    function TableModule() {
    }
    return TableModule;
}());
TableModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule],
        declarations: [table_component_1.TableComponent],
        exports: [table_component_1.TableComponent]
    })
], TableModule);
exports.TableModule = TableModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvdGFibGVzL3RhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUUvQyxxREFBbUQ7QUFRbkQsSUFBYSxXQUFXO0lBQXhCO0lBQTJCLENBQUM7SUFBRCxrQkFBQztBQUFELENBQTNCLEFBQTRCLElBQUE7QUFBZixXQUFXO0lBTnZCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7UUFDdkIsWUFBWSxFQUFFLENBQUMsZ0NBQWMsQ0FBQztRQUM5QixPQUFPLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO0tBQzVCLENBQUM7R0FFVyxXQUFXLENBQUk7QUFBZixrQ0FBVyIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL3RhYmxlcy90YWJsZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1JvdXRlck1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbVGFibGVDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtUYWJsZUNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBUYWJsZU1vZHVsZSB7IH1cbiJdfQ==
