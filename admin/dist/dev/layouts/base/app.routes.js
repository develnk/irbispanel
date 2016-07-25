"use strict";
var router_1 = require('@angular/router');
var auth_guard_1 = require('./auth.guard');
var login_1 = require('../../pages/login/components/login');
var signup_1 = require('../../pages/signup/components/signup');
var dashboard_1 = require('../dashboard/components/dashboard');
var blank_page_1 = require('../../pages/blank-page/components/blank_page');
var component_1 = require('../../pages/component/components/component');
var grid_1 = require('../../pages/grid/components/grid');
var bs_element_1 = require('../../pages/bootstrap-element/components/bs_element');
var forms_1 = require('../../pages/forms/components/forms');
var tables_1 = require('../../pages/tables/components/tables');
var charts_1 = require('../../pages/charts/components/charts');
var home_1 = require('../../pages/home/components/home');
var sysinfo_1 = require('../../pages/sysinfo/components/sysinfo');
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
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvYmFzZS9hcHAucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBNEMsaUJBQWlCLENBQUMsQ0FBQTtBQUM5RCwyQkFBMEIsY0FBYyxDQUFDLENBQUE7QUFDekMsc0JBQStCLG9DQUFvQyxDQUFDLENBQUE7QUFDcEUsdUJBQWdDLHNDQUFzQyxDQUFDLENBQUE7QUFDdkUsMEJBQW1DLG1DQUFtQyxDQUFDLENBQUE7QUFDdkUsMkJBQW1DLDhDQUE4QyxDQUFDLENBQUE7QUFDbEYsMEJBQTZCLDRDQUE0QyxDQUFDLENBQUE7QUFDMUUscUJBQThCLGtDQUFrQyxDQUFDLENBQUE7QUFDakUsMkJBQW1DLHFEQUFxRCxDQUFDLENBQUE7QUFDekYsc0JBQThCLG9DQUFvQyxDQUFDLENBQUE7QUFDbkUsdUJBQStCLHNDQUFzQyxDQUFDLENBQUE7QUFDdEUsdUJBQStCLHNDQUFzQyxDQUFDLENBQUE7QUFDdEUscUJBQThCLGtDQUFrQyxDQUFDLENBQUE7QUFDakUsd0JBQWlDLHdDQUF3QyxDQUFDLENBQUE7QUFFN0QsY0FBTSxHQUFpQjtJQUNsQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLHNCQUFjLEVBQUU7SUFDdkMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx3QkFBZSxFQUFFO0lBQzlDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsOEJBQWtCLEVBQUUsV0FBVyxFQUFFLENBQUMsc0JBQVMsQ0FBQztRQUMxRSxRQUFRLEVBQUU7WUFDUixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUU7WUFDM0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSx1QkFBYyxFQUFFO1lBQzdDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsdUJBQWMsRUFBRTtZQUM3QyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLHFCQUFhLEVBQUU7WUFDNUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSwrQkFBa0IsRUFBQztZQUNsRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFhLEVBQUU7WUFDM0MsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSx3QkFBWSxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsMEJBQWdCLEVBQUM7WUFDaEQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSwrQkFBa0IsRUFBRTtTQUN2RDtLQUNGO0NBQ0YsQ0FBQztBQUVXLDRCQUFvQixHQUFHO0lBQ2xDLHNCQUFhLENBQUMsY0FBTSxDQUFDO0NBQ3RCLENBQUMiLCJmaWxlIjoibGF5b3V0cy9iYXNlL2FwcC5yb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm92aWRlUm91dGVyLCBSb3V0ZXJDb25maWcgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9hdXRoLmd1YXJkJztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vcGFnZXMvbG9naW4vY29tcG9uZW50cy9sb2dpbic7XG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tICcuLi8uLi9wYWdlcy9zaWdudXAvY29tcG9uZW50cy9zaWdudXAnO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaGJvYXJkJztcbmltcG9ydCB7IEJsYW5rUGFnZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3BhZ2VzL2JsYW5rLXBhZ2UvY29tcG9uZW50cy9ibGFua19wYWdlJztcbmltcG9ydCB7IE5HMkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3BhZ2VzL2NvbXBvbmVudC9jb21wb25lbnRzL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vcGFnZXMvZ3JpZC9jb21wb25lbnRzL2dyaWQnO1xuaW1wb3J0IHsgQlNFbGVtZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vcGFnZXMvYm9vdHN0cmFwLWVsZW1lbnQvY29tcG9uZW50cy9ic19lbGVtZW50JztcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICcuLi8uLi9wYWdlcy9mb3Jtcy9jb21wb25lbnRzL2Zvcm1zJztcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vcGFnZXMvdGFibGVzL2NvbXBvbmVudHMvdGFibGVzJztcbmltcG9ydCB7IENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vcGFnZXMvY2hhcnRzL2NvbXBvbmVudHMvY2hhcnRzJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuLi8uLi9wYWdlcy9ob21lL2NvbXBvbmVudHMvaG9tZSc7XG5pbXBvcnQgeyBTeXNJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vcGFnZXMvc3lzaW5mby9jb21wb25lbnRzL3N5c2luZm8nO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXJDb25maWcgPSBbXG4gIHsgcGF0aDogJycsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgeyBwYXRoOiAnc2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnZGFzaGJvYXJkJywgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgeyBwYXRoOiAnL2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJy9jaGFydCcsIGNvbXBvbmVudDogQ2hhcnRDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJy90YWJsZScsIGNvbXBvbmVudDogVGFibGVDb21wb25lbnQgfSxcbiAgICAgIHsgcGF0aDogJy9mb3JtcycsIGNvbXBvbmVudDogRm9ybUNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnL2VsZW1lbnQnLCBjb21wb25lbnQ6IEJTRWxlbWVudENvbXBvbmVudH0sXG4gICAgICB7IHBhdGg6ICcvZ3JpZCcsIGNvbXBvbmVudDogR3JpZENvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiAnL2NvbXBvbmVudCcsIGNvbXBvbmVudDogTkcyQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6ICcvc3lzaW5mbycsIGNvbXBvbmVudDogU3lzSW5mb0NvbXBvbmVudH0sXG4gICAgICB7IHBhdGg6ICcvYmxhbmstcGFnZScsIGNvbXBvbmVudDogQmxhbmtQYWdlQ29tcG9uZW50IH1cbiAgICBdXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgQVBQX1JPVVRFUl9QUk9WSURFUlMgPSBbXG4gIHByb3ZpZGVSb3V0ZXIocm91dGVzKVxuXTtcbiJdfQ==
