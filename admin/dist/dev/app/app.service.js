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
        this.wsConfig = { initialTimeout: 500, maxTimeout: 300000, reconnectIfNotNormalClose: true };
        this.ws = new angular2_websocket_1.$WebSocket('wss://localhost:' + location.port + '/api/v1', null, this.wsConfig, 'arraybuffer');
        this.subscribe();
        AppService_1._instance = this;
        this.ws.onMessage(function (message) {
            console.log("onMessage ", message.data);
        }, { autoApply: false });
    }
    AppService.getInstance = function () {
        return AppService_1._instance;
    };
    AppService.getMessages = function () {
        return AppService_1.wsMessages;
    };
    AppService.prototype.send = function (data) {
        console.log('Send through AppService');
        if (this.ws.getDataStream().isStopped) {
            this.subscribe();
        }
        this.ws.send(data, angular2_websocket_1.WebSocketSendMode.Direct);
    };
    AppService.prototype.subscribe = function () {
        var _this = this;
        this.ws.getDataStream().subscribe(function (msg) {
            console.log("next", msg.data);
            _this.ws.close(false);
        }, function (msg) {
            console.log("error", msg);
        }, function () {
            console.log("complete");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLDhCQUFrQztBQUNsQyw0RUFBdUc7QUFHdkcsSUFBYSxVQUFVO0lBY3JCO1FBQ0UsRUFBRSxDQUFBLENBQUMsWUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQywyRUFBMkUsQ0FBQyxDQUFDO1FBQy9GLENBQUM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLHlCQUF5QixFQUFFLElBQUksRUFBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSwrQkFBVSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzdHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixZQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FDYixVQUFDLE9BQXFCO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDLEVBQ0QsRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLENBQ3JCLENBQUM7SUFFSixDQUFDO0lBdkJhLHNCQUFXLEdBQXpCO1FBQ0UsTUFBTSxDQUFDLFlBQVUsQ0FBQyxTQUFTLENBQUM7SUFDOUIsQ0FBQztJQUVhLHNCQUFXLEdBQXpCO1FBQ0UsTUFBTSxDQUFDLFlBQVUsQ0FBQyxVQUFVLENBQUM7SUFDL0IsQ0FBQztJQW1CTSx5QkFBSSxHQUFYLFVBQVksSUFBUTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHNDQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBYS9DLENBQUM7SUFFTyw4QkFBUyxHQUFqQjtRQUFBLGlCQTJCQztRQTFCQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FDN0IsVUFBQyxHQUFHO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsRUFDRCxVQUFDLEdBQUc7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQ0Q7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FDSixDQUFDO0lBZUosQ0FBQztJQUVILGlCQUFDO0FBQUQsQ0FoRkEsQUFnRkMsSUFBQTtBQS9FZ0IscUJBQVUsR0FBc0IsSUFBSSxZQUFPLEVBQWEsQ0FBQztBQUN6RCxvQkFBUyxHQUFjLElBQUksWUFBVSxFQUFFLENBQUM7QUFGNUMsVUFBVTtJQUR0QixpQkFBVSxFQUFFOztHQUNBLFVBQVUsQ0FnRnRCO0FBaEZZLGdDQUFVIiwiZmlsZSI6ImFwcC9hcHAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1J4JztcbmltcG9ydCB7ICRXZWJTb2NrZXQsIFdlYlNvY2tldFNlbmRNb2RlLCBXZWJTb2NrZXRDb25maWcgfSBmcm9tICdhbmd1bGFyMi13ZWJzb2NrZXQvYW5ndWxhcjItd2Vic29ja2V0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcFNlcnZpY2Uge1xuICBwcml2YXRlIHN0YXRpYyB3c01lc3NhZ2VzOlN1YmplY3Q8TWVzc2FnZVtdPiA9IG5ldyBTdWJqZWN0PE1lc3NhZ2VbXT4oKTtcbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOkFwcFNlcnZpY2UgPSBuZXcgQXBwU2VydmljZSgpO1xuICBwcml2YXRlIHdzOiRXZWJTb2NrZXQ7XG4gIHByaXZhdGUgd3NDb25maWc6V2ViU29ja2V0Q29uZmlnO1xuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTpBcHBTZXJ2aWNlIHtcbiAgICByZXR1cm4gQXBwU2VydmljZS5faW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldE1lc3NhZ2VzKCk6U3ViamVjdDxNZXNzYWdlW10+IHtcbiAgICByZXR1cm4gQXBwU2VydmljZS53c01lc3NhZ2VzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYoQXBwU2VydmljZS5faW5zdGFuY2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3I6IEluc3RhbnRpYXRpb24gZmFpbGVkOiBVc2UgQXBwU2VydmljZS5nZXRJbnN0YW5jZSgpIGluc3RlYWQgb2YgbmV3LicpO1xuICAgIH1cbiAgICB0aGlzLndzQ29uZmlnID0ge2luaXRpYWxUaW1lb3V0OiA1MDAsIG1heFRpbWVvdXQ6IDMwMDAwMCwgcmVjb25uZWN0SWZOb3ROb3JtYWxDbG9zZTogdHJ1ZX07XG4gICAgdGhpcy53cyA9IG5ldyAkV2ViU29ja2V0KCd3c3M6Ly9sb2NhbGhvc3Q6JyArIGxvY2F0aW9uLnBvcnQgKyAnL2FwaS92MScsIG51bGwsIHRoaXMud3NDb25maWcsICdhcnJheWJ1ZmZlcicpO1xuICAgIHRoaXMuc3Vic2NyaWJlKCk7XG4gICAgQXBwU2VydmljZS5faW5zdGFuY2UgPSB0aGlzO1xuICAgIHRoaXMud3Mub25NZXNzYWdlKFxuICAgICAgICAobWVzc2FnZTogTWVzc2FnZUV2ZW50KT0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uTWVzc2FnZSBcIiwgbWVzc2FnZS5kYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAge2F1dG9BcHBseTogZmFsc2V9XG4gICAgKTtcblxuICB9XG5cbiAgcHVibGljIHNlbmQoZGF0YTphbnkpIHtcbiAgICBjb25zb2xlLmxvZygnU2VuZCB0aHJvdWdoIEFwcFNlcnZpY2UnKTtcbiAgICBpZiAodGhpcy53cy5nZXREYXRhU3RyZWFtKCkuaXNTdG9wcGVkKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLndzLnNlbmQoZGF0YSwgV2ViU29ja2V0U2VuZE1vZGUuRGlyZWN0KTtcblxuICAgIC8vIHRoaXMud3Muc2VuZChkYXRhKS5zdWJzY3JpYmUoXG4gICAgLy8gICAgIChkYXRhOiBhbnkpPT4ge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwibmV4dFwiLCBkYXRhLmRhdGEpO1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICAoZXJyOiBhbnkpPT4ge1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgZXJyKTtcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAgKCk9PiB7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZSgpIHtcbiAgICB0aGlzLndzLmdldERhdGFTdHJlYW0oKS5zdWJzY3JpYmUoXG4gICAgICAgIChtc2cpPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV4dFwiLCBtc2cuZGF0YSk7XG4gICAgICAgICAgdGhpcy53cy5jbG9zZShmYWxzZSk7XG4gICAgICAgIH0sXG4gICAgICAgIChtc2cpPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIiwgbXNnKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCk9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgfVxuICAgICk7XG5cblxuICAgIC8vIHRoaXMud3MuZ2V0RGF0YVN0cmVhbSgpLnN1YnNjcmliZShcbiAgICAvLyAgIChtZXNzYWdlKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdEYXRhOiAnICsgbWVzc2FnZS5kYXRhKTtcbiAgICAvLyAgICAgQXBwU2VydmljZS53c01lc3NhZ2VzLm5leHQoWzxNZXNzYWdlPkpTT04ucGFyc2UobWVzc2FnZS5kYXRhKV0pO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIChlcnIpID0+IHtjb25zb2xlLmxvZygnRXJyb3I6ICcgKyBlcnIubWVzc2FnZSk7fSxcbiAgICAvLyAgICgpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ0NvbXBsZXRlZCcpO1xuICAgIC8vICAgICAvLyB0aGlzLndzLmdldERhdGFTdHJlYW0oKS51bnN1YnNjcmliZSgpO1xuICAgIC8vICAgICAvLyB0aGlzLndzTWVzc2FnZXMudW5zdWJzY3JpYmUoKTtcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcbiAgY29udHJvbGxlcjogc3RyaW5nO1xuICBtZXRob2Q6IHN0cmluZztcbiAgZGF0YTogT2JqZWN0O1xufVxuIl19
