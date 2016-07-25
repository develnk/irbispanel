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
var app_service_1 = require('../../../layouts/base/app.service');
var LoginComponent = (function () {
    function LoginComponent(router) {
        this.router = router;
        this.service = app_service_1.AppService.getInstance();
        this.messages = app_service_1.AppService.getMessages();
        this.messages.subscribe(function (message) {
            if (message[0].controller === 'User' && message[0].method === 'login') {
                LoginComponent.loginOperation(message[0].data, router);
            }
        }, function (err) { console.log('Error: ' + err.message); });
    }
    LoginComponent.loginOperation = function (data, router) {
        if (data.ses_id) {
            if (data.status == 1) {
                sessionStorage.setItem('current_user', JSON.stringify(data));
                router.navigate(['/dashboard/home']);
                console.log(JSON.parse(sessionStorage.getItem('current_user')));
            }
            else {
            }
        }
    };
    LoginComponent.prototype.SendData = function () {
        var data = {
            data: {
                controller: 'User',
                method: 'login',
                values: {
                    login: this.username,
                    pass: this.password,
                }
            }
        };
        this.service.send(data);
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login-form',
            templateUrl: 'login.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luL2NvbXBvbmVudHMvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBMEMsaUJBQWlCLENBQUMsQ0FBQTtBQUM1RCw0QkFBb0MsbUNBQW1DLENBQUMsQ0FBQTtBQVV4RTtJQW1CRSx3QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFsQjFCLFlBQU8sR0FBYyx3QkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlDLGFBQVEsR0FBc0Isd0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQWtCN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ3JCLFVBQUMsT0FBa0I7WUFDakIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsS0FBSyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxjQUFjLENBQUMsY0FBYyxDQUFZLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDcEUsQ0FBQztRQUNILENBQUMsRUFDRCxVQUFDLEdBQWUsSUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQzdELENBQUM7SUFDSixDQUFDO0lBdEJjLDZCQUFjLEdBQTdCLFVBQThCLElBQWMsRUFBRSxNQUFjO1FBQzFELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEUsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO1lBRU4sQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBYU0saUNBQVEsR0FBZjtRQUNFLElBQUksSUFBSSxHQUFHO1lBQ1QsSUFBSSxFQUFFO2dCQUNKLFVBQVUsRUFBRSxNQUFNO2dCQUNsQixNQUFNLEVBQUUsT0FBTztnQkFDZixNQUFNLEVBQUU7b0JBQ04sS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRO29CQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7aUJBQ3BCO2FBQ0Y7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQWpESDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFHLFlBQVk7WUFDdkIsV0FBVyxFQUFHLFlBQVk7WUFDMUIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7U0FDaEMsQ0FBQzs7c0JBQUE7SUE4Q0YscUJBQUM7QUFBRCxDQTVDQSxBQTRDQyxJQUFBO0FBNUNZLHNCQUFjLGlCQTRDMUIsQ0FBQSIsImZpbGUiOiJwYWdlcy9sb2dpbi9jb21wb25lbnRzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwcFNlcnZpY2UsIE1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXRzL2Jhc2UvYXBwLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3IgOiAnbG9naW4tZm9ybScsXG4gIHRlbXBsYXRlVXJsIDogJ2xvZ2luLmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICBwcml2YXRlIHNlcnZpY2U6QXBwU2VydmljZSA9IEFwcFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgcHJpdmF0ZSBtZXNzYWdlczpTdWJqZWN0PE1lc3NhZ2VbXT4gPSBBcHBTZXJ2aWNlLmdldE1lc3NhZ2VzKCk7XG4gIHByaXZhdGUgdXNlcm5hbWU6c3RyaW5nO1xuICBwcml2YXRlIHBhc3N3b3JkOnN0cmluZztcblxuICBwcml2YXRlIHN0YXRpYyBsb2dpbk9wZXJhdGlvbihkYXRhOkxvZ2luRGF0YSwgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICBpZiAoZGF0YS5zZXNfaWQpIHtcbiAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSAxKSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRfdXNlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgcm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZC9ob21lJ10pO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy8gVXNlciBpcyBibG9ja2VkLiBTaG93IG1lc3NhZ2UgYWJvdXQgaXQgZm9yIHVzZXIuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIHRoaXMubWVzc2FnZXMuc3Vic2NyaWJlKFxuICAgICAgKG1lc3NhZ2U6IE1lc3NhZ2VbXSkgPT4ge1xuICAgICAgICBpZiAobWVzc2FnZVswXS5jb250cm9sbGVyID09PSAnVXNlcicgJiYgbWVzc2FnZVswXS5tZXRob2QgPT09ICdsb2dpbicpIHtcbiAgICAgICAgICBMb2dpbkNvbXBvbmVudC5sb2dpbk9wZXJhdGlvbig8TG9naW5EYXRhPm1lc3NhZ2VbMF0uZGF0YSwgcm91dGVyKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChlcnI6IEVycm9yRXZlbnQpID0+IHtjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBlcnIubWVzc2FnZSk7fVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgU2VuZERhdGEoKSB7XG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbnRyb2xsZXI6ICdVc2VyJyxcbiAgICAgICAgbWV0aG9kOiAnbG9naW4nLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICBsb2dpbjogdGhpcy51c2VybmFtZSxcbiAgICAgICAgICBwYXNzOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNlcnZpY2Uuc2VuZChkYXRhKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5EYXRhIHtcbiAgc2VzX2lkOiBzdHJpbmc7XG4gIHN0YXR1czogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIG1haWw6IHN0cmluZztcbiAgcGVybWlzc2lvbnM6IEFycmF5PFBlcm1pc3Npb25zPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9ucyB7XG4gIG1vZHVsZTogc3RyaW5nO1xuICBwZXJtaXNzaW9uOiBzdHJpbmc7XG4gIHJpZDogbnVtYmVyO1xuICByX25hbWU6IHN0cmluZztcbn1cbiJdfQ==
