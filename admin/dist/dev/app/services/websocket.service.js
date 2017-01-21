"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var WebSocketService = (function () {
    function WebSocketService() {
        this.message = new Rx_1.Subject();
        this.opened = new Rx_1.Subject();
    }
    WebSocketService.prototype.close = function () {
        this.socket.unsubscribe();
        this.ws.complete();
    };
    WebSocketService.prototype.sendMessage = function (message) {
        this.ws.next(message);
    };
    WebSocketService.prototype.start = function (url) {
        var _this = this;
        var self = this;
        this.url = url;
        this.ws = Rx_1.Observable.webSocket(this.url);
        this.socket = this.ws.subscribe({
            next: function (data) {
                _this.message.next(data);
            },
            error: function () {
                self.opened.next(false);
                self.socket.unsubscribe();
                setTimeout(function () {
                    self.start(self.url);
                }, 1000);
            },
            complete: function () {
            }
        });
    };
    return WebSocketService;
}());
WebSocketService = __decorate([
    core_1.Injectable()
], WebSocketService);
exports.WebSocketService = WebSocketService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy93ZWJzb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLDhCQUErRDtBQUkvRCxJQUFhLGdCQUFnQjtJQUQ3QjtRQU1TLFlBQU8sR0FBcUIsSUFBSSxZQUFPLEVBQUUsQ0FBQztRQUMxQyxXQUFNLEdBQXFCLElBQUksWUFBTyxFQUFFLENBQUM7SUFnQ2xELENBQUM7SUE5QlEsZ0NBQUssR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU0sc0NBQVcsR0FBbEIsVUFBb0IsT0FBYztRQUNoQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sZ0NBQUssR0FBWixVQUFjLEdBQVc7UUFBekIsaUJBb0JDO1FBbkJDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsZUFBVSxDQUFDLFNBQVMsQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUM5QixJQUFJLEVBQUUsVUFBRSxJQUFZO2dCQUNsQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQixDQUFDO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO2dCQUUxQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMxQixVQUFVLENBQUU7b0JBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUM7Z0JBQ3pCLENBQUMsRUFBRSxJQUFJLENBQUUsQ0FBQztZQUNaLENBQUM7WUFDRCxRQUFRLEVBQUU7WUFFVixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtBQXRDWSxnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtHQUNBLGdCQUFnQixDQXNDNUI7QUF0Q1ksNENBQWdCIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy93ZWJzb2NrZXQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9ICAgIGZyb20gJ3J4anMvUngnO1xuaW1wb3J0IHsgV2ViU29ja2V0U3ViamVjdCB9ICAgICAgICAgICAgICAgICAgICAgZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9kb20vV2ViU29ja2V0U3ViamVjdFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2ViU29ja2V0U2VydmljZSB7XG4gIHByaXZhdGUgd3M6IFdlYlNvY2tldFN1YmplY3Q8T2JqZWN0PjtcbiAgcHJpdmF0ZSBzb2NrZXQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSB1cmw6IHN0cmluZztcblxuICBwdWJsaWMgbWVzc2FnZTogU3ViamVjdDxNZXNzYWdlPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBvcGVuZWQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHB1YmxpYyBjbG9zZSgpOnZvaWQge1xuICAgIHRoaXMuc29ja2V0LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy53cy5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHVibGljIHNlbmRNZXNzYWdlKCBtZXNzYWdlOnN0cmluZyApOnZvaWR7XG4gICAgdGhpcy53cy5uZXh0KCBtZXNzYWdlICk7XG4gIH1cblxuICBwdWJsaWMgc3RhcnQoIHVybDogc3RyaW5nICk6dm9pZCB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMud3MgPSBPYnNlcnZhYmxlLndlYlNvY2tldCggdGhpcy51cmwgKTtcbiAgICB0aGlzLnNvY2tldCA9IHRoaXMud3Muc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6ICggZGF0YTpNZXNzYWdlICkgPT4ge1xuICAgICAgICB0aGlzLm1lc3NhZ2UubmV4dChkYXRhKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKCkgPT4ge1xuICAgICAgICBzZWxmLm9wZW5lZC5uZXh0KCBmYWxzZSApO1xuICAgICAgICAvLyB0aGlzLm1lc3NhZ2UubmV4dCggeyB0eXBlOiAnY2xvc2VkJyB9ICk7XG4gICAgICAgIHNlbGYuc29ja2V0LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcbiAgICAgICAgICBzZWxmLnN0YXJ0KCBzZWxmLnVybCApO1xuICAgICAgICB9LCAxMDAwICk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5tZXNzYWdlLm5leHQoIHsgdHlwZTogJ2Nsb3NlZCcgfSApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XG4gIGNvbnRyb2xsZXI6IHN0cmluZztcbiAgbWV0aG9kOiBzdHJpbmc7XG4gIGRhdGE6IGFueTtcbn1cbiJdfQ==
