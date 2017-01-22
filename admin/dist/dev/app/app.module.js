"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var angular2_highcharts_1 = require("angular2-highcharts");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app.routing.module");
var login_routing_module_1 = require("./login/login-routing.module");
var login_module_1 = require("./login/login.module");
var signup_module_1 = require("./signup/signup.module");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var shared_module_1 = require("./shared/shared.module");
var chat_channel_service_1 = require("./services/chat.channel.service");
var websocket_service_1 = require("./services/websocket.service");
var globals_1 = require("./globals");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            angular2_highcharts_1.ChartModule,
            login_routing_module_1.LoginRoutingModule,
            app_routing_module_1.AppRoutingModule,
            login_module_1.LoginModule,
            signup_module_1.SignupModule,
            dashboard_module_1.DashboardModule,
            shared_module_1.SharedModule.forRoot()
        ],
        declarations: [app_component_1.AppComponent],
        providers: [{
                provide: common_1.APP_BASE_HREF,
                useValue: '/',
            },
            chat_channel_service_1.ChatChannelService,
            websocket_service_1.WebSocketService,
            globals_1.Globals
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsOERBQTBEO0FBQzFELHdDQUE2QztBQUM3QywwQ0FBOEQ7QUFDOUQsMkRBQWtEO0FBRWxELGlEQUErQztBQUMvQywyREFBd0Q7QUFDeEQscUVBQXVFO0FBQ3ZFLHFEQUFtRDtBQUNuRCx3REFBc0Q7QUFDdEQsaUVBQStEO0FBQy9ELHdEQUFzRDtBQUN0RCx3RUFBdUU7QUFDdkUsa0VBQWdFO0FBQ2hFLHFDQUFvQztBQTJCcEMsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixTQUFTO0lBekJyQixlQUFRLENBQUM7UUFDVCxPQUFPLEVBQUU7WUFDUixxQkFBWTtZQUNaLGdDQUFhO1lBQ2IsbUJBQVc7WUFDWCxpQ0FBVztZQUNYLHlDQUFrQjtZQUNsQixxQ0FBZ0I7WUFDaEIsMEJBQVc7WUFDWCw0QkFBWTtZQUNaLGtDQUFlO1lBQ2YsNEJBQVksQ0FBQyxPQUFPLEVBQUU7U0FDdEI7UUFDRCxZQUFZLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQzVCLFNBQVMsRUFBRSxDQUFDO2dCQUNYLE9BQU8sRUFBRSxzQkFBYTtnQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjthQUN2QjtZQUNKLHlDQUFrQjtZQUNsQixvQ0FBZ0I7WUFDaEIsaUJBQU87U0FDUDtRQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7S0FFekIsQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYXJ0TW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItaGlnaGNoYXJ0cyc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAucm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTG9naW5Sb3V0aW5nTW9kdWxlIH0gICAgICBmcm9tICcuL2xvZ2luL2xvZ2luLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IExvZ2luTW9kdWxlIH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5tb2R1bGUnO1xuaW1wb3J0IHsgU2lnbnVwTW9kdWxlIH0gZnJvbSAnLi9zaWdudXAvc2lnbnVwLm1vZHVsZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNb2R1bGUgfSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hhdENoYW5uZWxTZXJ2aWNlIH0gICBmcm9tIFwiLi9zZXJ2aWNlcy9jaGF0LmNoYW5uZWwuc2VydmljZVwiO1xuaW1wb3J0IHsgV2ViU29ja2V0U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3dlYnNvY2tldC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSAnLi9nbG9iYWxzJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRCcm93c2VyTW9kdWxlLFxuXHRcdEZvcm1zTW9kdWxlLFxuXHRcdENoYXJ0TW9kdWxlLFxuXHRcdExvZ2luUm91dGluZ01vZHVsZSxcblx0XHRBcHBSb3V0aW5nTW9kdWxlLFxuXHRcdExvZ2luTW9kdWxlLFxuXHRcdFNpZ251cE1vZHVsZSxcblx0XHREYXNoYm9hcmRNb2R1bGUsXG5cdFx0U2hhcmVkTW9kdWxlLmZvclJvb3QoKVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuXHRwcm92aWRlcnM6IFt7XG5cdFx0cHJvdmlkZTogQVBQX0JBU0VfSFJFRixcblx0XHR1c2VWYWx1ZTogJzwlPSBBUFBfQkFTRSAlPicsXG5cdCAgICB9LFxuXHRcdENoYXRDaGFubmVsU2VydmljZSxcblx0XHRXZWJTb2NrZXRTZXJ2aWNlLFxuXHRcdEdsb2JhbHNcblx0XSxcblx0Ym9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxuXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
