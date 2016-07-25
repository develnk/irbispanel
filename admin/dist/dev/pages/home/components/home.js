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
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var TimelineComponent = (function () {
    function TimelineComponent() {
    }
    TimelineComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'timeline-cmp',
            templateUrl: 'timeline.html',
            styleUrls: ['timeline.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], TimelineComponent);
    return TimelineComponent;
}());
var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chat-cmp',
            templateUrl: 'chat.html',
            directives: [common_1.CORE_DIRECTIVES, ng2_bootstrap_1.DROPDOWN_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ChatComponent);
    return ChatComponent;
}());
var NotificationComponent = (function () {
    function NotificationComponent() {
    }
    NotificationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'notifications-cmp',
            templateUrl: 'notifications.html',
            styleUrls: ['home.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationComponent);
    return NotificationComponent;
}());
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
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home-cmp',
            templateUrl: 'home.html',
            styleUrls: ['home.css'],
            directives: [
                ng2_bootstrap_1.AlertComponent,
                TimelineComponent,
                ChatComponent,
                NotificationComponent,
                ng2_bootstrap_1.CAROUSEL_DIRECTIVES,
                common_1.CORE_DIRECTIVES,
                common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2hvbWUvY29tcG9uZW50cy9ob21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFDakUsOEJBQXVFLDZCQUE2QixDQUFDLENBQUE7QUFRckc7SUFBQTtJQUEwQixDQUFDO0lBTjNCO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsZUFBZTtZQUM1QixTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7U0FDM0IsQ0FBQzs7eUJBQUE7SUFDd0Isd0JBQUM7QUFBRCxDQUExQixBQUEyQixJQUFBO0FBUTNCO0lBQUE7SUFBcUIsQ0FBQztJQU50QjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSxtQ0FBbUIsQ0FBQztTQUNsRCxDQUFDOztxQkFBQTtJQUNtQixvQkFBQztBQUFELENBQXJCLEFBQXNCLElBQUE7QUFRdEI7SUFBQTtJQUE4QixDQUFDO0lBTi9CO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO1NBQ3ZCLENBQUM7OzZCQUFBO0lBQzRCLDRCQUFDO0FBQUQsQ0FBOUIsQUFBK0IsSUFBQTtBQWtCL0I7SUErQkM7UUE1QkEsZUFBVSxHQUFXLElBQUksQ0FBQztRQUMxQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFDeEIsV0FBTSxHQUFlO1lBQ3BCLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtTQUN4QixDQUFDO1FBR0ssV0FBTSxHQUFpQjtZQUMzQjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxHQUFHLEVBQUUsMkRBQTJEO2FBQ2pFO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsR0FBRyxFQUFFLGdFQUFnRTtnQkFDckUsUUFBUSxFQUFFLElBQUk7YUFDZjtTQUNGLENBQUM7UUFRRixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixDQUFDO0lBQ0YsQ0FBQztJQVRPLGtDQUFVLEdBQWpCLFVBQWtCLENBQVE7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFVRixnQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksRUFBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxzQkFDakUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUc7U0FDMUUsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQTVERjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLFdBQVc7WUFDeEIsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ3ZCLFVBQVUsRUFBRTtnQkFDWCw4QkFBYztnQkFDZCxpQkFBaUI7Z0JBQ2pCLGFBQWE7Z0JBQ2IscUJBQXFCO2dCQUNyQixtQ0FBbUI7Z0JBQ25CLHdCQUFlO2dCQUNmLHdCQUFlLENBQUU7U0FDbEIsQ0FBQzs7cUJBQUE7SUFpREYsb0JBQUM7QUFBRCxDQS9DQSxBQStDQyxJQUFBO0FBL0NZLHFCQUFhLGdCQStDekIsQ0FBQSIsImZpbGUiOiJwYWdlcy9ob21lL2NvbXBvbmVudHMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q09SRV9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0NBUk9VU0VMX0RJUkVDVElWRVMsIERST1BET1dOX0RJUkVDVElWRVMsIEFsZXJ0Q29tcG9uZW50fSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICd0aW1lbGluZS1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ3RpbWVsaW5lLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsndGltZWxpbmUuY3NzJ10sXG59KVxuY2xhc3MgVGltZWxpbmVDb21wb25lbnQgeyB9XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2NoYXQtY21wJyxcblx0dGVtcGxhdGVVcmw6ICdjaGF0Lmh0bWwnLFxuXHRkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTLCBEUk9QRE9XTl9ESVJFQ1RJVkVTXVxufSlcbmNsYXNzIENoYXRDb21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnbm90aWZpY2F0aW9ucy1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ25vdGlmaWNhdGlvbnMuaHRtbCcsXG5cdHN0eWxlVXJsczogWydob21lLmNzcyddLFxufSlcbmNsYXNzIE5vdGlmaWNhdGlvbkNvbXBvbmVudCB7IH1cblxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdob21lLWNtcCcsXG5cdHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJyxcblx0c3R5bGVVcmxzOiBbJ2hvbWUuY3NzJ10sXG5cdGRpcmVjdGl2ZXM6IFtcblx0XHRBbGVydENvbXBvbmVudCxcblx0XHRUaW1lbGluZUNvbXBvbmVudCxcblx0XHRDaGF0Q29tcG9uZW50LFxuXHRcdE5vdGlmaWNhdGlvbkNvbXBvbmVudCxcblx0XHRDQVJPVVNFTF9ESVJFQ1RJVkVTLFxuXHRcdENPUkVfRElSRUNUSVZFUyxcblx0XHRGT1JNX0RJUkVDVElWRVMgXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuXG5cdC8qIENhcm91c2VsIFZhcmlhYmxlICovXG5cdG15SW50ZXJ2YWw6IG51bWJlciA9IDUwMDA7XG5cdGluZGV4OiBudW1iZXIgPSAwO1xuXHRzbGlkZXM6IEFycmF5PGFueT4gPSBbXTtcblx0aW1nVXJsOiBBcnJheTxhbnk+ID0gW1xuXHRcdGBhc3NldHMvaW1nL3NsaWRlcjEuanBnYCxcblx0XHRgYXNzZXRzL2ltZy9zbGlkZXIyLmpwZ2AsXG5cdFx0YGFzc2V0cy9pbWcvc2xpZGVyMy5qcGdgLFxuXHRcdGBhc3NldHMvaW1nL3NsaWRlcjAuanBnYFxuXHRdO1xuXHQvKiBFTkQgKi9cblx0LyogQWxlcnQgY29tcG9uZW50ICovXG5cdHB1YmxpYyBhbGVydHM6QXJyYXk8T2JqZWN0PiA9IFtcblx0ICAge1xuXHQgICAgIHR5cGU6ICdkYW5nZXInLFxuXHQgICAgIG1zZzogJ09oIHNuYXAhIENoYW5nZSBhIGZldyB0aGluZ3MgdXAgYW5kIHRyeSBzdWJtaXR0aW5nIGFnYWluLidcblx0ICAgfSxcblx0ICAge1xuXHQgICAgIHR5cGU6ICdzdWNjZXNzJyxcblx0ICAgICBtc2c6ICdXZWxsIGRvbmUhIFlvdSBzdWNjZXNzZnVsbHkgcmVhZCB0aGlzIGltcG9ydGFudCBhbGVydCBtZXNzYWdlLicsXG5cdCAgICAgY2xvc2FibGU6IHRydWVcblx0ICAgfVxuXHQgXTtcblxuXHQgcHVibGljIGNsb3NlQWxlcnQoaTpudW1iZXIpOnZvaWQge1xuXHQgICB0aGlzLmFsZXJ0cy5zcGxpY2UoaSwgMSk7XG5cdCB9XG5cdC8qIEVORCovXG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdHRoaXMuYWRkU2xpZGUoKTtcblx0XHR9XG5cdH1cblxuXHQvKiBDYXJvdXNlbCAqL1xuXHRhZGRTbGlkZSgpIHtcblx0XHRsZXQgaSA9IHRoaXMuc2xpZGVzLmxlbmd0aDtcblx0XHR0aGlzLnNsaWRlcy5wdXNoKHtcblx0XHRcdGltYWdlOiB0aGlzLmltZ1VybFtpXSxcblx0XHRcdHRleHQ6IGAke1snRHVtbXkgJywgJ0R1bW15ICcsICdEdW1teSAnLCAnRHVtbXkgJ11bdGhpcy5zbGlkZXMubGVuZ3RoICUgNF19XG4gICAgICBcdFx0XHQke1sndGV4dCAwJywgJ3RleHQgMScsICd0ZXh0IDInLCAndGV4dCAzJ11bdGhpcy5zbGlkZXMubGVuZ3RoICUgNF19YFxuXHRcdH0pO1xuXHR9XG5cdC8qIEVORCAqL1xufVxuIl19
