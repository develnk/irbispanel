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
var app_service_1 = require("../app.service");
var LoginComponent = LoginComponent_1 = (function () {
    function LoginComponent(router) {
        this.router = router;
        this.service = app_service_1.AppService.getInstance();
        this.messages = app_service_1.AppService.getMessages();
        this.messages.subscribe(function (message) {
            if (message[0].controller === 'User' && message[0].method === 'login') {
                LoginComponent_1.loginOperation(message[0].data, router);
            }
        }, function (err) {
            console.log('Error: ' + err.message);
        });
    }
    LoginComponent.loginOperation = function (data, router) {
        if (data.ses_id) {
            if (data.status === 1) {
                sessionStorage.setItem('current_user', JSON.stringify(data));
                router.navigate(['/dashboard/home']);
                console.log(JSON.parse(sessionStorage.getItem('current_user')));
            }
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log("Submitted!");
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
    return LoginComponent;
}());
LoginComponent = LoginComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login-cmp',
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var LoginComponent_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMsOENBQXFEO0FBV3JELElBQWEsY0FBYztJQXdCdkIsd0JBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBdkIxQixZQUFPLEdBQWUsd0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQyxhQUFRLEdBQXVCLHdCQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUF1QjVELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNuQixVQUFDLE9BQWtCO1lBQ2YsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsS0FBSyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNwRSxnQkFBYyxDQUFDLGNBQWMsQ0FBWSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3RFLENBQUM7UUFDTCxDQUFDLEVBQ0QsVUFBQyxHQUFlO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQTVCYyw2QkFBYyxHQUE3QixVQUE4QixJQUFlLEVBQUUsTUFBYztRQUN6RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEUsQ0FBQztRQUlMLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQWVNLGlDQUFRLEdBQWY7UUFDSSxJQUFJLElBQUksR0FBRztZQUNQLElBQUksRUFBRTtnQkFDRixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsTUFBTSxFQUFFO29CQUNKLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUTtvQkFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO2lCQUN0QjthQUNKO1NBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTCxxQkFBQztBQUFELENBbERBLEFBa0RDLElBQUE7QUFsRFksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxzQkFBc0I7S0FDdEMsQ0FBQztxQ0F5QjhCLGVBQU07R0F4QnpCLGNBQWMsQ0FrRDFCO0FBbERZLHdDQUFjIiwiZmlsZSI6ImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlLCBNZXNzYWdlIH0gZnJvbSAnLi4vYXBwLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuXG4vKipcbiAqICAgIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgTG9naW5Db21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdsb2dpbi1jbXAnLFxuICAgIHRlbXBsYXRlVXJsOiAnbG9naW4uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHNlcnZpY2U6IEFwcFNlcnZpY2UgPSBBcHBTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgcHJpdmF0ZSBtZXNzYWdlczogU3ViamVjdDxNZXNzYWdlW10+ID0gQXBwU2VydmljZS5nZXRNZXNzYWdlcygpO1xuICAgIHByaXZhdGUgdXNlcm5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgLy8nd3NzOi8vbG9jYWxob3N0OicgKyBsb2NhdGlvbi5wb3J0ICsgJy9hcGkvdjEnXG5cbiAgICBwcml2YXRlIHN0YXRpYyBsb2dpbk9wZXJhdGlvbihkYXRhOiBMb2dpbkRhdGEsIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIGlmIChkYXRhLnNlc19pZCkge1xuICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudF91c2VyJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZShbJy9kYXNoYm9hcmQvaG9tZSddKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgLy8gVXNlciBpcyBibG9ja2VkLiBTaG93IG1lc3NhZ2UgYWJvdXQgaXQgZm9yIHVzZXIuXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJTdWJtaXR0ZWQhXCIpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zdWJzY3JpYmUoXG4gICAgICAgICAgICAobWVzc2FnZTogTWVzc2FnZVtdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VbMF0uY29udHJvbGxlciA9PT0gJ1VzZXInICYmIG1lc3NhZ2VbMF0ubWV0aG9kID09PSAnbG9naW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIExvZ2luQ29tcG9uZW50LmxvZ2luT3BlcmF0aW9uKDxMb2dpbkRhdGE+bWVzc2FnZVswXS5kYXRhLCByb3V0ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyOiBFcnJvckV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZW5kRGF0YSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1VzZXInLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ2xvZ2luJyxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbG9naW46IHRoaXMudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBhc3M6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlcnZpY2Uuc2VuZChkYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5EYXRhIHtcbiAgICBzZXNfaWQ6IHN0cmluZztcbiAgICBzdGF0dXM6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbWFpbDogc3RyaW5nO1xuICAgIHBlcm1pc3Npb25zOiBBcnJheTxQZXJtaXNzaW9ucz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbnMge1xuICAgIG1vZHVsZTogc3RyaW5nO1xuICAgIHBlcm1pc3Npb246IHN0cmluZztcbiAgICByaWQ6IG51bWJlcjtcbiAgICByX25hbWU6IHN0cmluZztcbn1cbiJdfQ==
