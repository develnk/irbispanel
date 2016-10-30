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
var router_1 = require("@angular/router");
var auth_guard_1 = require("./auth.guard");
var login_1 = require("../../pages/login/components/login");
var signup_1 = require("../../pages/signup/components/signup");
var dashboard_1 = require("../dashboard/components/dashboard");
var blank_page_1 = require("../../pages/blank-page/components/blank_page");
var component_1 = require("../../pages/component/components/component");
var grid_1 = require("../../pages/grid/components/grid");
var bs_element_1 = require("../../pages/bootstrap-element/components/bs_element");
var forms_1 = require("../../pages/forms/components/forms");
var tables_1 = require("../../pages/tables/components/tables");
var charts_1 = require("../../pages/charts/components/charts");
var home_1 = require("../../pages/home/components/home");
var sysinfo_1 = require("../../pages/sysinfo/components/sysinfo");
exports.routes = [
    { path: '', component: login_1.LoginComponent },
    { path: 'signup', component: signup_1.SignupComponent },
    { path: 'dashboard', component: dashboard_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: '/home', component: home_1.HomeComponent },
            { path: '/chart', component: charts_1.ChartComponent },
            { path: '/table', component: tables_1.TableComponent },
            { path: '/forms', component: forms_1.FormComponent },
            { path: '/element', component: bs_element_1.BSElementComponent },
            { path: '/grid', component: grid_1.GridComponent },
            { path: '/component', component: component_1.NG2Component },
            { path: '/sysinfo', component: sysinfo_1.SysInfoComponent },
            { path: '/blank-page', component: blank_page_1.BlankPageComponent }
        ]
    },
];
var AppRoutes = (function () {
    function AppRoutes() {
    }
    return AppRoutes;
}());
AppRoutes = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutes);
exports.AppRoutes = AppRoutes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sYXlvdXRzL2Jhc2UvYXBwLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUF1RDtBQUN2RCwyQ0FBeUM7QUFDekMsNERBQW9FO0FBQ3BFLCtEQUF1RTtBQUN2RSwrREFBdUU7QUFDdkUsMkVBQWtGO0FBQ2xGLHdFQUEwRTtBQUMxRSx5REFBaUU7QUFDakUsa0ZBQXlGO0FBQ3pGLDREQUFtRTtBQUNuRSwrREFBc0U7QUFDdEUsK0RBQXNFO0FBQ3RFLHlEQUFpRTtBQUNqRSxrRUFBMEU7QUFFN0QsUUFBQSxNQUFNLEdBQVc7SUFDNUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxzQkFBYyxFQUFFO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsd0JBQWUsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLDhCQUFrQixFQUFFLFdBQVcsRUFBRSxDQUFDLHNCQUFTLENBQUM7UUFDMUUsUUFBUSxFQUFFO1lBQ1IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFO1lBQzNDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsdUJBQWMsRUFBRTtZQUM3QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLHVCQUFjLEVBQUU7WUFDN0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxxQkFBYSxFQUFFO1lBQzVDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsK0JBQWtCLEVBQUM7WUFDbEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFO1lBQzNDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsd0JBQVksRUFBRTtZQUMvQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDBCQUFnQixFQUFDO1lBQ2hELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsK0JBQWtCLEVBQUU7U0FDdkQ7S0FDRjtDQUNGLENBQUM7QUFPRjtJQUFBO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQXhCLEFBQXlCLElBQUE7QUFBekI7SUFMQyxlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFNLENBQUMsQ0FBQztRQUN2QyxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO0tBQ3hCLENBQUM7O2FBRXVCO0FBQVosb0JBQUEsU0FBUyxDQUFBIiwiZmlsZSI6ImFwcC9sYXlvdXRzL2Jhc2UvYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL2F1dGguZ3VhcmQnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuLi8uLi9wYWdlcy9sb2dpbi9jb21wb25lbnRzL2xvZ2luJztcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3BhZ2VzL3NpZ251cC9jb21wb25lbnRzL3NpZ251cCc7XG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuLi9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQnO1xuaW1wb3J0IHsgQmxhbmtQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vcGFnZXMvYmxhbmstcGFnZS9jb21wb25lbnRzL2JsYW5rX3BhZ2UnO1xuaW1wb3J0IHsgTkcyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vcGFnZXMvY29tcG9uZW50L2NvbXBvbmVudHMvY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9wYWdlcy9ncmlkL2NvbXBvbmVudHMvZ3JpZCc7XG5pbXBvcnQgeyBCU0VsZW1lbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9wYWdlcy9ib290c3RyYXAtZWxlbWVudC9jb21wb25lbnRzL2JzX2VsZW1lbnQnO1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3BhZ2VzL2Zvcm1zL2NvbXBvbmVudHMvZm9ybXMnO1xuaW1wb3J0IHsgVGFibGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi9wYWdlcy90YWJsZXMvY29tcG9uZW50cy90YWJsZXMnO1xuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9wYWdlcy9jaGFydHMvY29tcG9uZW50cy9jaGFydHMnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lJztcbmltcG9ydCB7IFN5c0luZm9Db21wb25lbnQgfSBmcm9tICcuLi8uLi9wYWdlcy9zeXNpbmZvL2NvbXBvbmVudHMvc3lzaW5mbyc7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdzaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdkYXNoYm9hcmQnLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHBhdGg6ICcvaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnL2NoYXJ0JywgY29tcG9uZW50OiBDaGFydENvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnL3RhYmxlJywgY29tcG9uZW50OiBUYWJsZUNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnL2Zvcm1zJywgY29tcG9uZW50OiBGb3JtQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICcvZWxlbWVudCcsIGNvbXBvbmVudDogQlNFbGVtZW50Q29tcG9uZW50fSxcbiAgICAgIHsgcGF0aDogJy9ncmlkJywgY29tcG9uZW50OiBHcmlkQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICcvY29tcG9uZW50JywgY29tcG9uZW50OiBORzJDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJy9zeXNpbmZvJywgY29tcG9uZW50OiBTeXNJbmZvQ29tcG9uZW50fSxcbiAgICAgIHsgcGF0aDogJy9ibGFuay1wYWdlJywgY29tcG9uZW50OiBCbGFua1BhZ2VDb21wb25lbnQgfVxuICAgIF1cbiAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBSb3V0ZXMge31cbiJdfQ==
