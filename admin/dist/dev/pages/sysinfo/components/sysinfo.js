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
var SysInfoComponent = (function () {
    function SysInfoComponent() {
        var _this = this;
        this.service = app_service_1.AppService.getInstance();
        this.messages = app_service_1.AppService.getMessages();
        this.systemInfo = '';
        this.cpuInfo = '';
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
    SysInfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sys-info',
            templateUrl: 'sysinfo.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], SysInfoComponent);
    return SysInfoComponent;
}());
exports.SysInfoComponent = SysInfoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N5c2luZm8vY29tcG9uZW50cy9zeXNpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFBZSxDQUFDLENBQUE7QUFDMUMsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQsNEJBQW9DLG1DQUFtQyxDQUFDLENBQUE7QUFTeEU7SUFNRTtRQU5GLGlCQWdEQztRQS9DUyxZQUFPLEdBQWMsd0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QyxhQUFRLEdBQXNCLHdCQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEQsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBR3pCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNyQixVQUFDLE9BQWtCO1lBQ2pCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDN0UsS0FBSSxDQUFDLGNBQWMsQ0FBUyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzlCLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pFLEtBQUksQ0FBQyxjQUFjLENBQVMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM5QixDQUFDO1FBQ0gsQ0FBQyxFQUNELFVBQUMsR0FBZSxJQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FDN0QsQ0FBQztRQUVGLElBQUksV0FBVyxHQUFHO1lBQ2hCLElBQUksRUFBRTtnQkFDSixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsTUFBTSxFQUFFLFlBQVk7Z0JBQ3BCLE1BQU0sRUFBRSxFQUFFO2FBQ1g7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFL0IsSUFBSSxRQUFRLEdBQUc7WUFDYixJQUFJLEVBQUU7Z0JBQ0osVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixNQUFNLEVBQUUsRUFBRTthQUNYO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7O0lBRU8seUNBQWMsR0FBdEIsVUFBdUIsT0FBZTtRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztJQUM1QixDQUFDO0lBRU8seUNBQWMsR0FBdEIsVUFBdUIsT0FBZTtRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBcERIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsY0FBYztZQUMzQixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztTQUNoQyxDQUFDOzt3QkFBQTtJQWlERix1QkFBQztBQUFELENBaERBLEFBZ0RDLElBQUE7QUFoRFksd0JBQWdCLG1CQWdENUIsQ0FBQSIsImZpbGUiOiJwYWdlcy9zeXNpbmZvL2NvbXBvbmVudHMvc3lzaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXBwU2VydmljZSwgTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL2xheW91dHMvYmFzZS9hcHAuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3N5cy1pbmZvJyxcbiAgdGVtcGxhdGVVcmw6ICdzeXNpbmZvLmh0bWwnLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIFN5c0luZm9Db21wb25lbnQge1xuICBwcml2YXRlIHNlcnZpY2U6QXBwU2VydmljZSA9IEFwcFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgcHJpdmF0ZSBtZXNzYWdlczpTdWJqZWN0PE1lc3NhZ2VbXT4gPSBBcHBTZXJ2aWNlLmdldE1lc3NhZ2VzKCk7XG4gIHB1YmxpYyBzeXN0ZW1JbmZvOnN0cmluZyA9ICcnO1xuICBwdWJsaWMgY3B1SW5mbzpzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lc3NhZ2VzLnN1YnNjcmliZShcbiAgICAgIChtZXNzYWdlOiBNZXNzYWdlW10pID0+IHtcbiAgICAgICAgaWYgKG1lc3NhZ2VbMF0uY29udHJvbGxlciA9PT0gJ3N5c3RlbScgJiYgbWVzc2FnZVswXS5tZXRob2QgPT09ICdnZXRzeXNpbmZvJykge1xuICAgICAgICAgIHRoaXMucHJvY2Vzc1N5c0luZm8oPHN0cmluZz5tZXNzYWdlWzBdLmRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VbMF0uZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVzc2FnZVswXS5jb250cm9sbGVyID09PSAnc3lzdGVtJyAmJiBtZXNzYWdlWzBdLm1ldGhvZCA9PT0gJ2dldGNwdScpIHtcbiAgICAgICAgICB0aGlzLnByb2Nlc3NDUFVJbmZvKDxzdHJpbmc+bWVzc2FnZVswXS5kYXRhKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlWzBdLmRhdGEpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoZXJyOiBFcnJvckV2ZW50KSA9PiB7Y29uc29sZS5sb2coJ0Vycm9yOiAnICsgZXJyLm1lc3NhZ2UpO31cbiAgICApO1xuXG4gICAgbGV0IHN5c3RlbV9pbmZvID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBjb250cm9sbGVyOiAnc3lzdGVtJyxcbiAgICAgICAgbWV0aG9kOiAnZ2V0c3lzaW5mbycsXG4gICAgICAgIHZhbHVlczogJydcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2VydmljZS5zZW5kKHN5c3RlbV9pbmZvKTtcblxuICAgIGxldCBjcHVfaW5mbyA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29udHJvbGxlcjogJ3N5c3RlbScsXG4gICAgICAgIG1ldGhvZDogJ2dldGNwdScsXG4gICAgICAgIHZhbHVlczogJydcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2VydmljZS5zZW5kKGNwdV9pbmZvKTtcbiAgfTtcblxuICBwcml2YXRlIHByb2Nlc3NTeXNJbmZvKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuc3lzdGVtSW5mbyA9IG1lc3NhZ2U7XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NDUFVJbmZvKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuY3B1SW5mbyA9IG1lc3NhZ2U7XG4gIH1cblxufVxuIl19
