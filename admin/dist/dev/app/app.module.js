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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var login_1 = require("./pages/login/components/login");
var signup_1 = require("./pages/signup/components/signup");
var dashboard_1 = require("./layouts/dashboard/components/dashboard");
var home_1 = require("./pages/home/components/home");
var charts_1 = require("./pages/charts/components/charts");
var tables_1 = require("./pages/tables/components/tables");
var component_1 = require("./pages/component/components/component");
var forms_2 = require("./pages/forms/components/forms");
var bs_element_1 = require("./pages/bootstrap-element/components/bs_element");
var grid_1 = require("./pages/grid/components/grid");
var sysinfo_1 = require("./pages/sysinfo/components/sysinfo");
var blank_page_1 = require("./pages/blank-page/components/blank_page");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                ng2_bootstrap_1.Ng2BootstrapModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_1.LoginComponent,
                signup_1.SignupComponent,
                dashboard_1.DashboardComponent,
                home_1.HomeComponent,
                charts_1.ChartComponent,
                tables_1.TableComponent,
                forms_2.FormComponent,
                bs_element_1.BSElementComponent,
                grid_1.GridComponent,
                component_1.NG2Component,
                sysinfo_1.SysInfoComponent,
                blank_page_1.BlankPageComponent
            ],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUsaUNBQStCLDJCQUEyQixDQUFDLENBQUE7QUFDM0Qsc0JBQThCLGdCQUFnQixDQUFDLENBQUE7QUFDL0MsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsOEJBQW1DLDZCQUE2QixDQUFDLENBQUE7QUFDakUsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFHL0MsbUNBQWlDLHNCQUFzQixDQUFDLENBQUE7QUFFeEQsc0JBQTZCLGdDQUFnQyxDQUFDLENBQUE7QUFDOUQsdUJBQThCLGtDQUFrQyxDQUFDLENBQUE7QUFDakUsMEJBQWlDLDBDQUEwQyxDQUFDLENBQUE7QUFDNUUscUJBQTRCLDhCQUE4QixDQUFDLENBQUE7QUFDM0QsdUJBQTZCLGtDQUFrQyxDQUFDLENBQUE7QUFDaEUsdUJBQTZCLGtDQUFrQyxDQUFDLENBQUE7QUFDaEUsMEJBQTJCLHdDQUF3QyxDQUFDLENBQUE7QUFDcEUsc0JBQTRCLGdDQUFnQyxDQUFDLENBQUE7QUFDN0QsMkJBQWlDLGlEQUFpRCxDQUFDLENBQUE7QUFDbkYscUJBQTRCLDhCQUE4QixDQUFDLENBQUE7QUFDM0Qsd0JBQStCLG9DQUFvQyxDQUFDLENBQUE7QUFDcEUsMkJBQWlDLDBDQUEwQyxDQUFDLENBQUE7QUFpQzVFO0lBQUE7SUFBd0IsQ0FBQztJQS9CekI7UUFBQyxlQUFRLENBQUM7WUFDUixPQUFPLEVBQUM7Z0JBQ04sZ0NBQWE7Z0JBQ2IsbUJBQVc7Z0JBQ1gsa0NBQWtCO2dCQUNsQixxQ0FBZ0I7YUFDakI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7Z0JBQ1osc0JBQWM7Z0JBQ2Qsd0JBQWU7Z0JBQ2YsOEJBQWtCO2dCQUNsQixvQkFBYTtnQkFDYix1QkFBYztnQkFDZCx1QkFBYztnQkFDZCxxQkFBYTtnQkFDYiwrQkFBa0I7Z0JBQ2xCLG9CQUFhO2dCQUNiLHdCQUFZO2dCQUNaLDBCQUFnQjtnQkFDaEIsK0JBQWtCO2FBR25CO1lBQ0QsU0FBUyxFQUFFLENBQUM7b0JBQ1IsT0FBTyxFQUFFLHNCQUFhO29CQUN0QixRQUFRLEVBQUUsaUJBQWlCO2lCQUM5QixDQUFDO1lBQ0YsT0FBTyxFQUFFLENBQUUsNkJBQXNCLENBQUU7WUFDbkMsU0FBUyxFQUFFLENBQUUsNEJBQVksQ0FBRTtTQUM1QixDQUFDOztpQkFBQTtJQUNzQixnQkFBQztBQUFELENBQXhCLEFBQXlCLElBQUE7QUFBWixpQkFBUyxZQUFHLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9ICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9ICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nMkJvb3RzdHJhcE1vZHVsZSB9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9wTmF2Q29tcG9uZW50IH0gICAgICBmcm9tICcuL3NoYXJlZC90b3BuYXYvdG9wbmF2JztcbmltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSAgICAgZnJvbSAnLi9zaGFyZWQvc2lkZWJhci9zaWRlYmFyJztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi9hcHAuc2VydmljZSc7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9jb21wb25lbnRzL2xvZ2luXCI7XG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvc2lnbnVwL2NvbXBvbmVudHMvc2lnbnVwXCI7XG5pbXBvcnQge0Rhc2hib2FyZENvbXBvbmVudH0gZnJvbSBcIi4vbGF5b3V0cy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmRcIjtcbmltcG9ydCB7SG9tZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvaG9tZS9jb21wb25lbnRzL2hvbWVcIjtcbmltcG9ydCB7Q2hhcnRDb21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2NoYXJ0cy9jb21wb25lbnRzL2NoYXJ0c1wiO1xuaW1wb3J0IHtUYWJsZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvdGFibGVzL2NvbXBvbmVudHMvdGFibGVzXCI7XG5pbXBvcnQge05HMkNvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvY29tcG9uZW50L2NvbXBvbmVudHMvY29tcG9uZW50XCI7XG5pbXBvcnQge0Zvcm1Db21wb25lbnR9IGZyb20gXCIuL3BhZ2VzL2Zvcm1zL2NvbXBvbmVudHMvZm9ybXNcIjtcbmltcG9ydCB7QlNFbGVtZW50Q29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9ib290c3RyYXAtZWxlbWVudC9jb21wb25lbnRzL2JzX2VsZW1lbnRcIjtcbmltcG9ydCB7R3JpZENvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvZ3JpZC9jb21wb25lbnRzL2dyaWRcIjtcbmltcG9ydCB7U3lzSW5mb0NvbXBvbmVudH0gZnJvbSBcIi4vcGFnZXMvc3lzaW5mby9jb21wb25lbnRzL3N5c2luZm9cIjtcbmltcG9ydCB7QmxhbmtQYWdlQ29tcG9uZW50fSBmcm9tIFwiLi9wYWdlcy9ibGFuay1wYWdlL2NvbXBvbmVudHMvYmxhbmtfcGFnZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOltcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE5nMkJvb3RzdHJhcE1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBTaWdudXBDb21wb25lbnQsXG4gICAgRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIEhvbWVDb21wb25lbnQsXG4gICAgQ2hhcnRDb21wb25lbnQsXG4gICAgVGFibGVDb21wb25lbnQsXG4gICAgRm9ybUNvbXBvbmVudCxcbiAgICBCU0VsZW1lbnRDb21wb25lbnQsXG4gICAgR3JpZENvbXBvbmVudCxcbiAgICBORzJDb21wb25lbnQsXG4gICAgU3lzSW5mb0NvbXBvbmVudCxcbiAgICBCbGFua1BhZ2VDb21wb25lbnRcbiAgICAvLyBUb3BOYXZDb21wb25lbnQsXG4gICAgLy8gU2lkZWJhckNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFt7XG4gICAgICBwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuICAgICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXG4gIH1dLFxuICBzY2hlbWFzOiBbIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgXSxcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19
