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
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var ng2_bootstrap_2 = require("ng2-bootstrap/ng2-bootstrap");
var home_module_1 = require("./home/home.module");
var chart_module_1 = require("./charts/chart.module");
var blankPage_module_1 = require("./blank-page/blankPage.module");
var table_module_1 = require("./tables/table.module");
var forms_module_1 = require("./forms/forms.module");
var grid_module_1 = require("./grid/grid.module");
var bsComponent_module_1 = require("./bs-component/bsComponent.module");
var bsElement_module_1 = require("./bs-element/bsElement.module");
var dashboard_component_1 = require("./dashboard.component");
var index_1 = require("../shared/index");
var index_2 = require("../shared/index");
var sysinfo_module_1 = require("./sysinfo/sysinfo.module");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule,
            ng2_bootstrap_1.DropdownModule,
            ng2_bootstrap_2.ModalModule,
            home_module_1.HomeModule,
            chart_module_1.ChartModule,
            table_module_1.TableModule,
            forms_module_1.FormModule,
            grid_module_1.GridModule,
            bsComponent_module_1.BSComponentModule,
            bsElement_module_1.BSElementModule,
            blankPage_module_1.BlankPageModule,
            sysinfo_module_1.SysInfoModule
        ],
        declarations: [dashboard_component_1.DashboardComponent, index_1.TopNavComponent, index_2.SidebarComponent],
        exports: [dashboard_component_1.DashboardComponent, index_1.TopNavComponent, index_2.SidebarComponent]
    }),
    __metadata("design:paramtypes", [])
], DashboardModule);
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQywwQ0FBK0M7QUFDL0MsNkRBQTZEO0FBQzdELDZEQUEwRDtBQUUxRCxrREFBZ0Q7QUFDaEQsc0RBQW9EO0FBQ3BELGtFQUFnRTtBQUNoRSxzREFBb0Q7QUFDcEQscURBQWtEO0FBQ2xELGtEQUFnRDtBQUNoRCx3RUFBc0U7QUFDdEUsa0VBQWdFO0FBRWhFLDZEQUEyRDtBQUUzRCx5Q0FBZ0Q7QUFDaEQseUNBQWlEO0FBQ2pELDJEQUF1RDtBQXVCdkQsSUFBYSxlQUFlO0lBQTVCO0lBQStCLENBQUM7SUFBRCxzQkFBQztBQUFELENBQS9CLEFBQWdDLElBQUE7QUFBbkIsZUFBZTtJQXBCM0IsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wscUJBQVk7WUFDZixxQkFBWTtZQUNaLDhCQUFjO1lBQ1gsMkJBQVc7WUFDZCx3QkFBVTtZQUNQLDBCQUFXO1lBQ1gsMEJBQVc7WUFDWCx5QkFBVTtZQUNWLHdCQUFVO1lBQ2Isc0NBQWlCO1lBQ2Qsa0NBQWU7WUFDZixrQ0FBZTtZQUNmLDhCQUFhO1NBQ2hCO1FBQ0QsWUFBWSxFQUFFLENBQUMsd0NBQWtCLEVBQUUsdUJBQWUsRUFBRSx3QkFBZ0IsQ0FBQztRQUNyRSxPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSx1QkFBZSxFQUFFLHdCQUFnQixDQUFDO0tBQ25FLENBQUM7O0dBRVcsZUFBZSxDQUFJO0FBQW5CLDBDQUFlIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcbmltcG9ydCB7IE1vZGFsTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGFydE1vZHVsZSB9IGZyb20gJy4vY2hhcnRzL2NoYXJ0Lm1vZHVsZSc7XG5pbXBvcnQgeyBCbGFua1BhZ2VNb2R1bGUgfSBmcm9tICcuL2JsYW5rLXBhZ2UvYmxhbmtQYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBUYWJsZU1vZHVsZSB9IGZyb20gJy4vdGFibGVzL3RhYmxlLm1vZHVsZSc7XG5pbXBvcnQgeyBGb3JtTW9kdWxlIH0gZnJvbSAnLi9mb3Jtcy9mb3Jtcy5tb2R1bGUnO1xuaW1wb3J0IHsgR3JpZE1vZHVsZSB9IGZyb20gJy4vZ3JpZC9ncmlkLm1vZHVsZSc7XG5pbXBvcnQgeyBCU0NvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vYnMtY29tcG9uZW50L2JzQ29tcG9uZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBCU0VsZW1lbnRNb2R1bGUgfSBmcm9tICcuL2JzLWVsZW1lbnQvYnNFbGVtZW50Lm1vZHVsZSc7XG5cbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7VG9wTmF2Q29tcG9uZW50fSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHtTaWRlYmFyQ29tcG9uZW50fSBmcm9tICcuLi9zaGFyZWQvaW5kZXgnO1xuaW1wb3J0IHtTeXNJbmZvTW9kdWxlfSBmcm9tIFwiLi9zeXNpbmZvL3N5c2luZm8ubW9kdWxlXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICBcdFJvdXRlck1vZHVsZSxcbiAgICBcdERyb3Bkb3duTW9kdWxlLFxuICAgICAgICBNb2RhbE1vZHVsZSxcbiAgICBcdEhvbWVNb2R1bGUsXG4gICAgICAgIENoYXJ0TW9kdWxlLFxuICAgICAgICBUYWJsZU1vZHVsZSxcbiAgICAgICAgRm9ybU1vZHVsZSxcbiAgICAgICAgR3JpZE1vZHVsZSxcbiAgICBcdEJTQ29tcG9uZW50TW9kdWxlLFxuICAgICAgICBCU0VsZW1lbnRNb2R1bGUsXG4gICAgICAgIEJsYW5rUGFnZU1vZHVsZSxcbiAgICAgICAgU3lzSW5mb01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbRGFzaGJvYXJkQ29tcG9uZW50LCBUb3BOYXZDb21wb25lbnQsIFNpZGViYXJDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtEYXNoYm9hcmRDb21wb25lbnQsIFRvcE5hdkNvbXBvbmVudCwgU2lkZWJhckNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRNb2R1bGUgeyB9XG4iXX0=
