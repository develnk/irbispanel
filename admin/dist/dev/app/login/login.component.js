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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFDekMsOENBQXFEO0FBYXJELElBQWEsY0FBYztJQXVCdkIsd0JBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBdEIxQixZQUFPLEdBQWUsd0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMvQyxhQUFRLEdBQXVCLHdCQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFzQjVELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNuQixVQUFDLE9BQWtCO1lBQ2YsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsS0FBSyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNwRSxnQkFBYyxDQUFDLGNBQWMsQ0FBWSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3RFLENBQUM7UUFDTCxDQUFDLEVBQ0QsVUFBQyxHQUFlO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQTVCYyw2QkFBYyxHQUE3QixVQUE4QixJQUFlLEVBQUUsTUFBYztRQUN6RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEUsQ0FBQztRQUlMLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQWVNLGlDQUFRLEdBQWY7UUFDSSxJQUFJLElBQUksR0FBRztZQUNQLElBQUksRUFBRTtnQkFDRixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsTUFBTSxFQUFFO29CQUNKLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUTtvQkFDcEIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRO2lCQUN0QjthQUNKO1NBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTCxxQkFBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFqRFksY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxzQkFBc0I7S0FDdEMsQ0FBQztxQ0F5QjhCLGVBQU07R0F2QnpCLGNBQWMsQ0FpRDFCO0FBakRZLHdDQUFjIiwiZmlsZSI6ImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlLCBNZXNzYWdlIH0gZnJvbSAnLi4vYXBwLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuXG4vKipcbiAqICAgIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgTG9naW5Db21wb25lbnQuXG4gKi9cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2xvZ2luLWNtcCcsXG4gICAgdGVtcGxhdGVVcmw6ICdsb2dpbi5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBBcHBTZXJ2aWNlID0gQXBwU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgIHByaXZhdGUgbWVzc2FnZXM6IFN1YmplY3Q8TWVzc2FnZVtdPiA9IEFwcFNlcnZpY2UuZ2V0TWVzc2FnZXMoKTtcbiAgICBwcml2YXRlIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYXNzd29yZDogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgbG9naW5PcGVyYXRpb24oZGF0YTogTG9naW5EYXRhLCByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICBpZiAoZGF0YS5zZXNfaWQpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRfdXNlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICByb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkL2hvbWUnXSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgICAgICAvLyAgIC8vIFVzZXIgaXMgYmxvY2tlZC4gU2hvdyBtZXNzYWdlIGFib3V0IGl0IGZvciB1c2VyLlxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3VibWl0dGVkIVwiKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKG1lc3NhZ2U6IE1lc3NhZ2VbXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlWzBdLmNvbnRyb2xsZXIgPT09ICdVc2VyJyAmJiBtZXNzYWdlWzBdLm1ldGhvZCA9PT0gJ2xvZ2luJykge1xuICAgICAgICAgICAgICAgICAgICBMb2dpbkNvbXBvbmVudC5sb2dpbk9wZXJhdGlvbig8TG9naW5EYXRhPm1lc3NhZ2VbMF0uZGF0YSwgcm91dGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycjogRXJyb3JFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJyArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU2VuZERhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdVc2VyJyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdsb2dpbicsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2luOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXNzOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLnNlbmQoZGF0YSk7XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luRGF0YSB7XG4gICAgc2VzX2lkOiBzdHJpbmc7XG4gICAgc3RhdHVzOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG1haWw6IHN0cmluZztcbiAgICBwZXJtaXNzaW9uczogQXJyYXk8UGVybWlzc2lvbnM+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25zIHtcbiAgICBtb2R1bGU6IHN0cmluZztcbiAgICBwZXJtaXNzaW9uOiBzdHJpbmc7XG4gICAgcmlkOiBudW1iZXI7XG4gICAgcl9uYW1lOiBzdHJpbmc7XG59XG4iXX0=
