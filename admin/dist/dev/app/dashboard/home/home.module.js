"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var home_component_1 = require("./home.component");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var angular2_highcharts_1 = require("angular2-highcharts");
var home_component_2 = require("./home.component");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, ng2_bootstrap_1.CarouselModule, ng2_bootstrap_1.DropdownModule, ng2_bootstrap_1.AlertModule, angular2_highcharts_1.ChartModule],
        declarations: [home_component_1.HomeComponent, home_component_2.TimelineComponent, home_component_2.ChatComponent, home_component_2.NotificationComponent],
        exports: [home_component_1.HomeComponent, home_component_2.TimelineComponent, home_component_2.ChatComponent, home_component_2.NotificationComponent]
    })
], HomeModule);
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQyxtREFBaUQ7QUFDakQsK0NBQTRFO0FBQzVFLDJEQUFrRDtBQUVsRCxtREFBMkY7QUFPM0YsSUFBYSxVQUFVO0lBQXZCO0lBQXlCLENBQUM7SUFBRCxpQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixVQUFVO0lBTHRCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsOEJBQWMsRUFBRSw4QkFBYyxFQUFFLDJCQUFXLEVBQUUsaUNBQVcsQ0FBQztRQUNqRixZQUFZLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLGtDQUFpQixFQUFFLDhCQUFhLEVBQUUsc0NBQXFCLENBQUM7UUFDdEYsT0FBTyxFQUFFLENBQUMsOEJBQWEsRUFBRSxrQ0FBaUIsRUFBRSw4QkFBYSxFQUFFLHNDQUFxQixDQUFDO0tBQ3BGLENBQUM7R0FDVyxVQUFVLENBQUc7QUFBYixnQ0FBVSIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL2hvbWUvaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IENhcm91c2VsTW9kdWxlLCBEcm9wZG93bk1vZHVsZSwgQWxlcnRNb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwJztcbmltcG9ydCB7IENoYXJ0TW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItaGlnaGNoYXJ0cyc7XG5cbmltcG9ydCB7IFRpbWVsaW5lQ29tcG9uZW50LCBDaGF0Q29tcG9uZW50LCBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDYXJvdXNlbE1vZHVsZSwgRHJvcGRvd25Nb2R1bGUsIEFsZXJ0TW9kdWxlLCBDaGFydE1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbSG9tZUNvbXBvbmVudCwgVGltZWxpbmVDb21wb25lbnQsIENoYXRDb21wb25lbnQsIE5vdGlmaWNhdGlvbkNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0hvbWVDb21wb25lbnQsIFRpbWVsaW5lQ29tcG9uZW50LCBDaGF0Q29tcG9uZW50LCBOb3RpZmljYXRpb25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUge31cbiJdfQ==
