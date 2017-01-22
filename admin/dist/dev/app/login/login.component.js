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
var Rx_1 = require("rxjs/Rx");
var websocket_service_1 = require("../services/websocket.service");
var chat_channel_service_1 = require("../services/chat.channel.service");
var auth_service_1 = require("../auth.service");
var globals_1 = require("../globals");
var LoginComponent = LoginComponent_1 = (function () {
    function LoginComponent(chatChannelService, webSocketService, router, authService, globals) {
        var _this = this;
        this.chatChannelService = chatChannelService;
        this.webSocketService = webSocketService;
        this.router = router;
        this.authService = authService;
        this.globals = globals;
        this.messages = new Rx_1.Subject();
        this.chatSubscribed = false;
        var key = sessionStorage.getItem('current_user');
        if (key) {
            globals.USER = JSON.parse(key);
            router.navigate(['/dashboard/home']);
        }
        this.webSocketService.start('wss://localhost:' + location.port + '/api/v1');
        var self = this;
        this.chatChannelService.subscribed.subscribe(function (data) {
            self.chatSubscribed = data;
            if (data) {
                _this.getAllMessages();
            }
        });
        this.chatChannelService.observableData.subscribe(function (message) {
            LoginComponent_1.loginOperation(message.data, router, globals);
        }, function (err) {
            console.log('Error: ' + err.message);
        });
    }
    LoginComponent.loginOperation = function (data, router, globals) {
        if (data.ses_id) {
            if (data.status == 1) {
                sessionStorage.setItem('current_user', JSON.stringify(data));
                globals.USER = data;
                router.navigate(['/dashboard/home']);
                console.log(JSON.parse(sessionStorage.getItem('current_user')));
            }
        }
    };
    LoginComponent.prototype.getAllMessages = function () {
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.chatChannelService.unsubscribe();
        this.webSocketService.close();
    };
    LoginComponent.prototype.sendMessage = function () {
        this.chatChannelService.send({ controller: 'User', method: 'login', data: { login: this.username, pass: this.password } });
        this.newMessageData = { controller: 'User', method: 'login', data: {} };
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
    };
    return LoginComponent;
}());
LoginComponent = LoginComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login-cmp',
        templateUrl: 'login.component.html'
    }),
    __metadata("design:paramtypes", [chat_channel_service_1.ChatChannelService, websocket_service_1.WebSocketService, router_1.Router, auth_service_1.AuthService, globals_1.Globals])
], LoginComponent);
exports.LoginComponent = LoginComponent;
var LoginComponent_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFxRDtBQUNyRCwwQ0FBeUM7QUFDekMsOEJBQWtDO0FBQ2xDLG1FQUFnRjtBQUNoRix5RUFBc0U7QUFDdEUsZ0RBQThDO0FBQzlDLHNDQUFxQztBQVVyQyxJQUFhLGNBQWM7SUF1QnZCLHdCQUFvQixrQkFBcUMsRUFBVSxnQkFBaUMsRUFBVSxNQUFjLEVBQVMsV0FBd0IsRUFBVSxPQUFnQjtRQUF2TCxpQkFzQkM7UUF0Qm1CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQXBCL0ssYUFBUSxHQUF1QixJQUFJLFlBQU8sRUFBYSxDQUFDO1FBSWhFLG1CQUFjLEdBQVcsS0FBSyxDQUFDO1FBaUIzQixJQUFJLEdBQUcsR0FBVSxjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsSUFBSSxHQUFjLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQzVFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVk7WUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsRUFBRSxDQUFBLENBQUUsSUFBSyxDQUFDLENBQUMsQ0FBQztnQkFDUixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDMUIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFnQjtZQUMxRCxnQkFBYyxDQUFDLGNBQWMsQ0FBWSxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1RSxDQUFDLEVBQ0QsVUFBQyxHQUFlO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXBDYyw2QkFBYyxHQUE3QixVQUE4QixJQUFlLEVBQUUsTUFBYyxFQUFFLE9BQWdCO1FBQzNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzdELE9BQU8sQ0FBQyxJQUFJLEdBQWMsSUFBSSxDQUFDO2dCQUMvQixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEUsQ0FBQztRQUlMLENBQUM7SUFDTCxDQUFDO0lBMEJPLHVDQUFjLEdBQXRCO0lBRUEsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTyxvQ0FBVyxHQUFuQjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUUsRUFBRSxVQUFVLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsRUFBQyxDQUFFLENBQUM7UUFDekgsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLFVBQVUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFDekUsQ0FBQztJQUVPLCtCQUFNLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDTCxxQkFBQztBQUFELENBaEVBLEFBZ0VDLElBQUE7QUFoRVksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxzQkFBc0I7S0FDdEMsQ0FBQztxQ0F3QnlDLHlDQUFrQixFQUEyQixvQ0FBZ0IsRUFBa0IsZUFBTSxFQUFzQiwwQkFBVyxFQUFtQixpQkFBTztHQXZCOUssY0FBYyxDQWdFMUI7QUFoRVksd0NBQWMiLCJmaWxlIjoiYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgV2ViU29ja2V0U2VydmljZSwgTWVzc2FnZSB9ICAgICAgIGZyb20gXCIuLi9zZXJ2aWNlcy93ZWJzb2NrZXQuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2hhdENoYW5uZWxTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NoYXQuY2hhbm5lbC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xuXG4vKipcbiAqICAgIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgTG9naW5Db21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdsb2dpbi1jbXAnLFxuICAgIHRlbXBsYXRlVXJsOiAnbG9naW4uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICAvLyBwcml2YXRlIHNlcnZpY2U6IEFwcFNlcnZpY2UgPSBBcHBTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgLy8gcHJpdmF0ZSBtZXNzYWdlczogU3ViamVjdDxNZXNzYWdlW10+ID0gQXBwU2VydmljZS5nZXRNZXNzYWdlcygpO1xuICAgIHByaXZhdGUgbWVzc2FnZXM6IFN1YmplY3Q8TWVzc2FnZVtdPiA9IG5ldyBTdWJqZWN0PE1lc3NhZ2VbXT4oKTtcbiAgICBuZXdNZXNzYWdlRGF0YTogTWVzc2FnZTtcbiAgICBwcml2YXRlIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYXNzd29yZDogc3RyaW5nO1xuICAgIGNoYXRTdWJzY3JpYmVkOmJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgc3RhdGljIGxvZ2luT3BlcmF0aW9uKGRhdGE6IExvZ2luRGF0YSwgcm91dGVyOiBSb3V0ZXIsIGdsb2JhbHM6IEdsb2JhbHMpIHtcbiAgICAgICAgaWYgKGRhdGEuc2VzX2lkKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRfdXNlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICBnbG9iYWxzLlVTRVIgPSA8TG9naW5EYXRhPmRhdGE7XG4gICAgICAgICAgICAgICAgcm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZC9ob21lJ10pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAgICAgLy8gICAvLyBVc2VyIGlzIGJsb2NrZWQuIFNob3cgbWVzc2FnZSBhYm91dCBpdCBmb3IgdXNlci5cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhdENoYW5uZWxTZXJ2aWNlOkNoYXRDaGFubmVsU2VydmljZSwgcHJpdmF0ZSB3ZWJTb2NrZXRTZXJ2aWNlOldlYlNvY2tldFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgZ2xvYmFsczogR2xvYmFscyApIHtcbiAgICAgICAgbGV0IGtleTpzdHJpbmcgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgZ2xvYmFscy5VU0VSID0gPExvZ2luRGF0YT5KU09OLnBhcnNlKGtleSk7XG4gICAgICAgICAgICByb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkL2hvbWUnXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndlYlNvY2tldFNlcnZpY2Uuc3RhcnQoJ3dzczovL2xvY2FsaG9zdDonICsgbG9jYXRpb24ucG9ydCArICcvYXBpL3YxJyk7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jaGF0Q2hhbm5lbFNlcnZpY2Uuc3Vic2NyaWJlZC5zdWJzY3JpYmUoKGRhdGE6Ym9vbGVhbiApID0+IHtcbiAgICAgICAgICAgIHNlbGYuY2hhdFN1YnNjcmliZWQgPSBkYXRhO1xuICAgICAgICAgICAgaWYoIGRhdGEgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBbGxNZXNzYWdlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNoYXRDaGFubmVsU2VydmljZS5vYnNlcnZhYmxlRGF0YS5zdWJzY3JpYmUoKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBMb2dpbkNvbXBvbmVudC5sb2dpbk9wZXJhdGlvbig8TG9naW5EYXRhPm1lc3NhZ2UuZGF0YSwgcm91dGVyLCBnbG9iYWxzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyOiBFcnJvckV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRBbGxNZXNzYWdlcygpOnZvaWQge1xuICAgICAgICAvLyB0aGlzLmNoYXRDaGFubmVsU2VydmljZS5zZW5kKHsgY29udHJvbGxlcjonVXNlcicsIG1ldGhvZDonbG9naW4nLCB2YWx1ZXM6IHt9fSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTp2b2lkIHtcbiAgICAgICAgdGhpcy5jaGF0Q2hhbm5lbFNlcnZpY2UudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy53ZWJTb2NrZXRTZXJ2aWNlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZW5kTWVzc2FnZSgpOnZvaWR7XG4gICAgICAgIHRoaXMuY2hhdENoYW5uZWxTZXJ2aWNlLnNlbmQoIHsgY29udHJvbGxlcjonVXNlcicsIG1ldGhvZDonbG9naW4nLCBkYXRhOiB7IGxvZ2luOiB0aGlzLnVzZXJuYW1lLCBwYXNzOiB0aGlzLnBhc3N3b3JkfX0gKTtcbiAgICAgICAgdGhpcy5uZXdNZXNzYWdlRGF0YSA9IHsgY29udHJvbGxlcjonVXNlcicsIG1ldGhvZDonbG9naW4nLCBkYXRhOiB7fX07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2dvdXQoKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luRGF0YSB7XG4gICAgc2VzX2lkOiBzdHJpbmc7XG4gICAgc3RhdHVzOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG1haWw6IHN0cmluZztcbiAgICBwZXJtaXNzaW9uczogQXJyYXk8UGVybWlzc2lvbnM+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25zIHtcbiAgICBtb2R1bGU6IHN0cmluZztcbiAgICBwZXJtaXNzaW9uOiBzdHJpbmc7XG4gICAgcmlkOiBudW1iZXI7XG4gICAgcl9uYW1lOiBzdHJpbmc7XG59XG4iXX0=
