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
var chat_channel_service_1 = require("../../services/chat.channel.service");
var websocket_service_1 = require("../../services/websocket.service");
var TimelineComponent = (function () {
    function TimelineComponent() {
    }
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'timeline-cmp',
        templateUrl: 'timeline.html',
        styleUrls: ['timeline.css'],
    })
], TimelineComponent);
exports.TimelineComponent = TimelineComponent;
var ChatComponent = (function () {
    function ChatComponent() {
    }
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'chat-cmp',
        templateUrl: 'chat.html'
    })
], ChatComponent);
exports.ChatComponent = ChatComponent;
var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'notifications-cmp',
        templateUrl: 'notifications.html'
    })
], NotificationComponent);
exports.NotificationComponent = NotificationComponent;
var HomeComponent = (function () {
    function HomeComponent(chatChannelService, webSocketService) {
        var _this = this;
        this.chatChannelService = chatChannelService;
        this.webSocketService = webSocketService;
        this.cpu_data = [];
        this.chatSubscribed = false;
        this.webSocketService.start('wss://localhost:' + location.port + '/api/v1');
        this.chatChannelService.subscribed.subscribe(function (data) {
            _this.chatSubscribed = data;
        });
        this.chatChannelService.observableData.subscribe(function (message) {
            if (message.controller === 'system' && message.method === 'get_cpu_load_online') {
                _this.cpuLoadUpdate(message.data);
            }
        }, function (err) {
            console.log('Error: ' + err.message);
        });
        this.options = {
            chart: {
                events: {
                    load: function () {
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), y = Math.round(Math.random() * 100);
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: { text: 'CPU Load exchange rate over time' },
            rangeSelector: {
                buttons: [{
                        count: 1,
                        type: 'minute',
                        text: '1M'
                    }, {
                        count: 5,
                        type: 'minute',
                        text: '5M'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                inputEnabled: false,
                selected: 0
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Percent rate'
                }
            },
            legend: {
                enabled: false
            },
            series: [{
                    type: 'area',
                    name: 'CPU Load',
                    data: this.cpu_data
                }]
        };
        this.sendMessage({
            controller: 'system',
            method: 'get_cpu_load_online',
            data: '',
        });
    }
    HomeComponent.prototype.cpuLoadUpdate = function (message) {
        this.cpu_data.push(message);
    };
    HomeComponent.prototype.sendMessage = function (message) {
        this.chatChannelService.send(message);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home-cmp',
        templateUrl: 'home.component.html'
    }),
    __metadata("design:paramtypes", [chat_channel_service_1.ChatChannelService, websocket_service_1.WebSocketService])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLDRFQUF5RTtBQUN6RSxzRUFBNkU7QUFZN0UsSUFBYSxpQkFBaUI7SUFBOUI7SUFBaUMsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBakMsQUFBa0MsSUFBQTtBQUFyQixpQkFBaUI7SUFON0IsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsZUFBZTtRQUM1QixTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7S0FDM0IsQ0FBQztHQUNXLGlCQUFpQixDQUFJO0FBQXJCLDhDQUFpQjtBQU85QixJQUFhLGFBQWE7SUFBMUI7SUFBNEIsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBNUIsQUFBNkIsSUFBQTtBQUFoQixhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLFdBQVc7S0FDeEIsQ0FBQztHQUNXLGFBQWEsQ0FBRztBQUFoQixzQ0FBYTtBQU8xQixJQUFhLHFCQUFxQjtJQUFsQztJQUFxQyxDQUFDO0lBQUQsNEJBQUM7QUFBRCxDQUFyQyxBQUFzQyxJQUFBO0FBQXpCLHFCQUFxQjtJQUxqQyxnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsV0FBVyxFQUFFLG9CQUFvQjtLQUNqQyxDQUFDO0dBQ1cscUJBQXFCLENBQUk7QUFBekIsc0RBQXFCO0FBT2xDLElBQWEsYUFBYTtJQUt6Qix1QkFBb0Isa0JBQXFDLEVBQVUsZ0JBQWlDO1FBQXBHLGlCQXFFQztRQXJFbUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUFVLHFCQUFn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QzdCLENBQUM7SUFFTyxtQ0FBVyxHQUFuQixVQUFvQixPQUFnQjtRQUNuQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRixvQkFBQztBQUFELENBbkZBLEFBbUZDLElBQUE7QUFuRlksYUFBYTtJQUx6QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxxQkFBcUI7S0FDbEMsQ0FBQztxQ0FNc0MseUNBQWtCLEVBQTJCLG9DQUFnQjtHQUx4RixhQUFhLENBbUZ6QjtBQW5GWSxzQ0FBYSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXRDaGFubmVsU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jaGF0LmNoYW5uZWwuc2VydmljZVwiO1xuaW1wb3J0IHsgV2ViU29ja2V0U2VydmljZSwgTWVzc2FnZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy93ZWJzb2NrZXQuc2VydmljZVwiO1xuXG4vKipcbipcdFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cbiovXG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ3RpbWVsaW5lLWNtcCcsXG5cdHRlbXBsYXRlVXJsOiAndGltZWxpbmUuaHRtbCcsXG5cdHN0eWxlVXJsczogWyd0aW1lbGluZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGltZWxpbmVDb21wb25lbnQgeyB9XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2NoYXQtY21wJyxcblx0dGVtcGxhdGVVcmw6ICdjaGF0Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENoYXRDb21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnbm90aWZpY2F0aW9ucy1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ25vdGlmaWNhdGlvbnMuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uQ29tcG9uZW50IHsgfVxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdob21lLWNtcCcsXG5cdHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG5cdHByaXZhdGUgb3B0aW9uczogT2JqZWN0O1xuXHRwcml2YXRlIGNwdV9kYXRhOiBBcnJheTxPYmplY3Q+ID0gW107XG5cdGNoYXRTdWJzY3JpYmVkOmJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYXRDaGFubmVsU2VydmljZTpDaGF0Q2hhbm5lbFNlcnZpY2UsIHByaXZhdGUgd2ViU29ja2V0U2VydmljZTpXZWJTb2NrZXRTZXJ2aWNlLCkge1xuXHRcdHRoaXMud2ViU29ja2V0U2VydmljZS5zdGFydCgnd3NzOi8vbG9jYWxob3N0OicgKyBsb2NhdGlvbi5wb3J0ICsgJy9hcGkvdjEnKTtcblx0XHR0aGlzLmNoYXRDaGFubmVsU2VydmljZS5zdWJzY3JpYmVkLnN1YnNjcmliZSggKCBkYXRhOmJvb2xlYW4gKSA9PiB7XG5cdFx0XHR0aGlzLmNoYXRTdWJzY3JpYmVkID0gZGF0YTtcblx0XHR9KTtcblxuXHRcdHRoaXMuY2hhdENoYW5uZWxTZXJ2aWNlLm9ic2VydmFibGVEYXRhLnN1YnNjcmliZSgobWVzc2FnZTogTWVzc2FnZSkgPT4ge1xuXHRcdFx0XHRpZiAobWVzc2FnZS5jb250cm9sbGVyID09PSAnc3lzdGVtJyAmJiBtZXNzYWdlLm1ldGhvZCA9PT0gJ2dldF9jcHVfbG9hZF9vbmxpbmUnKSB7XG5cdFx0XHRcdFx0dGhpcy5jcHVMb2FkVXBkYXRlKG1lc3NhZ2UuZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQoZXJyOiBFcnJvckV2ZW50KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFcnJvcjogJyArIGVyci5tZXNzYWdlKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5vcHRpb25zID0ge1xuXHRcdFx0Y2hhcnQ6IHtcblx0XHRcdFx0ZXZlbnRzOiB7XG5cdFx0XHRcdFx0bG9hZDogZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0Ly8gc2V0IHVwIHRoZSB1cGRhdGluZyBvZiB0aGUgY2hhcnQgZWFjaCBzZWNvbmRcblx0XHRcdFx0XHRcdHZhciBzZXJpZXMgPSB0aGlzLnNlcmllc1swXTtcblx0XHRcdFx0XHRcdHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHggPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpLCAvLyBjdXJyZW50IHRpbWVcblx0XHRcdFx0XHRcdFx0XHR5ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwKTtcblx0XHRcdFx0XHRcdFx0c2VyaWVzLmFkZFBvaW50KFt4LCB5XSwgdHJ1ZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHR9LCAxMDAwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR0aXRsZToge3RleHQ6ICdDUFUgTG9hZCBleGNoYW5nZSByYXRlIG92ZXIgdGltZSd9LFxuXHRcdFx0cmFuZ2VTZWxlY3Rvcjoge1xuXHRcdFx0XHRidXR0b25zOiBbe1xuXHRcdFx0XHRcdGNvdW50OiAxLFxuXHRcdFx0XHRcdHR5cGU6ICdtaW51dGUnLFxuXHRcdFx0XHRcdHRleHQ6ICcxTSdcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdGNvdW50OiA1LFxuXHRcdFx0XHRcdHR5cGU6ICdtaW51dGUnLFxuXHRcdFx0XHRcdHRleHQ6ICc1TSdcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdHR5cGU6ICdhbGwnLFxuXHRcdFx0XHRcdHRleHQ6ICdBbGwnXG5cdFx0XHRcdH1dLFxuXHRcdFx0XHRpbnB1dEVuYWJsZWQ6IGZhbHNlLFxuXHRcdFx0XHRzZWxlY3RlZDogMFxuXHRcdFx0fSxcblx0XHRcdHhBeGlzOiB7XG5cdFx0XHRcdHR5cGU6ICdkYXRldGltZSdcblx0XHRcdH0sXG5cdFx0XHR5QXhpczoge1xuXHRcdFx0XHR0aXRsZToge1xuXHRcdFx0XHRcdHRleHQ6ICdQZXJjZW50IHJhdGUnXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRsZWdlbmQ6IHtcblx0XHRcdFx0ZW5hYmxlZDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRzZXJpZXM6IFt7XG5cdFx0XHRcdHR5cGU6ICdhcmVhJyxcblx0XHRcdFx0bmFtZTogJ0NQVSBMb2FkJyxcblx0XHRcdFx0ZGF0YTogdGhpcy5jcHVfZGF0YVxuXHRcdFx0fV1cblx0XHR9O1xuXG5cdFx0dGhpcy5zZW5kTWVzc2FnZSg8TWVzc2FnZT4ge1xuXHRcdFx0Y29udHJvbGxlcjogJ3N5c3RlbScsXG5cdFx0XHRtZXRob2Q6ICdnZXRfY3B1X2xvYWRfb25saW5lJyxcblx0XHRcdGRhdGE6ICcnLFxuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjcHVMb2FkVXBkYXRlKG1lc3NhZ2U6IE9iamVjdCkge1xuXHRcdHRoaXMuY3B1X2RhdGEucHVzaChtZXNzYWdlKTtcblx0fVxuXG5cdHByaXZhdGUgc2VuZE1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSkgOnZvaWR7XG5cdFx0dGhpcy5jaGF0Q2hhbm5lbFNlcnZpY2Uuc2VuZChtZXNzYWdlKTtcblx0fVxufVxuIl19
