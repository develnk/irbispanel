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
    }),
    __metadata("design:paramtypes", [])
], BSComponentModule);
exports.BSComponentModule = BSComponentModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYnMtY29tcG9uZW50L2JzQ29tcG9uZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQywwQ0FBK0M7QUFDL0Msd0NBQTZDO0FBRTdDLDZEQVdzQztBQUd0QyxpRUFBK0Q7QUFzQi9ELElBQWEsaUJBQWlCO0lBQTlCO0lBQWlDLENBQUM7SUFBRCx3QkFBQztBQUFELENBQWpDLEFBQWtDLElBQUE7QUFBckIsaUJBQWlCO0lBcEI3QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDUixxQkFBWTtZQUNaLG1CQUFXO1lBQ2QscUJBQVk7WUFDWiwyQkFBVztZQUNYLDZCQUFhO1lBQ2IsOEJBQWM7WUFDZCxnQ0FBZ0I7WUFDaEIsaUNBQWlCO1lBQ2pCLDRCQUFZO1lBQ1osMEJBQVU7WUFDViw2QkFBYTtZQUNiLDJCQUFXO1lBQ1gsK0JBQWU7U0FDZjtRQUNFLFlBQVksRUFBRSxDQUFDLDRDQUFvQixDQUFDO1FBQ3BDLE9BQU8sRUFBRSxDQUFDLDRDQUFvQixDQUFDO0tBQ2xDLENBQUM7O0dBRVcsaUJBQWlCLENBQUk7QUFBckIsOENBQWlCIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvYnMtY29tcG9uZW50L2JzQ29tcG9uZW50Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1xuXHRcdEFsZXJ0TW9kdWxlLFxuXHRcdEJ1dHRvbnNNb2R1bGUsXG5cdFx0RHJvcGRvd25Nb2R1bGUsXG5cdFx0UGFnaW5hdGlvbk1vZHVsZSxcblx0XHRQcm9ncmVzc2Jhck1vZHVsZSxcblx0XHRSYXRpbmdNb2R1bGUsXG5cdFx0VGFic01vZHVsZSxcblx0XHRUb29sdGlwTW9kdWxlLFxuXHRcdE1vZGFsTW9kdWxlLFxuXHRcdFR5cGVhaGVhZE1vZHVsZVxuXHR9IGZyb20gJ25nMi1ib290c3RyYXAvbmcyLWJvb3RzdHJhcCc7XG5cblxuaW1wb3J0IHsgQlNDb21wb25lbnRDb21wb25lbnQgfSBmcm9tICcuL2JzQ29tcG9uZW50LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgIFx0Um91dGVyTW9kdWxlLFxuICAgIFx0Rm9ybXNNb2R1bGUsXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRcdEFsZXJ0TW9kdWxlLFxuXHRcdEJ1dHRvbnNNb2R1bGUsXG5cdFx0RHJvcGRvd25Nb2R1bGUsXG5cdFx0UGFnaW5hdGlvbk1vZHVsZSxcblx0XHRQcm9ncmVzc2Jhck1vZHVsZSxcblx0XHRSYXRpbmdNb2R1bGUsXG5cdFx0VGFic01vZHVsZSxcblx0XHRUb29sdGlwTW9kdWxlLFxuXHRcdE1vZGFsTW9kdWxlLFxuXHRcdFR5cGVhaGVhZE1vZHVsZVxuXHRdLFxuICAgIGRlY2xhcmF0aW9uczogW0JTQ29tcG9uZW50Q29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbQlNDb21wb25lbnRDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgQlNDb21wb25lbnRNb2R1bGUgeyB9XG4iXX0=
