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
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routes_1.AppRoutes
            ],
            declarations: [
                app_component_1.AppComponent,
            ],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBK0IsZUFBZSxDQUFDLENBQUE7QUFDL0MsaUNBQStCLDJCQUEyQixDQUFDLENBQUE7QUFDM0Qsc0JBQThCLGdCQUFnQixDQUFDLENBQUE7QUFDL0MsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsOEJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFHL0MsMkJBQTBCLGNBQWMsQ0FBQyxDQUFBO0FBcUJ6QztJQUFBO0lBQXdCLENBQUM7SUFqQnpCO1FBQUMsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFDO2dCQUNOLGdDQUFhO2dCQUNiLG1CQUFXO2dCQUNYLHNCQUFTO2FBQ1Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7YUFHYjtZQUNELFNBQVMsRUFBRSxDQUFDO29CQUNSLE9BQU8sRUFBRSxzQkFBYTtvQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjtpQkFDOUIsQ0FBQztZQUNGLFNBQVMsRUFBRSxDQUFFLDRCQUFZLENBQUU7U0FDNUIsQ0FBQzs7aUJBQUE7SUFDc0IsZ0JBQUM7QUFBRCxDQUF4QixBQUF5QixJQUFBO0FBQVosaUJBQVMsWUFBRyxDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSAgZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVG9wTmF2Q29tcG9uZW50IH0gICAgICBmcm9tICcuL3NoYXJlZC90b3BuYXYvdG9wbmF2JztcbmltcG9ydCB7IFNpZGViYXJDb21wb25lbnQgfSAgICAgZnJvbSAnLi9zaGFyZWQvc2lkZWJhci9zaWRlYmFyJztcbmltcG9ydCB7IEFwcFJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi9hcHAuc2VydmljZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czpbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBBcHBSb3V0ZXNcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIC8vIFRvcE5hdkNvbXBvbmVudCxcbiAgICAvLyBTaWRlYmFyQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW3tcbiAgICAgIHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXG4gICAgICB1c2VWYWx1ZTogJzwlPSBBUFBfQkFTRSAlPidcbiAgfV0sXG4gIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==
