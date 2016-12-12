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
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(exports.routes)],
            exports: [router_1.RouterModule],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFpRCxlQUFlLENBQUMsQ0FBQTtBQUNqRSx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUV2RCxzQkFBK0IsZ0NBQWdDLENBQUMsQ0FBQTtBQUNoRSx1QkFBZ0Msa0NBQWtDLENBQUMsQ0FBQTtBQUNuRSwwQkFBbUMsMENBQTBDLENBQUMsQ0FBQTtBQUM5RSwyQkFBbUMsMENBQTBDLENBQUMsQ0FBQTtBQUM5RSwwQkFBNkIsd0NBQXdDLENBQUMsQ0FBQTtBQUN0RSxxQkFBOEIsOEJBQThCLENBQUMsQ0FBQTtBQUM3RCwyQkFBbUMsaURBQWlELENBQUMsQ0FBQTtBQUNyRixzQkFBOEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUMvRCx1QkFBK0Isa0NBQWtDLENBQUMsQ0FBQTtBQUNsRSx1QkFBK0Isa0NBQWtDLENBQUMsQ0FBQTtBQUNsRSxxQkFBOEIsOEJBQThCLENBQUMsQ0FBQTtBQUM3RCx3QkFBaUMsb0NBQW9DLENBQUMsQ0FBQTtBQUV6RCxjQUFNLEdBQVc7SUFDNUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxzQkFBYyxFQUFFO0lBQ3ZDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsd0JBQWUsRUFBRTtJQUM5QyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLDhCQUFrQjtRQUNoRCxRQUFRLEVBQUU7WUFDUixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUU7WUFDMUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBYyxFQUFFO1lBQzVDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQWMsRUFBRTtZQUM1QyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLHFCQUFhLEVBQUU7WUFDM0MsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSwrQkFBa0IsRUFBQztZQUNqRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUU7WUFDMUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx3QkFBWSxFQUFFO1lBQzlDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsMEJBQWdCLEVBQUM7WUFDL0MsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwrQkFBa0IsRUFBRTtTQUN0RDtLQUNGO0NBQ0YsQ0FBQztBQU9GO0lBQUE7SUFBK0IsQ0FBQztJQUxoQztRQUFDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUMsT0FBTyxDQUFDLGNBQU0sQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7WUFDdkIsT0FBTyxFQUFFLENBQUUsNkJBQXNCLENBQUU7U0FDcEMsQ0FBQzs7d0JBQUE7SUFDNkIsdUJBQUM7QUFBRCxDQUEvQixBQUFnQyxJQUFBO0FBQW5CLHdCQUFnQixtQkFBRyxDQUFBIiwiZmlsZSI6ImFwcC9hcHAtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9sYXlvdXRzL2Jhc2UvYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbG9naW4vY29tcG9uZW50cy9sb2dpbic7XG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3NpZ251cC9jb21wb25lbnRzL3NpZ251cCc7XG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkJztcbmltcG9ydCB7IEJsYW5rUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvYmxhbmstcGFnZS9jb21wb25lbnRzL2JsYW5rX3BhZ2UnO1xuaW1wb3J0IHsgTkcyQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9jb21wb25lbnQvY29tcG9uZW50cy9jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZ3JpZC9jb21wb25lbnRzL2dyaWQnO1xuaW1wb3J0IHsgQlNFbGVtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9ib290c3RyYXAtZWxlbWVudC9jb21wb25lbnRzL2JzX2VsZW1lbnQnO1xuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvZm9ybXMvY29tcG9uZW50cy9mb3Jtcyc7XG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvdGFibGVzL2NvbXBvbmVudHMvdGFibGVzJztcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9jaGFydHMvY29tcG9uZW50cy9jaGFydHMnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvaG9tZS9jb21wb25lbnRzL2hvbWUnO1xuaW1wb3J0IHsgU3lzSW5mb0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvc3lzaW5mby9jb21wb25lbnRzL3N5c2luZm8nO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJycsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgeyBwYXRoOiAnc2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnZGFzaGJvYXJkJywgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2NoYXJ0JywgY29tcG9uZW50OiBDaGFydENvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAndGFibGUnLCBjb21wb25lbnQ6IFRhYmxlQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdmb3JtcycsIGNvbXBvbmVudDogRm9ybUNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnZWxlbWVudCcsIGNvbXBvbmVudDogQlNFbGVtZW50Q29tcG9uZW50fSxcbiAgICAgIHsgcGF0aDogJ2dyaWQnLCBjb21wb25lbnQ6IEdyaWRDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJ2NvbXBvbmVudCcsIGNvbXBvbmVudDogTkcyQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICdzeXNpbmZvJywgY29tcG9uZW50OiBTeXNJbmZvQ29tcG9uZW50fSxcbiAgICAgIHsgcGF0aDogJ2JsYW5rLXBhZ2UnLCBjb21wb25lbnQ6IEJsYW5rUGFnZUNvbXBvbmVudCB9XG4gICAgXVxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXSxcbiAgc2NoZW1hczogWyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7fVxuIl19
