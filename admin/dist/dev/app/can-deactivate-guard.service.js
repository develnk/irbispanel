"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    return CanDeactivateGuard;
}());
CanDeactivateGuard = __decorate([
    core_1.Injectable()
], CanDeactivateGuard);
exports.CanDeactivateGuard = CanDeactivateGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jYW4tZGVhY3RpdmF0ZS1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FBOEM7QUFTOUMsSUFBYSxrQkFBa0I7SUFBL0I7SUFJQSxDQUFDO0lBSEcsMENBQWEsR0FBYixVQUFjLFNBQWlDO1FBQzNDLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDdEUsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtHQUNBLGtCQUFrQixDQUk5QjtBQUpZLGdEQUFrQiIsImZpbGUiOiJhcHAvY2FuLWRlYWN0aXZhdGUtZ3VhcmQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkRlYWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgIGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuQ29tcG9uZW50RGVhY3RpdmF0ZSB7XG4gICAgY2FuRGVhY3RpdmF0ZTogKCkgPT4gT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2FuRGVhY3RpdmF0ZUd1YXJkIGltcGxlbWVudHMgQ2FuRGVhY3RpdmF0ZTxDYW5Db21wb25lbnREZWFjdGl2YXRlPiB7XG4gICAgY2FuRGVhY3RpdmF0ZShjb21wb25lbnQ6IENhbkNvbXBvbmVudERlYWN0aXZhdGUpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5jYW5EZWFjdGl2YXRlID8gY29tcG9uZW50LmNhbkRlYWN0aXZhdGUoKSA6IHRydWU7XG4gICAgfVxufVxuIl19
