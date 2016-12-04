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
            templateUrl: 'chat.html'
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
            styleUrls: ['home.css']
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9ob21lL2NvbXBvbmVudHMvaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBU3hDO0lBQUE7SUFBMEIsQ0FBQztJQU4zQjtRQUFDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLGVBQWU7WUFDNUIsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO1NBQzNCLENBQUM7O3lCQUFBO0lBQ3dCLHdCQUFDO0FBQUQsQ0FBMUIsQUFBMkIsSUFBQTtBQU8zQjtJQUFBO0lBQXFCLENBQUM7SUFMdEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxXQUFXO1NBQ3hCLENBQUM7O3FCQUFBO0lBQ21CLG9CQUFDO0FBQUQsQ0FBckIsQUFBc0IsSUFBQTtBQVF0QjtJQUFBO0lBQThCLENBQUM7SUFOL0I7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7U0FDdkIsQ0FBQzs7NkJBQUE7SUFDNEIsNEJBQUM7QUFBRCxDQUE5QixBQUErQixJQUFBO0FBVS9CO0lBK0JDO1FBNUJBLGVBQVUsR0FBVyxJQUFJLENBQUM7UUFDMUIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLFdBQU0sR0FBZTtZQUNwQix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtZQUN4Qix3QkFBd0I7U0FDeEIsQ0FBQztRQUdLLFdBQU0sR0FBaUI7WUFDM0I7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsR0FBRyxFQUFFLDJEQUEyRDthQUNqRTtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLEdBQUcsRUFBRSxnRUFBZ0U7Z0JBQ3JFLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7U0FDRixDQUFDO1FBUUYsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsQ0FBQztJQUNGLENBQUM7SUFUTyxrQ0FBVSxHQUFqQixVQUFrQixDQUFRO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBVUYsZ0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLEVBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsc0JBQ2pFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFHO1NBQzFFLENBQUMsQ0FBQztJQUNKLENBQUM7SUFwREY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztTQUN2QixDQUFDOztxQkFBQTtJQWlERixvQkFBQztBQUFELENBL0NBLEFBK0NDLElBQUE7QUEvQ1kscUJBQWEsZ0JBK0N6QixDQUFBIiwiZmlsZSI6ImFwcC9wYWdlcy9ob21lL2NvbXBvbmVudHMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2Fyb3VzZWxNb2R1bGUsIERyb3Bkb3duTW9kdWxlLCBBbGVydE1vZHVsZX0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAndGltZWxpbmUtY21wJyxcblx0dGVtcGxhdGVVcmw6ICd0aW1lbGluZS5odG1sJyxcblx0c3R5bGVVcmxzOiBbJ3RpbWVsaW5lLmNzcyddLFxufSlcbmNsYXNzIFRpbWVsaW5lQ29tcG9uZW50IHsgfVxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdjaGF0LWNtcCcsXG5cdHRlbXBsYXRlVXJsOiAnY2hhdC5odG1sJ1xufSlcbmNsYXNzIENoYXRDb21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnbm90aWZpY2F0aW9ucy1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ25vdGlmaWNhdGlvbnMuaHRtbCcsXG5cdHN0eWxlVXJsczogWydob21lLmNzcyddLFxufSlcbmNsYXNzIE5vdGlmaWNhdGlvbkNvbXBvbmVudCB7IH1cblxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdob21lLWNtcCcsXG5cdHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJyxcblx0c3R5bGVVcmxzOiBbJ2hvbWUuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcblxuXHQvKiBDYXJvdXNlbCBWYXJpYWJsZSAqL1xuXHRteUludGVydmFsOiBudW1iZXIgPSA1MDAwO1xuXHRpbmRleDogbnVtYmVyID0gMDtcblx0c2xpZGVzOiBBcnJheTxhbnk+ID0gW107XG5cdGltZ1VybDogQXJyYXk8YW55PiA9IFtcblx0XHRgYXNzZXRzL2ltZy9zbGlkZXIxLmpwZ2AsXG5cdFx0YGFzc2V0cy9pbWcvc2xpZGVyMi5qcGdgLFxuXHRcdGBhc3NldHMvaW1nL3NsaWRlcjMuanBnYCxcblx0XHRgYXNzZXRzL2ltZy9zbGlkZXIwLmpwZ2Bcblx0XTtcblx0LyogRU5EICovXG5cdC8qIEFsZXJ0IGNvbXBvbmVudCAqL1xuXHRwdWJsaWMgYWxlcnRzOkFycmF5PE9iamVjdD4gPSBbXG5cdCAgIHtcblx0ICAgICB0eXBlOiAnZGFuZ2VyJyxcblx0ICAgICBtc2c6ICdPaCBzbmFwISBDaGFuZ2UgYSBmZXcgdGhpbmdzIHVwIGFuZCB0cnkgc3VibWl0dGluZyBhZ2Fpbi4nXG5cdCAgIH0sXG5cdCAgIHtcblx0ICAgICB0eXBlOiAnc3VjY2VzcycsXG5cdCAgICAgbXNnOiAnV2VsbCBkb25lISBZb3Ugc3VjY2Vzc2Z1bGx5IHJlYWQgdGhpcyBpbXBvcnRhbnQgYWxlcnQgbWVzc2FnZS4nLFxuXHQgICAgIGNsb3NhYmxlOiB0cnVlXG5cdCAgIH1cblx0IF07XG5cblx0IHB1YmxpYyBjbG9zZUFsZXJ0KGk6bnVtYmVyKTp2b2lkIHtcblx0ICAgdGhpcy5hbGVydHMuc3BsaWNlKGksIDEpO1xuXHQgfVxuXHQvKiBFTkQqL1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHR0aGlzLmFkZFNsaWRlKCk7XG5cdFx0fVxuXHR9XG5cblx0LyogQ2Fyb3VzZWwgKi9cblx0YWRkU2xpZGUoKSB7XG5cdFx0bGV0IGkgPSB0aGlzLnNsaWRlcy5sZW5ndGg7XG5cdFx0dGhpcy5zbGlkZXMucHVzaCh7XG5cdFx0XHRpbWFnZTogdGhpcy5pbWdVcmxbaV0sXG5cdFx0XHR0ZXh0OiBgJHtbJ0R1bW15ICcsICdEdW1teSAnLCAnRHVtbXkgJywgJ0R1bW15ICddW3RoaXMuc2xpZGVzLmxlbmd0aCAlIDRdfVxuICAgICAgXHRcdFx0JHtbJ3RleHQgMCcsICd0ZXh0IDEnLCAndGV4dCAyJywgJ3RleHQgMyddW3RoaXMuc2xpZGVzLmxlbmd0aCAlIDRdfWBcblx0XHR9KTtcblx0fVxuXHQvKiBFTkQgKi9cbn1cbiJdfQ==
