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
var platform_browser_1 = require("@angular/platform-browser");
var base_1 = require("./layouts/base/base");
var app_routes_1 = require("./app.routes");
var app_service_1 = require("./app.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routes_1.AppRoutes
        ],
        declarations: [
            base_1.AppComponent
        ],
        providers: [
            app_service_1.AppService
        ],
        bootstrap: [base_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBK0M7QUFDL0MsOERBQTJEO0FBQzNELDRDQUFtRDtBQUNuRCwyQ0FBeUM7QUFDekMsNkNBQTJDO0FBZ0IzQztJQUFBO0lBQ0EsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FEQSxBQUNDLElBQUE7QUFERDtJQWJDLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBQztZQUNOLGdDQUFhO1lBQ2Isc0JBQVM7U0FDVjtRQUNELFlBQVksRUFBRTtZQUNaLG1CQUFZO1NBQ2I7UUFDRCxTQUFTLEVBQUU7WUFDVCx3QkFBVTtTQUNYO1FBQ0QsU0FBUyxFQUFFLENBQUUsbUJBQVksQ0FBRTtLQUM1QixDQUFDOzthQUVEO0FBRFksb0JBQUEsU0FBUyxDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSAgZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMvYmFzZS9iYXNlJztcbmltcG9ydCB7IEFwcFJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi9hcHAuc2VydmljZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czpbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBBcHBSb3V0ZXNcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFwcFNlcnZpY2VcbiAgXSxcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG4iXX0=
