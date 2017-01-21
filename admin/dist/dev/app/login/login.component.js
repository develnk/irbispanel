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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFxRDtBQUNyRCwwQ0FBeUM7QUFDekMsOEJBQWtDO0FBQ2xDLG1FQUFnRjtBQUNoRix5RUFBc0U7QUFDdEUsZ0RBQThDO0FBQzlDLHNDQUFxQztBQVVyQyxJQUFhLGNBQWM7SUF1QnZCLHdCQUFvQixrQkFBcUMsRUFBVSxnQkFBaUMsRUFBVSxNQUFjLEVBQVMsV0FBd0IsRUFBVSxPQUFnQjtRQUF2TCxpQkFzQkM7UUF0Qm1CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQXBCL0ssYUFBUSxHQUF1QixJQUFJLFlBQU8sRUFBYSxDQUFDO1FBSWhFLG1CQUFjLEdBQVcsS0FBSyxDQUFDO1FBaUIzQixJQUFJLEdBQUcsR0FBVSxjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixPQUFPLENBQUMsSUFBSSxHQUFjLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQzVFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQVk7WUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsRUFBRSxDQUFBLENBQUUsSUFBSyxDQUFDLENBQUMsQ0FBQztnQkFDUixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDMUIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQyxPQUFnQjtZQUMxRCxnQkFBYyxDQUFDLGNBQWMsQ0FBWSxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1RSxDQUFDLEVBQ0QsVUFBQyxHQUFlO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQXBDYyw2QkFBYyxHQUE3QixVQUE4QixJQUFlLEVBQUUsTUFBYyxFQUFFLE9BQWdCO1FBQzNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixjQUFjLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzVELE9BQU8sQ0FBQyxJQUFJLEdBQWMsSUFBSSxDQUFDO2dCQUNoQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEUsQ0FBQztRQUlMLENBQUM7SUFDTCxDQUFDO0lBMEJPLHVDQUFjLEdBQXRCO0lBRUEsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTyxvQ0FBVyxHQUFuQjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUUsRUFBRSxVQUFVLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUMsRUFBQyxDQUFFLENBQUM7UUFDekgsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLFVBQVUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUM7SUFDekUsQ0FBQztJQUVPLCtCQUFNLEdBQWQ7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDTCxxQkFBQztBQUFELENBaEVBLEFBZ0VDLElBQUE7QUFoRVksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxzQkFBc0I7S0FDdEMsQ0FBQztxQ0F3QnlDLHlDQUFrQixFQUEyQixvQ0FBZ0IsRUFBa0IsZUFBTSxFQUFzQiwwQkFBVyxFQUFtQixpQkFBTztHQXZCOUssY0FBYyxDQWdFMUI7QUFoRVksd0NBQWMiLCJmaWxlIjoiYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgV2ViU29ja2V0U2VydmljZSwgTWVzc2FnZSB9ICAgICAgIGZyb20gXCIuLi9zZXJ2aWNlcy93ZWJzb2NrZXQuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2hhdENoYW5uZWxTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NoYXQuY2hhbm5lbC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCIuLi9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xuXG4vKipcbiAqICAgIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgTG9naW5Db21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdsb2dpbi1jbXAnLFxuICAgIHRlbXBsYXRlVXJsOiAnbG9naW4uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICAvLyBwcml2YXRlIHNlcnZpY2U6IEFwcFNlcnZpY2UgPSBBcHBTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgLy8gcHJpdmF0ZSBtZXNzYWdlczogU3ViamVjdDxNZXNzYWdlW10+ID0gQXBwU2VydmljZS5nZXRNZXNzYWdlcygpO1xuICAgIHByaXZhdGUgbWVzc2FnZXM6IFN1YmplY3Q8TWVzc2FnZVtdPiA9IG5ldyBTdWJqZWN0PE1lc3NhZ2VbXT4oKTtcbiAgICBuZXdNZXNzYWdlRGF0YTogTWVzc2FnZTtcbiAgICBwcml2YXRlIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYXNzd29yZDogc3RyaW5nO1xuICAgIGNoYXRTdWJzY3JpYmVkOmJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgc3RhdGljIGxvZ2luT3BlcmF0aW9uKGRhdGE6IExvZ2luRGF0YSwgcm91dGVyOiBSb3V0ZXIsIGdsb2JhbHM6IEdsb2JhbHMpIHtcbiAgICAgICAgaWYgKGRhdGEuc2VzX2lkKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRfdXNlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgZ2xvYmFscy5VU0VSID0gPExvZ2luRGF0YT5kYXRhO1xuICAgICAgICAgICAgICAgIHJvdXRlci5uYXZpZ2F0ZShbJy9kYXNoYm9hcmQvaG9tZSddKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgLy8gVXNlciBpcyBibG9ja2VkLiBTaG93IG1lc3NhZ2UgYWJvdXQgaXQgZm9yIHVzZXIuXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYXRDaGFubmVsU2VydmljZTpDaGF0Q2hhbm5lbFNlcnZpY2UsIHByaXZhdGUgd2ViU29ja2V0U2VydmljZTpXZWJTb2NrZXRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIGdsb2JhbHM6IEdsb2JhbHMgKSB7XG4gICAgICAgIGxldCBrZXk6c3RyaW5nID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJyk7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGdsb2JhbHMuVVNFUiA9IDxMb2dpbkRhdGE+SlNPTi5wYXJzZShrZXkpO1xuICAgICAgICAgICAgcm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZC9ob21lJ10pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53ZWJTb2NrZXRTZXJ2aWNlLnN0YXJ0KCd3c3M6Ly9sb2NhbGhvc3Q6JyArIGxvY2F0aW9uLnBvcnQgKyAnL2FwaS92MScpO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2hhdENoYW5uZWxTZXJ2aWNlLnN1YnNjcmliZWQuc3Vic2NyaWJlKChkYXRhOmJvb2xlYW4gKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmNoYXRTdWJzY3JpYmVkID0gZGF0YTtcbiAgICAgICAgICAgIGlmKCBkYXRhICkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWxsTWVzc2FnZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jaGF0Q2hhbm5lbFNlcnZpY2Uub2JzZXJ2YWJsZURhdGEuc3Vic2NyaWJlKChtZXNzYWdlOiBNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgTG9naW5Db21wb25lbnQubG9naW5PcGVyYXRpb24oPExvZ2luRGF0YT5tZXNzYWdlLmRhdGEsIHJvdXRlciwgZ2xvYmFscyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycjogRXJyb3JFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJyArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QWxsTWVzc2FnZXMoKTp2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5jaGF0Q2hhbm5lbFNlcnZpY2Uuc2VuZCh7IGNvbnRyb2xsZXI6J1VzZXInLCBtZXRob2Q6J2xvZ2luJywgdmFsdWVzOiB7fX0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6dm9pZCB7XG4gICAgICAgIHRoaXMuY2hhdENoYW5uZWxTZXJ2aWNlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMud2ViU29ja2V0U2VydmljZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2VuZE1lc3NhZ2UoKTp2b2lke1xuICAgICAgICB0aGlzLmNoYXRDaGFubmVsU2VydmljZS5zZW5kKCB7IGNvbnRyb2xsZXI6J1VzZXInLCBtZXRob2Q6J2xvZ2luJywgZGF0YTogeyBsb2dpbjogdGhpcy51c2VybmFtZSwgcGFzczogdGhpcy5wYXNzd29yZH19ICk7XG4gICAgICAgIHRoaXMubmV3TWVzc2FnZURhdGEgPSB7IGNvbnRyb2xsZXI6J1VzZXInLCBtZXRob2Q6J2xvZ2luJywgZGF0YToge319O1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2dpbkRhdGEge1xuICAgIHNlc19pZDogc3RyaW5nO1xuICAgIHN0YXR1czogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBtYWlsOiBzdHJpbmc7XG4gICAgcGVybWlzc2lvbnM6IEFycmF5PFBlcm1pc3Npb25zPjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9ucyB7XG4gICAgbW9kdWxlOiBzdHJpbmc7XG4gICAgcGVybWlzc2lvbjogc3RyaW5nO1xuICAgIHJpZDogbnVtYmVyO1xuICAgIHJfbmFtZTogc3RyaW5nO1xufVxuIl19
