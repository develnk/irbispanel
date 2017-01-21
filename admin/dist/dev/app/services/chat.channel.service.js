"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var channel_websocket_service_1 = require("./channel.websocket.service");
var websocket_service_1 = require("./websocket.service");
var ChatChannelService = (function (_super) {
    __extends(ChatChannelService, _super);
    function ChatChannelService(websocketService) {
        var _this = _super.call(this, websocketService) || this;
        _this.identifier = {
            channel: 'ChatChannel'
        };
        return _this;
    }
    return ChatChannelService;
}(channel_websocket_service_1.ChannelWebsocketService));
ChatChannelService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [websocket_service_1.WebSocketService])
], ChatChannelService);
exports.ChatChannelService = ChatChannelService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9jaGF0LmNoYW5uZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkQ7QUFDM0QseUVBQXlFO0FBQ3pFLHlEQUFpRTtBQUdqRSxJQUFhLGtCQUFrQjtJQUFTLHNDQUF1QjtJQUUzRCw0QkFBYSxnQkFBa0M7UUFBL0MsWUFDSSxrQkFBTyxnQkFBZ0IsQ0FBRSxTQUk1QjtRQUhHLEtBQUksQ0FBQyxVQUFVLEdBQUc7WUFDZCxPQUFPLEVBQUUsYUFBYTtTQUN6QixDQUFDOztJQUNOLENBQUM7SUFDTCx5QkFBQztBQUFELENBUkEsQUFRQyxDQVJ1QyxtREFBdUIsR0FROUQ7QUFSWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtxQ0FHc0Isb0NBQWdCO0dBRnRDLGtCQUFrQixDQVE5QjtBQVJZLGdEQUFrQiIsImZpbGUiOiJhcHAvc2VydmljZXMvY2hhdC5jaGFubmVsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgICAgICAgIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDaGFubmVsV2Vic29ja2V0U2VydmljZSB9ICAgIGZyb20gXCIuL2NoYW5uZWwud2Vic29ja2V0LnNlcnZpY2VcIjtcbmltcG9ydCB7IFdlYlNvY2tldFNlcnZpY2UgfSAgICAgICAgICAgZnJvbSBcIi4vd2Vic29ja2V0LnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoYXRDaGFubmVsU2VydmljZSBleHRlbmRzIENoYW5uZWxXZWJzb2NrZXRTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCB3ZWJzb2NrZXRTZXJ2aWNlOiBXZWJTb2NrZXRTZXJ2aWNlICl7XG4gICAgICAgIHN1cGVyKCB3ZWJzb2NrZXRTZXJ2aWNlICk7XG4gICAgICAgIHRoaXMuaWRlbnRpZmllciA9IHtcbiAgICAgICAgICAgIGNoYW5uZWw6ICdDaGF0Q2hhbm5lbCdcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=
