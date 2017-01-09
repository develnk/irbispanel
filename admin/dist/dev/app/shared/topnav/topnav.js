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
var TopNavComponent = (function () {
    function TopNavComponent() {
    }
    TopNavComponent.prototype.changeTheme = function (color) {
        var link = $('<link>');
        link
            .appendTo('head')
            .attr({ type: 'text/css', rel: 'stylesheet' })
            .attr('href', 'themes/app-' + color + '.css');
    };
    TopNavComponent.prototype.rtl = function () {
        var body = $('body');
        body.toggleClass('rtl');
    };
    TopNavComponent.prototype.sidebarToggler = function () {
        var sidebar = $('#sidebar');
        var mainContainer = $('.main-container');
        sidebar.toggleClass('sidebar-left-zero');
        mainContainer.toggleClass('main-container-ml-zero');
    };
    return TopNavComponent;
}());
TopNavComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'top-nav',
        templateUrl: 'topnav.html',
    }),
    __metadata("design:paramtypes", [])
], TopNavComponent);
exports.TopNavComponent = TopNavComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdG9wbmF2L3RvcG5hdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBUTFDLElBQWEsZUFBZTtJQUE1QjtJQW9CQSxDQUFDO0lBbkJBLHFDQUFXLEdBQVgsVUFBWSxLQUFhO1FBQ3hCLElBQUksSUFBSSxHQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixJQUFJO2FBQ0YsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUNoQixJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUcsVUFBVSxFQUFFLEdBQUcsRUFBRyxZQUFZLEVBQUMsQ0FBQzthQUM3QyxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWEsR0FBQyxLQUFLLEdBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDZCQUFHLEdBQUg7UUFDQyxJQUFJLElBQUksR0FBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsd0NBQWMsR0FBZDtRQUNDLElBQUksT0FBTyxHQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqQyxJQUFJLGFBQWEsR0FBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDekMsYUFBYSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRixzQkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxhQUFhO0tBQzdCLENBQUM7O0dBRVcsZUFBZSxDQW9CM0I7QUFwQlksMENBQWUiLCJmaWxlIjoiYXBwL3NoYXJlZC90b3BuYXYvdG9wbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd0b3AtbmF2JyxcbiAgICB0ZW1wbGF0ZVVybDogJ3RvcG5hdi5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUb3BOYXZDb21wb25lbnQge1xuXHRjaGFuZ2VUaGVtZShjb2xvcjogc3RyaW5nKTogdm9pZCB7XG5cdFx0dmFyIGxpbms6IGFueSA9ICQoJzxsaW5rPicpO1xuXHRcdGxpbmtcblx0XHRcdC5hcHBlbmRUbygnaGVhZCcpXG5cdFx0XHQuYXR0cih7dHlwZSA6ICd0ZXh0L2NzcycsIHJlbCA6ICdzdHlsZXNoZWV0J30pXG5cdFx0XHQuYXR0cignaHJlZicsICd0aGVtZXMvYXBwLScrY29sb3IrJy5jc3MnKTtcblx0fVxuXG5cdHJ0bCgpOiB2b2lkIHtcblx0XHR2YXIgYm9keTogYW55ID0gJCgnYm9keScpO1xuXHRcdGJvZHkudG9nZ2xlQ2xhc3MoJ3J0bCcpO1xuXHR9XG5cblx0c2lkZWJhclRvZ2dsZXIoKTogdm9pZCAge1xuXHRcdHZhciBzaWRlYmFyOiBhbnkgPSAkKCcjc2lkZWJhcicpO1xuXHRcdHZhciBtYWluQ29udGFpbmVyOiBhbnkgPSAkKCcubWFpbi1jb250YWluZXInKTtcblx0XHRzaWRlYmFyLnRvZ2dsZUNsYXNzKCdzaWRlYmFyLWxlZnQtemVybycpO1xuXHRcdG1haW5Db250YWluZXIudG9nZ2xlQ2xhc3MoJ21haW4tY29udGFpbmVyLW1sLXplcm8nKTtcblx0fVxufVxuIl19
