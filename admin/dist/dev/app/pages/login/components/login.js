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
var app_service_1 = require('../../../app.service');
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
    LoginComponent.prototype.onSubmit = function () { console.log("Submitted!"); };
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
            templateUrl: 'login.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9sb2dpbi9jb21wb25lbnRzL2xvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQXVCLGlCQUFpQixDQUFDLENBQUE7QUFDekMsNEJBQW9DLHNCQUFzQixDQUFDLENBQUE7QUFRM0Q7SUFxQkUsd0JBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBcEIxQixZQUFPLEdBQWMsd0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QyxhQUFRLEdBQXNCLHdCQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFvQjdELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNyQixVQUFDLE9BQWtCO1lBQ2pCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEtBQUssTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDdEUsY0FBYyxDQUFDLGNBQWMsQ0FBWSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3BFLENBQUM7UUFDSCxDQUFDLEVBQ0QsVUFBQyxHQUFlLElBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUM3RCxDQUFDO0lBQ0osQ0FBQztJQXhCYyw2QkFBYyxHQUE3QixVQUE4QixJQUFjLEVBQUUsTUFBYztRQUMxRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDN0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLENBQUM7UUFJSCxDQUFDO0lBQ0gsQ0FBQztJQUVELGlDQUFRLEdBQVIsY0FBYSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQWFsQyxpQ0FBUSxHQUFmO1FBQ0UsSUFBSSxJQUFJLEdBQUc7WUFDVCxJQUFJLEVBQUU7Z0JBQ0osVUFBVSxFQUFFLE1BQU07Z0JBQ2xCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLE1BQU0sRUFBRTtvQkFDTixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVE7b0JBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtpQkFDcEI7YUFDRjtTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBakRIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUcsWUFBWTtZQUN2QixXQUFXLEVBQUcsWUFBWTtTQUMzQixDQUFDOztzQkFBQTtJQStDRixxQkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1ksc0JBQWMsaUJBOEMxQixDQUFBIiwiZmlsZSI6ImFwcC9wYWdlcy9sb2dpbi9jb21wb25lbnRzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBwU2VydmljZSwgTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL2FwcC5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1J4JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yIDogJ2xvZ2luLWZvcm0nLFxuICB0ZW1wbGF0ZVVybCA6ICdsb2dpbi5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gIHByaXZhdGUgc2VydmljZTpBcHBTZXJ2aWNlID0gQXBwU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICBwcml2YXRlIG1lc3NhZ2VzOlN1YmplY3Q8TWVzc2FnZVtdPiA9IEFwcFNlcnZpY2UuZ2V0TWVzc2FnZXMoKTtcbiAgcHJpdmF0ZSB1c2VybmFtZTpzdHJpbmc7XG4gIHByaXZhdGUgcGFzc3dvcmQ6c3RyaW5nO1xuXG4gIHByaXZhdGUgc3RhdGljIGxvZ2luT3BlcmF0aW9uKGRhdGE6TG9naW5EYXRhLCByb3V0ZXI6IFJvdXRlcikge1xuICAgIGlmIChkYXRhLnNlc19pZCkge1xuICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAxKSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRfdXNlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgcm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZC9ob21lJ10pO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKSk7XG4gICAgICB9XG4gICAgICAvLyBlbHNlIHtcbiAgICAgIC8vICAgLy8gVXNlciBpcyBibG9ja2VkLiBTaG93IG1lc3NhZ2UgYWJvdXQgaXQgZm9yIHVzZXIuXG4gICAgICAvLyB9XG4gICAgfVxuICB9XG5cbiAgb25TdWJtaXQoKSB7IGNvbnNvbGUubG9nKFwiU3VibWl0dGVkIVwiKTsgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLm1lc3NhZ2VzLnN1YnNjcmliZShcbiAgICAgIChtZXNzYWdlOiBNZXNzYWdlW10pID0+IHtcbiAgICAgICAgaWYgKG1lc3NhZ2VbMF0uY29udHJvbGxlciA9PT0gJ1VzZXInICYmIG1lc3NhZ2VbMF0ubWV0aG9kID09PSAnbG9naW4nKSB7XG4gICAgICAgICAgTG9naW5Db21wb25lbnQubG9naW5PcGVyYXRpb24oPExvZ2luRGF0YT5tZXNzYWdlWzBdLmRhdGEsIHJvdXRlcik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoZXJyOiBFcnJvckV2ZW50KSA9PiB7Y29uc29sZS5sb2coJ0Vycm9yOiAnICsgZXJyLm1lc3NhZ2UpO31cbiAgICApO1xuICB9XG5cbiAgcHVibGljIFNlbmREYXRhKCkge1xuICAgIGxldCBkYXRhID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBjb250cm9sbGVyOiAnVXNlcicsXG4gICAgICAgIG1ldGhvZDogJ2xvZ2luJyxcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgbG9naW46IHRoaXMudXNlcm5hbWUsXG4gICAgICAgICAgcGFzczogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZXJ2aWNlLnNlbmQoZGF0YSk7XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luRGF0YSB7XG4gIHNlc19pZDogc3RyaW5nO1xuICBzdGF0dXM6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBtYWlsOiBzdHJpbmc7XG4gIHBlcm1pc3Npb25zOiBBcnJheTxQZXJtaXNzaW9ucz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbnMge1xuICBtb2R1bGU6IHN0cmluZztcbiAgcGVybWlzc2lvbjogc3RyaW5nO1xuICByaWQ6IG51bWJlcjtcbiAgcl9uYW1lOiBzdHJpbmc7XG59XG4iXX0=
