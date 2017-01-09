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
var angular2_websocket_1 = require("angular2-websocket/angular2-websocket");
var AppService = AppService_1 = (function () {
    function AppService() {
        if (AppService_1._instance) {
            throw new Error('Error: Instantiation failed: Use AppService.getInstance() instead of new.');
        }
        this.ws = new angular2_websocket_1.$WebSocket('wss://localhost:' + location.port + '/api/v1');
        this.wss = new WebSocket("wss://localhost:8081/api/v1");
        AppService_1._instance = this;
    }
    AppService.getInstance = function () {
        return AppService_1._instance;
    };
    AppService.getMessages = function () {
        return AppService_1.wsMessages;
    };
    AppService.prototype.send = function (data) {
        console.log('Send through AppService');
        this.wss.send(data);
    };
    AppService.prototype.subscribe = function () {
        this.ws.getDataStream().subscribe(function (message) {
            console.log('Data: ' + message.data);
            AppService_1.wsMessages.next([JSON.parse(message.data)]);
        }, function (err) { console.log('Error: ' + err.message); }, function () {
            console.log('Completed');
        });
    };
    return AppService;
}());
AppService.wsMessages = new Rx_1.Subject();
AppService._instance = new AppService_1();
AppService = AppService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppService);
exports.AppService = AppService;
var AppService_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLDhCQUFrQztBQUNsQyw0RUFBc0Y7QUFHdEYsSUFBYSxVQUFVO0lBY3JCO1FBQ0UsRUFBRSxDQUFBLENBQUMsWUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQywyRUFBMkUsQ0FBQyxDQUFDO1FBQy9GLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksK0JBQVUsQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUV4RCxZQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBaEJhLHNCQUFXLEdBQXpCO1FBQ0UsTUFBTSxDQUFDLFlBQVUsQ0FBQyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUVhLHNCQUFXLEdBQXpCO1FBQ0UsTUFBTSxDQUFDLFlBQVUsQ0FBQyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQVlNLHlCQUFJLEdBQVgsVUFBWSxJQUFRO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUl2QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU8sOEJBQVMsR0FBakI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FDL0IsVUFBQyxPQUFPO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JDLFlBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsRUFDRCxVQUFDLEdBQUcsSUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDLEVBQ2hEO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUczQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFSCxpQkFBQztBQUFELENBL0NBLEFBK0NDLElBQUE7QUE5Q2dCLHFCQUFVLEdBQXNCLElBQUksWUFBTyxFQUFhLENBQUM7QUFDekQsb0JBQVMsR0FBYyxJQUFJLFlBQVUsRUFBRSxDQUFDO0FBRjVDLFVBQVU7SUFEdEIsaUJBQVUsRUFBRTs7R0FDQSxVQUFVLENBK0N0QjtBQS9DWSxnQ0FBVSIsImZpbGUiOiJhcHAvYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyAkV2ViU29ja2V0LCBXZWJTb2NrZXRTZW5kTW9kZSB9IGZyb20gJ2FuZ3VsYXIyLXdlYnNvY2tldC9hbmd1bGFyMi13ZWJzb2NrZXQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGljIHdzTWVzc2FnZXM6U3ViamVjdDxNZXNzYWdlW10+ID0gbmV3IFN1YmplY3Q8TWVzc2FnZVtdPigpO1xuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6QXBwU2VydmljZSA9IG5ldyBBcHBTZXJ2aWNlKCk7XG4gIHByaXZhdGUgd3M6JFdlYlNvY2tldDtcbiAgcHJpdmF0ZSB3c3M6V2ViU29ja2V0O1xuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTpBcHBTZXJ2aWNlIHtcbiAgICByZXR1cm4gQXBwU2VydmljZS5faW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldE1lc3NhZ2VzKCk6U3ViamVjdDxNZXNzYWdlW10+IHtcbiAgICByZXR1cm4gQXBwU2VydmljZS53c01lc3NhZ2VzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYoQXBwU2VydmljZS5faW5zdGFuY2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3I6IEluc3RhbnRpYXRpb24gZmFpbGVkOiBVc2UgQXBwU2VydmljZS5nZXRJbnN0YW5jZSgpIGluc3RlYWQgb2YgbmV3LicpO1xuICAgIH1cbiAgICB0aGlzLndzID0gbmV3ICRXZWJTb2NrZXQoJ3dzczovL2xvY2FsaG9zdDonICsgbG9jYXRpb24ucG9ydCArICcvYXBpL3YxJyk7XG4gICAgdGhpcy53c3MgPSBuZXcgV2ViU29ja2V0KFwid3NzOi8vbG9jYWxob3N0OjgwODEvYXBpL3YxXCIpO1xuICAgIC8vIHRoaXMuc3Vic2NyaWJlKCk7XG4gICAgQXBwU2VydmljZS5faW5zdGFuY2UgPSB0aGlzO1xuICB9XG5cbiAgcHVibGljIHNlbmQoZGF0YTphbnkpIHtcbiAgICBjb25zb2xlLmxvZygnU2VuZCB0aHJvdWdoIEFwcFNlcnZpY2UnKTtcbiAgICAvLyBpZiAodGhpcy53cy5nZXREYXRhU3RyZWFtKCkuaXNTdG9wcGVkKSB7XG4gICAgLy8gICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIC8vIH1cbiAgICB0aGlzLndzcy5zZW5kKGRhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmUoKSB7XG4gICAgdGhpcy53cy5nZXREYXRhU3RyZWFtKCkuc3Vic2NyaWJlKFxuICAgICAgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGE6ICcgKyBtZXNzYWdlLmRhdGEpO1xuICAgICAgICBBcHBTZXJ2aWNlLndzTWVzc2FnZXMubmV4dChbPE1lc3NhZ2U+SlNPTi5wYXJzZShtZXNzYWdlLmRhdGEpXSk7XG4gICAgICB9LFxuICAgICAgKGVycikgPT4ge2NvbnNvbGUubG9nKCdFcnJvcjogJyArIGVyci5tZXNzYWdlKTt9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29tcGxldGVkJyk7XG4gICAgICAgIC8vIHRoaXMud3MuZ2V0RGF0YVN0cmVhbSgpLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIC8vIHRoaXMud3NNZXNzYWdlcy51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICBjb250cm9sbGVyOiBzdHJpbmc7XG4gIG1ldGhvZDogc3RyaW5nO1xuICBkYXRhOiBPYmplY3Q7XG59XG4iXX0=
