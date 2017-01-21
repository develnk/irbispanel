"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var ng2_bootstrap_1 = require("ng2-bootstrap");
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
            ng2_bootstrap_1.DropdownModule.forRoot(),
            ng2_bootstrap_1.ModalModule,
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
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQywwQ0FBK0M7QUFDL0MsK0NBQTREO0FBRTVELGtEQUFnRDtBQUNoRCxzREFBb0Q7QUFDcEQsa0VBQWdFO0FBQ2hFLHNEQUFvRDtBQUNwRCxxREFBa0Q7QUFDbEQsa0RBQWdEO0FBQ2hELHdFQUFzRTtBQUN0RSxrRUFBZ0U7QUFDaEUsNkRBQTJEO0FBQzNELHlDQUFrRDtBQUNsRCx5Q0FBbUQ7QUFDbkQsMkRBQXlEO0FBdUJ6RCxJQUFhLGVBQWU7SUFBNUI7SUFBK0IsQ0FBQztJQUFELHNCQUFDO0FBQUQsQ0FBL0IsQUFBZ0MsSUFBQTtBQUFuQixlQUFlO0lBcEIzQixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCxxQkFBWTtZQUNmLHFCQUFZO1lBQ1QsOEJBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsMkJBQVc7WUFDZCx3QkFBVTtZQUNQLDBCQUFXO1lBQ1gsMEJBQVc7WUFDWCx5QkFBVTtZQUNWLHdCQUFVO1lBQ2Isc0NBQWlCO1lBQ2Qsa0NBQWU7WUFDZixrQ0FBZTtZQUNmLDhCQUFhO1NBQ2hCO1FBQ0QsWUFBWSxFQUFFLENBQUMsd0NBQWtCLEVBQUUsdUJBQWUsRUFBRSx3QkFBZ0IsQ0FBQztRQUNyRSxPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSx1QkFBZSxFQUFFLHdCQUFnQixDQUFDO0tBQ25FLENBQUM7R0FFVyxlQUFlLENBQUk7QUFBbkIsMENBQWUiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUsIE1vZGFsTW9kdWxlIH0gZnJvbSAnbmcyLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IEhvbWVNb2R1bGUgfSBmcm9tICcuL2hvbWUvaG9tZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hhcnRNb2R1bGUgfSBmcm9tICcuL2NoYXJ0cy9jaGFydC5tb2R1bGUnO1xuaW1wb3J0IHsgQmxhbmtQYWdlTW9kdWxlIH0gZnJvbSAnLi9ibGFuay1wYWdlL2JsYW5rUGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgVGFibGVNb2R1bGUgfSBmcm9tICcuL3RhYmxlcy90YWJsZS5tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybU1vZHVsZSB9IGZyb20gJy4vZm9ybXMvZm9ybXMubW9kdWxlJztcbmltcG9ydCB7IEdyaWRNb2R1bGUgfSBmcm9tICcuL2dyaWQvZ3JpZC5tb2R1bGUnO1xuaW1wb3J0IHsgQlNDb21wb25lbnRNb2R1bGUgfSBmcm9tICcuL2JzLWNvbXBvbmVudC9ic0NvbXBvbmVudC5tb2R1bGUnO1xuaW1wb3J0IHsgQlNFbGVtZW50TW9kdWxlIH0gZnJvbSAnLi9icy1lbGVtZW50L2JzRWxlbWVudC5tb2R1bGUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFRvcE5hdkNvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IFN5c0luZm9Nb2R1bGUgfSBmcm9tIFwiLi9zeXNpbmZvL3N5c2luZm8ubW9kdWxlXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICBcdFJvdXRlck1vZHVsZSxcbiAgICAgICAgRHJvcGRvd25Nb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgICBNb2RhbE1vZHVsZSxcbiAgICBcdEhvbWVNb2R1bGUsXG4gICAgICAgIENoYXJ0TW9kdWxlLFxuICAgICAgICBUYWJsZU1vZHVsZSxcbiAgICAgICAgRm9ybU1vZHVsZSxcbiAgICAgICAgR3JpZE1vZHVsZSxcbiAgICBcdEJTQ29tcG9uZW50TW9kdWxlLFxuICAgICAgICBCU0VsZW1lbnRNb2R1bGUsXG4gICAgICAgIEJsYW5rUGFnZU1vZHVsZSxcbiAgICAgICAgU3lzSW5mb01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbRGFzaGJvYXJkQ29tcG9uZW50LCBUb3BOYXZDb21wb25lbnQsIFNpZGViYXJDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtEYXNoYm9hcmRDb21wb25lbnQsIFRvcE5hdkNvbXBvbmVudCwgU2lkZWJhckNvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRNb2R1bGUgeyB9XG4iXX0=
