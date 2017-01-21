"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var bsComponent_component_1 = require("./bsComponent.component");
var BSComponentModule = (function () {
    function BSComponentModule() {
    }
    return BSComponentModule;
}());
BSComponentModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            ng2_bootstrap_1.AlertModule,
            ng2_bootstrap_1.ButtonsModule,
            ng2_bootstrap_1.DropdownModule,
            ng2_bootstrap_1.PaginationModule,
            ng2_bootstrap_1.ProgressbarModule,
            ng2_bootstrap_1.RatingModule,
            ng2_bootstrap_1.TabsModule,
            ng2_bootstrap_1.TooltipModule,
            ng2_bootstrap_1.ModalModule,
            ng2_bootstrap_1.TypeaheadModule
        ],
        declarations: [bsComponent_component_1.BSComponentComponent],
        exports: [bsComponent_component_1.BSComponentComponent]
    })
], BSComponentModule);
exports.BSComponentModule = BSComponentModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYnMtY29tcG9uZW50L2JzQ29tcG9uZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUUvQyx3Q0FBNkM7QUFFN0MsK0NBV3dCO0FBR3hCLGlFQUErRDtBQXFCL0QsSUFBYSxpQkFBaUI7SUFBOUI7SUFBaUMsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBakMsQUFBa0MsSUFBQTtBQUFyQixpQkFBaUI7SUFuQjdCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNSLG1CQUFXO1lBQ2QscUJBQVk7WUFDWiwyQkFBVztZQUNYLDZCQUFhO1lBQ2IsOEJBQWM7WUFDZCxnQ0FBZ0I7WUFDaEIsaUNBQWlCO1lBQ2pCLDRCQUFZO1lBQ1osMEJBQVU7WUFDViw2QkFBYTtZQUNiLDJCQUFXO1lBQ1gsK0JBQWU7U0FDZjtRQUNFLFlBQVksRUFBRSxDQUFDLDRDQUFvQixDQUFDO1FBQ3BDLE9BQU8sRUFBRSxDQUFDLDRDQUFvQixDQUFDO0tBQ2xDLENBQUM7R0FFVyxpQkFBaUIsQ0FBSTtBQUFyQiw4Q0FBaUIiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9icy1jb21wb25lbnQvYnNDb21wb25lbnQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7XG5cdFx0QWxlcnRNb2R1bGUsXG5cdFx0QnV0dG9uc01vZHVsZSxcblx0XHREcm9wZG93bk1vZHVsZSxcblx0XHRQYWdpbmF0aW9uTW9kdWxlLFxuXHRcdFByb2dyZXNzYmFyTW9kdWxlLFxuXHRcdFJhdGluZ01vZHVsZSxcblx0XHRUYWJzTW9kdWxlLFxuXHRcdFRvb2x0aXBNb2R1bGUsXG5cdFx0TW9kYWxNb2R1bGUsXG5cdFx0VHlwZWFoZWFkTW9kdWxlXG5cdH0gZnJvbSAnbmcyLWJvb3RzdHJhcCc7XG5cblxuaW1wb3J0IHsgQlNDb21wb25lbnRDb21wb25lbnQgfSBmcm9tICcuL2JzQ29tcG9uZW50LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgIFx0Rm9ybXNNb2R1bGUsXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEFsZXJ0TW9kdWxlLFxuXHRcdEJ1dHRvbnNNb2R1bGUsXG5cdFx0RHJvcGRvd25Nb2R1bGUsXG5cdFx0UGFnaW5hdGlvbk1vZHVsZSxcblx0XHRQcm9ncmVzc2Jhck1vZHVsZSxcblx0XHRSYXRpbmdNb2R1bGUsXG5cdFx0VGFic01vZHVsZSxcblx0XHRUb29sdGlwTW9kdWxlLFxuXHRcdE1vZGFsTW9kdWxlLFxuXHRcdFR5cGVhaGVhZE1vZHVsZVxuXHRdLFxuICAgIGRlY2xhcmF0aW9uczogW0JTQ29tcG9uZW50Q29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbQlNDb21wb25lbnRDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQlNDb21wb25lbnRNb2R1bGUgeyB9XG4iXX0=
