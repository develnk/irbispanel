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
var app_service_1 = require("../../app.service");
var SysInfoComponent = (function () {
    function SysInfoComponent() {
        var _this = this;
        this.systemInfo = '';
        this.cpuInfo = '';
        this.service = app_service_1.AppService.getInstance();
        this.messages = app_service_1.AppService.getMessages();
        this.messages.subscribe(function (message) {
            if (message[0].controller === 'system' && message[0].method === 'getsysinfo') {
                _this.processSysInfo(message[0].data);
                console.log(message[0].data);
            }
            if (message[0].controller === 'system' && message[0].method === 'getcpu') {
                _this.processCPUInfo(message[0].data);
                console.log(message[0].data);
            }
        }, function (err) { console.log('Error: ' + err.message); });
        var system_info = {
            data: {
                controller: 'system',
                method: 'getsysinfo',
                values: ''
            }
        };
        this.service.send(system_info);
        var cpu_info = {
            data: {
                controller: 'system',
                method: 'getcpu',
                values: ''
            }
        };
        this.service.send(cpu_info);
    }
    ;
    SysInfoComponent.prototype.processSysInfo = function (message) {
        this.systemInfo = message;
    };
    SysInfoComponent.prototype.processCPUInfo = function (message) {
        this.cpuInfo = message;
    };
    return SysInfoComponent;
}());
SysInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sys-info',
        templateUrl: 'sysinfo.html'
    }),
    __metadata("design:paramtypes", [])
], SysInfoComponent);
exports.SysInfoComponent = SysInfoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvc3lzaW5mby9zeXNpbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLGlEQUF3RDtBQVF4RCxJQUFhLGdCQUFnQjtJQU0zQjtRQUFBLGlCQWdDQztRQXJDTSxlQUFVLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFDbkIsWUFBTyxHQUFjLHdCQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUMsYUFBUSxHQUFzQix3QkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRzdELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNyQixVQUFDLE9BQWtCO1lBQ2pCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDN0UsS0FBSSxDQUFDLGNBQWMsQ0FBUyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pFLEtBQUksQ0FBQyxjQUFjLENBQVMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUMsR0FBZSxJQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FDN0QsQ0FBQztRQUVGLElBQUksV0FBVyxHQUFHO1lBQ2hCLElBQUksRUFBRTtnQkFDSixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLE1BQU0sRUFBRSxFQUFFO2FBQ1g7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFL0IsSUFBSSxRQUFRLEdBQUc7WUFDYixJQUFJLEVBQUU7Z0JBQ0osVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixNQUFNLEVBQUUsRUFBRTthQUNYO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFBQSxDQUFDO0lBRU0seUNBQWMsR0FBdEIsVUFBdUIsT0FBZTtRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBRU8seUNBQWMsR0FBdEIsVUFBdUIsT0FBZTtRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUgsdUJBQUM7QUFBRCxDQWhEQSxBQWdEQyxJQUFBO0FBaERZLGdCQUFnQjtJQUw1QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxjQUFjO0tBQzVCLENBQUM7O0dBQ1csZ0JBQWdCLENBZ0Q1QjtBQWhEWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9zeXNpbmZvL3N5c2luZm8uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBTZXJ2aWNlLCBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vYXBwLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzeXMtaW5mbycsXG4gIHRlbXBsYXRlVXJsOiAnc3lzaW5mby5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTeXNJbmZvQ29tcG9uZW50IHtcbiAgcHVibGljIHN5c3RlbUluZm86c3RyaW5nID0gJyc7XG4gIHB1YmxpYyBjcHVJbmZvOnN0cmluZyA9ICcnO1xuICBwcml2YXRlIHNlcnZpY2U6QXBwU2VydmljZSA9IEFwcFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgcHJpdmF0ZSBtZXNzYWdlczpTdWJqZWN0PE1lc3NhZ2VbXT4gPSBBcHBTZXJ2aWNlLmdldE1lc3NhZ2VzKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tZXNzYWdlcy5zdWJzY3JpYmUoXG4gICAgICAobWVzc2FnZTogTWVzc2FnZVtdKSA9PiB7XG4gICAgICAgIGlmIChtZXNzYWdlWzBdLmNvbnRyb2xsZXIgPT09ICdzeXN0ZW0nICYmIG1lc3NhZ2VbMF0ubWV0aG9kID09PSAnZ2V0c3lzaW5mbycpIHtcbiAgICAgICAgICB0aGlzLnByb2Nlc3NTeXNJbmZvKDxzdHJpbmc+bWVzc2FnZVswXS5kYXRhKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlWzBdLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXNzYWdlWzBdLmNvbnRyb2xsZXIgPT09ICdzeXN0ZW0nICYmIG1lc3NhZ2VbMF0ubWV0aG9kID09PSAnZ2V0Y3B1Jykge1xuICAgICAgICAgIHRoaXMucHJvY2Vzc0NQVUluZm8oPHN0cmluZz5tZXNzYWdlWzBdLmRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VbMF0uZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoZXJyOiBFcnJvckV2ZW50KSA9PiB7Y29uc29sZS5sb2coJ0Vycm9yOiAnICsgZXJyLm1lc3NhZ2UpO31cbiAgICApO1xuXG4gICAgbGV0IHN5c3RlbV9pbmZvID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBjb250cm9sbGVyOiAnc3lzdGVtJyxcbiAgICAgICAgbWV0aG9kOiAnZ2V0c3lzaW5mbycsXG4gICAgICAgIHZhbHVlczogJydcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2VydmljZS5zZW5kKHN5c3RlbV9pbmZvKTtcblxuICAgIGxldCBjcHVfaW5mbyA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29udHJvbGxlcjogJ3N5c3RlbScsXG4gICAgICAgIG1ldGhvZDogJ2dldGNwdScsXG4gICAgICAgIHZhbHVlczogJydcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2VydmljZS5zZW5kKGNwdV9pbmZvKTtcbiAgfTtcblxuICBwcml2YXRlIHByb2Nlc3NTeXNJbmZvKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuc3lzdGVtSW5mbyA9IG1lc3NhZ2U7XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NDUFVJbmZvKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuY3B1SW5mbyA9IG1lc3NhZ2U7XG4gIH1cblxufVxuIl19
