"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_component_1 = require("./forms.component");
var FormModule = (function () {
    function FormModule() {
    }
    return FormModule;
}());
FormModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule
        ],
        declarations: [forms_component_1.FormComponent],
        exports: [forms_component_1.FormComponent]
    })
], FormModule);
exports.FormModule = FormModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZm9ybXMvZm9ybXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBRS9DLHFEQUFrRDtBQVVsRCxJQUFhLFVBQVU7SUFBdkI7SUFBMEIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBMUIsQUFBMkIsSUFBQTtBQUFkLFVBQVU7SUFSdEIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wscUJBQVk7U0FDZjtRQUNELFlBQVksRUFBRSxDQUFDLCtCQUFhLENBQUM7UUFDN0IsT0FBTyxFQUFFLENBQUMsK0JBQWEsQ0FBQztLQUMzQixDQUFDO0dBRVcsVUFBVSxDQUFJO0FBQWQsZ0NBQVUiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9mb3Jtcy9mb3Jtcy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vZm9ybXMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIFJvdXRlck1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbRm9ybUNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW0Zvcm1Db21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgRm9ybU1vZHVsZSB7IH1cbiJdfQ==
