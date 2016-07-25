"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_routes_1 = require('./app.routes');
var auth_guard_1 = require('./auth.guard');
var base_1 = require('./base');
if ('dev' === 'prod') {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(base_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' }),
    auth_guard_1.AuthGuard
]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvYmFzZS9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCxxQkFBd0MsZUFBZSxDQUFDLENBQUE7QUFDeEQseUNBQTBCLG1DQUFtQyxDQUFDLENBQUE7QUFDOUQsMkJBQXFDLGNBQWMsQ0FBQyxDQUFBO0FBQ3BELDJCQUEwQixjQUFjLENBQUMsQ0FBQTtBQUV6QyxxQkFBNkIsUUFBUSxDQUFDLENBQUE7QUFFdEMsRUFBRSxDQUFDLENBQUMsWUFBWSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFBQyxxQkFBYyxFQUFFLENBQUM7QUFBQyxDQUFDO0FBTWxELG9DQUFTLENBQUMsbUJBQVksRUFBRTtJQUN0QixpQ0FBb0I7SUFDcEIsY0FBTyxDQUFDLHNCQUFhLEVBQUUsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztJQUN2RCxzQkFBUztDQUNWLENBQUMsQ0FBQyIsImZpbGUiOiJsYXlvdXRzL2Jhc2UvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9CQVNFX0hSRUYgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUsIHByb3ZpZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBBUFBfUk9VVEVSX1BST1ZJREVSUyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL2F1dGguZ3VhcmQnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UnO1xuXG5pZiAoJzwlPSBFTlYgJT4nID09PSAncHJvZCcpIHsgZW5hYmxlUHJvZE1vZGUoKTsgfVxuXG4vKipcbiAqIEJvb3RzdHJhcHMgdGhlIGFwcGxpY2F0aW9uIGFuZCBtYWtlcyB0aGUgUk9VVEVSX1BST1ZJREVSUyBhbmQgdGhlIEFQUF9CQVNFX0hSRUYgYXZhaWxhYmxlIHRvIGl0LlxuICogQHNlZSBodHRwczovL2FuZ3VsYXIuaW8vZG9jcy90cy9sYXRlc3QvYXBpL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYy9pbmRleC9ib290c3RyYXAtZnVuY3Rpb24uaHRtbFxuICovXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbXG4gIEFQUF9ST1VURVJfUFJPVklERVJTLFxuICBwcm92aWRlKEFQUF9CQVNFX0hSRUYsIHsgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nIH0pLFxuICBBdXRoR3VhcmRcbl0pO1xuXG4vLyBJbiBvcmRlciB0byBzdGFydCB0aGUgU2VydmljZSBXb3JrZXIgbG9jYXRlZCBhdCBcIi4vd29ya2VyLmpzXCJcbi8vIHVuY29tbWVudCB0aGlzIGxpbmUuIE1vcmUgYWJvdXQgU2VydmljZSBXb3JrZXJzIGhlcmVcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TZXJ2aWNlX1dvcmtlcl9BUEkvVXNpbmdfU2VydmljZV9Xb3JrZXJzXG4vL1xuLy8gaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbi8vICAgKDxhbnk+bmF2aWdhdG9yKS5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcuL3dvcmtlci5qcycpLnRoZW4oKHJlZ2lzdHJhdGlvbjogYW55KSA9PlxuLy8gICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWwgd2l0aCBzY29wZTogJywgcmVnaXN0cmF0aW9uLnNjb3BlKSlcbi8vICAgICAuY2F0Y2goKGVycjogYW55KSA9PlxuLy8gICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKSk7XG4vLyB9XG4iXX0=
