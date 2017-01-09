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
var TimelineComponent = (function () {
    function TimelineComponent() {
    }
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'timeline-cmp',
        templateUrl: 'timeline.html',
        styleUrls: ['timeline.css'],
    }),
    __metadata("design:paramtypes", [])
], TimelineComponent);
exports.TimelineComponent = TimelineComponent;
var ChatComponent = (function () {
    function ChatComponent() {
    }
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'chat-cmp',
        templateUrl: 'chat.html'
    }),
    __metadata("design:paramtypes", [])
], ChatComponent);
exports.ChatComponent = ChatComponent;
var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'notifications-cmp',
        templateUrl: 'notifications.html'
    }),
    __metadata("design:paramtypes", [])
], NotificationComponent);
exports.NotificationComponent = NotificationComponent;
var HomeComponent = (function () {
    function HomeComponent() {
        this.myInterval = 5000;
        this.index = 0;
        this.slides = [];
        this.imgUrl = [
            "assets/img/slider1.jpg",
            "assets/img/slider2.jpg",
            "assets/img/slider3.jpg",
            "assets/img/slider0.jpg"
        ];
        this.alerts = [
            {
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    HomeComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    HomeComponent.prototype.addSlide = function () {
        var i = this.slides.length;
        this.slides.push({
            image: this.imgUrl[i],
            text: ['Dummy ', 'Dummy ', 'Dummy ', 'Dummy '][this.slides.length % 4] + "\n      \t\t\t" + ['text 0', 'text 1', 'text 2', 'text 3'][this.slides.length % 4]
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home-cmp',
        templateUrl: 'home.component.html'
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvaG9tZS9ob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBWTFDLElBQWEsaUJBQWlCO0lBQTlCO0lBQWlDLENBQUM7SUFBRCx3QkFBQztBQUFELENBQWpDLEFBQWtDLElBQUE7QUFBckIsaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLGVBQWU7UUFDNUIsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO0tBQzNCLENBQUM7O0dBQ1csaUJBQWlCLENBQUk7QUFBckIsOENBQWlCO0FBTzlCLElBQWEsYUFBYTtJQUExQjtJQUE0QixDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUE1QixBQUE2QixJQUFBO0FBQWhCLGFBQWE7SUFMekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsV0FBVztLQUN4QixDQUFDOztHQUNXLGFBQWEsQ0FBRztBQUFoQixzQ0FBYTtBQU8xQixJQUFhLHFCQUFxQjtJQUFsQztJQUFxQyxDQUFDO0lBQUQsNEJBQUM7QUFBRCxDQUFyQyxBQUFzQyxJQUFBO0FBQXpCLHFCQUFxQjtJQUxqQyxnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsV0FBVyxFQUFFLG9CQUFvQjtLQUNqQyxDQUFDOztHQUNXLHFCQUFxQixDQUFJO0FBQXpCLHNEQUFxQjtBQVFsQyxJQUFhLGFBQWE7SUE4QnpCO1FBNUJBLGVBQVUsR0FBVyxJQUFJLENBQUM7UUFDMUIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLFdBQU0sR0FBZTtZQUNwQix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4Qix3QkFBd0I7U0FDeEIsQ0FBQztRQUdLLFdBQU0sR0FBaUI7WUFDM0I7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsR0FBRyxFQUFFLDJEQUEyRDthQUNqRTtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLEdBQUcsRUFBRSxnRUFBZ0U7Z0JBQ3JFLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7U0FDRixDQUFDO1FBUUYsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsQ0FBQztJQUNGLENBQUM7SUFUTyxrQ0FBVSxHQUFqQixVQUFrQixDQUFRO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBVUYsZ0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLEVBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsc0JBQ2pFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFHO1NBQzFFLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRixvQkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1ksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxxQkFBcUI7S0FDbEMsQ0FBQzs7R0FFVyxhQUFhLENBOEN6QjtBQTlDWSxzQ0FBYSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2hvbWUvaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4qXHRUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4qL1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICd0aW1lbGluZS1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ3RpbWVsaW5lLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsndGltZWxpbmUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IHsgfVxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdjaGF0LWNtcCcsXG5cdHRlbXBsYXRlVXJsOiAnY2hhdC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGF0Q29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ25vdGlmaWNhdGlvbnMtY21wJyxcblx0dGVtcGxhdGVVcmw6ICdub3RpZmljYXRpb25zLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkNvbXBvbmVudCB7IH1cblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnaG9tZS1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG5cdC8qIENhcm91c2VsIFZhcmlhYmxlICovXG5cdG15SW50ZXJ2YWw6IG51bWJlciA9IDUwMDA7XG5cdGluZGV4OiBudW1iZXIgPSAwO1xuXHRzbGlkZXM6IEFycmF5PGFueT4gPSBbXTtcblx0aW1nVXJsOiBBcnJheTxhbnk+ID0gW1xuXHRcdGBhc3NldHMvaW1nL3NsaWRlcjEuanBnYCxcblx0XHRgYXNzZXRzL2ltZy9zbGlkZXIyLmpwZ2AsXG5cdFx0YGFzc2V0cy9pbWcvc2xpZGVyMy5qcGdgLFxuXHRcdGBhc3NldHMvaW1nL3NsaWRlcjAuanBnYFxuXHRdO1xuXHQvKiBFTkQgKi9cblx0LyogQWxlcnQgY29tcG9uZW50ICovXG5cdHB1YmxpYyBhbGVydHM6QXJyYXk8T2JqZWN0PiA9IFtcblx0ICAge1xuXHQgICAgIHR5cGU6ICdkYW5nZXInLFxuXHQgICAgIG1zZzogJ09oIHNuYXAhIENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLidcblx0ICAgfSxcblx0ICAge1xuXHQgICAgIHR5cGU6ICdzdWNjZXNzJyxcblx0ICAgICBtc2c6ICdXZWxsIGRvbmUhIFlvdSBzdWNjZXNzZnVsbHkgcmVhZCB0aGlzIGltcG9ydGFudCBhbGVydCBtZXNzYWdlLicsXG5cdCAgICAgY2xvc2FibGU6IHRydWVcblx0ICAgfVxuXHQgXTtcblxuXHQgcHVibGljIGNsb3NlQWxlcnQoaTpudW1iZXIpOnZvaWQge1xuXHQgICB0aGlzLmFsZXJ0cy5zcGxpY2UoaSwgMSk7XG5cdCB9XG5cdC8qIEVORCovXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdHRoaXMuYWRkU2xpZGUoKTtcblx0XHR9XG5cdH1cblxuXHQvKiBDYXJvdXNlbCAqL1xuXHRhZGRTbGlkZSgpIHtcblx0XHRsZXQgaSA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcblx0XHR0aGlzLnNsaWRlcy5wdXNoKHtcblx0XHRcdGltYWdlOiB0aGlzLmltZ1VybFtpXSxcblx0XHRcdHRleHQ6IGAke1snRHVtbXkgJywgJ0R1bW15ICcsICdEdW1teSAnLCAnRHVtbXkgJ11bdGhpcy5zbGlkZXMubGVuZ3RoICUgNF19XG4gICAgICBcdFx0XHQke1sndGV4dCAwJywgJ3RleHQgMScsICd0ZXh0IDInLCAndGV4dCAzJ11bdGhpcy5zbGlkZXMubGVuZ3RoICUgNF19YFxuXHRcdH0pO1xuXHR9XG5cdC8qIEVORCAqL1xufVxuIl19
