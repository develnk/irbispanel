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
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQywwQ0FBK0M7QUFDL0MsNkRBQTZEO0FBQzdELDZEQUEwRDtBQUUxRCxrREFBZ0Q7QUFDaEQsc0RBQW9EO0FBQ3BELGtFQUFnRTtBQUNoRSxzREFBb0Q7QUFDcEQscURBQWtEO0FBQ2xELGtEQUFnRDtBQUNoRCx3RUFBc0U7QUFDdEUsa0VBQWdFO0FBRWhFLDZEQUEyRDtBQUUzRCx5Q0FBZ0Q7QUFDaEQseUNBQWlEO0FBQ2pELDJEQUF1RDtBQXVCdkQsSUFBYSxlQUFlO0lBQTVCO0lBQStCLENBQUM7SUFBRCxzQkFBQztBQUFELENBQS9CLEFBQWdDLElBQUE7QUFBbkIsZUFBZTtJQXBCM0IsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wscUJBQVk7WUFDZixxQkFBWTtZQUNaLDhCQUFjO1lBQ1gsMkJBQVc7WUFDZCx3QkFBVTtZQUNQLDBCQUFXO1lBQ1gsMEJBQVc7WUFDWCx5QkFBVTtZQUNWLHdCQUFVO1lBQ2Isc0NBQWlCO1lBQ2Qsa0NBQWU7WUFDZixrQ0FBZTtZQUNmLDhCQUFhO1NBQ2hCO1FBQ0QsWUFBWSxFQUFFLENBQUMsd0NBQWtCLEVBQUUsdUJBQWUsRUFBRSx3QkFBZ0IsQ0FBQztRQUNyRSxPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSx1QkFBZSxFQUFFLHdCQUFnQixDQUFDO0tBQ25FLENBQUM7R0FFVyxlQUFlLENBQUk7QUFBbkIsMENBQWUiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBIb21lTW9kdWxlIH0gZnJvbSAnLi9ob21lL2hvbWUubW9kdWxlJztcbmltcG9ydCB7IENoYXJ0TW9kdWxlIH0gZnJvbSAnLi9jaGFydHMvY2hhcnQubW9kdWxlJztcbmltcG9ydCB7IEJsYW5rUGFnZU1vZHVsZSB9IGZyb20gJy4vYmxhbmstcGFnZS9ibGFua1BhZ2UubW9kdWxlJztcbmltcG9ydCB7IFRhYmxlTW9kdWxlIH0gZnJvbSAnLi90YWJsZXMvdGFibGUubW9kdWxlJztcbmltcG9ydCB7IEZvcm1Nb2R1bGUgfSBmcm9tICcuL2Zvcm1zL2Zvcm1zLm1vZHVsZSc7XG5pbXBvcnQgeyBHcmlkTW9kdWxlIH0gZnJvbSAnLi9ncmlkL2dyaWQubW9kdWxlJztcbmltcG9ydCB7IEJTQ29tcG9uZW50TW9kdWxlIH0gZnJvbSAnLi9icy1jb21wb25lbnQvYnNDb21wb25lbnQubW9kdWxlJztcbmltcG9ydCB7IEJTRWxlbWVudE1vZHVsZSB9IGZyb20gJy4vYnMtZWxlbWVudC9ic0VsZW1lbnQubW9kdWxlJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50JztcblxuaW1wb3J0IHtUb3BOYXZDb21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQge1NpZGViYXJDb21wb25lbnR9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQge1N5c0luZm9Nb2R1bGV9IGZyb20gXCIuL3N5c2luZm8vc3lzaW5mby5tb2R1bGVcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgIFx0Um91dGVyTW9kdWxlLFxuICAgIFx0RHJvcGRvd25Nb2R1bGUsXG4gICAgICAgIE1vZGFsTW9kdWxlLFxuICAgIFx0SG9tZU1vZHVsZSxcbiAgICAgICAgQ2hhcnRNb2R1bGUsXG4gICAgICAgIFRhYmxlTW9kdWxlLFxuICAgICAgICBGb3JtTW9kdWxlLFxuICAgICAgICBHcmlkTW9kdWxlLFxuICAgIFx0QlNDb21wb25lbnRNb2R1bGUsXG4gICAgICAgIEJTRWxlbWVudE1vZHVsZSxcbiAgICAgICAgQmxhbmtQYWdlTW9kdWxlLFxuICAgICAgICBTeXNJbmZvTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtEYXNoYm9hcmRDb21wb25lbnQsIFRvcE5hdkNvbXBvbmVudCwgU2lkZWJhckNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0Rhc2hib2FyZENvbXBvbmVudCwgVG9wTmF2Q29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZE1vZHVsZSB7IH1cbiJdfQ==
