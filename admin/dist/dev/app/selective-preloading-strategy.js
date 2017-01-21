"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require("rxjs/add/observable/of");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var SelectivePreloadingStrategy = (function () {
    function SelectivePreloadingStrategy() {
        this.preloadedModules = [];
    }
    SelectivePreloadingStrategy.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            this.preloadedModules.push(route.path);
            console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return Observable_1.Observable.of(null);
        }
    };
    return SelectivePreloadingStrategy;
}());
SelectivePreloadingStrategy = __decorate([
    core_1.Injectable()
], SelectivePreloadingStrategy);
exports.SelectivePreloadingStrategy = SelectivePreloadingStrategy;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZWxlY3RpdmUtcHJlbG9hZGluZy1zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsa0NBQWdDO0FBQ2hDLHNDQUEyQztBQUUzQyw4Q0FBNkM7QUFHN0MsSUFBYSwyQkFBMkI7SUFEeEM7UUFFRSxxQkFBZ0IsR0FBYSxFQUFFLENBQUM7SUFlbEMsQ0FBQztJQWJDLDZDQUFPLEdBQVAsVUFBUSxLQUFZLEVBQUUsSUFBMkI7UUFDL0MsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUd2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFeEMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUNILGtDQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSwyQkFBMkI7SUFEdkMsaUJBQVUsRUFBRTtHQUNBLDJCQUEyQixDQWdCdkM7QUFoQlksa0VBQTJCIiwiZmlsZSI6ImFwcC9zZWxlY3RpdmUtcHJlbG9hZGluZy1zdHJhdGVneS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcmVsb2FkaW5nU3RyYXRlZ3ksIFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VsZWN0aXZlUHJlbG9hZGluZ1N0cmF0ZWd5IGltcGxlbWVudHMgUHJlbG9hZGluZ1N0cmF0ZWd5IHtcbiAgcHJlbG9hZGVkTW9kdWxlczogc3RyaW5nW10gPSBbXTtcblxuICBwcmVsb2FkKHJvdXRlOiBSb3V0ZSwgbG9hZDogKCkgPT4gT2JzZXJ2YWJsZTxhbnk+KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAocm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhWydwcmVsb2FkJ10pIHtcbiAgICAgIC8vIGFkZCB0aGUgcm91dGUgcGF0aCB0byBvdXIgcHJlbG9hZGVkIG1vZHVsZSBhcnJheVxuICAgICAgdGhpcy5wcmVsb2FkZWRNb2R1bGVzLnB1c2gocm91dGUucGF0aCk7XG5cbiAgICAgIC8vIGxvZyB0aGUgcm91dGUgcGF0aCB0byB0aGUgY29uc29sZVxuICAgICAgY29uc29sZS5sb2coJ1ByZWxvYWRlZDogJyArIHJvdXRlLnBhdGgpO1xuXG4gICAgICByZXR1cm4gbG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vKlxuQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiovIl19
