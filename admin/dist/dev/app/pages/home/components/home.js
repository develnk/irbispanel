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
var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'notifications-cmp',
        templateUrl: 'notifications.html',
        styleUrls: ['home.css'],
    }),
    __metadata("design:paramtypes", [])
], NotificationComponent);
var HomeComponent = (function () {
    /* END*/
    function HomeComponent() {
        /* Carousel Variable */
        this.myInterval = 5000;
        this.index = 0;
        this.slides = [];
        this.imgUrl = [
            "assets/img/slider1.jpg",
            "assets/img/slider2.jpg",
            "assets/img/slider3.jpg",
            "assets/img/slider0.jpg"
        ];
        /* END */
        /* Alert component */
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
    /* Carousel */
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
        templateUrl: 'home.html',
        styleUrls: ['home.css']
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9ob21lL2NvbXBvbmVudHMvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXdDO0FBU3hDO0lBQUE7SUFBMEIsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBMUIsQUFBMkIsSUFBQTtBQUEzQjtJQU5DLGdCQUFTLENBQUM7UUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLGVBQWU7UUFDNUIsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO0tBQzNCLENBQUM7O3FCQUN5QjtBQU8zQjtJQUFBO0lBQXFCLENBQUM7SUFBRCxvQkFBQztBQUFELENBQXJCLEFBQXNCLElBQUE7QUFBdEI7SUFMQyxnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxXQUFXO0tBQ3hCLENBQUM7O2lCQUNvQjtBQVF0QjtJQUFBO0lBQThCLENBQUM7SUFBRCw0QkFBQztBQUFELENBQTlCLEFBQStCLElBQUE7QUFBL0I7SUFOQyxnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7S0FDdkIsQ0FBQzs7eUJBQzZCO0FBVS9CO0lBNkJDLFFBQVE7SUFFUjtRQTdCQSx1QkFBdUI7UUFDdkIsZUFBVSxHQUFXLElBQUksQ0FBQztRQUMxQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFlO1lBQ3BCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtTQUN4QixDQUFDO1FBQ0YsU0FBUztRQUNULHFCQUFxQjtRQUNkLFdBQU0sR0FBaUI7WUFDM0I7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsR0FBRyxFQUFFLDJEQUEyRDthQUNqRTtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLEdBQUcsRUFBRSxnRUFBZ0U7Z0JBQ3JFLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7U0FDRixDQUFDO1FBUUYsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsQ0FBQztJQUNGLENBQUM7SUFUTyxrQ0FBVSxHQUFqQixVQUFrQixDQUFRO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBU0YsY0FBYztJQUNkLGdDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxFQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLHNCQUNqRSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRztTQUMxRSxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUYsb0JBQUM7QUFBRCxDQS9DQSxBQStDQyxJQUFBO0FBL0NEO0lBUEMsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsV0FBVztRQUN4QixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7S0FDdkIsQ0FBQzs7aUJBaUREO0FBL0NZLHdCQUFBLGFBQWEsQ0FBQSIsImZpbGUiOiJhcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nhcm91c2VsTW9kdWxlLCBEcm9wZG93bk1vZHVsZSwgQWxlcnRNb2R1bGV9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ3RpbWVsaW5lLWNtcCcsXG5cdHRlbXBsYXRlVXJsOiAndGltZWxpbmUuaHRtbCcsXG5cdHN0eWxlVXJsczogWyd0aW1lbGluZS5jc3MnXSxcbn0pXG5jbGFzcyBUaW1lbGluZUNvbXBvbmVudCB7IH1cblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnY2hhdC1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ2NoYXQuaHRtbCdcbn0pXG5jbGFzcyBDaGF0Q29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ25vdGlmaWNhdGlvbnMtY21wJyxcblx0dGVtcGxhdGVVcmw6ICdub3RpZmljYXRpb25zLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnaG9tZS5jc3MnXSxcbn0pXG5jbGFzcyBOb3RpZmljYXRpb25Db21wb25lbnQgeyB9XG5cblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnaG9tZS1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCcsXG5cdHN0eWxlVXJsczogWydob21lLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG5cblx0LyogQ2Fyb3VzZWwgVmFyaWFibGUgKi9cblx0bXlJbnRlcnZhbDogbnVtYmVyID0gNTAwMDtcblx0aW5kZXg6IG51bWJlciA9IDA7XG5cdHNsaWRlczogQXJyYXk8YW55PiA9IFtdO1xuXHRpbWdVcmw6IEFycmF5PGFueT4gPSBbXG5cdFx0YGFzc2V0cy9pbWcvc2xpZGVyMS5qcGdgLFxuXHRcdGBhc3NldHMvaW1nL3NsaWRlcjIuanBnYCxcblx0XHRgYXNzZXRzL2ltZy9zbGlkZXIzLmpwZ2AsXG5cdFx0YGFzc2V0cy9pbWcvc2xpZGVyMC5qcGdgXG5cdF07XG5cdC8qIEVORCAqL1xuXHQvKiBBbGVydCBjb21wb25lbnQgKi9cblx0cHVibGljIGFsZXJ0czpBcnJheTxPYmplY3Q+ID0gW1xuXHQgICB7XG5cdCAgICAgdHlwZTogJ2RhbmdlcicsXG5cdCAgICAgbXNnOiAnT2ggc25hcCEgQ2hhbmdlIGEgZmV3IHRoaW5ncyB1cCBhbmQgdHJ5IHN1Ym1pdHRpbmcgYWdhaW4uJ1xuXHQgICB9LFxuXHQgICB7XG5cdCAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuXHQgICAgIG1zZzogJ1dlbGwgZG9uZSEgWW91IHN1Y2Nlc3NmdWxseSByZWFkIHRoaXMgaW1wb3J0YW50IGFsZXJ0IG1lc3NhZ2UuJyxcblx0ICAgICBjbG9zYWJsZTogdHJ1ZVxuXHQgICB9XG5cdCBdO1xuXG5cdCBwdWJsaWMgY2xvc2VBbGVydChpOm51bWJlcik6dm9pZCB7XG5cdCAgIHRoaXMuYWxlcnRzLnNwbGljZShpLCAxKTtcblx0IH1cblx0LyogRU5EKi9cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdFx0dGhpcy5hZGRTbGlkZSgpO1xuXHRcdH1cblx0fVxuXG5cdC8qIENhcm91c2VsICovXG5cdGFkZFNsaWRlKCkge1xuXHRcdGxldCBpID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuXHRcdHRoaXMuc2xpZGVzLnB1c2goe1xuXHRcdFx0aW1hZ2U6IHRoaXMuaW1nVXJsW2ldLFxuXHRcdFx0dGV4dDogYCR7WydEdW1teSAnLCAnRHVtbXkgJywgJ0R1bW15ICcsICdEdW1teSAnXVt0aGlzLnNsaWRlcy5sZW5ndGggJSA0XX1cbiAgICAgIFx0XHRcdCR7Wyd0ZXh0IDAnLCAndGV4dCAxJywgJ3RleHQgMicsICd0ZXh0IDMnXVt0aGlzLnNsaWRlcy5sZW5ndGggJSA0XX1gXG5cdFx0fSk7XG5cdH1cblx0LyogRU5EICovXG59XG4iXX0=
