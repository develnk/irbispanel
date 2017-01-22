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
var globals_1 = require("../../globals");
var $ = require('../../../../../node_modules/jquery/dist/jquery.min.js');
var TopNavComponent = (function () {
    function TopNavComponent(globals) {
        this.globals = globals;
        this.user = globals.USER;
        if (!this.user || !this.user.name) {
            this.user = {
                name: 'Anonymous',
                ses_id: '',
                mail: '',
                status: 1
            };
        }
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
    __metadata("design:paramtypes", [globals_1.Globals])
], TopNavComponent);
exports.TopNavComponent = TopNavComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdG9wbmF2L3RvcG5hdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLHlDQUF3QztBQUV4QyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsdURBQXVELENBQUMsQ0FBQztBQU96RSxJQUFhLGVBQWU7SUFHM0IseUJBQW9CLE9BQWdCO1FBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDbkMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsSUFBSSxHQUFlO2dCQUN2QixJQUFJLEVBQUUsV0FBVztnQkFDakIsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsTUFBTSxFQUFFLENBQUM7YUFDVCxDQUFBO1FBQ0YsQ0FBQztJQUNGLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksS0FBYTtRQUN4QixJQUFJLElBQUksR0FBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsSUFBSTthQUNGLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEIsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFHLFVBQVUsRUFBRSxHQUFHLEVBQUcsWUFBWSxFQUFDLENBQUM7YUFDN0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLEdBQUMsS0FBSyxHQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCw2QkFBRyxHQUFIO1FBQ0MsSUFBSSxJQUFJLEdBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELHdDQUFjLEdBQWQ7UUFDQyxJQUFJLE9BQU8sR0FBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakMsSUFBSSxhQUFhLEdBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3pDLGFBQWEsQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBO0FBbENZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsYUFBYTtLQUM3QixDQUFDO3FDQUk0QixpQkFBTztHQUh4QixlQUFlLENBa0MzQjtBQWxDWSwwQ0FBZSIsImZpbGUiOiJhcHAvc2hhcmVkL3RvcG5hdi90b3BuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsc1wiO1xuaW1wb3J0IHsgTG9naW5EYXRhIH0gZnJvbSBcIi4uLy4uL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xubGV0ICQgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbi5qcycpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAndG9wLW5hdicsXG4gICAgdGVtcGxhdGVVcmw6ICd0b3BuYXYuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRvcE5hdkNvbXBvbmVudCB7XG5cdHByaXZhdGUgdXNlcjogTG9naW5EYXRhO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZ2xvYmFsczogR2xvYmFscykge1xuXHRcdHRoaXMudXNlciA9IGdsb2JhbHMuVVNFUjtcblx0XHRpZiAoIXRoaXMudXNlciB8fCAhdGhpcy51c2VyLm5hbWUpIHtcblx0XHRcdHRoaXMudXNlciA9IDxMb2dpbkRhdGE+IHtcblx0XHRcdFx0bmFtZTogJ0Fub255bW91cycsXG5cdFx0XHRcdHNlc19pZDogJycsXG5cdFx0XHRcdG1haWw6ICcnLFxuXHRcdFx0XHRzdGF0dXM6IDFcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjaGFuZ2VUaGVtZShjb2xvcjogc3RyaW5nKTogdm9pZCB7XG5cdFx0bGV0IGxpbms6IGFueSA9ICQoJzxsaW5rPicpO1xuXHRcdGxpbmtcblx0XHRcdC5hcHBlbmRUbygnaGVhZCcpXG5cdFx0XHQuYXR0cih7dHlwZSA6ICd0ZXh0L2NzcycsIHJlbCA6ICdzdHlsZXNoZWV0J30pXG5cdFx0XHQuYXR0cignaHJlZicsICd0aGVtZXMvYXBwLScrY29sb3IrJy5jc3MnKTtcblx0fVxuXG5cdHJ0bCgpOiB2b2lkIHtcblx0XHRsZXQgYm9keTogYW55ID0gJCgnYm9keScpO1xuXHRcdGJvZHkudG9nZ2xlQ2xhc3MoJ3J0bCcpO1xuXHR9XG5cblx0c2lkZWJhclRvZ2dsZXIoKTogdm9pZCAge1xuXHRcdGxldCBzaWRlYmFyOiBhbnkgPSAkKCcjc2lkZWJhcicpO1xuXHRcdGxldCBtYWluQ29udGFpbmVyOiBhbnkgPSAkKCcubWFpbi1jb250YWluZXInKTtcblx0XHRzaWRlYmFyLnRvZ2dsZUNsYXNzKCdzaWRlYmFyLWxlZnQtemVybycpO1xuXHRcdG1haW5Db250YWluZXIudG9nZ2xlQ2xhc3MoJ21haW4tY29udGFpbmVyLW1sLXplcm8nKTtcblx0fVxufVxuIl19
