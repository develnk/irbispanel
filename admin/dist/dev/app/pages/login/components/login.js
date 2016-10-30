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
var app_service_1 = require("../../../app.service");
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
            if (data.status === 1) {
                sessionStorage.setItem('current_user', JSON.stringify(data));
                router.navigate(['/dashboard/home']);
                console.log(JSON.parse(sessionStorage.getItem('current_user')));
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
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login-form',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9sb2dpbi9jb21wb25lbnRzL2xvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEM7QUFDMUMsMENBQXlDO0FBQ3pDLG9EQUEyRDtBQVEzRDtJQW1CRSx3QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFsQjFCLFlBQU8sR0FBYyx3QkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlDLGFBQVEsR0FBc0Isd0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQWtCN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ3JCLFVBQUMsT0FBa0I7WUFDakIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsS0FBSyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxjQUFjLENBQUMsY0FBYyxDQUFZLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDcEUsQ0FBQztRQUNILENBQUMsRUFDRCxVQUFDLEdBQWUsSUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQzdELENBQUM7SUFDSixDQUFDO0lBdEJjLDZCQUFjLEdBQTdCLFVBQThCLElBQWMsRUFBRSxNQUFjO1FBQzFELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEUsQ0FBQztRQUlILENBQUM7SUFDSCxDQUFDO0lBYU0saUNBQVEsR0FBZjtRQUNFLElBQUksSUFBSSxHQUFHO1lBQ1QsSUFBSSxFQUFFO2dCQUNKLFVBQVUsRUFBRSxNQUFNO2dCQUNsQixNQUFNLEVBQUUsT0FBTztnQkFDZixNQUFNLEVBQUU7b0JBQ04sS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRO29CQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7aUJBQ3BCO2FBQ0Y7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVILHFCQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtBQTVDRDtJQUxDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFHLFlBQVk7UUFDdkIsV0FBVyxFQUFHLFlBQVk7S0FDM0IsQ0FBQztxQ0FvQjRCLGVBQU07a0JBeUJuQztBQTVDWSx5QkFBQSxjQUFjLENBQUEiLCJmaWxlIjoiYXBwL3BhZ2VzL2xvZ2luL2NvbXBvbmVudHMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlLCBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vLi4vYXBwLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3IgOiAnbG9naW4tZm9ybScsXG4gIHRlbXBsYXRlVXJsIDogJ2xvZ2luLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBzZXJ2aWNlOkFwcFNlcnZpY2UgPSBBcHBTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gIHByaXZhdGUgbWVzc2FnZXM6U3ViamVjdDxNZXNzYWdlW10+ID0gQXBwU2VydmljZS5nZXRNZXNzYWdlcygpO1xuICBwcml2YXRlIHVzZXJuYW1lOnN0cmluZztcbiAgcHJpdmF0ZSBwYXNzd29yZDpzdHJpbmc7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgbG9naW5PcGVyYXRpb24oZGF0YTpMb2dpbkRhdGEsIHJvdXRlcjogUm91dGVyKSB7XG4gICAgaWYgKGRhdGEuc2VzX2lkKSB7XG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IDEpIHtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudF91c2VyJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICByb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkL2hvbWUnXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpKTtcbiAgICAgIH1cbiAgICAgIC8vIGVsc2Uge1xuICAgICAgLy8gICAvLyBVc2VyIGlzIGJsb2NrZWQuIFNob3cgbWVzc2FnZSBhYm91dCBpdCBmb3IgdXNlci5cbiAgICAgIC8vIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5tZXNzYWdlcy5zdWJzY3JpYmUoXG4gICAgICAobWVzc2FnZTogTWVzc2FnZVtdKSA9PiB7XG4gICAgICAgIGlmIChtZXNzYWdlWzBdLmNvbnRyb2xsZXIgPT09ICdVc2VyJyAmJiBtZXNzYWdlWzBdLm1ldGhvZCA9PT0gJ2xvZ2luJykge1xuICAgICAgICAgIExvZ2luQ29tcG9uZW50LmxvZ2luT3BlcmF0aW9uKDxMb2dpbkRhdGE+bWVzc2FnZVswXS5kYXRhLCByb3V0ZXIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKGVycjogRXJyb3JFdmVudCkgPT4ge2NvbnNvbGUubG9nKCdFcnJvcjogJyArIGVyci5tZXNzYWdlKTt9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBTZW5kRGF0YSgpIHtcbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29udHJvbGxlcjogJ1VzZXInLFxuICAgICAgICBtZXRob2Q6ICdsb2dpbicsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgIGxvZ2luOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgIHBhc3M6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2VydmljZS5zZW5kKGRhdGEpO1xuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2dpbkRhdGEge1xuICBzZXNfaWQ6IHN0cmluZztcbiAgc3RhdHVzOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgbWFpbDogc3RyaW5nO1xuICBwZXJtaXNzaW9uczogQXJyYXk8UGVybWlzc2lvbnM+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25zIHtcbiAgbW9kdWxlOiBzdHJpbmc7XG4gIHBlcm1pc3Npb246IHN0cmluZztcbiAgcmlkOiBudW1iZXI7XG4gIHJfbmFtZTogc3RyaW5nO1xufVxuIl19
