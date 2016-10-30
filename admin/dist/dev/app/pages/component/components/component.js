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
var NG2Component = (function () {
    function NG2Component() {
        // Button
        this.singleModel = '1';
        this.radioModel = 'Middle';
        this.checkModel = { left: false, middle: true, right: false };
        // Dropdown
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];
        // Pagination
        this.totalItems = 64;
        this.currentPage = 4;
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
        // Alert
        this.alerts = [{
                type: 'danger',
                msg: 'Oh snap! Change a few things up and try submitting again.'
            },
            {
                type: 'success',
                msg: 'Well done! You successfully read this important alert message.',
                closable: true
            }
        ];
        // Progressbar
        this.max = 200;
        this.stacked = [];
        // Rating
        this.x = 5;
        this.y = 2;
        this.maxRating = 10;
        this.rate = 7;
        this.isReadonly = false;
        this.ratingStates = [
            { stateOn: 'fa fa-check', stateOff: 'fa fa-check-circle' },
            { stateOn: 'fa fa-star', stateOff: 'fa fa-star-o' },
            { stateOn: 'fa fa-heart', stateOff: 'fa fa-ban' },
            { stateOn: 'fa fa-heart' },
            { stateOff: 'fa fa-power-off' }
        ];
        // Tabs
        this.tabs = [
            { title: 'Title 1', content: 'Dynamic content 1' },
            { title: 'Title 2', content: 'Dynamic content 2', disabled: true },
            { title: 'Title 3', content: 'Dynamic content 3', removable: true }
        ];
        // Typehead
        this.selected = '';
        this.asyncSelected = '';
        this.typeaheadLoading = false;
        this.typeaheadNoResults = false;
        this.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',
            'California', 'Colorado',
            'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
            'Illinois', 'Indiana', 'Iowa',
            'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
            'Michigan', 'Minnesota',
            'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
            'New Jersey', 'New Mexico',
            'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon',
            'Pennsylvania', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington',
            'West Virginia', 'Wisconsin', 'Wyoming'];
        this.statesComplex = [
            { id: 1, name: 'Alabama' }, { id: 2, name: 'Alaska' }, { id: 3, name: 'Arizona' },
            { id: 4, name: 'Arkansas' }, { id: 5, name: 'California' },
            { id: 6, name: 'Colorado' }, { id: 7, name: 'Connecticut' },
            { id: 8, name: 'Delaware' }, { id: 9, name: 'Florida' },
            { id: 10, name: 'Georgia' }, { id: 11, name: 'Hawaii' },
            { id: 12, name: 'Idaho' }, { id: 13, name: 'Illinois' },
            { id: 14, name: 'Indiana' }, { id: 15, name: 'Iowa' },
            { id: 16, name: 'Kansas' }, { id: 17, name: 'Kentucky' },
            { id: 18, name: 'Louisiana' }, { id: 19, name: 'Maine' },
            { id: 21, name: 'Maryland' }, { id: 22, name: 'Massachusetts' },
            { id: 23, name: 'Michigan' }, { id: 24, name: 'Minnesota' },
            { id: 25, name: 'Mississippi' }, { id: 26, name: 'Missouri' },
            { id: 27, name: 'Montana' }, { id: 28, name: 'Nebraska' },
            { id: 29, name: 'Nevada' }, { id: 30, name: 'New Hampshire' },
            { id: 31, name: 'New Jersey' }, { id: 32, name: 'New Mexico' },
            { id: 33, name: 'New York' }, { id: 34, name: 'North Dakota' },
            { id: 35, name: 'North Carolina' }, { id: 36, name: 'Ohio' },
            { id: 37, name: 'Oklahoma' }, { id: 38, name: 'Oregon' },
            { id: 39, name: 'Pennsylvania' }, { id: 40, name: 'Rhode Island' },
            { id: 41, name: 'South Carolina' }, { id: 42, name: 'South Dakota' },
            { id: 43, name: 'Tennessee' }, { id: 44, name: 'Texas' },
            { id: 45, name: 'Utah' }, { id: 46, name: 'Vermont' },
            { id: 47, name: 'Virginia' }, { id: 48, name: 'Washington' },
            { id: 49, name: 'West Virginia' }, { id: 50, name: 'Wisconsin' },
            { id: 51, name: 'Wyoming' }
        ];
        this.random();
        this.randomStacked();
    }
    // Alert
    NG2Component.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    NG2Component.prototype.addAlert = function () {
        this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
    };
    // Dropdown
    NG2Component.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    NG2Component.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    // Pagination
    NG2Component.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    ;
    NG2Component.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    ;
    // Progressbar
    NG2Component.prototype.random = function () {
        var value = Math.floor((Math.random() * 100) + 1);
        var type;
        if (value < 25) {
            type = 'success';
        }
        else if (value < 50) {
            type = 'info';
        }
        else if (value < 75) {
            type = 'warning';
        }
        else {
            type = 'danger';
        }
        this.showWarning = (type === 'danger' || type === 'warning');
        this.dynamic = value;
        this.type = type;
    };
    ;
    NG2Component.prototype.randomStacked = function () {
        var types = ['success', 'info', 'warning', 'danger'];
        this.stacked = [];
        var total = 0;
        var n = Math.floor((Math.random() * 4) + 1);
        for (var i = 0; i < n; i++) {
            var index = Math.floor((Math.random() * 4));
            var value = Math.floor((Math.random() * 30) + 1);
            total += value;
            this.stacked.push({
                value: value,
                max: value,
                type: types[index]
            });
        }
    };
    ;
    // Rating
    NG2Component.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };
    ;
    NG2Component.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    // Tabs
    NG2Component.prototype.alertMe = function () {
        setTimeout(function () {
            alert('You\'ve selected the alert tab!');
        });
    };
    ;
    NG2Component.prototype.setActiveTab = function (index) {
        this.tabs[index].active = true;
    };
    ;
    NG2Component.prototype.removeTabHandler = function () {
        console.log('Remove Tab handler');
    };
    ;
    // Typehead
    NG2Component.prototype.getContext = function () {
        return this;
    };
    NG2Component.prototype.getAsyncData = function (context) {
        if (this._prevContext === context) {
            return this._cache;
        }
        this._prevContext = context;
        var f = function () {
            var p = new Promise(function (resolve) {
                setTimeout(function () {
                    var query = new RegExp(context.asyncSelected, 'ig');
                    return resolve(context.states.filter(function (state) {
                        return query.test(state);
                    }));
                }, 200);
            });
            return p;
        };
        this._cache = f;
        return this._cache;
    };
    NG2Component.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    NG2Component.prototype.changeTypeaheadNoResults = function (e) {
        this.typeaheadNoResults = e;
    };
    NG2Component.prototype.typeaheadOnSelect = function (e) {
        console.log("Selected value: " + e.item);
    };
    return NG2Component;
}());
NG2Component = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'component-cmp',
        templateUrl: 'component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        styles: ["\n\t\t.tooltip.customClass .tooltip-inner {\n\t\t\tcolor: #880001;\n\t\t\tbackground-color: #ffff66;\n\t\t\tbox-shadow: 0 6px 12px rgba(0,0,0,.175);\n\t\t}\n\t\t.tooltip.customClass .tooltip-arrow {\n\t\t\tdisplay: none;\n\t\t}\n\t"]
    }),
    __metadata("design:paramtypes", [])
], NG2Component);
exports.NG2Component = NG2Component;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wYWdlcy9jb21wb25lbnQvY29tcG9uZW50cy9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFtRTtBQXNCbkU7SUE2R0M7UUE1R0EsU0FBUztRQUNGLGdCQUFXLEdBQVUsR0FBRyxDQUFDO1FBQ3pCLGVBQVUsR0FBVSxRQUFRLENBQUM7UUFDN0IsZUFBVSxHQUFPLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUVsRSxXQUFXO1FBQ0osYUFBUSxHQUFXLEtBQUssQ0FBQztRQUN6QixXQUFNLEdBQW9CLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQzFDLFVBQUssR0FBa0IsQ0FBQyxtQkFBbUIsRUFBRSw2QkFBNkIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBRXpHLGFBQWE7UUFDTixlQUFVLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQVUsQ0FBQyxDQUFDO1FBRXZCLFlBQU8sR0FBVSxDQUFDLENBQUM7UUFDbkIsa0JBQWEsR0FBVSxHQUFHLENBQUM7UUFDM0IsbUJBQWMsR0FBVSxDQUFDLENBQUM7UUFFakMsUUFBUTtRQUNELFdBQU0sR0FBa0IsQ0FBQztnQkFDL0IsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsR0FBRyxFQUFFLDJEQUEyRDthQUMvRDtZQUNEO2dCQUNDLElBQUksRUFBRSxTQUFTO2dCQUNmLEdBQUcsRUFBRSxnRUFBZ0U7Z0JBQ3JFLFFBQVEsRUFBRSxJQUFJO2FBQ2Q7U0FDRCxDQUFDO1FBQ0YsY0FBYztRQUNQLFFBQUcsR0FBVSxHQUFHLENBQUM7UUFJakIsWUFBTyxHQUFTLEVBQUUsQ0FBQztRQUUxQixTQUFTO1FBQ0YsTUFBQyxHQUFVLENBQUMsQ0FBQztRQUNiLE1BQUMsR0FBVSxDQUFDLENBQUM7UUFDYixjQUFTLEdBQVUsRUFBRSxDQUFDO1FBQ3RCLFNBQUksR0FBVSxDQUFDLENBQUM7UUFDaEIsZUFBVSxHQUFXLEtBQUssQ0FBQztRQUszQixpQkFBWSxHQUFPO1lBQ3pCLEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUM7WUFDeEQsRUFBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUM7WUFDakQsRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUM7WUFDL0MsRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFFO1lBQ3pCLEVBQUMsUUFBUSxFQUFFLGlCQUFpQixFQUFDO1NBQzdCLENBQUM7UUFFRixPQUFPO1FBQ0EsU0FBSSxHQUFjO1lBQ3JCLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUM7WUFDaEQsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO1lBQ2hFLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBQztTQUNwRSxDQUFDO1FBQ0YsV0FBVztRQUNKLGFBQVEsR0FBVSxFQUFFLENBQUM7UUFDckIsa0JBQWEsR0FBVSxFQUFFLENBQUM7UUFDMUIscUJBQWdCLEdBQVcsS0FBSyxDQUFDO1FBQ2pDLHVCQUFrQixHQUFXLEtBQUssQ0FBQztRQUNuQyxXQUFNLEdBQWlCLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVTtZQUN6RSxZQUFZLEVBQUUsVUFBVTtZQUN4QixhQUFhLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU87WUFDbEUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNO1lBQzdCLFFBQVEsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZTtZQUN2RSxVQUFVLEVBQUUsV0FBVztZQUN2QixhQUFhLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGVBQWU7WUFDM0UsWUFBWSxFQUFFLFlBQVk7WUFDMUIsVUFBVSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVE7WUFDMUUsY0FBYyxFQUFFLGNBQWM7WUFDOUIsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVM7WUFDekUsVUFBVSxFQUFFLFlBQVk7WUFDeEIsZUFBZSxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsQyxrQkFBYSxHQUFjO1lBQ2xDLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUMzRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDO1lBQ3RELEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUM7WUFDdkQsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUNuRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ25ELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDbkQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQztZQUNqRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1lBQ3BELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7WUFDcEQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBQztZQUMzRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO1lBQ3ZELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDekQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUNyRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFDO1lBQ3pELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUs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QU0sQ0FBQztJQUNwQixDQUFDO0lBRU0sNkNBQXNCLEdBQTdCLFVBQThCLENBQVM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU0sK0NBQXdCLEdBQS9CLFVBQWdDLENBQVM7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0sd0NBQWlCLEdBQXhCLFVBQXlCLENBQUs7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBbUIsQ0FBQyxDQUFDLElBQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRixtQkFBQztBQUFELENBL09BLEFBK09DLElBQUE7QUEvT0Q7SUFoQkMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsZUFBZTtRQUN6QixXQUFXLEVBQUUsZ0JBQWdCO1FBQ2hDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLE1BQU0sRUFBRSxDQUFDLHlPQVNSLENBQUM7S0FDRixDQUFDOztnQkFnUEQ7QUEvT1ksdUJBQUEsWUFBWSxDQUFBIiwiZmlsZSI6ImFwcC9wYWdlcy9jb21wb25lbnQvY29tcG9uZW50cy9jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbGVydE1vZHVsZSwgQnV0dG9uc01vZHVsZSwgRHJvcGRvd25Nb2R1bGUsIFBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJNb2R1bGUsIFJhdGluZ0NvbXBvbmVudCwgVGFic01vZHVsZX0gZnJvbSAnbmcyLWJvb3RzdHJhcC9uZzItYm9vdHN0cmFwJztcbmltcG9ydCB7VG9vbHRpcE1vZHVsZSwgVHlwZWFoZWFkTW9kdWxlfSBmcm9tICduZzItYm9vdHN0cmFwL25nMi1ib290c3RyYXAnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnY29tcG9uZW50LWNtcCcsXG4gICAgdGVtcGxhdGVVcmw6ICdjb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRzdHlsZXM6IFtgXG5cdFx0LnRvb2x0aXAuY3VzdG9tQ2xhc3MgLnRvb2x0aXAtaW5uZXIge1xuXHRcdFx0Y29sb3I6ICM4ODAwMDE7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjY2O1xuXHRcdFx0Ym94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xuXHRcdH1cblx0XHQudG9vbHRpcC5jdXN0b21DbGFzcyAudG9vbHRpcC1hcnJvdyB7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdH1cblx0YF1cbn0pXG5leHBvcnQgY2xhc3MgTkcyQ29tcG9uZW50IHtcblx0Ly8gQnV0dG9uXG5cdHB1YmxpYyBzaW5nbGVNb2RlbDpzdHJpbmcgPSAnMSc7XG5cdHB1YmxpYyByYWRpb01vZGVsOnN0cmluZyA9ICdNaWRkbGUnO1xuXHRwdWJsaWMgY2hlY2tNb2RlbDphbnkgPSB7bGVmdDogZmFsc2UsIG1pZGRsZTogdHJ1ZSwgcmlnaHQ6IGZhbHNlfTtcblxuXHQvLyBEcm9wZG93blxuXHRwdWJsaWMgZGlzYWJsZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWMgc3RhdHVzOntpc29wZW46Ym9vbGVhbn0gPSB7aXNvcGVuOiBmYWxzZX07XG5cdHB1YmxpYyBpdGVtczogQXJyYXk8c3RyaW5nPiA9IFsnVGhlIGZpcnN0IGNob2ljZSEnLCAnQW5kIGFub3RoZXIgY2hvaWNlIGZvciB5b3UuJywgJ2J1dCB3YWl0ISBBIHRoaXJkISddO1xuXG5cdC8vIFBhZ2luYXRpb25cblx0cHVibGljIHRvdGFsSXRlbXM6bnVtYmVyID0gNjQ7XG5cdHB1YmxpYyBjdXJyZW50UGFnZTpudW1iZXIgPSA0O1xuXG5cdHB1YmxpYyBtYXhTaXplOm51bWJlciA9IDU7XG5cdHB1YmxpYyBiaWdUb3RhbEl0ZW1zOm51bWJlciA9IDE3NTtcblx0cHVibGljIGJpZ0N1cnJlbnRQYWdlOm51bWJlciA9IDE7XG5cblx0Ly8gQWxlcnRcblx0cHVibGljIGFsZXJ0czogQXJyYXk8T2JqZWN0PiA9IFt7XG5cdFx0dHlwZTogJ2RhbmdlcicsXG5cdFx0bXNnOiAnT2ggc25hcCEgQ2hhbmdlIGEgZmV3IHRoaW5ncyB1cCBhbmQgdHJ5IHN1Ym1pdHRpbmcgYWdhaW4uJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0bXNnOiAnV2VsbCBkb25lISBZb3Ugc3VjY2Vzc2Z1bGx5IHJlYWQgdGhpcyBpbXBvcnRhbnQgYWxlcnQgbWVzc2FnZS4nLFxuXHRcdFx0Y2xvc2FibGU6IHRydWVcblx0XHR9XG5cdF07XG5cdC8vIFByb2dyZXNzYmFyXG5cdHB1YmxpYyBtYXg6bnVtYmVyID0gMjAwO1xuXHRwdWJsaWMgc2hvd1dhcm5pbmc6Ym9vbGVhbjtcblx0cHVibGljIGR5bmFtaWM6bnVtYmVyO1xuXHRwdWJsaWMgdHlwZTpzdHJpbmc7XG5cdHB1YmxpYyBzdGFja2VkOmFueVtdID0gW107XG5cblx0Ly8gUmF0aW5nXG5cdHB1YmxpYyB4Om51bWJlciA9IDU7XG5cdHB1YmxpYyB5Om51bWJlciA9IDI7XG5cdHB1YmxpYyBtYXhSYXRpbmc6bnVtYmVyID0gMTA7XG5cdHB1YmxpYyByYXRlOm51bWJlciA9IDc7XG5cdHB1YmxpYyBpc1JlYWRvbmx5OmJvb2xlYW4gPSBmYWxzZTtcblxuXHRwdWJsaWMgb3ZlclN0YXI6bnVtYmVyO1xuXHRwdWJsaWMgcGVyY2VudDpudW1iZXI7XG5cblx0cHVibGljIHJhdGluZ1N0YXRlczphbnkgPSBbXG5cdFx0e3N0YXRlT246ICdmYSBmYS1jaGVjaycsIHN0YXRlT2ZmOiAnZmEgZmEtY2hlY2stY2lyY2xlJ30sXG5cdFx0e3N0YXRlT246ICdmYSBmYS1zdGFyJywgc3RhdGVPZmY6ICdmYSBmYS1zdGFyLW8nfSxcblx0XHR7c3RhdGVPbjogJ2ZhIGZhLWhlYXJ0Jywgc3RhdGVPZmY6ICdmYSBmYS1iYW4nfSxcblx0XHR7c3RhdGVPbjogJ2ZhIGZhLWhlYXJ0JyB9LFxuXHRcdHtzdGF0ZU9mZjogJ2ZhIGZhLXBvd2VyLW9mZid9XG5cdF07XG5cblx0Ly8gVGFic1xuXHRwdWJsaWMgdGFiczpBcnJheTxhbnk+ID0gW1xuXHQgICAge3RpdGxlOiAnVGl0bGUgMScsIGNvbnRlbnQ6ICdEeW5hbWljIGNvbnRlbnQgMSd9LFxuXHQgICAge3RpdGxlOiAnVGl0bGUgMicsIGNvbnRlbnQ6ICdEeW5hbWljIGNvbnRlbnQgMicsIGRpc2FibGVkOiB0cnVlfSxcblx0ICAgIHt0aXRsZTogJ1RpdGxlIDMnLCBjb250ZW50OiAnRHluYW1pYyBjb250ZW50IDMnLCByZW1vdmFibGU6IHRydWV9XG5cdF07XG5cdC8vIFR5cGVoZWFkXG5cdHB1YmxpYyBzZWxlY3RlZDpzdHJpbmcgPSAnJztcblx0cHVibGljIGFzeW5jU2VsZWN0ZWQ6c3RyaW5nID0gJyc7XG5cdHB1YmxpYyB0eXBlYWhlYWRMb2FkaW5nOmJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljIHR5cGVhaGVhZE5vUmVzdWx0czpib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyBzdGF0ZXM6QXJyYXk8c3RyaW5nPiA9IFsnQWxhYmFtYScsICdBbGFza2EnLCAnQXJpem9uYScsICdBcmthbnNhcycsXG5cdCdDYWxpZm9ybmlhJywgJ0NvbG9yYWRvJyxcblx0J0Nvbm5lY3RpY3V0JywgJ0RlbGF3YXJlJywgJ0Zsb3JpZGEnLCAnR2VvcmdpYScsICdIYXdhaWknLCAnSWRhaG8nLFxuXHQnSWxsaW5vaXMnLCAnSW5kaWFuYScsICdJb3dhJyxcblx0J0thbnNhcycsICdLZW50dWNreScsICdMb3Vpc2lhbmEnLCAnTWFpbmUnLCAnTWFyeWxhbmQnLCAnTWFzc2FjaHVzZXR0cycsXG5cdCdNaWNoaWdhbicsICdNaW5uZXNvdGEnLFxuXHQnTWlzc2lzc2lwcGknLCAnTWlzc291cmknLCAnTW9udGFuYScsICdOZWJyYXNrYScsICdOZXZhZGEnLCAnTmV3IEhhbXBzaGlyZScsXG5cdCdOZXcgSmVyc2V5JywgJ05ldyBNZXhpY28nLFxuXHQnTmV3IFlvcmsnLCAnTm9ydGggRGFrb3RhJywgJ05vcnRoIENhcm9saW5hJywgJ09oaW8nLCAnT2tsYWhvbWEnLCAnT3JlZ29uJyxcblx0J1Blbm5zeWx2YW5pYScsICdSaG9kZSBJc2xhbmQnLFxuXHQnU291dGggQ2Fyb2xpbmEnLCAnU291dGggRGFrb3RhJywgJ1Rlbm5lc3NlZScsICdUZXhhcycsICdVdGFoJywgJ1Zlcm1vbnQnLFxuXHQnVmlyZ2luaWEnLCAnV2FzaGluZ3RvbicsXG5cdCdXZXN0IFZpcmdpbmlhJywgJ1dpc2NvbnNpbicsICdXeW9taW5nJ107XG5cdHB1YmxpYyBzdGF0ZXNDb21wbGV4OkFycmF5PGFueT4gPSBbXG5cdHtpZDogMSwgbmFtZTogJ0FsYWJhbWEnfSwge2lkOiAyLCBuYW1lOiAnQWxhc2thJ30sIHtpZDogMywgbmFtZTogJ0FyaXpvbmEnfSxcblx0e2lkOiA0LCBuYW1lOiAnQXJrYW5zYXMnfSwge2lkOiA1LCBuYW1lOiAnQ2FsaWZvcm5pYSd9LFxuXHR7aWQ6IDYsIG5hbWU6ICdDb2xvcmFkbyd9LCB7aWQ6IDcsIG5hbWU6ICdDb25uZWN0aWN1dCd9LFxuXHR7aWQ6IDgsIG5hbWU6ICdEZWxhd2FyZSd9LCB7aWQ6IDksIG5hbWU6ICdGbG9yaWRhJ30sXG5cdHtpZDogMTAsIG5hbWU6ICdHZW9yZ2lhJ30sIHtpZDogMTEsIG5hbWU6ICdIYXdhaWknfSxcblx0e2lkOiAxMiwgbmFtZTogJ0lkYWhvJ30sIHtpZDogMTMsIG5hbWU6ICdJbGxpbm9pcyd9LFxuXHR7aWQ6IDE0LCBuYW1lOiAnSW5kaWFuYSd9LCB7aWQ6IDE1LCBuYW1lOiAnSW93YSd9LFxuXHR7aWQ6IDE2LCBuYW1lOiAnS2Fuc2FzJ30sIHtpZDogMTcsIG5hbWU6ICdLZW50dWNreSd9LFxuXHR7aWQ6IDE4LCBuYW1lOiAnTG91aXNpYW5hJ30sIHtpZDogMTksIG5hbWU6ICdNYWluZSd9LFxuXHR7aWQ6IDIxLCBuYW1lOiAnTWFyeWxhbmQnfSwge2lkOiAyMiwgbmFtZTogJ01hc3NhY2h1c2V0dHMnfSxcblx0e2lkOiAyMywgbmFtZTogJ01pY2hpZ2FuJ30sIHtpZDogMjQsIG5hbWU6ICdNaW5uZXNvdGEnfSxcblx0e2lkOiAyNSwgbmFtZTogJ01pc3Npc3NpcHBpJ30sIHtpZDogMjYsIG5hbWU6ICdNaXNzb3VyaSd9LFxuXHR7aWQ6IDI3LCBuYW1lOiAnTW9udGFuYSd9LCB7aWQ6IDI4LCBuYW1lOiAnTmVicmFza2EnfSxcblx0e2lkOiAyOSwgbmFtZTogJ05ldmFkYSd9LCB7aWQ6IDMwLCBuYW1lOiAnTmV3IEhhbXBzaGlyZSd9LFxuXHR7aWQ6IDMxLCBuYW1lOiAnTmV3IEplcnNleSd9LCB7aWQ6IDMyLCBuYW1lOiAnTmV3IE1leGljbyd9LFxuXHR7aWQ6IDMzLCBuYW1lOiAnTmV3IFlvcmsnfSwge2lkOiAzNCwgbmFtZTogJ05vcnRoIERha290YSd9LFxuXHR7aWQ6IDM1LCBuYW1lOiAnTm9ydGggQ2Fyb2xpbmEnfSwge2lkOiAzNiwgbmFtZTogJ09oaW8nfSxcblx0e2lkOiAzNywgbmFtZTogJ09rbGFob21hJ30sIHtpZDogMzgsIG5hbWU6ICdPcmVnb24nfSxcblx0e2lkOiAzOSwgbmFtZTogJ1Blbm5zeWx2YW5pYSd9LCB7aWQ6IDQwLCBuYW1lOiAnUmhvZGUgSXNsYW5kJ30sXG5cdHtpZDogNDEsIG5hbWU6ICdTb3V0aCBDYXJvbGluYSd9LCB7aWQ6IDQyLCBuYW1lOiAnU291dGggRGFrb3RhJ30sXG5cdHtpZDogNDMsIG5hbWU6ICdUZW5uZXNzZWUnfSwge2lkOiA0NCwgbmFtZTogJ1RleGFzJ30sXG5cdHtpZDogNDUsIG5hbWU6ICdVdGFoJ30sIHtpZDogNDYsIG5hbWU6ICdWZXJtb250J30sXG5cdHtpZDogNDcsIG5hbWU6ICdWaXJnaW5pYSd9LCB7aWQ6IDQ4LCBuYW1lOiAnV2FzaGluZ3Rvbid9LFxuXHR7aWQ6IDQ5LCBuYW1lOiAnV2VzdCBWaXJnaW5pYSd9LCB7aWQ6IDUwLCBuYW1lOiAnV2lzY29uc2luJ30sXG5cdHtpZDogNTEsIG5hbWU6ICdXeW9taW5nJ31dO1xuXG5cdHByaXZhdGUgX2NhY2hlOmFueTtcblx0cHJpdmF0ZSBfcHJldkNvbnRleHQ6YW55O1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnJhbmRvbSgpO1xuXHRcdHRoaXMucmFuZG9tU3RhY2tlZCgpO1xuXHR9XG5cblx0Ly8gQWxlcnRcblx0cHVibGljIGNsb3NlQWxlcnQoaTpudW1iZXIpOnZvaWQge1xuXHRcdHRoaXMuYWxlcnRzLnNwbGljZShpLCAxKTtcblx0fVxuXHRwdWJsaWMgYWRkQWxlcnQoKTp2b2lkIHtcblx0XHR0aGlzLmFsZXJ0cy5wdXNoKHttc2c6ICdBbm90aGVyIGFsZXJ0IScsIHR5cGU6ICd3YXJuaW5nJywgY2xvc2FibGU6IHRydWV9KTtcblx0fVxuXG5cdC8vIERyb3Bkb3duXG5cdHB1YmxpYyB0b2dnbGVkKG9wZW46Ym9vbGVhbik6dm9pZCB7XG5cdFx0Y29uc29sZS5sb2coJ0Ryb3Bkb3duIGlzIG5vdzogJywgb3Blbik7XG5cdH1cblxuXHRwdWJsaWMgdG9nZ2xlRHJvcGRvd24oJGV2ZW50Ok1vdXNlRXZlbnQpOnZvaWQge1xuXHRcdCRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdCRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnN0YXR1cy5pc29wZW4gPSAhdGhpcy5zdGF0dXMuaXNvcGVuO1xuXHR9XG5cblx0Ly8gUGFnaW5hdGlvblxuXHRwdWJsaWMgc2V0UGFnZShwYWdlTm86bnVtYmVyKTp2b2lkIHtcblx0XHR0aGlzLmN1cnJlbnRQYWdlID0gcGFnZU5vO1xuXHR9O1xuXG5cdHB1YmxpYyBwYWdlQ2hhbmdlZChldmVudDphbnkpOnZvaWQge1xuXHRcdGNvbnNvbGUubG9nKCdQYWdlIGNoYW5nZWQgdG86ICcgKyBldmVudC5wYWdlKTtcblx0XHRjb25zb2xlLmxvZygnTnVtYmVyIGl0ZW1zIHBlciBwYWdlOiAnICsgZXZlbnQuaXRlbXNQZXJQYWdlKTtcblx0fTtcblx0Ly8gUHJvZ3Jlc3NiYXJcblx0cHVibGljIHJhbmRvbSgpOnZvaWQge1xuXHRcdGxldCB2YWx1ZSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMSk7XG5cdFx0bGV0IHR5cGU6c3RyaW5nO1xuXG5cdFx0aWYgKHZhbHVlIDwgMjUpIHtcblx0XHRcdHR5cGUgPSAnc3VjY2Vzcyc7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDUwKSB7XG5cdFx0XHR0eXBlID0gJ2luZm8nO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCA3NSkge1xuXHRcdFx0dHlwZSA9ICd3YXJuaW5nJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dHlwZSA9ICdkYW5nZXInO1xuXHRcdH1cblxuXHRcdHRoaXMuc2hvd1dhcm5pbmcgPSAodHlwZSA9PT0gJ2RhbmdlcicgfHwgdHlwZSA9PT0gJ3dhcm5pbmcnKTtcblx0XHR0aGlzLmR5bmFtaWMgPSB2YWx1ZTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHR9O1xuXG5cdHB1YmxpYyByYW5kb21TdGFja2VkKCk6dm9pZCB7XG5cdFx0bGV0IHR5cGVzID0gWydzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdkYW5nZXInXTtcblxuXHRcdHRoaXMuc3RhY2tlZCA9IFtdO1xuXHRcdGxldCB0b3RhbCA9IDA7XG5cdFx0bGV0IG4gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNCkgKyAxKTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuXHRcdFx0bGV0IGluZGV4ID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpKTtcblx0XHRcdGxldCB2YWx1ZSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAzMCkgKyAxKTtcblx0XHRcdHRvdGFsICs9IHZhbHVlO1xuXHRcdFx0dGhpcy5zdGFja2VkLnB1c2goe1xuXHRcdFx0XHR2YWx1ZTogdmFsdWUsXG5cdCAgICAgICAgbWF4OiB2YWx1ZSwgLy8gaSAhPT0gKG4gLSAxKSA/IHZhbHVlIDogMTAwLFxuXHQgICAgICAgIHR5cGU6IHR5cGVzW2luZGV4XVxuXHQgICAgfSk7XG5cdFx0fVxuXHR9O1xuXHQvLyBSYXRpbmdcblx0cHVibGljIGhvdmVyaW5nT3Zlcih2YWx1ZTpudW1iZXIpOnZvaWQge1xuXHRcdHRoaXMub3ZlclN0YXIgPSB2YWx1ZTtcblx0XHR0aGlzLnBlcmNlbnQgPSAxMDAgKiAodmFsdWUgLyB0aGlzLm1heCk7XG5cdH07XG5cblx0cHVibGljIHJlc2V0U3RhcigpOnZvaWQge1xuXHRcdHRoaXMub3ZlclN0YXIgPSB2b2lkIDA7XG5cdH1cblx0Ly8gVGFic1xuXHRwdWJsaWMgYWxlcnRNZSgpOnZvaWQge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCk6dm9pZCB7XG5cdFx0XHRhbGVydCgnWW91XFwndmUgc2VsZWN0ZWQgdGhlIGFsZXJ0IHRhYiEnKTtcblx0XHR9KTtcblx0fTtcblxuXHRwdWJsaWMgc2V0QWN0aXZlVGFiKGluZGV4Om51bWJlcik6dm9pZCB7XG5cdFx0dGhpcy50YWJzW2luZGV4XS5hY3RpdmUgPSB0cnVlO1xuXHR9O1xuXG5cdHB1YmxpYyByZW1vdmVUYWJIYW5kbGVyKC8qdGFiOmFueSovKTp2b2lkIHtcblx0XHRjb25zb2xlLmxvZygnUmVtb3ZlIFRhYiBoYW5kbGVyJyk7XG5cdH07XG5cdC8vIFR5cGVoZWFkXG5cdHB1YmxpYyBnZXRDb250ZXh0KCk6YW55IHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHB1YmxpYyBnZXRBc3luY0RhdGEoY29udGV4dDphbnkpOkZ1bmN0aW9uIHtcblx0XHRpZiAodGhpcy5fcHJldkNvbnRleHQgPT09IGNvbnRleHQpIHtcblx0XHRcdHJldHVybiB0aGlzLl9jYWNoZTtcblx0XHR9XG5cblx0XHR0aGlzLl9wcmV2Q29udGV4dCA9IGNvbnRleHQ7XG5cdFx0bGV0IGY6RnVuY3Rpb24gPSBmdW5jdGlvbiAoKTpQcm9taXNlPHN0cmluZ1tdPiB7XG5cdFx0XHRsZXQgcDpQcm9taXNlPHN0cmluZ1tdPiA9IG5ldyBQcm9taXNlKChyZXNvbHZlOkZ1bmN0aW9uKSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBxdWVyeSA9IG5ldyBSZWdFeHAoY29udGV4dC5hc3luY1NlbGVjdGVkLCAnaWcnKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShjb250ZXh0LnN0YXRlcy5maWx0ZXIoKHN0YXRlOmFueSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHF1ZXJ5LnRlc3Qoc3RhdGUpO1xuXHRcdFx0XHRcdH0pKTtcblx0XHRcdFx0fSwgMjAwKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0XHR0aGlzLl9jYWNoZSA9IGY7XG5cdFx0cmV0dXJuIHRoaXMuX2NhY2hlO1xuXHR9XG5cblx0cHVibGljIGNoYW5nZVR5cGVhaGVhZExvYWRpbmcoZTpib29sZWFuKTp2b2lkIHtcblx0XHR0aGlzLnR5cGVhaGVhZExvYWRpbmcgPSBlO1xuXHR9XG5cblx0cHVibGljIGNoYW5nZVR5cGVhaGVhZE5vUmVzdWx0cyhlOmJvb2xlYW4pOnZvaWQge1xuXHRcdHRoaXMudHlwZWFoZWFkTm9SZXN1bHRzID0gZTtcblx0fVxuXG5cdHB1YmxpYyB0eXBlYWhlYWRPblNlbGVjdChlOmFueSk6dm9pZCB7XG5cdFx0Y29uc29sZS5sb2coYFNlbGVjdGVkIHZhbHVlOiAke2UuaXRlbX1gKTtcblx0fVxufVxuIl19
