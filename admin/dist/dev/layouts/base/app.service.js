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
var Rx_1 = require('rxjs/Rx');
var angular2_websocket_1 = require('angular2-websocket/angular2-websocket');
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
        if (this.ws.getDataStream().isUnsubscribed) {
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
        });
    };
    AppService.wsMessages = new Rx_1.Subject();
    AppService._instance = new AppService();
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvYmFzZS9hcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLG1CQUFzQixTQUFTLENBQUMsQ0FBQTtBQUNoQyxtQ0FBeUIsdUNBQXVDLENBQUMsQ0FBQTtBQUdqRTtJQWFFO1FBQ0UsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQywyRUFBMkUsQ0FBQyxDQUFDO1FBQy9GLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksK0JBQVUsQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBZmEsc0JBQVcsR0FBekI7UUFDRSxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBRWEsc0JBQVcsR0FBekI7UUFDRSxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBV00seUJBQUksR0FBWCxVQUFZLElBQVE7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFTyw4QkFBUyxHQUFqQjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsU0FBUyxDQUMvQixVQUFDLE9BQXFCO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRSxDQUFDLEVBQ0QsVUFBQyxHQUFlLElBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsQ0FBQyxFQUM1RDtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFHM0IsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBMUNjLHFCQUFVLEdBQXNCLElBQUksWUFBTyxFQUFhLENBQUM7SUFDekQsb0JBQVMsR0FBYyxJQUFJLFVBQVUsRUFBRSxDQUFDO0lBSHpEO1FBQUMsaUJBQVUsRUFBRTs7a0JBQUE7SUE4Q2IsaUJBQUM7QUFBRCxDQTdDQSxBQTZDQyxJQUFBO0FBN0NZLGtCQUFVLGFBNkN0QixDQUFBIiwiZmlsZSI6ImxheW91dHMvYmFzZS9hcHAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHskV2ViU29ja2V0fSBmcm9tICdhbmd1bGFyMi13ZWJzb2NrZXQvYW5ndWxhcjItd2Vic29ja2V0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcFNlcnZpY2Uge1xuICBwcml2YXRlIHN0YXRpYyB3c01lc3NhZ2VzOlN1YmplY3Q8TWVzc2FnZVtdPiA9IG5ldyBTdWJqZWN0PE1lc3NhZ2VbXT4oKTtcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOkFwcFNlcnZpY2UgPSBuZXcgQXBwU2VydmljZSgpO1xuICBwcml2YXRlIHdzOiRXZWJTb2NrZXQ7XG5cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOkFwcFNlcnZpY2Uge1xuICAgIHJldHVybiBBcHBTZXJ2aWNlLl9pbnN0YW5jZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0TWVzc2FnZXMoKTpTdWJqZWN0PE1lc3NhZ2VbXT4ge1xuICAgIHJldHVybiBBcHBTZXJ2aWNlLndzTWVzc2FnZXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZihBcHBTZXJ2aWNlLl9pbnN0YW5jZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvcjogSW5zdGFudGlhdGlvbiBmYWlsZWQ6IFVzZSBBcHBTZXJ2aWNlLmdldEluc3RhbmNlKCkgaW5zdGVhZCBvZiBuZXcuJyk7XG4gICAgfVxuICAgIHRoaXMud3MgPSBuZXcgJFdlYlNvY2tldCgnd3NzOi8vbG9jYWxob3N0OicgKyBsb2NhdGlvbi5wb3J0ICsgJy9hcGkvdjEnKTtcbiAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIEFwcFNlcnZpY2UuX2luc3RhbmNlID0gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzZW5kKGRhdGE6YW55KSB7XG4gICAgY29uc29sZS5sb2coJ1NlbmQgdGhyb3VnaCBBcHBTZXJ2aWNlJyk7XG4gICAgaWYgKHRoaXMud3MuZ2V0RGF0YVN0cmVhbSgpLmlzVW5zdWJzY3JpYmVkKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLndzLnNlbmQoZGF0YSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZSgpIHtcbiAgICB0aGlzLndzLmdldERhdGFTdHJlYW0oKS5zdWJzY3JpYmUoXG4gICAgICAobWVzc2FnZTogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRhOiAnICsgbWVzc2FnZS5kYXRhKTtcbiAgICAgICAgQXBwU2VydmljZS53c01lc3NhZ2VzLm5leHQoWzxNZXNzYWdlPkpTT04ucGFyc2UobWVzc2FnZS5kYXRhKV0pO1xuICAgICAgfSxcbiAgICAgIChlcnI6IEVycm9yRXZlbnQpID0+IHtjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBlcnIubWVzc2FnZSk7fSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbXBsZXRlZCcpO1xuICAgICAgICAvLyB0aGlzLndzLmdldERhdGFTdHJlYW0oKS51bnN1YnNjcmliZSgpO1xuICAgICAgICAvLyB0aGlzLndzTWVzc2FnZXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcbiAgY29udHJvbGxlcjogc3RyaW5nO1xuICBtZXRob2Q6IHN0cmluZztcbiAgZGF0YTogT2JqZWN0O1xufVxuIl19
