"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var bsComponent_component_1 = require("./bsComponent.component");
var BSComponentModule = (function () {
    function BSComponentModule() {
    }
    return BSComponentModule;
}());
BSComponentModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYnMtY29tcG9uZW50L2JzQ29tcG9uZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQywwQ0FBK0M7QUFDL0Msd0NBQTZDO0FBRTdDLDZEQVdzQztBQUd0QyxpRUFBK0Q7QUFzQi9ELElBQWEsaUJBQWlCO0lBQTlCO0lBQWlDLENBQUM7SUFBRCx3QkFBQztBQUFELENBQWpDLEFBQWtDLElBQUE7QUFBckIsaUJBQWlCO0lBcEI3QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDUixxQkFBWTtZQUNaLG1CQUFXO1lBQ2QscUJBQVk7WUFDWiwyQkFBVztZQUNYLDZCQUFhO1lBQ2IsOEJBQWM7WUFDZCxnQ0FBZ0I7WUFDaEIsaUNBQWlCO1lBQ2pCLDRCQUFZO1lBQ1osMEJBQVU7WUFDViw2QkFBYTtZQUNiLDJCQUFXO1lBQ1gsK0JBQWU7U0FDZjtRQUNFLFlBQVksRUFBRSxDQUFDLDRDQUFvQixDQUFDO1FBQ3BDLE9BQU8sRUFBRSxDQUFDLDRDQUFvQixDQUFDO0tBQ2xDLENBQUM7R0FFVyxpQkFBaUIsQ0FBSTtBQUFyQiw4Q0FBaUIiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9icy1jb21wb25lbnQvYnNDb21wb25lbnQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7XG5cdFx0QWxlcnRNb2R1bGUsXG5cdFx0QnV0dG9uc01vZHVsZSxcblx0XHREcm9wZG93bk1vZHVsZSxcblx0XHRQYWdpbmF0aW9uTW9kdWxlLFxuXHRcdFByb2dyZXNzYmFyTW9kdWxlLFxuXHRcdFJhdGluZ01vZHVsZSxcblx0XHRUYWJzTW9kdWxlLFxuXHRcdFRvb2x0aXBNb2R1bGUsXG5cdFx0TW9kYWxNb2R1bGUsXG5cdFx0VHlwZWFoZWFkTW9kdWxlXG5cdH0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcblxuXG5pbXBvcnQgeyBCU0NvbXBvbmVudENvbXBvbmVudCB9IGZyb20gJy4vYnNDb21wb25lbnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgXHRSb3V0ZXJNb2R1bGUsXG4gICAgXHRGb3Jtc01vZHVsZSxcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0QWxlcnRNb2R1bGUsXG5cdFx0QnV0dG9uc01vZHVsZSxcblx0XHREcm9wZG93bk1vZHVsZSxcblx0XHRQYWdpbmF0aW9uTW9kdWxlLFxuXHRcdFByb2dyZXNzYmFyTW9kdWxlLFxuXHRcdFJhdGluZ01vZHVsZSxcblx0XHRUYWJzTW9kdWxlLFxuXHRcdFRvb2x0aXBNb2R1bGUsXG5cdFx0TW9kYWxNb2R1bGUsXG5cdFx0VHlwZWFoZWFkTW9kdWxlXG5cdF0sXG4gICAgZGVjbGFyYXRpb25zOiBbQlNDb21wb25lbnRDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtCU0NvbXBvbmVudENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBCU0NvbXBvbmVudE1vZHVsZSB7IH1cbiJdfQ==
