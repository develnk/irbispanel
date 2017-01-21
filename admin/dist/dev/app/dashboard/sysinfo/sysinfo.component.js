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
var Rx_1 = require("rxjs/Rx");
var router_1 = require("@angular/router");
var websocket_service_1 = require("../../services/websocket.service");
var chat_channel_service_1 = require("../../services/chat.channel.service");
var globals_1 = require("../../globals");
var SysInfoComponent = (function () {
    function SysInfoComponent(chatChannelService, webSocketService, router, globals) {
        var _this = this;
        this.chatChannelService = chatChannelService;
        this.webSocketService = webSocketService;
        this.router = router;
        this.globals = globals;
        this.systemInfo = '';
        this.cpuInfo = '';
        this.messages = new Rx_1.Subject();
        this.chatSubscribed = false;
        console.log(globals.USER);
        this.webSocketService.start('wss://localhost:' + location.port + '/api/v1');
        this.chatChannelService.subscribed.subscribe(function (data) {
            _this.chatSubscribed = data;
            if (data) {
                _this.getAllMessages();
            }
        });
        this.chatChannelService.observableData.subscribe(function (message) {
            if (message.controller === 'system' && message.method === 'getsysinfo') {
                _this.processSysInfo(message.data);
            }
            if (message.controller === 'system' && message.method === 'getcpu') {
                _this.processCPUInfo(message.data);
            }
        }, function (err) {
            console.log('Error: ' + err.message);
        });
        var system_info = {
            controller: 'system',
            method: 'getsysinfo',
            data: ''
        };
        var cpu_info = {
            controller: 'system',
            method: 'getcpu',
            data: ''
        };
        this.sendMessage(system_info);
        this.sendMessage(cpu_info);
    }
    ;
    SysInfoComponent.prototype.ngOnDestroy = function () {
        this.chatChannelService.unsubscribe();
        this.webSocketService.close();
    };
    SysInfoComponent.prototype.sendMessage = function (message) {
        this.chatChannelService.send(message);
    };
    SysInfoComponent.prototype.processSysInfo = function (message) {
        this.systemInfo = message;
    };
    SysInfoComponent.prototype.processCPUInfo = function (message) {
        this.cpuInfo = message;
    };
    SysInfoComponent.prototype.getAllMessages = function () {
    };
    return SysInfoComponent;
}());
SysInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sys-info',
        templateUrl: 'sysinfo.html'
    }),
    __metadata("design:paramtypes", [chat_channel_service_1.ChatChannelService, websocket_service_1.WebSocketService, router_1.Router, globals_1.Globals])
], SysInfoComponent);
exports.SysInfoComponent = SysInfoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvc3lzaW5mby9zeXNpbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQW1EO0FBQ25ELDhCQUFrQztBQUNsQywwQ0FBeUM7QUFDekMsc0VBQW1GO0FBQ25GLDRFQUF5RTtBQUN6RSx5Q0FBd0M7QUFPeEMsSUFBYSxnQkFBZ0I7SUFRM0IsMEJBQW9CLGtCQUFxQyxFQUFVLGdCQUFpQyxFQUFVLE1BQWMsRUFBVSxPQUFnQjtRQUF0SixpQkFvQ0M7UUFwQ21CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFQL0ksZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBdUIsSUFBSSxZQUFPLEVBQWEsQ0FBQztRQUVoRSxtQkFBYyxHQUFXLEtBQUssQ0FBQztRQUk3QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUUsVUFBRSxJQUFZO1lBQzFELEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLEVBQUUsQ0FBQSxDQUFFLElBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBZ0I7WUFDNUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN2RSxLQUFJLENBQUMsY0FBYyxDQUFTLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxLQUFJLENBQUMsY0FBYyxDQUFTLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUMsR0FBZTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksV0FBVyxHQUF1QjtZQUNwQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixNQUFNLEVBQUUsWUFBWTtZQUNwQixJQUFJLEVBQUUsRUFBRTtTQUNULENBQUM7UUFFRixJQUFJLFFBQVEsR0FBdUI7WUFDakMsVUFBVSxFQUFFLFFBQVE7WUFDcEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFBQSxDQUFDO0lBRUYsc0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVPLHNDQUFXLEdBQW5CLFVBQW9CLE9BQWdCO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVPLHlDQUFjLEdBQXRCLFVBQXVCLE9BQWU7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVPLHlDQUFjLEdBQXRCLFVBQXVCLE9BQWU7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVPLHlDQUFjLEdBQXRCO0lBRUEsQ0FBQztJQUVILHVCQUFDO0FBQUQsQ0FuRUEsQUFtRUMsSUFBQTtBQW5FWSxnQkFBZ0I7SUFMNUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsY0FBYztLQUM1QixDQUFDO3FDQVN1Qyx5Q0FBa0IsRUFBMkIsb0NBQWdCLEVBQWtCLGVBQU0sRUFBbUIsaUJBQU87R0FSM0ksZ0JBQWdCLENBbUU1QjtBQW5FWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9zeXNpbmZvL3N5c2luZm8uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBXZWJTb2NrZXRTZXJ2aWNlLCBNZXNzYWdlIH0gICAgICAgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3dlYnNvY2tldC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDaGF0Q2hhbm5lbFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY2hhdC5jaGFubmVsLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzeXMtaW5mbycsXG4gIHRlbXBsYXRlVXJsOiAnc3lzaW5mby5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTeXNJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHVibGljIHN5c3RlbUluZm86c3RyaW5nID0gJyc7XG4gIHB1YmxpYyBjcHVJbmZvOnN0cmluZyA9ICcnO1xuICBwcml2YXRlIG1lc3NhZ2VzOiBTdWJqZWN0PE1lc3NhZ2VbXT4gPSBuZXcgU3ViamVjdDxNZXNzYWdlW10+KCk7XG4gIG5ld01lc3NhZ2VEYXRhOiBNZXNzYWdlO1xuICBjaGF0U3Vic2NyaWJlZDpib29sZWFuID0gZmFsc2U7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYXRDaGFubmVsU2VydmljZTpDaGF0Q2hhbm5lbFNlcnZpY2UsIHByaXZhdGUgd2ViU29ja2V0U2VydmljZTpXZWJTb2NrZXRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGdsb2JhbHM6IEdsb2JhbHMpIHtcbiAgICBjb25zb2xlLmxvZyhnbG9iYWxzLlVTRVIpO1xuICAgIHRoaXMud2ViU29ja2V0U2VydmljZS5zdGFydCgnd3NzOi8vbG9jYWxob3N0OicgKyBsb2NhdGlvbi5wb3J0ICsgJy9hcGkvdjEnKTtcbiAgICB0aGlzLmNoYXRDaGFubmVsU2VydmljZS5zdWJzY3JpYmVkLnN1YnNjcmliZSggKCBkYXRhOmJvb2xlYW4gKSA9PiB7XG4gICAgICB0aGlzLmNoYXRTdWJzY3JpYmVkID0gZGF0YTtcbiAgICAgIGlmKCBkYXRhICkge1xuICAgICAgICB0aGlzLmdldEFsbE1lc3NhZ2VzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoYXRDaGFubmVsU2VydmljZS5vYnNlcnZhYmxlRGF0YS5zdWJzY3JpYmUoKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBpZiAobWVzc2FnZS5jb250cm9sbGVyID09PSAnc3lzdGVtJyAmJiBtZXNzYWdlLm1ldGhvZCA9PT0gJ2dldHN5c2luZm8nKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NTeXNJbmZvKDxzdHJpbmc+bWVzc2FnZS5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG1lc3NhZ2UuY29udHJvbGxlciA9PT0gJ3N5c3RlbScgJiYgbWVzc2FnZS5tZXRob2QgPT09ICdnZXRjcHUnKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NDUFVJbmZvKDxzdHJpbmc+bWVzc2FnZS5kYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnI6IEVycm9yRXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBlcnIubWVzc2FnZSk7XG4gICAgfSk7XG5cbiAgICBsZXQgc3lzdGVtX2luZm8gOiBNZXNzYWdlID0gPE1lc3NhZ2U+IHtcbiAgICAgIGNvbnRyb2xsZXI6ICdzeXN0ZW0nLFxuICAgICAgbWV0aG9kOiAnZ2V0c3lzaW5mbycsXG4gICAgICBkYXRhOiAnJ1xuICAgIH07XG5cbiAgICBsZXQgY3B1X2luZm8gOiBNZXNzYWdlID0gPE1lc3NhZ2U+IHtcbiAgICAgIGNvbnRyb2xsZXI6ICdzeXN0ZW0nLFxuICAgICAgbWV0aG9kOiAnZ2V0Y3B1JyxcbiAgICAgIGRhdGE6ICcnXG4gICAgfTtcblxuICAgIHRoaXMuc2VuZE1lc3NhZ2Uoc3lzdGVtX2luZm8pO1xuICAgIHRoaXMuc2VuZE1lc3NhZ2UoY3B1X2luZm8pO1xuICB9O1xuXG4gIG5nT25EZXN0cm95KCk6dm9pZCB7XG4gICAgdGhpcy5jaGF0Q2hhbm5lbFNlcnZpY2UudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLndlYlNvY2tldFNlcnZpY2UuY2xvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VuZE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkgOnZvaWR7XG4gICAgdGhpcy5jaGF0Q2hhbm5lbFNlcnZpY2Uuc2VuZChtZXNzYWdlKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc1N5c0luZm8obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zeXN0ZW1JbmZvID0gbWVzc2FnZTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0NQVUluZm8obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jcHVJbmZvID0gbWVzc2FnZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWxsTWVzc2FnZXMoKTp2b2lkIHtcbiAgICAvLyB0aGlzLmNoYXRDaGFubmVsU2VydmljZS5zZW5kKHsgY29udHJvbGxlcjonVXNlcicsIG1ldGhvZDonbG9naW4nLCB2YWx1ZXM6IHt9fSk7XG4gIH1cblxufVxuIl19
