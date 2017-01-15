"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var sysinfo_component_1 = require("./sysinfo.component");
var SysInfoModule = (function () {
    function SysInfoModule() {
    }
    return SysInfoModule;
}());
SysInfoModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule
        ],
        declarations: [sysinfo_component_1.SysInfoComponent],
        exports: [sysinfo_component_1.SysInfoComponent]
    })
], SysInfoModule);
exports.SysInfoModule = SysInfoModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvc3lzaW5mby9zeXNpbmZvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUUvQyx5REFBdUQ7QUFVdkQsSUFBYSxhQUFhO0lBQTFCO0lBQTZCLENBQUM7SUFBRCxvQkFBQztBQUFELENBQTdCLEFBQThCLElBQUE7QUFBakIsYUFBYTtJQVJ6QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCxxQkFBWTtTQUNmO1FBQ0QsWUFBWSxFQUFFLENBQUMsb0NBQWdCLENBQUM7UUFDaEMsT0FBTyxFQUFFLENBQUMsb0NBQWdCLENBQUM7S0FDOUIsQ0FBQztHQUVXLGFBQWEsQ0FBSTtBQUFqQixzQ0FBYSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL3N5c2luZm8vc3lzaW5mby5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3lzSW5mb0NvbXBvbmVudCB9IGZyb20gJy4vc3lzaW5mby5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgUm91dGVyTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtTeXNJbmZvQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbU3lzSW5mb0NvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTeXNJbmZvTW9kdWxlIHsgfVxuIl19
