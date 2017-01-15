"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    })
], TopNavComponent);
exports.TopNavComponent = TopNavComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdG9wbmF2L3RvcG5hdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQTBDO0FBUTFDLElBQWEsZUFBZTtJQUE1QjtJQW9CQSxDQUFDO0lBbkJBLHFDQUFXLEdBQVgsVUFBWSxLQUFhO1FBQ3hCLElBQUksSUFBSSxHQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixJQUFJO2FBQ0YsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUNoQixJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUcsVUFBVSxFQUFFLEdBQUcsRUFBRyxZQUFZLEVBQUMsQ0FBQzthQUM3QyxJQUFJLENBQUMsTUFBTSxFQUFFLGFBQWEsR0FBQyxLQUFLLEdBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDZCQUFHLEdBQUg7UUFDQyxJQUFJLElBQUksR0FBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsd0NBQWMsR0FBZDtRQUNDLElBQUksT0FBTyxHQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqQyxJQUFJLGFBQWEsR0FBUSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDekMsYUFBYSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRixzQkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFwQlksZUFBZTtJQU4zQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxhQUFhO0tBQzdCLENBQUM7R0FFVyxlQUFlLENBb0IzQjtBQXBCWSwwQ0FBZSIsImZpbGUiOiJhcHAvc2hhcmVkL3RvcG5hdi90b3BuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3RvcC1uYXYnLFxuICAgIHRlbXBsYXRlVXJsOiAndG9wbmF2Lmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIFRvcE5hdkNvbXBvbmVudCB7XG5cdGNoYW5nZVRoZW1lKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR2YXIgbGluazogYW55ID0gJCgnPGxpbms+Jyk7XG5cdFx0bGlua1xuXHRcdFx0LmFwcGVuZFRvKCdoZWFkJylcblx0XHRcdC5hdHRyKHt0eXBlIDogJ3RleHQvY3NzJywgcmVsIDogJ3N0eWxlc2hlZXQnfSlcblx0XHRcdC5hdHRyKCdocmVmJywgJ3RoZW1lcy9hcHAtJytjb2xvcisnLmNzcycpO1xuXHR9XG5cblx0cnRsKCk6IHZvaWQge1xuXHRcdHZhciBib2R5OiBhbnkgPSAkKCdib2R5Jyk7XG5cdFx0Ym9keS50b2dnbGVDbGFzcygncnRsJyk7XG5cdH1cblxuXHRzaWRlYmFyVG9nZ2xlcigpOiB2b2lkICB7XG5cdFx0dmFyIHNpZGViYXI6IGFueSA9ICQoJyNzaWRlYmFyJyk7XG5cdFx0dmFyIG1haW5Db250YWluZXI6IGFueSA9ICQoJy5tYWluLWNvbnRhaW5lcicpO1xuXHRcdHNpZGViYXIudG9nZ2xlQ2xhc3MoJ3NpZGViYXItbGVmdC16ZXJvJyk7XG5cdFx0bWFpbkNvbnRhaW5lci50b2dnbGVDbGFzcygnbWFpbi1jb250YWluZXItbWwtemVybycpO1xuXHR9XG59XG4iXX0=
