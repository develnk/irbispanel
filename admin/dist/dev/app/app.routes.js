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
var login_1 = require('./pages/login/components/login');
var signup_1 = require('./pages/signup/components/signup');
var dashboard_1 = require('./layouts/dashboard/components/dashboard');
var blank_page_1 = require('./pages/blank-page/components/blank_page');
var component_1 = require('./pages/component/components/component');
var grid_1 = require('./pages/grid/components/grid');
var bs_element_1 = require('./pages/bootstrap-element/components/bs_element');
var forms_1 = require('./pages/forms/components/forms');
var tables_1 = require('./pages/tables/components/tables');
var charts_1 = require('./pages/charts/components/charts');
var home_1 = require('./pages/home/components/home');
var sysinfo_1 = require('./pages/sysinfo/components/sysinfo');
exports.routes = [
    { path: '', component: login_1.LoginComponent },
    { path: 'signup', component: signup_1.SignupComponent },
    { path: 'dashboard', component: dashboard_1.DashboardComponent,
        children: [
            { path: 'home', component: home_1.HomeComponent },
            { path: 'chart', component: charts_1.ChartComponent },
            { path: 'table', component: tables_1.TableComponent },
            { path: 'forms', component: forms_1.FormComponent },
            { path: 'element', component: bs_element_1.BSElementComponent },
            { path: 'grid', component: grid_1.GridComponent },
            { path: 'component', component: component_1.NG2Component },
            { path: 'sysinfo', component: sysinfo_1.SysInfoComponent },
            { path: 'blank-page', component: blank_page_1.BlankPageComponent }
        ]
    },
];
var AppRoutes = (function () {
    function AppRoutes() {
    }
    AppRoutes = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(exports.routes)],
            declarations: [
                login_1.LoginComponent,
                signup_1.SignupComponent,
                dashboard_1.DashboardComponent,
                home_1.HomeComponent,
                charts_1.ChartComponent,
                tables_1.TableComponent,
                forms_1.FormComponent,
                bs_element_1.BSElementComponent,
                grid_1.GridComponent,
                component_1.NG2Component,
                sysinfo_1.SysInfoComponent,
                blank_page_1.BlankPageComponent
            ],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutes);
    return AppRoutes;
}());
exports.AppRoutes = AppRoutes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFFdkQsc0JBQStCLGdDQUFnQyxDQUFDLENBQUE7QUFDaEUsdUJBQWdDLGtDQUFrQyxDQUFDLENBQUE7QUFDbkUsMEJBQW1DLDBDQUEwQyxDQUFDLENBQUE7QUFDOUUsMkJBQW1DLDBDQUEwQyxDQUFDLENBQUE7QUFDOUUsMEJBQTZCLHdDQUF3QyxDQUFDLENBQUE7QUFDdEUscUJBQThCLDhCQUE4QixDQUFDLENBQUE7QUFDN0QsMkJBQW1DLGlEQUFpRCxDQUFDLENBQUE7QUFDckYsc0JBQThCLGdDQUFnQyxDQUFDLENBQUE7QUFDL0QsdUJBQStCLGtDQUFrQyxDQUFDLENBQUE7QUFDbEUsdUJBQStCLGtDQUFrQyxDQUFDLENBQUE7QUFDbEUscUJBQThCLDhCQUE4QixDQUFDLENBQUE7QUFDN0Qsd0JBQWlDLG9DQUFvQyxDQUFDLENBQUE7QUFFekQsY0FBTSxHQUFXO0lBQzVCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsc0JBQWMsRUFBRTtJQUN2QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLHdCQUFlLEVBQUU7SUFDOUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSw4QkFBa0I7UUFDaEQsUUFBUSxFQUFFO1lBQ1IsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFO1lBQzFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQWMsRUFBRTtZQUM1QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUFjLEVBQUU7WUFDNUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxxQkFBYSxFQUFFO1lBQzNDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsK0JBQWtCLEVBQUM7WUFDakQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxvQkFBYSxFQUFFO1lBQzFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0JBQVksRUFBRTtZQUM5QyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLDBCQUFnQixFQUFDO1lBQy9DLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsK0JBQWtCLEVBQUU7U0FDdEQ7S0FDRjtDQUNGLENBQUM7QUFvQkY7SUFBQTtJQUF3QixDQUFDO0lBbEJ6QjtRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUMsT0FBTyxDQUFDLGNBQU0sQ0FBQyxDQUFDO1lBQ3ZDLFlBQVksRUFBRTtnQkFDWixzQkFBYztnQkFDZCx3QkFBZTtnQkFDZiw4QkFBa0I7Z0JBQ2xCLG9CQUFhO2dCQUNiLHVCQUFjO2dCQUNkLHVCQUFjO2dCQUNkLHFCQUFhO2dCQUNiLCtCQUFrQjtnQkFDbEIsb0JBQWE7Z0JBQ2Isd0JBQVk7Z0JBQ1osMEJBQWdCO2dCQUNoQiwrQkFBa0I7YUFDbkI7WUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO1NBQ3hCLENBQUM7O2lCQUFBO0lBQ3NCLGdCQUFDO0FBQUQsQ0FBeEIsQUFBeUIsSUFBQTtBQUFaLGlCQUFTLFlBQUcsQ0FBQSIsImZpbGUiOiJhcHAvYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL2xheW91dHMvYmFzZS9hdXRoLmd1YXJkJztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sb2dpbi9jb21wb25lbnRzL2xvZ2luJztcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvc2lnbnVwL2NvbXBvbmVudHMvc2lnbnVwJztcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0cy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQnO1xuaW1wb3J0IHsgQmxhbmtQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9ibGFuay1wYWdlL2NvbXBvbmVudHMvYmxhbmtfcGFnZSc7XG5pbXBvcnQgeyBORzJDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2NvbXBvbmVudC9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9ncmlkL2NvbXBvbmVudHMvZ3JpZCc7XG5pbXBvcnQgeyBCU0VsZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2Jvb3RzdHJhcC1lbGVtZW50L2NvbXBvbmVudHMvYnNfZWxlbWVudCc7XG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9mb3Jtcy9jb21wb25lbnRzL2Zvcm1zJztcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy90YWJsZXMvY29tcG9uZW50cy90YWJsZXMnO1xuaW1wb3J0IHsgQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL2NoYXJ0cy9jb21wb25lbnRzL2NoYXJ0cyc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9ob21lL2NvbXBvbmVudHMvaG9tZSc7XG5pbXBvcnQgeyBTeXNJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9zeXNpbmZvL2NvbXBvbmVudHMvc3lzaW5mbyc7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdzaWdudXAnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdkYXNoYm9hcmQnLCBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnY2hhcnQnLCBjb21wb25lbnQ6IENoYXJ0Q29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICd0YWJsZScsIGNvbXBvbmVudDogVGFibGVDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2Zvcm1zJywgY29tcG9uZW50OiBGb3JtQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdlbGVtZW50JywgY29tcG9uZW50OiBCU0VsZW1lbnRDb21wb25lbnR9LFxuICAgICAgeyBwYXRoOiAnZ3JpZCcsIGNvbXBvbmVudDogR3JpZENvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnY29tcG9uZW50JywgY29tcG9uZW50OiBORzJDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ3N5c2luZm8nLCBjb21wb25lbnQ6IFN5c0luZm9Db21wb25lbnR9LFxuICAgICAgeyBwYXRoOiAnYmxhbmstcGFnZScsIGNvbXBvbmVudDogQmxhbmtQYWdlQ29tcG9uZW50IH1cbiAgICBdXG4gIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIFNpZ251cENvbXBvbmVudCxcbiAgICBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBDaGFydENvbXBvbmVudCxcbiAgICBUYWJsZUNvbXBvbmVudCxcbiAgICBGb3JtQ29tcG9uZW50LFxuICAgIEJTRWxlbWVudENvbXBvbmVudCxcbiAgICBHcmlkQ29tcG9uZW50LFxuICAgIE5HMkNvbXBvbmVudCxcbiAgICBTeXNJbmZvQ29tcG9uZW50LFxuICAgIEJsYW5rUGFnZUNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0ZXMge31cbiJdfQ==
