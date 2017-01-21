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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsOERBQTBEO0FBQzFELHdDQUE2QztBQUM3QywwQ0FBOEQ7QUFFOUQsaURBQStDO0FBQy9DLDJEQUF3RDtBQUV4RCxxRUFBdUU7QUFDdkUscURBQW1EO0FBQ25ELHdEQUFzRDtBQUN0RCxpRUFBK0Q7QUFDL0Qsd0RBQXNEO0FBQ3RELHdFQUF1RTtBQUN2RSxrRUFBZ0U7QUFDaEUscUNBQW9DO0FBMEJwQyxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLFNBQVM7SUF4QnJCLGVBQVEsQ0FBQztRQUNULE9BQU8sRUFBRTtZQUNSLHFCQUFZO1lBQ1osZ0NBQWE7WUFDYixtQkFBVztZQUNYLHlDQUFrQjtZQUNsQixxQ0FBZ0I7WUFDaEIsMEJBQVc7WUFDWCw0QkFBWTtZQUNaLGtDQUFlO1lBQ2YsNEJBQVksQ0FBQyxPQUFPLEVBQUU7U0FDdEI7UUFDRCxZQUFZLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQzVCLFNBQVMsRUFBRSxDQUFDO2dCQUNYLE9BQU8sRUFBRSxzQkFBYTtnQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjthQUN2QjtZQUNKLHlDQUFrQjtZQUNsQixvQ0FBZ0I7WUFDaEIsaUJBQU87U0FDUDtRQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7S0FFekIsQ0FBQztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAucm91dGluZy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBMb2dpblJvdXRpbmdNb2R1bGUgfSAgICAgIGZyb20gJy4vbG9naW4vbG9naW4tcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tICcuL2xvZ2luL2xvZ2luLm1vZHVsZSc7XG5pbXBvcnQgeyBTaWdudXBNb2R1bGUgfSBmcm9tICcuL3NpZ251cC9zaWdudXAubW9kdWxlJztcbmltcG9ydCB7IERhc2hib2FyZE1vZHVsZSB9IGZyb20gJy4vZGFzaGJvYXJkL2Rhc2hib2FyZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBDaGF0Q2hhbm5lbFNlcnZpY2UgfSAgIGZyb20gXCIuL3NlcnZpY2VzL2NoYXQuY2hhbm5lbC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBXZWJTb2NrZXRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvd2Vic29ja2V0LnNlcnZpY2VcIjtcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tICcuL2dsb2JhbHMnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEJyb3dzZXJNb2R1bGUsXG5cdFx0Rm9ybXNNb2R1bGUsXG5cdFx0TG9naW5Sb3V0aW5nTW9kdWxlLFxuXHRcdEFwcFJvdXRpbmdNb2R1bGUsXG5cdFx0TG9naW5Nb2R1bGUsXG5cdFx0U2lnbnVwTW9kdWxlLFxuXHRcdERhc2hib2FyZE1vZHVsZSxcblx0XHRTaGFyZWRNb2R1bGUuZm9yUm9vdCgpXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXG5cdHByb3ZpZGVyczogW3tcblx0XHRwcm92aWRlOiBBUFBfQkFTRV9IUkVGLFxuXHRcdHVzZVZhbHVlOiAnPCU9IEFQUF9CQVNFICU+Jyxcblx0ICAgIH0sXG5cdFx0Q2hhdENoYW5uZWxTZXJ2aWNlLFxuXHRcdFdlYlNvY2tldFNlcnZpY2UsXG5cdFx0R2xvYmFsc1xuXHRdLFxuXHRib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG5cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
