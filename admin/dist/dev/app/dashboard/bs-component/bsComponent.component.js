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
var ng2_bootstrap_1 = require("ng2-bootstrap");
var BSComponentComponent = (function () {
    function BSComponentComponent() {
        this.singleModel = '1';
        this.radioModel = 'Middle';
        this.checkModel = { left: false, middle: true, right: false };
        this.disabled = false;
        this.status = { isopen: false };
        this.items = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];
        this.totalItems = 64;
        this.currentPage = 4;
        this.maxSize = 5;
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
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
        this.max = 200;
        this.stacked = [];
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
        this.tabs = [
            { title: 'Title 1', content: 'Dynamic content 1' },
            { title: 'Title 2', content: 'Dynamic content 2', disabled: true },
            { title: 'Title 3', content: 'Dynamic content 3', removable: true }
        ];
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
    BSComponentComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    BSComponentComponent.prototype.addAlert = function () {
        this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
    };
    BSComponentComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    BSComponentComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    BSComponentComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    ;
    BSComponentComponent.prototype.pageChanged = function (event) {
        console.log('Page changed to: ' + event.page);
        console.log('Number items per page: ' + event.itemsPerPage);
    };
    ;
    BSComponentComponent.prototype.random = function () {
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
    BSComponentComponent.prototype.randomStacked = function () {
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
    BSComponentComponent.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };
    ;
    BSComponentComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    BSComponentComponent.prototype.alertMe = function () {
        setTimeout(function () {
            alert('You\'ve selected the alert tab!');
        });
    };
    ;
    BSComponentComponent.prototype.setActiveTab = function (index) {
        this.tabs[index].active = true;
    };
    ;
    BSComponentComponent.prototype.removeTabHandler = function () {
        console.log('Remove Tab handler');
    };
    ;
    BSComponentComponent.prototype.getContext = function () {
        return this;
    };
    BSComponentComponent.prototype.getAsyncData = function (context) {
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
    BSComponentComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    BSComponentComponent.prototype.changeTypeaheadNoResults = function (e) {
        this.typeaheadNoResults = e;
    };
    BSComponentComponent.prototype.typeaheadOnSelect = function (e) {
        console.log("Selected value: " + e.item);
    };
    return BSComponentComponent;
}());
__decorate([
    core_1.ViewChild('childModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], BSComponentComponent.prototype, "childModal", void 0);
BSComponentComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bs-component',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        templateUrl: './bs-component.component.html',
        styles: ["\n    \t.tooltip.customClass .tooltip-inner {\n    \t\tcolor: #880000;\n    \t\tbackground-color: #ffff66;\n    \t\tbox-shadow: 0 6px 12px rgba(0,0,0,.175);\n    \t}\n    \t.tooltip.customClass .tooltip-arrow {\n    \t\tdisplay: none;\n    \t}\n    "]
    }),
    __metadata("design:paramtypes", [])
], BSComponentComponent);
exports.BSComponentComponent = BSComponentComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYnMtY29tcG9uZW50L2JzQ29tcG9uZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQThFO0FBQzlFLCtDQUErQztBQW1CL0MsSUFBYSxvQkFBb0I7SUFrSGhDO1FBN0dPLGdCQUFXLEdBQVUsR0FBRyxDQUFDO1FBQ3pCLGVBQVUsR0FBVSxRQUFRLENBQUM7UUFDN0IsZUFBVSxHQUFPLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUczRCxhQUFRLEdBQVcsS0FBSyxDQUFDO1FBQ3pCLFdBQU0sR0FBb0IsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDMUMsVUFBSyxHQUFrQixDQUFDLG1CQUFtQixFQUFFLDZCQUE2QixFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFHbEcsZUFBVSxHQUFVLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFVLENBQUMsQ0FBQztRQUV2QixZQUFPLEdBQVUsQ0FBQyxDQUFDO1FBQ25CLGtCQUFhLEdBQVUsR0FBRyxDQUFDO1FBQzNCLG1CQUFjLEdBQVUsQ0FBQyxDQUFDO1FBRzFCLFdBQU0sR0FBa0IsQ0FBQztnQkFDL0IsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsR0FBRyxFQUFFLDJEQUEyRDthQUMvRDtZQUNEO2dCQUNDLElBQUksRUFBRSxTQUFTO2dCQUNmLEdBQUcsRUFBRSxnRUFBZ0U7Z0JBQ3JFLFFBQVEsRUFBRSxJQUFJO2FBQ2Q7U0FDRCxDQUFDO1FBR0ssUUFBRyxHQUFVLEdBQUcsQ0FBQztRQUlqQixZQUFPLEdBQVMsRUFBRSxDQUFDO1FBR25CLE1BQUMsR0FBVSxDQUFDLENBQUM7UUFDYixNQUFDLEdBQVUsQ0FBQyxDQUFDO1FBQ2IsY0FBUyxHQUFVLEVBQUUsQ0FBQztRQUN0QixTQUFJLEdBQVUsQ0FBQyxDQUFDO1FBQ2hCLGVBQVUsR0FBVyxLQUFLLENBQUM7UUFLM0IsaUJBQVksR0FBTztZQUN6QixFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFDO1lBQ3hELEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFDO1lBQ2pELEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDO1lBQy9DLEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRTtZQUN6QixFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBQztTQUM3QixDQUFDO1FBR0ssU0FBSSxHQUFjO1lBQ3JCLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUM7WUFDaEQsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO1lBQ2hFLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBQztTQUNwRSxDQUFDO1FBR0ssYUFBUSxHQUFVLEVBQUUsQ0FBQztRQUNyQixrQkFBYSxHQUFVLEVBQUUsQ0FBQztRQUMxQixxQkFBZ0IsR0FBVyxLQUFLLENBQUM7UUFDakMsdUJBQWtCLEdBQVcsS0FBSyxDQUFDO1FBQ25DLFdBQU0sR0FBaUIsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxVQUFVO1lBQ3pFLFlBQVksRUFBRSxVQUFVO1lBQ3hCLGFBQWEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTztZQUNsRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU07WUFDN0IsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlO1lBQ3ZFLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLGFBQWEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsZUFBZTtZQUMzRSxZQUFZLEVBQUUsWUFBWTtZQUMxQixVQUFVLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUTtZQUMxRSxjQUFjLEVBQUUsY0FBYztZQUM5QixnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUztZQUN6RSxVQUFVLEVBQUUsWUFBWTtZQUN4QixlQUFlLEVBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLGtCQUFhLEdBQWM7WUFDbEMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDO1lBQzNFLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7WUFDdEQsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBQztZQUN2RCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDO1lBQ25ELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDbkQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUNuRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDO1lBQ2pELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDcEQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQztZQUNwRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFDO1lBQzNELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDdkQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUN6RCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1lBQ3JELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUM7WUFDekQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQztZQUMxRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDO1lBQzFELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQztZQUN4RCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ3BELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUM7WUFDOUQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDO1lBQ2hFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUM7WUFDcEQsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUNqRCxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDO1lBQ3hELEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUUsRUFB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QUFnQyxDQUFTO1FBQ3hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLGdEQUFpQixHQUF4QixVQUF5QixDQUFLO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLENBQUMsQ0FBQyxJQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQ0YsMkJBQUM7QUFBRCxDQXJQQSxBQXFQQyxJQUFBO0FBblB5QjtJQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQzs4QkFBbUIsOEJBQWM7d0RBQUM7QUFGOUMsb0JBQW9CO0lBakJoQyxnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ2hCLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLFdBQVcsRUFBRSwrQkFBK0I7UUFDNUMsTUFBTSxFQUFFLENBQUMsMlBBU1IsQ0FBQztLQUNMLENBQUM7O0dBRVcsb0JBQW9CLENBcVBoQztBQXJQWSxvREFBb0IiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9icy1jb21wb25lbnQvYnNDb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gJ25nMi1ib290c3RyYXAnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2JzLWNvbXBvbmVudCcsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2JzLWNvbXBvbmVudC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVzOiBbYFxuICAgIFx0LnRvb2x0aXAuY3VzdG9tQ2xhc3MgLnRvb2x0aXAtaW5uZXIge1xuICAgIFx0XHRjb2xvcjogIzg4MDAwMDtcbiAgICBcdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmY2NjtcbiAgICBcdFx0Ym94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xuICAgIFx0fVxuICAgIFx0LnRvb2x0aXAuY3VzdG9tQ2xhc3MgLnRvb2x0aXAtYXJyb3cge1xuICAgIFx0XHRkaXNwbGF5OiBub25lO1xuICAgIFx0fVxuICAgIGBdXG59KVxuXG5leHBvcnQgY2xhc3MgQlNDb21wb25lbnRDb21wb25lbnQge1xuXG5cdEBWaWV3Q2hpbGQoJ2NoaWxkTW9kYWwnKSBwdWJsaWMgY2hpbGRNb2RhbDpNb2RhbERpcmVjdGl2ZTtcblxuXHQvLyBCdXR0b25cblx0cHVibGljIHNpbmdsZU1vZGVsOnN0cmluZyA9ICcxJztcblx0cHVibGljIHJhZGlvTW9kZWw6c3RyaW5nID0gJ01pZGRsZSc7XG5cdHB1YmxpYyBjaGVja01vZGVsOmFueSA9IHtsZWZ0OiBmYWxzZSwgbWlkZGxlOiB0cnVlLCByaWdodDogZmFsc2V9O1xuXG5cdC8vIERyb3Bkb3duIFxuXHRwdWJsaWMgZGlzYWJsZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWMgc3RhdHVzOntpc29wZW46Ym9vbGVhbn0gPSB7aXNvcGVuOiBmYWxzZX07XG5cdHB1YmxpYyBpdGVtczogQXJyYXk8c3RyaW5nPiA9IFsnVGhlIGZpcnN0IGNob2ljZSEnLCAnQW5kIGFub3RoZXIgY2hvaWNlIGZvciB5b3UuJywgJ2J1dCB3YWl0ISBBIHRoaXJkISddO1xuXG5cdC8vIFBhZ2luYXRpb25cblx0cHVibGljIHRvdGFsSXRlbXM6bnVtYmVyID0gNjQ7XG5cdHB1YmxpYyBjdXJyZW50UGFnZTpudW1iZXIgPSA0O1xuXG5cdHB1YmxpYyBtYXhTaXplOm51bWJlciA9IDU7XG5cdHB1YmxpYyBiaWdUb3RhbEl0ZW1zOm51bWJlciA9IDE3NTtcblx0cHVibGljIGJpZ0N1cnJlbnRQYWdlOm51bWJlciA9IDE7XG5cblx0Ly8gQWxlcnRcblx0cHVibGljIGFsZXJ0czogQXJyYXk8T2JqZWN0PiA9IFt7XG5cdFx0dHlwZTogJ2RhbmdlcicsXG5cdFx0bXNnOiAnT2ggc25hcCEgQ2hhbmdlIGEgZmV3IHRoaW5ncyB1cCBhbmQgdHJ5IHN1Ym1pdHRpbmcgYWdhaW4uJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dHlwZTogJ3N1Y2Nlc3MnLFxuXHRcdFx0bXNnOiAnV2VsbCBkb25lISBZb3Ugc3VjY2Vzc2Z1bGx5IHJlYWQgdGhpcyBpbXBvcnRhbnQgYWxlcnQgbWVzc2FnZS4nLFxuXHRcdFx0Y2xvc2FibGU6IHRydWVcblx0XHR9XG5cdF07XG5cblx0Ly8gUHJvZ3Jlc3NiYXJcblx0cHVibGljIG1heDpudW1iZXIgPSAyMDA7XG5cdHB1YmxpYyBzaG93V2FybmluZzpib29sZWFuO1xuXHRwdWJsaWMgZHluYW1pYzpudW1iZXI7XG5cdHB1YmxpYyB0eXBlOnN0cmluZztcblx0cHVibGljIHN0YWNrZWQ6YW55W10gPSBbXTtcblxuXHQvLyBSYXRpbmdcblx0cHVibGljIHg6bnVtYmVyID0gNTtcblx0cHVibGljIHk6bnVtYmVyID0gMjtcblx0cHVibGljIG1heFJhdGluZzpudW1iZXIgPSAxMDtcblx0cHVibGljIHJhdGU6bnVtYmVyID0gNztcblx0cHVibGljIGlzUmVhZG9ubHk6Ym9vbGVhbiA9IGZhbHNlO1xuXG5cdHB1YmxpYyBvdmVyU3RhcjpudW1iZXI7XG5cdHB1YmxpYyBwZXJjZW50Om51bWJlcjtcblxuXHRwdWJsaWMgcmF0aW5nU3RhdGVzOmFueSA9IFtcblx0XHR7c3RhdGVPbjogJ2ZhIGZhLWNoZWNrJywgc3RhdGVPZmY6ICdmYSBmYS1jaGVjay1jaXJjbGUnfSxcblx0XHR7c3RhdGVPbjogJ2ZhIGZhLXN0YXInLCBzdGF0ZU9mZjogJ2ZhIGZhLXN0YXItbyd9LFxuXHRcdHtzdGF0ZU9uOiAnZmEgZmEtaGVhcnQnLCBzdGF0ZU9mZjogJ2ZhIGZhLWJhbid9LFxuXHRcdHtzdGF0ZU9uOiAnZmEgZmEtaGVhcnQnIH0sXG5cdFx0e3N0YXRlT2ZmOiAnZmEgZmEtcG93ZXItb2ZmJ31cblx0XTtcblxuXHQvLyBUYWJzXG5cdHB1YmxpYyB0YWJzOkFycmF5PGFueT4gPSBbXG5cdCAgICB7dGl0bGU6ICdUaXRsZSAxJywgY29udGVudDogJ0R5bmFtaWMgY29udGVudCAxJ30sXG5cdCAgICB7dGl0bGU6ICdUaXRsZSAyJywgY29udGVudDogJ0R5bmFtaWMgY29udGVudCAyJywgZGlzYWJsZWQ6IHRydWV9LFxuXHQgICAge3RpdGxlOiAnVGl0bGUgMycsIGNvbnRlbnQ6ICdEeW5hbWljIGNvbnRlbnQgMycsIHJlbW92YWJsZTogdHJ1ZX1cblx0XTtcblxuXHQvLyBUeXBlaGVhZFxuXHRwdWJsaWMgc2VsZWN0ZWQ6c3RyaW5nID0gJyc7XG5cdHB1YmxpYyBhc3luY1NlbGVjdGVkOnN0cmluZyA9ICcnO1xuXHRwdWJsaWMgdHlwZWFoZWFkTG9hZGluZzpib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyB0eXBlYWhlYWROb1Jlc3VsdHM6Ym9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWMgc3RhdGVzOkFycmF5PHN0cmluZz4gPSBbJ0FsYWJhbWEnLCAnQWxhc2thJywgJ0FyaXpvbmEnLCAnQXJrYW5zYXMnLFxuXHQnQ2FsaWZvcm5pYScsICdDb2xvcmFkbycsXG5cdCdDb25uZWN0aWN1dCcsICdEZWxhd2FyZScsICdGbG9yaWRhJywgJ0dlb3JnaWEnLCAnSGF3YWlpJywgJ0lkYWhvJyxcblx0J0lsbGlub2lzJywgJ0luZGlhbmEnLCAnSW93YScsXG5cdCdLYW5zYXMnLCAnS2VudHVja3knLCAnTG91aXNpYW5hJywgJ01haW5lJywgJ01hcnlsYW5kJywgJ01hc3NhY2h1c2V0dHMnLFxuXHQnTWljaGlnYW4nLCAnTWlubmVzb3RhJyxcblx0J01pc3Npc3NpcHBpJywgJ01pc3NvdXJpJywgJ01vbnRhbmEnLCAnTmVicmFza2EnLCAnTmV2YWRhJywgJ05ldyBIYW1wc2hpcmUnLFxuXHQnTmV3IEplcnNleScsICdOZXcgTWV4aWNvJyxcblx0J05ldyBZb3JrJywgJ05vcnRoIERha290YScsICdOb3J0aCBDYXJvbGluYScsICdPaGlvJywgJ09rbGFob21hJywgJ09yZWdvbicsXG5cdCdQZW5uc3lsdmFuaWEnLCAnUmhvZGUgSXNsYW5kJyxcblx0J1NvdXRoIENhcm9saW5hJywgJ1NvdXRoIERha290YScsICdUZW5uZXNzZWUnLCAnVGV4YXMnLCAnVXRhaCcsICdWZXJtb250Jyxcblx0J1ZpcmdpbmlhJywgJ1dhc2hpbmd0b24nLFxuXHQnV2VzdCBWaXJnaW5pYScsICdXaXNjb25zaW4nLCAnV3lvbWluZyddO1xuXHRwdWJsaWMgc3RhdGVzQ29tcGxleDpBcnJheTxhbnk+ID0gW1xuXHR7aWQ6IDEsIG5hbWU6ICdBbGFiYW1hJ30sIHtpZDogMiwgbmFtZTogJ0FsYXNrYSd9LCB7aWQ6IDMsIG5hbWU6ICdBcml6b25hJ30sXG5cdHtpZDogNCwgbmFtZTogJ0Fya2Fuc2FzJ30sIHtpZDogNSwgbmFtZTogJ0NhbGlmb3JuaWEnfSxcblx0e2lkOiA2LCBuYW1lOiAnQ29sb3JhZG8nfSwge2lkOiA3LCBuYW1lOiAnQ29ubmVjdGljdXQnfSxcblx0e2lkOiA4LCBuYW1lOiAnRGVsYXdhcmUnfSwge2lkOiA5LCBuYW1lOiAnRmxvcmlkYSd9LFxuXHR7aWQ6IDEwLCBuYW1lOiAnR2VvcmdpYSd9LCB7aWQ6IDExLCBuYW1lOiAnSGF3YWlpJ30sXG5cdHtpZDogMTIsIG5hbWU6ICdJZGFobyd9LCB7aWQ6IDEzLCBuYW1lOiAnSWxsaW5vaXMnfSxcblx0e2lkOiAxNCwgbmFtZTogJ0luZGlhbmEnfSwge2lkOiAxNSwgbmFtZTogJ0lvd2EnfSxcblx0e2lkOiAxNiwgbmFtZTogJ0thbnNhcyd9LCB7aWQ6IDE3LCBuYW1lOiAnS2VudHVja3knfSxcblx0e2lkOiAxOCwgbmFtZTogJ0xvdWlzaWFuYSd9LCB7aWQ6IDE5LCBuYW1lOiAnTWFpbmUnfSxcblx0e2lkOiAyMSwgbmFtZTogJ01hcnlsYW5kJ30sIHtpZDogMjIsIG5hbWU6ICdNYXNzYWNodXNldHRzJ30sXG5cdHtpZDogMjMsIG5hbWU6ICdNaWNoaWdhbid9LCB7aWQ6IDI0LCBuYW1lOiAnTWlubmVzb3RhJ30sXG5cdHtpZDogMjUsIG5hbWU6ICdNaXNzaXNzaXBwaSd9LCB7aWQ6IDI2LCBuYW1lOiAnTWlzc291cmknfSxcblx0e2lkOiAyNywgbmFtZTogJ01vbnRhbmEnfSwge2lkOiAyOCwgbmFtZTogJ05lYnJhc2thJ30sXG5cdHtpZDogMjksIG5hbWU6ICdOZXZhZGEnfSwge2lkOiAzMCwgbmFtZTogJ05ldyBIYW1wc2hpcmUnfSxcblx0e2lkOiAzMSwgbmFtZTogJ05ldyBKZXJzZXknfSwge2lkOiAzMiwgbmFtZTogJ05ldyBNZXhpY28nfSxcblx0e2lkOiAzMywgbmFtZTogJ05ldyBZb3JrJ30sIHtpZDogMzQsIG5hbWU6ICdOb3J0aCBEYWtvdGEnfSxcblx0e2lkOiAzNSwgbmFtZTogJ05vcnRoIENhcm9saW5hJ30sIHtpZDogMzYsIG5hbWU6ICdPaGlvJ30sXG5cdHtpZDogMzcsIG5hbWU6ICdPa2xhaG9tYSd9LCB7aWQ6IDM4LCBuYW1lOiAnT3JlZ29uJ30sXG5cdHtpZDogMzksIG5hbWU6ICdQZW5uc3lsdmFuaWEnfSwge2lkOiA0MCwgbmFtZTogJ1Job2RlIElzbGFuZCd9LFxuXHR7aWQ6IDQxLCBuYW1lOiAnU291dGggQ2Fyb2xpbmEnfSwge2lkOiA0MiwgbmFtZTogJ1NvdXRoIERha290YSd9LFxuXHR7aWQ6IDQzLCBuYW1lOiAnVGVubmVzc2VlJ30sIHtpZDogNDQsIG5hbWU6ICdUZXhhcyd9LFxuXHR7aWQ6IDQ1LCBuYW1lOiAnVXRhaCd9LCB7aWQ6IDQ2LCBuYW1lOiAnVmVybW9udCd9LFxuXHR7aWQ6IDQ3LCBuYW1lOiAnVmlyZ2luaWEnfSwge2lkOiA0OCwgbmFtZTogJ1dhc2hpbmd0b24nfSxcblx0e2lkOiA0OSwgbmFtZTogJ1dlc3QgVmlyZ2luaWEnfSwge2lkOiA1MCwgbmFtZTogJ1dpc2NvbnNpbid9LFxuXHR7aWQ6IDUxLCBuYW1lOiAnV3lvbWluZyd9XTtcblxuXHRwcml2YXRlIF9jYWNoZTphbnk7XG5cdHByaXZhdGUgX3ByZXZDb250ZXh0OmFueTtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5yYW5kb20oKTtcblx0XHR0aGlzLnJhbmRvbVN0YWNrZWQoKTtcblx0fVxuXG5cdC8vIEFsZXJ0XG5cdHB1YmxpYyBjbG9zZUFsZXJ0KGk6bnVtYmVyKTp2b2lkIHtcblx0XHR0aGlzLmFsZXJ0cy5zcGxpY2UoaSwgMSk7XG5cdH1cblx0cHVibGljIGFkZEFsZXJ0KCk6dm9pZCB7XG5cdFx0dGhpcy5hbGVydHMucHVzaCh7bXNnOiAnQW5vdGhlciBhbGVydCEnLCB0eXBlOiAnd2FybmluZycsIGNsb3NhYmxlOiB0cnVlfSk7XG5cdH1cblxuXHQvLyBEcm9wZG93blxuXHRwdWJsaWMgdG9nZ2xlZChvcGVuOmJvb2xlYW4pOnZvaWQge1xuXHRcdGNvbnNvbGUubG9nKCdEcm9wZG93biBpcyBub3c6ICcsIG9wZW4pO1xuXHR9XG5cblx0cHVibGljIHRvZ2dsZURyb3Bkb3duKCRldmVudDpNb3VzZUV2ZW50KTp2b2lkIHtcblx0XHQkZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5zdGF0dXMuaXNvcGVuID0gIXRoaXMuc3RhdHVzLmlzb3Blbjtcblx0fVxuXG5cdC8vIFBhZ2luYXRpb25cblx0cHVibGljIHNldFBhZ2UocGFnZU5vOm51bWJlcik6dm9pZCB7XG5cdFx0dGhpcy5jdXJyZW50UGFnZSA9IHBhZ2VObztcblx0fTtcblxuXHRwdWJsaWMgcGFnZUNoYW5nZWQoZXZlbnQ6YW55KTp2b2lkIHtcblx0XHRjb25zb2xlLmxvZygnUGFnZSBjaGFuZ2VkIHRvOiAnICsgZXZlbnQucGFnZSk7XG5cdFx0Y29uc29sZS5sb2coJ051bWJlciBpdGVtcyBwZXIgcGFnZTogJyArIGV2ZW50Lml0ZW1zUGVyUGFnZSk7XG5cdH07XG5cdC8vIFByb2dyZXNzYmFyXG5cdHB1YmxpYyByYW5kb20oKTp2b2lkIHtcblx0XHRsZXQgdmFsdWUgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwKSArIDEpO1xuXHRcdGxldCB0eXBlOnN0cmluZztcblxuXHRcdGlmICh2YWx1ZSA8IDI1KSB7XG5cdFx0XHR0eXBlID0gJ3N1Y2Nlc3MnO1xuXHRcdH0gZWxzZSBpZiAodmFsdWUgPCA1MCkge1xuXHRcdFx0dHlwZSA9ICdpbmZvJztcblx0XHR9IGVsc2UgaWYgKHZhbHVlIDwgNzUpIHtcblx0XHRcdHR5cGUgPSAnd2FybmluZyc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHR5cGUgPSAnZGFuZ2VyJztcblx0XHR9XG5cblx0XHR0aGlzLnNob3dXYXJuaW5nID0gKHR5cGUgPT09ICdkYW5nZXInIHx8IHR5cGUgPT09ICd3YXJuaW5nJyk7XG5cdFx0dGhpcy5keW5hbWljID0gdmFsdWU7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0fTtcblxuXHRwdWJsaWMgcmFuZG9tU3RhY2tlZCgpOnZvaWQge1xuXHRcdGxldCB0eXBlcyA9IFsnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ107XG5cblx0XHR0aGlzLnN0YWNrZWQgPSBbXTtcblx0XHRsZXQgdG90YWwgPSAwO1xuXHRcdGxldCBuID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDQpICsgMSk7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcblx0XHRcdGxldCBpbmRleCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA0KSk7XG5cdFx0XHRsZXQgdmFsdWUgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMzApICsgMSk7XG5cdFx0XHR0b3RhbCArPSB2YWx1ZTtcblx0XHRcdHRoaXMuc3RhY2tlZC5wdXNoKHtcblx0XHRcdFx0dmFsdWU6IHZhbHVlLFxuXHQgICAgICAgIG1heDogdmFsdWUsIC8vIGkgIT09IChuIC0gMSkgPyB2YWx1ZSA6IDEwMCxcblx0ICAgICAgICB0eXBlOiB0eXBlc1tpbmRleF1cblx0ICAgIH0pO1xuXHRcdH1cblx0fTtcblx0Ly8gUmF0aW5nXG5cdHB1YmxpYyBob3ZlcmluZ092ZXIodmFsdWU6bnVtYmVyKTp2b2lkIHtcblx0XHR0aGlzLm92ZXJTdGFyID0gdmFsdWU7XG5cdFx0dGhpcy5wZXJjZW50ID0gMTAwICogKHZhbHVlIC8gdGhpcy5tYXgpO1xuXHR9O1xuXG5cdHB1YmxpYyByZXNldFN0YXIoKTp2b2lkIHtcblx0XHR0aGlzLm92ZXJTdGFyID0gdm9pZCAwO1xuXHR9XG5cdC8vIFRhYnNcblx0cHVibGljIGFsZXJ0TWUoKTp2b2lkIHtcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpOnZvaWQge1xuXHRcdFx0YWxlcnQoJ1lvdVxcJ3ZlIHNlbGVjdGVkIHRoZSBhbGVydCB0YWIhJyk7XG5cdFx0fSk7XG5cdH07XG5cblx0cHVibGljIHNldEFjdGl2ZVRhYihpbmRleDpudW1iZXIpOnZvaWQge1xuXHRcdHRoaXMudGFic1tpbmRleF0uYWN0aXZlID0gdHJ1ZTtcblx0fTtcblxuXHRwdWJsaWMgcmVtb3ZlVGFiSGFuZGxlcigvKnRhYjphbnkqLyk6dm9pZCB7XG5cdFx0Y29uc29sZS5sb2coJ1JlbW92ZSBUYWIgaGFuZGxlcicpO1xuXHR9O1xuXG5cdC8vIFR5cGVoZWFkXG5cdHB1YmxpYyBnZXRDb250ZXh0KCk6YW55IHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHB1YmxpYyBnZXRBc3luY0RhdGEoY29udGV4dDphbnkpOkZ1bmN0aW9uIHtcblx0XHRpZiAodGhpcy5fcHJldkNvbnRleHQgPT09IGNvbnRleHQpIHtcblx0XHRcdHJldHVybiB0aGlzLl9jYWNoZTtcblx0XHR9XG5cblx0XHR0aGlzLl9wcmV2Q29udGV4dCA9IGNvbnRleHQ7XG5cdFx0bGV0IGY6RnVuY3Rpb24gPSBmdW5jdGlvbiAoKTpQcm9taXNlPHN0cmluZ1tdPiB7XG5cdFx0XHRsZXQgcDpQcm9taXNlPHN0cmluZ1tdPiA9IG5ldyBQcm9taXNlKChyZXNvbHZlOkZ1bmN0aW9uKSA9PiB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBxdWVyeSA9IG5ldyBSZWdFeHAoY29udGV4dC5hc3luY1NlbGVjdGVkLCAnaWcnKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShjb250ZXh0LnN0YXRlcy5maWx0ZXIoKHN0YXRlOmFueSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHF1ZXJ5LnRlc3Qoc3RhdGUpO1xuXHRcdFx0XHRcdH0pKTtcblx0XHRcdFx0fSwgMjAwKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHA7XG5cdFx0fTtcblx0XHR0aGlzLl9jYWNoZSA9IGY7XG5cdFx0cmV0dXJuIHRoaXMuX2NhY2hlO1xuXHR9XG5cblx0cHVibGljIGNoYW5nZVR5cGVhaGVhZExvYWRpbmcoZTpib29sZWFuKTp2b2lkIHtcblx0XHR0aGlzLnR5cGVhaGVhZExvYWRpbmcgPSBlO1xuXHR9XG5cblx0cHVibGljIGNoYW5nZVR5cGVhaGVhZE5vUmVzdWx0cyhlOmJvb2xlYW4pOnZvaWQge1xuXHRcdHRoaXMudHlwZWFoZWFkTm9SZXN1bHRzID0gZTtcblx0fVxuXG5cdHB1YmxpYyB0eXBlYWhlYWRPblNlbGVjdChlOmFueSk6dm9pZCB7XG5cdFx0Y29uc29sZS5sb2coYFNlbGVjdGVkIHZhbHVlOiAke2UuaXRlbX1gKTtcblx0fVxufVxuIl19
