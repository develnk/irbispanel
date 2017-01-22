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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvc3lzaW5mby9zeXNpbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQW1EO0FBQ25ELDhCQUFrQztBQUNsQywwQ0FBeUM7QUFDekMsc0VBQW1GO0FBQ25GLDRFQUF5RTtBQUN6RSx5Q0FBd0M7QUFPeEMsSUFBYSxnQkFBZ0I7SUFRM0IsMEJBQW9CLGtCQUFxQyxFQUFVLGdCQUFpQyxFQUFVLE1BQWMsRUFBVSxPQUFnQjtRQUF0SixpQkFtQ0M7UUFuQ21CLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFQL0ksZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBdUIsSUFBSSxZQUFPLEVBQWEsQ0FBQztRQUVoRSxtQkFBYyxHQUFXLEtBQUssQ0FBQztRQUk3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUUsVUFBRSxJQUFZO1lBQzFELEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLEVBQUUsQ0FBQSxDQUFFLElBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBZ0I7WUFDNUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN2RSxLQUFJLENBQUMsY0FBYyxDQUFTLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxLQUFJLENBQUMsY0FBYyxDQUFTLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUMsR0FBZTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksV0FBVyxHQUF1QjtZQUNwQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixNQUFNLEVBQUUsWUFBWTtZQUNwQixJQUFJLEVBQUUsRUFBRTtTQUNULENBQUM7UUFFRixJQUFJLFFBQVEsR0FBdUI7WUFDakMsVUFBVSxFQUFFLFFBQVE7WUFDcEIsTUFBTSxFQUFFLFFBQVE7WUFDaEIsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFBQSxDQUFDO0lBRUYsc0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVPLHNDQUFXLEdBQW5CLFVBQW9CLE9BQWdCO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVPLHlDQUFjLEdBQXRCLFVBQXVCLE9BQWU7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVPLHlDQUFjLEdBQXRCLFVBQXVCLE9BQWU7UUFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVPLHlDQUFjLEdBQXRCO0lBRUEsQ0FBQztJQUVILHVCQUFDO0FBQUQsQ0FsRUEsQUFrRUMsSUFBQTtBQWxFWSxnQkFBZ0I7SUFMNUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsY0FBYztLQUM1QixDQUFDO3FDQVN1Qyx5Q0FBa0IsRUFBMkIsb0NBQWdCLEVBQWtCLGVBQU0sRUFBbUIsaUJBQU87R0FSM0ksZ0JBQWdCLENBa0U1QjtBQWxFWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9zeXNpbmZvL3N5c2luZm8uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uRGVzdHJveX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBXZWJTb2NrZXRTZXJ2aWNlLCBNZXNzYWdlIH0gICAgICAgZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3dlYnNvY2tldC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDaGF0Q2hhbm5lbFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY2hhdC5jaGFubmVsLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzeXMtaW5mbycsXG4gIHRlbXBsYXRlVXJsOiAnc3lzaW5mby5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTeXNJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHVibGljIHN5c3RlbUluZm86c3RyaW5nID0gJyc7XG4gIHB1YmxpYyBjcHVJbmZvOnN0cmluZyA9ICcnO1xuICBwcml2YXRlIG1lc3NhZ2VzOiBTdWJqZWN0PE1lc3NhZ2VbXT4gPSBuZXcgU3ViamVjdDxNZXNzYWdlW10+KCk7XG4gIG5ld01lc3NhZ2VEYXRhOiBNZXNzYWdlO1xuICBjaGF0U3Vic2NyaWJlZDpib29sZWFuID0gZmFsc2U7XG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYXRDaGFubmVsU2VydmljZTpDaGF0Q2hhbm5lbFNlcnZpY2UsIHByaXZhdGUgd2ViU29ja2V0U2VydmljZTpXZWJTb2NrZXRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGdsb2JhbHM6IEdsb2JhbHMpIHtcbiAgICB0aGlzLndlYlNvY2tldFNlcnZpY2Uuc3RhcnQoJ3dzczovL2xvY2FsaG9zdDonICsgbG9jYXRpb24ucG9ydCArICcvYXBpL3YxJyk7XG4gICAgdGhpcy5jaGF0Q2hhbm5lbFNlcnZpY2Uuc3Vic2NyaWJlZC5zdWJzY3JpYmUoICggZGF0YTpib29sZWFuICkgPT4ge1xuICAgICAgdGhpcy5jaGF0U3Vic2NyaWJlZCA9IGRhdGE7XG4gICAgICBpZiggZGF0YSApIHtcbiAgICAgICAgdGhpcy5nZXRBbGxNZXNzYWdlcygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jaGF0Q2hhbm5lbFNlcnZpY2Uub2JzZXJ2YWJsZURhdGEuc3Vic2NyaWJlKChtZXNzYWdlOiBNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgaWYgKG1lc3NhZ2UuY29udHJvbGxlciA9PT0gJ3N5c3RlbScgJiYgbWVzc2FnZS5tZXRob2QgPT09ICdnZXRzeXNpbmZvJykge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzU3lzSW5mbyg8c3RyaW5nPm1lc3NhZ2UuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtZXNzYWdlLmNvbnRyb2xsZXIgPT09ICdzeXN0ZW0nICYmIG1lc3NhZ2UubWV0aG9kID09PSAnZ2V0Y3B1Jykge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQ1BVSW5mbyg8c3RyaW5nPm1lc3NhZ2UuZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyOiBFcnJvckV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnICsgZXJyLm1lc3NhZ2UpO1xuICAgIH0pO1xuXG4gICAgbGV0IHN5c3RlbV9pbmZvIDogTWVzc2FnZSA9IDxNZXNzYWdlPiB7XG4gICAgICBjb250cm9sbGVyOiAnc3lzdGVtJyxcbiAgICAgIG1ldGhvZDogJ2dldHN5c2luZm8nLFxuICAgICAgZGF0YTogJydcbiAgICB9O1xuXG4gICAgbGV0IGNwdV9pbmZvIDogTWVzc2FnZSA9IDxNZXNzYWdlPiB7XG4gICAgICBjb250cm9sbGVyOiAnc3lzdGVtJyxcbiAgICAgIG1ldGhvZDogJ2dldGNwdScsXG4gICAgICBkYXRhOiAnJ1xuICAgIH07XG5cbiAgICB0aGlzLnNlbmRNZXNzYWdlKHN5c3RlbV9pbmZvKTtcbiAgICB0aGlzLnNlbmRNZXNzYWdlKGNwdV9pbmZvKTtcbiAgfTtcblxuICBuZ09uRGVzdHJveSgpOnZvaWQge1xuICAgIHRoaXMuY2hhdENoYW5uZWxTZXJ2aWNlLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy53ZWJTb2NrZXRTZXJ2aWNlLmNsb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIHNlbmRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIDp2b2lke1xuICAgIHRoaXMuY2hhdENoYW5uZWxTZXJ2aWNlLnNlbmQobWVzc2FnZSk7XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NTeXNJbmZvKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuc3lzdGVtSW5mbyA9IG1lc3NhZ2U7XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NDUFVJbmZvKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuY3B1SW5mbyA9IG1lc3NhZ2U7XG4gIH1cblxuICBwcml2YXRlIGdldEFsbE1lc3NhZ2VzKCk6dm9pZCB7XG4gICAgLy8gdGhpcy5jaGF0Q2hhbm5lbFNlcnZpY2Uuc2VuZCh7IGNvbnRyb2xsZXI6J1VzZXInLCBtZXRob2Q6J2xvZ2luJywgdmFsdWVzOiB7fX0pO1xuICB9XG5cbn1cbiJdfQ==
