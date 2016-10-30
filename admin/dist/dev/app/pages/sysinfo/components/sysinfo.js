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
var app_service_1 = require("../../../app.service");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9zeXNpbmZvL2NvbXBvbmVudHMvc3lzaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLG9EQUEyRDtBQVEzRDtJQU1FO1FBQUEsaUJBZ0NDO1FBckNNLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFDdkIsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQWMsd0JBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QyxhQUFRLEdBQXNCLHdCQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFHN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ3JCLFVBQUMsT0FBa0I7WUFDakIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxLQUFJLENBQUMsY0FBYyxDQUFTLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDekUsS0FBSSxDQUFDLGNBQWMsQ0FBUyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLENBQUM7UUFDSCxDQUFDLEVBQ0QsVUFBQyxHQUFlLElBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUM3RCxDQUFDO1FBRUYsSUFBSSxXQUFXLEdBQUc7WUFDaEIsSUFBSSxFQUFFO2dCQUNKLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixNQUFNLEVBQUUsWUFBWTtnQkFDcEIsTUFBTSxFQUFFLEVBQUU7YUFDWDtTQUNGLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUvQixJQUFJLFFBQVEsR0FBRztZQUNiLElBQUksRUFBRTtnQkFDSixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLE1BQU0sRUFBRSxFQUFFO2FBQ1g7U0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7SUFFTSx5Q0FBYyxHQUF0QixVQUF1QixPQUFlO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFFTyx5Q0FBYyxHQUF0QixVQUF1QixPQUFlO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFSCx1QkFBQztBQUFELENBaERBLEFBZ0RDLElBQUE7QUFoREQ7SUFMQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxjQUFjO0tBQzVCLENBQUM7O29CQWlERDtBQWhEWSwyQkFBQSxnQkFBZ0IsQ0FBQSIsImZpbGUiOiJhcHAvcGFnZXMvc3lzaW5mby9jb21wb25lbnRzL3N5c2luZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcFNlcnZpY2UsIE1lc3NhZ2UgfSBmcm9tICcuLi8uLi8uLi9hcHAuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3N5cy1pbmZvJyxcbiAgdGVtcGxhdGVVcmw6ICdzeXNpbmZvLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFN5c0luZm9Db21wb25lbnQge1xuICBwdWJsaWMgc3lzdGVtSW5mbzpzdHJpbmcgPSAnJztcbiAgcHVibGljIGNwdUluZm86c3RyaW5nID0gJyc7XG4gIHByaXZhdGUgc2VydmljZTpBcHBTZXJ2aWNlID0gQXBwU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICBwcml2YXRlIG1lc3NhZ2VzOlN1YmplY3Q8TWVzc2FnZVtdPiA9IEFwcFNlcnZpY2UuZ2V0TWVzc2FnZXMoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lc3NhZ2VzLnN1YnNjcmliZShcbiAgICAgIChtZXNzYWdlOiBNZXNzYWdlW10pID0+IHtcbiAgICAgICAgaWYgKG1lc3NhZ2VbMF0uY29udHJvbGxlciA9PT0gJ3N5c3RlbScgJiYgbWVzc2FnZVswXS5tZXRob2QgPT09ICdnZXRzeXNpbmZvJykge1xuICAgICAgICAgIHRoaXMucHJvY2Vzc1N5c0luZm8oPHN0cmluZz5tZXNzYWdlWzBdLmRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VbMF0uZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lc3NhZ2VbMF0uY29udHJvbGxlciA9PT0gJ3N5c3RlbScgJiYgbWVzc2FnZVswXS5tZXRob2QgPT09ICdnZXRjcHUnKSB7XG4gICAgICAgICAgdGhpcy5wcm9jZXNzQ1BVSW5mbyg8c3RyaW5nPm1lc3NhZ2VbMF0uZGF0YSk7XG4gICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZVswXS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChlcnI6IEVycm9yRXZlbnQpID0+IHtjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBlcnIubWVzc2FnZSk7fVxuICAgICk7XG5cbiAgICBsZXQgc3lzdGVtX2luZm8gPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbnRyb2xsZXI6ICdzeXN0ZW0nLFxuICAgICAgICBtZXRob2Q6ICdnZXRzeXNpbmZvJyxcbiAgICAgICAgdmFsdWVzOiAnJ1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZXJ2aWNlLnNlbmQoc3lzdGVtX2luZm8pO1xuXG4gICAgbGV0IGNwdV9pbmZvID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBjb250cm9sbGVyOiAnc3lzdGVtJyxcbiAgICAgICAgbWV0aG9kOiAnZ2V0Y3B1JyxcbiAgICAgICAgdmFsdWVzOiAnJ1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zZXJ2aWNlLnNlbmQoY3B1X2luZm8pO1xuICB9O1xuXG4gIHByaXZhdGUgcHJvY2Vzc1N5c0luZm8obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5zeXN0ZW1JbmZvID0gbWVzc2FnZTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0NQVUluZm8obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jcHVJbmZvID0gbWVzc2FnZTtcbiAgfVxuXG59XG4iXX0=
