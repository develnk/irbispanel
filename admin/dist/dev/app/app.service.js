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
var AppService = (function () {
    function AppService() {
        if (AppService._instance) {
            throw new Error('Error: Instantiation failed: Use AppService.getInstance() instead of new.');
        }
        this.ws = new angular2_websocket_1.$WebSocket('wss://localhost:' + location.port + '/api/v1');
        this.subscribe();
        AppService._instance = this;
    }
    AppService.getInstance = function () {
        return AppService._instance;
    };
    AppService.getMessages = function () {
        return AppService.wsMessages;
    };
    AppService.prototype.send = function (data) {
        console.log('Send through AppService');
        if (this.ws.getDataStream().isStopped) {
            this.subscribe();
        }
        this.ws.send(data);
    };
    AppService.prototype.subscribe = function () {
        this.ws.getDataStream().subscribe(function (message) {
            console.log('Data: ' + message.data);
            AppService.wsMessages.next([JSON.parse(message.data)]);
        }, function (err) { console.log('Error: ' + err.message); }, function () {
            console.log('Completed');
            // this.ws.getDataStream().unsubscribe();
            // this.wsMessages.unsubscribe();
        });
    };
    return AppService;
}());
AppService.wsMessages = new Rx_1.Subject();
AppService._instance = new AppService();
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppService);
exports.AppService = AppService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLDhCQUFrQztBQUNsQyw0RUFBbUU7QUFHbkU7SUFhRTtRQUNFLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkVBQTJFLENBQUMsQ0FBQztRQUMvRixDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLCtCQUFVLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQWZhLHNCQUFXLEdBQXpCO1FBQ0UsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUVhLHNCQUFXLEdBQXpCO1FBQ0UsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQVdNLHlCQUFJLEdBQVgsVUFBWSxJQUFRO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRU8sOEJBQVMsR0FBakI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FDL0IsVUFBQyxPQUFxQjtZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBVSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxFQUNELFVBQUMsR0FBZSxJQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBLENBQUMsRUFDNUQ7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLHlDQUF5QztZQUN6QyxpQ0FBaUM7UUFDbkMsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUgsaUJBQUM7QUFBRCxDQTdDQSxBQTZDQyxJQUFBO0FBNUNnQixxQkFBVSxHQUFzQixJQUFJLFlBQU8sRUFBYSxDQUFDO0FBQ3pELG9CQUFTLEdBQWMsSUFBSSxVQUFVLEVBQUUsQ0FBQztBQUZ6RDtJQURDLGlCQUFVLEVBQUU7O2NBOENaO0FBN0NZLHFCQUFBLFVBQVUsQ0FBQSIsImZpbGUiOiJhcHAvYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9SeCc7XG5pbXBvcnQgeyAkV2ViU29ja2V0IH0gZnJvbSAnYW5ndWxhcjItd2Vic29ja2V0L2FuZ3VsYXIyLXdlYnNvY2tldCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgd3NNZXNzYWdlczpTdWJqZWN0PE1lc3NhZ2VbXT4gPSBuZXcgU3ViamVjdDxNZXNzYWdlW10+KCk7XG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTpBcHBTZXJ2aWNlID0gbmV3IEFwcFNlcnZpY2UoKTtcbiAgcHJpdmF0ZSB3czokV2ViU29ja2V0O1xuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTpBcHBTZXJ2aWNlIHtcbiAgICByZXR1cm4gQXBwU2VydmljZS5faW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldE1lc3NhZ2VzKCk6U3ViamVjdDxNZXNzYWdlW10+IHtcbiAgICByZXR1cm4gQXBwU2VydmljZS53c01lc3NhZ2VzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYoQXBwU2VydmljZS5faW5zdGFuY2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3I6IEluc3RhbnRpYXRpb24gZmFpbGVkOiBVc2UgQXBwU2VydmljZS5nZXRJbnN0YW5jZSgpIGluc3RlYWQgb2YgbmV3LicpO1xuICAgIH1cbiAgICB0aGlzLndzID0gbmV3ICRXZWJTb2NrZXQoJ3dzczovL2xvY2FsaG9zdDonICsgbG9jYXRpb24ucG9ydCArICcvYXBpL3YxJyk7XG4gICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICBBcHBTZXJ2aWNlLl9pbnN0YW5jZSA9IHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc2VuZChkYXRhOmFueSkge1xuICAgIGNvbnNvbGUubG9nKCdTZW5kIHRocm91Z2ggQXBwU2VydmljZScpO1xuICAgIGlmICh0aGlzLndzLmdldERhdGFTdHJlYW0oKS5pc1N0b3BwZWQpIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMud3Muc2VuZChkYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlKCkge1xuICAgIHRoaXMud3MuZ2V0RGF0YVN0cmVhbSgpLnN1YnNjcmliZShcbiAgICAgIChtZXNzYWdlOiBNZXNzYWdlRXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGE6ICcgKyBtZXNzYWdlLmRhdGEpO1xuICAgICAgICBBcHBTZXJ2aWNlLndzTWVzc2FnZXMubmV4dChbPE1lc3NhZ2U+SlNPTi5wYXJzZShtZXNzYWdlLmRhdGEpXSk7XG4gICAgICB9LFxuICAgICAgKGVycjogRXJyb3JFdmVudCkgPT4ge2NvbnNvbGUubG9nKCdFcnJvcjogJyArIGVyci5tZXNzYWdlKTt9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnQ29tcGxldGVkJyk7XG4gICAgICAgIC8vIHRoaXMud3MuZ2V0RGF0YVN0cmVhbSgpLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIC8vIHRoaXMud3NNZXNzYWdlcy51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICBjb250cm9sbGVyOiBzdHJpbmc7XG4gIG1ldGhvZDogc3RyaW5nO1xuICBkYXRhOiBPYmplY3Q7XG59XG4iXX0=
