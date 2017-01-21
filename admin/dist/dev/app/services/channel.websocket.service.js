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
var Subject_1 = require("rxjs/Subject");
var websocket_service_1 = require("./websocket.service");
var ChannelWebsocketService = ChannelWebsocketService_1 = (function () {
    function ChannelWebsocketService(websocketService) {
        this.websocketService = websocketService;
        this.observableData = new Subject_1.Subject();
        this.identifier = {};
        this.subscribed = new Subject_1.Subject();
        this.observeOpened();
        this.observeMessage();
    }
    ChannelWebsocketService.encodeIdentifier = function (identifier) {
        return JSON.parse(identifier);
    };
    ChannelWebsocketService.getDataString = function (parameters) {
        var first = true, result = '';
        for (var key in parameters) {
            if (first) {
                first = false;
                result += "\"" + key + "\":\"" + parameters[key] + "\"";
            }
            else {
                result += ", \"" + key + "\":\"" + parameters[key] + "\"";
            }
        }
        return "{ " + result + " }";
    };
    ChannelWebsocketService.prototype.getSubscribeString = function () {
        this.identifierStr = ChannelWebsocketService_1.getDataString(this.identifier);
        return JSON.stringify({
            command: 'subscribe',
            identifier: this.identifierStr
        });
    };
    ;
    ChannelWebsocketService.prototype.isThisChannel = function (data) {
        if (data['identifier']) {
            var identifier = ChannelWebsocketService_1.encodeIdentifier(data['identifier']);
            if (JSON.stringify(identifier) === JSON.stringify(this.identifier)) {
                return true;
            }
        }
        return false;
    };
    ChannelWebsocketService.prototype.observeMessage = function () {
        var _this = this;
        var self = this;
        this.websocketService.message.subscribe(function (data) {
            _this.observableData.next(data);
        });
    };
    ChannelWebsocketService.prototype.observeOpened = function () {
        var self = this;
        this.websocketService.opened.subscribe(function (data) {
            self.socketStarted = data;
            if (data) {
                self.subscribe();
            }
        });
    };
    ChannelWebsocketService.prototype.subscribe = function () {
        this.websocketService.sendMessage(this.getSubscribeString());
    };
    ChannelWebsocketService.prototype.send = function (data) {
        this.websocketService.sendMessage(JSON.stringify({ data: data }));
    };
    ChannelWebsocketService.prototype.unsubscribe = function () {
        this.websocketService.sendMessage(JSON.stringify({
            command: 'unsubscribe',
            identifier: this.identifierStr
        }));
        this.subscribed.next(false);
    };
    return ChannelWebsocketService;
}());
ChannelWebsocketService = ChannelWebsocketService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [websocket_service_1.WebSocketService])
], ChannelWebsocketService);
exports.ChannelWebsocketService = ChannelWebsocketService;
var ChannelWebsocketService_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9jaGFubmVsLndlYnNvY2tldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBd0Q7QUFDeEQsd0NBQXVEO0FBQ3ZELHlEQUFnRTtBQUdoRSxJQUFhLHVCQUF1QjtJQVFoQyxpQ0FBcUIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFKaEQsbUJBQWMsR0FBb0IsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDaEQsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixlQUFVLEdBQXFCLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBR2hELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVjLHdDQUFnQixHQUEvQixVQUFpQyxVQUFpQjtRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBRSxVQUFVLENBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRWMscUNBQWEsR0FBNUIsVUFBOEIsVUFBYztRQUN4QyxJQUFJLEtBQUssR0FBRyxJQUFJLEVBQ1osTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVoQixHQUFHLENBQUMsQ0FBRSxJQUFJLEdBQUcsSUFBSSxVQUFXLENBQUMsQ0FBQSxDQUFDO1lBQzFCLEVBQUUsQ0FBQSxDQUFFLEtBQU0sQ0FBQyxDQUFBLENBQUM7Z0JBQ1IsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDZCxNQUFNLElBQUssT0FBTSxHQUFHLGFBQVUsVUFBVSxDQUFFLEdBQUcsQ0FBRSxPQUFLLENBQUM7WUFDekQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sSUFBSSxTQUFRLEdBQUcsYUFBVSxVQUFVLENBQUUsR0FBRyxDQUFFLE9BQUssQ0FBQztZQUMxRCxDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFNLE1BQU0sT0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFTyxvREFBa0IsR0FBMUI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLHlCQUF1QixDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFFLENBQUM7UUFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUU7WUFDbkIsT0FBTyxFQUFFLFdBQVc7WUFDcEIsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ2pDLENBQUUsQ0FBQztJQUNSLENBQUM7SUFBQSxDQUFDO0lBRU0sK0NBQWEsR0FBckIsVUFBdUIsSUFBUTtRQUMzQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksVUFBVSxHQUFHLHlCQUF1QixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzlFLEVBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsVUFBVSxDQUFFLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFHLENBQUMsQ0FBQSxDQUFDO2dCQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU8sZ0RBQWMsR0FBdEI7UUFBQSxpQkFXQztRQVZHLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFFLElBQVM7WUFDL0MsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFNbkMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sK0NBQWEsR0FBckI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUUsVUFBRSxJQUFhO1lBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLEVBQUUsQ0FBQSxDQUFFLElBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQ1AsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JCLENBQUM7UUFDTCxDQUFDLENBQUUsQ0FBQztJQUNSLENBQUM7SUFFTywyQ0FBUyxHQUFqQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUUsQ0FBQztJQUNuRSxDQUFDO0lBR00sc0NBQUksR0FBWCxVQUFhLElBQWE7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU0sNkNBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDN0MsT0FBTyxFQUFFLGFBQWE7WUFDdEIsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNMLDhCQUFDO0FBQUQsQ0F6RkEsQUF5RkMsSUFBQTtBQXpGWSx1QkFBdUI7SUFEbkMsaUJBQVUsRUFBRTtxQ0FTOEIsb0NBQWdCO0dBUjlDLHVCQUF1QixDQXlGbkM7QUF6RlksMERBQXVCIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9jaGFubmVsLndlYnNvY2tldC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICAgICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3ViamVjdCB9ICAgICAgICAgICAgICAgICBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XG5pbXBvcnQgeyBXZWJTb2NrZXRTZXJ2aWNlLCBNZXNzYWdlIH0gZnJvbSBcIi4vd2Vic29ja2V0LnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoYW5uZWxXZWJzb2NrZXRTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHNvY2tldFN0YXJ0ZWQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBpZGVudGlmaWVyU3RyOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgb2JzZXJ2YWJsZURhdGE6IFN1YmplY3Q8T2JqZWN0PiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgcHVibGljIGlkZW50aWZpZXI6T2JqZWN0ID0ge307XG4gICAgcHVibGljIHN1YnNjcmliZWQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgd2Vic29ja2V0U2VydmljZTogV2ViU29ja2V0U2VydmljZSApe1xuICAgICAgICB0aGlzLm9ic2VydmVPcGVuZWQoKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlTWVzc2FnZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGVuY29kZUlkZW50aWZpZXIoIGlkZW50aWZpZXI6c3RyaW5nICk6T2JqZWN0e1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSggaWRlbnRpZmllciApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldERhdGFTdHJpbmcoIHBhcmFtZXRlcnM6YW55ICk6c3RyaW5ne1xuICAgICAgICBsZXQgZmlyc3QgPSB0cnVlLFxuICAgICAgICAgICAgcmVzdWx0ID0gJyc7XG5cbiAgICAgICAgZm9yICggbGV0IGtleSBpbiBwYXJhbWV0ZXJzICl7XG4gICAgICAgICAgICBpZiggZmlyc3QgKXtcbiAgICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSAgYFxcXCIkeyBrZXkgfVxcXCI6XFxcIiR7IHBhcmFtZXRlcnNbIGtleSBdIH1cXFwiYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGAsIFxcXCIkeyBrZXkgfVxcXCI6XFxcIiR7IHBhcmFtZXRlcnNbIGtleSBdIH1cXFwiYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYHsgJHsgcmVzdWx0IH0gfWA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRTdWJzY3JpYmVTdHJpbmcoKTpzdHJpbmd7XG4gICAgICAgIHRoaXMuaWRlbnRpZmllclN0ciA9IENoYW5uZWxXZWJzb2NrZXRTZXJ2aWNlLmdldERhdGFTdHJpbmcoIHRoaXMuaWRlbnRpZmllciApO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoIHtcbiAgICAgICAgICAgIGNvbW1hbmQ6ICdzdWJzY3JpYmUnLFxuICAgICAgICAgICAgaWRlbnRpZmllcjogdGhpcy5pZGVudGlmaWVyU3RyXG4gICAgICAgIH0gKTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBpc1RoaXNDaGFubmVsKCBkYXRhOmFueSApOmJvb2xlYW4ge1xuICAgICAgICBpZihkYXRhWydpZGVudGlmaWVyJ10pIHtcbiAgICAgICAgICAgIGxldCBpZGVudGlmaWVyID0gQ2hhbm5lbFdlYnNvY2tldFNlcnZpY2UuZW5jb2RlSWRlbnRpZmllcihkYXRhWydpZGVudGlmaWVyJ10pO1xuICAgICAgICAgICAgaWYgKCBKU09OLnN0cmluZ2lmeSggaWRlbnRpZmllciApID09PSBKU09OLnN0cmluZ2lmeSggdGhpcy5pZGVudGlmaWVyICkgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvYnNlcnZlTWVzc2FnZSgpe1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy53ZWJzb2NrZXRTZXJ2aWNlLm1lc3NhZ2Uuc3Vic2NyaWJlKCggZGF0YTogYW55ICkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZhYmxlRGF0YS5uZXh0KGRhdGEpO1xuICAgICAgICAgICAgLy8gaWYoZGF0YVsndHlwZSddICYmIGRhdGFbJ3R5cGUnXSA9PSAnY29uZmlybV9zdWJzY3JpcHRpb24nICl7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5zdWJzY3JpYmVkLm5leHQoIHRydWUgKTtcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoZGF0YVsnbWVzc2FnZSddICl7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5vYnNlcnZhYmxlRGF0YS5uZXh0KGRhdGFbJ21lc3NhZ2UnXSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb2JzZXJ2ZU9wZW5lZCgpe1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMud2Vic29ja2V0U2VydmljZS5vcGVuZWQuc3Vic2NyaWJlKCAoIGRhdGE6IGJvb2xlYW4gKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnNvY2tldFN0YXJ0ZWQgPSBkYXRhO1xuICAgICAgICAgICAgaWYoIGRhdGEgKXtcbiAgICAgICAgICAgICAgICBzZWxmLnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdWJzY3JpYmUoKXtcbiAgICAgICAgdGhpcy53ZWJzb2NrZXRTZXJ2aWNlLnNlbmRNZXNzYWdlKCB0aGlzLmdldFN1YnNjcmliZVN0cmluZygpICk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc2VuZCggZGF0YTogTWVzc2FnZSApe1xuICAgICAgICB0aGlzLndlYnNvY2tldFNlcnZpY2Uuc2VuZE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe2RhdGE6IGRhdGF9KSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVuc3Vic2NyaWJlKCl7XG4gICAgICAgIHRoaXMud2Vic29ja2V0U2VydmljZS5zZW5kTWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBjb21tYW5kOiAndW5zdWJzY3JpYmUnLFxuICAgICAgICAgICAgaWRlbnRpZmllcjogdGhpcy5pZGVudGlmaWVyU3RyXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVkLm5leHQoIGZhbHNlICk7XG4gICAgfVxufSJdfQ==
