"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var $ = require('../../../../../node_modules/jquery/dist/jquery.min.js');
var ChartComponent = (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () {
        var container = $('#container');
        container.highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Historic and Estimated Worldwide Population Distribution by Region'
            },
            subtitle: {
                text: 'Source: Wikipedia.org'
            },
            xAxis: {
                categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'Percent'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>' +
                    ': <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
                shared: true
            },
            plotOptions: {
                area: {
                    stacking: 'percent',
                    lineColor: '#ffffff',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#ffffff'
                    }
                }
            },
            series: [{
                    name: 'Asia',
                    data: [502, 635, 809, 947, 1402, 3634, 5268]
                }, {
                    name: 'Africa',
                    data: [106, 107, 111, 133, 221, 767, 1766]
                }, {
                    name: 'Europe',
                    data: [163, 203, 276, 408, 547, 729, 628]
                }, {
                    name: 'America',
                    data: [18, 31, 54, 156, 339, 818, 1201]
                }, {
                    name: 'Oceania',
                    data: [2, 2, 2, 6, 13, 30, 46]
                }]
        });
        var areaChart = $('#area-chart');
        areaChart.highcharts({
            chart: {
                type: 'area'
            },
            title: {
                text: 'Area chart with negative values'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            credits: {
                enabled: false
            },
            series: [{
                    name: 'John',
                    data: [5, 3, 4, 7, 2]
                }, {
                    name: 'Jane',
                    data: [2, -2, -3, 2, 1]
                }, {
                    name: 'Joe',
                    data: [3, 4, 4, -2, 5]
                }]
        });
        var totalFruit = $('#total-fruit');
        totalFruit.highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Total fruit consumtion, grouped by gender'
            },
            xAxis: {
                categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                allowDecimals: false,
                min: 0,
                title: {
                    text: 'Number of fruits'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            series: [{
                    name: 'John',
                    data: [5, 3, 4, 7, 2],
                    stack: 'male'
                }, {
                    name: 'Joe',
                    data: [3, 4, 4, 2, 5],
                    stack: 'male'
                }, {
                    name: 'Jane',
                    data: [2, 5, 6, 2, 1],
                    stack: 'female'
                }, {
                    name: 'Janet',
                    data: [3, 0, 4, 4, 3],
                    stack: 'female'
                }]
        });
        var snowDepth = $('#snow-depth');
        snowDepth.highcharts({
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Snow depth at Vikjafjellet, Norway'
            },
            subtitle: {
                text: 'Irregular time data in Highcharts JS'
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    month: '%e. %b',
                    year: '%b'
                },
                title: {
                    text: 'Date'
                }
            },
            yAxis: {
                title: {
                    text: 'Snow depth (m)'
                },
                min: 0
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
            },
            plotOptions: {
                spline: {
                    marker: {
                        enabled: true
                    }
                }
            },
            series: [{
                    name: 'Winter 2012-2013',
                    data: [
                        [Date.UTC(1970, 9, 21), 0],
                        [Date.UTC(1970, 10, 4), 0.28],
                        [Date.UTC(1970, 10, 9), 0.25],
                        [Date.UTC(1970, 10, 27), 0.2],
                        [Date.UTC(1970, 11, 2), 0.28],
                        [Date.UTC(1970, 11, 26), 0.28],
                        [Date.UTC(1970, 11, 29), 0.47],
                        [Date.UTC(1971, 0, 11), 0.79],
                        [Date.UTC(1971, 0, 26), 0.72],
                        [Date.UTC(1971, 1, 3), 1.02],
                        [Date.UTC(1971, 1, 11), 1.12],
                        [Date.UTC(1971, 1, 25), 1.2],
                        [Date.UTC(1971, 2, 11), 1.18],
                        [Date.UTC(1971, 3, 11), 1.19],
                        [Date.UTC(1971, 4, 1), 1.85],
                        [Date.UTC(1971, 4, 5), 2.22],
                        [Date.UTC(1971, 4, 19), 1.15],
                        [Date.UTC(1971, 5, 3), 0]
                    ]
                }, {
                    name: 'Winter 2013-2014',
                    data: [
                        [Date.UTC(1970, 9, 29), 0],
                        [Date.UTC(1970, 10, 9), 0.4],
                        [Date.UTC(1970, 11, 1), 0.25],
                        [Date.UTC(1971, 0, 1), 1.66],
                        [Date.UTC(1971, 0, 10), 1.8],
                        [Date.UTC(1971, 1, 19), 1.76],
                        [Date.UTC(1971, 2, 25), 2.62],
                        [Date.UTC(1971, 3, 19), 2.41],
                        [Date.UTC(1971, 3, 30), 2.05],
                        [Date.UTC(1971, 4, 14), 1.7],
                        [Date.UTC(1971, 4, 24), 1.1],
                        [Date.UTC(1971, 5, 10), 0]
                    ]
                }, {
                    name: 'Winter 2014-2015',
                    data: [
                        [Date.UTC(1970, 10, 25), 0],
                        [Date.UTC(1970, 11, 6), 0.25],
                        [Date.UTC(1970, 11, 20), 1.41],
                        [Date.UTC(1970, 11, 25), 1.64],
                        [Date.UTC(1971, 0, 4), 1.6],
                        [Date.UTC(1971, 0, 17), 2.55],
                        [Date.UTC(1971, 0, 24), 2.62],
                        [Date.UTC(1971, 1, 4), 2.5],
                        [Date.UTC(1971, 1, 14), 2.42],
                        [Date.UTC(1971, 2, 6), 2.74],
                        [Date.UTC(1971, 2, 14), 2.62],
                        [Date.UTC(1971, 2, 24), 2.6],
                        [Date.UTC(1971, 3, 2), 2.81],
                        [Date.UTC(1971, 3, 12), 2.63],
                        [Date.UTC(1971, 3, 28), 2.77],
                        [Date.UTC(1971, 4, 5), 2.68],
                        [Date.UTC(1971, 4, 10), 2.56],
                        [Date.UTC(1971, 4, 15), 2.39],
                        [Date.UTC(1971, 4, 20), 2.3],
                        [Date.UTC(1971, 5, 5), 2],
                        [Date.UTC(1971, 5, 10), 1.85],
                        [Date.UTC(1971, 5, 15), 1.49],
                        [Date.UTC(1971, 5, 23), 1.08]
                    ]
                }]
        });
    };
    return ChartComponent;
}());
ChartComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'chart-cmp',
        templateUrl: 'chart.component.html'
    })
], ChartComponent);
exports.ChartComponent = ChartComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvY2hhcnRzL2NoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQWlEO0FBQ2pELElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0FBT3pFLElBQWEsY0FBYztJQUEzQjtJQXdQQSxDQUFDO0lBdlBBLGlDQUFRLEdBQVI7UUFDTyxJQUFJLFNBQVMsR0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEMsU0FBUyxDQUFDLFVBQVUsQ0FBQztZQUN2QixLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLE1BQU07YUFDZjtZQUNELEtBQUssRUFBRTtnQkFDSCxJQUFJLEVBQUUsb0VBQW9FO2FBQzdFO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLElBQUksRUFBRSx1QkFBdUI7YUFDaEM7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsVUFBVSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO2dCQUNwRSxpQkFBaUIsRUFBRSxJQUFJO2dCQUN2QixLQUFLLEVBQUU7b0JBQ0gsT0FBTyxFQUFFLEtBQUs7aUJBQ2pCO2FBQ0o7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFO29CQUNILElBQUksRUFBRSxTQUFTO2lCQUNsQjthQUNKO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFdBQVcsRUFBRSx5REFBeUQ7b0JBQ3RFLGlFQUFpRTtnQkFDakUsTUFBTSxFQUFFLElBQUk7YUFDZjtZQUNELFdBQVcsRUFBRTtnQkFDVCxJQUFJLEVBQUU7b0JBQ0YsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFNBQVMsRUFBRSxTQUFTO29CQUNwQixTQUFTLEVBQUUsQ0FBQztvQkFDWixNQUFNLEVBQUU7d0JBQ0osU0FBUyxFQUFFLENBQUM7d0JBQ1osU0FBUyxFQUFFLFNBQVM7cUJBQ3ZCO2lCQUNKO2FB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SSxDQUFDO3dCQUM5QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUM7d0JBQzlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQzt3QkFDN0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO3dCQUM3QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7d0JBQzVCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQzt3QkFDN0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO3dCQUM1QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUM7d0JBQzdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQzt3QkFDN0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO3dCQUM1QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7d0JBQzVCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQzt3QkFDN0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFD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QUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7d0JBQzVCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQzt3QkFDN0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDO3dCQUM1QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7d0JBQzVCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQzt3QkFDN0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO3dCQUM3QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7d0JBQzVCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQzt3QkFDN0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO3dCQUM3QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUM7d0JBQzVCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDekIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO3dCQUM3QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUM7d0JBQzdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQztxQkFDaEM7aUJBQ0osQ0FBQztTQUNMLENBQUMsQ0FBQztJQUNWLENBQUM7SUFDRixxQkFBQztBQUFELENBeFBBLEFBd1BDLElBQUE7QUF4UFksY0FBYztJQUwxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ3RCLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxzQkFBc0I7S0FDbkMsQ0FBQztHQUNXLGNBQWMsQ0F3UDFCO0FBeFBZLHdDQUFjIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvY2hhcnRzL2NoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmxldCAkID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5taW4uanMnKTtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdjaGFydC1jbXAnLFxuXHR0ZW1wbGF0ZVVybDogJ2NoYXJ0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdG5nT25Jbml0KCkge1xuICAgICAgICB2YXIgY29udGFpbmVyOmFueSA9ICQoJyNjb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLmhpZ2hjaGFydHMoe1xuXHRcdCAgICBjaGFydDoge1xuXHRcdCAgICAgICAgdHlwZTogJ2FyZWEnXG5cdFx0ICAgIH0sXG5cdFx0ICAgIHRpdGxlOiB7XG5cdFx0ICAgICAgICB0ZXh0OiAnSGlzdG9yaWMgYW5kIEVzdGltYXRlZCBXb3JsZHdpZGUgUG9wdWxhdGlvbiBEaXN0cmlidXRpb24gYnkgUmVnaW9uJ1xuXHRcdCAgICB9LFxuXHRcdCAgICBzdWJ0aXRsZToge1xuXHRcdCAgICAgICAgdGV4dDogJ1NvdXJjZTogV2lraXBlZGlhLm9yZydcblx0XHQgICAgfSxcblx0XHQgICAgeEF4aXM6IHtcblx0XHQgICAgICAgIGNhdGVnb3JpZXM6IFsnMTc1MCcsICcxODAwJywgJzE4NTAnLCAnMTkwMCcsICcxOTUwJywgJzE5OTknLCAnMjA1MCddLFxuXHRcdCAgICAgICAgdGlja21hcmtQbGFjZW1lbnQ6ICdvbicsXG5cdFx0ICAgICAgICB0aXRsZToge1xuXHRcdCAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG5cdFx0ICAgICAgICB9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIHlBeGlzOiB7XG5cdFx0ICAgICAgICB0aXRsZToge1xuXHRcdCAgICAgICAgICAgIHRleHQ6ICdQZXJjZW50J1xuXHRcdCAgICAgICAgfVxuXHRcdCAgICB9LFxuXHRcdCAgICB0b29sdGlwOiB7XG5cdFx0ICAgICAgICBwb2ludEZvcm1hdDogJzxzcGFuIHN0eWxlPVwiY29sb3I6e3Nlcmllcy5jb2xvcn1cIj57c2VyaWVzLm5hbWV9PC9zcGFuPicrXG5cdFx0ICAgICAgICAnOiA8Yj57cG9pbnQucGVyY2VudGFnZTouMWZ9JTwvYj4gKHtwb2ludC55OiwuMGZ9IG1pbGxpb25zKTxici8+Jyxcblx0XHQgICAgICAgIHNoYXJlZDogdHJ1ZVxuXHRcdCAgICB9LFxuXHRcdCAgICBwbG90T3B0aW9uczoge1xuXHRcdCAgICAgICAgYXJlYToge1xuXHRcdCAgICAgICAgICAgIHN0YWNraW5nOiAncGVyY2VudCcsXG5cdFx0ICAgICAgICAgICAgbGluZUNvbG9yOiAnI2ZmZmZmZicsXG5cdFx0ICAgICAgICAgICAgbGluZVdpZHRoOiAxLFxuXHRcdCAgICAgICAgICAgIG1hcmtlcjoge1xuXHRcdCAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDEsXG5cdFx0ICAgICAgICAgICAgICAgIGxpbmVDb2xvcjogJyNmZmZmZmYnXG5cdFx0ICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgfVxuXHRcdCAgICB9LFxuXHRcdCAgICBzZXJpZXM6IFt7XG5cdFx0ICAgICAgICBuYW1lOiAnQXNpYScsXG5cdFx0ICAgICAgICBkYXRhOiBbNTAyLCA2MzUsIDgwOSwgOTQ3LCAxNDAyLCAzNjM0LCA1MjY4XVxuXHRcdCAgICB9LCB7XG5cdFx0ICAgICAgICBuYW1lOiAnQWZyaWNhJyxcblx0XHQgICAgICAgIGRhdGE6IFsxMDYsIDEwNywgMTExLCAxMzMsIDIyMSwgNzY3LCAxNzY2XVxuXHRcdCAgICB9LCB7XG5cdFx0ICAgICAgICBuYW1lOiAnRXVyb3BlJyxcblx0XHQgICAgICAgIGRhdGE6IFsxNjMsIDIwMywgMjc2LCA0MDgsIDU0NywgNzI5LCA2MjhdXG5cdFx0ICAgIH0sIHtcblx0XHQgICAgICAgIG5hbWU6ICdBbWVyaWNhJyxcblx0XHQgICAgICAgIGRhdGE6IFsxOCwgMzEsIDU0LCAxNTYsIDMzOSwgODE4LCAxMjAxXVxuXHRcdCAgICB9LCB7XG5cdFx0ICAgICAgICBuYW1lOiAnT2NlYW5pYScsXG5cdFx0ICAgICAgICBkYXRhOiBbMiwgMiwgMiwgNiwgMTMsIDMwLCA0Nl1cblx0XHQgICAgfV1cblx0XHR9KTtcbiAgICAgICAgdmFyIGFyZWFDaGFydDogYW55ID0gJCgnI2FyZWEtY2hhcnQnKTtcbiAgICAgICAgYXJlYUNoYXJ0LmhpZ2hjaGFydHMoe1xuXHQgICAgICAgIGNoYXJ0OiB7XG5cdCAgICAgICAgICAgIHR5cGU6ICdhcmVhJ1xuXHQgICAgICAgIH0sXG5cdCAgICAgICAgdGl0bGU6IHtcblx0ICAgICAgICAgICAgdGV4dDogJ0FyZWEgY2hhcnQgd2l0aCBuZWdhdGl2ZSB2YWx1ZXMnXG5cdCAgICAgICAgfSxcblx0ICAgICAgICB4QXhpczoge1xuXHQgICAgICAgICAgICBjYXRlZ29yaWVzOiBbJ0FwcGxlcycsICdPcmFuZ2VzJywgJ1BlYXJzJywgJ0dyYXBlcycsICdCYW5hbmFzJ11cblx0ICAgICAgICB9LFxuXHQgICAgICAgIGNyZWRpdHM6IHtcblx0ICAgICAgICAgICAgZW5hYmxlZDogZmFsc2Vcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHNlcmllczogW3tcblx0ICAgICAgICAgICAgbmFtZTogJ0pvaG4nLFxuXHQgICAgICAgICAgICBkYXRhOiBbNSwgMywgNCwgNywgMl1cblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIG5hbWU6ICdKYW5lJyxcblx0ICAgICAgICAgICAgZGF0YTogWzIsIC0yLCAtMywgMiwgMV1cblx0ICAgICAgICB9LCB7XG5cdCAgICAgICAgICAgIG5hbWU6ICdKb2UnLFxuXHQgICAgICAgICAgICBkYXRhOiBbMywgNCwgNCwgLTIsIDVdXG5cdCAgICAgICAgfV1cblx0ICAgIH0pO1xuICAgICAgICB2YXIgdG90YWxGcnVpdDogYW55ID0gJCgnI3RvdGFsLWZydWl0Jyk7XG4gICAgICAgIHRvdGFsRnJ1aXQuaGlnaGNoYXJ0cyh7XG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjb2x1bW4nXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdUb3RhbCBmcnVpdCBjb25zdW10aW9uLCBncm91cGVkIGJ5IGdlbmRlcidcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWydBcHBsZXMnLCAnT3JhbmdlcycsICdQZWFycycsICdHcmFwZXMnLCAnQmFuYW5hcyddXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgIGFsbG93RGVjaW1hbHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTnVtYmVyIG9mIGZydWl0cydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnPGI+JyArIHRoaXMueCArICc8L2I+PGJyLz4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VyaWVzLm5hbWUgKyAnOiAnICsgdGhpcy55ICsgJzxici8+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnVG90YWw6ICcgKyB0aGlzLnBvaW50LnN0YWNrVG90YWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjb2x1bW46IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhY2tpbmc6ICdub3JtYWwnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdKb2huJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbNSwgMywgNCwgNywgMl0sXG4gICAgICAgICAgICAgICAgc3RhY2s6ICdtYWxlJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdKb2UnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFszLCA0LCA0LCAyLCA1XSxcbiAgICAgICAgICAgICAgICBzdGFjazogJ21hbGUnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0phbmUnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFsyLCA1LCA2LCAyLCAxXSxcbiAgICAgICAgICAgICAgICBzdGFjazogJ2ZlbWFsZSdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnSmFuZXQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IFszLCAwLCA0LCA0LCAzXSxcbiAgICAgICAgICAgICAgICBzdGFjazogJ2ZlbWFsZSdcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgc25vd0RlcHRoOiBhbnkgPSAkKCcjc25vdy1kZXB0aCcpO1xuICAgICAgICBzbm93RGVwdGguaGlnaGNoYXJ0cyh7XG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzcGxpbmUnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiAnU25vdyBkZXB0aCBhdCBWaWtqYWZqZWxsZXQsIE5vcndheSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJ0aXRsZToge1xuICAgICAgICAgICAgICAgIHRleHQ6ICdJcnJlZ3VsYXIgdGltZSBkYXRhIGluIEhpZ2hjaGFydHMgSlMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZGF0ZXRpbWUnLFxuICAgICAgICAgICAgICAgIGRhdGVUaW1lTGFiZWxGb3JtYXRzOiB7IC8vIGRvbid0IGRpc3BsYXkgdGhlIGR1bW15IHllYXJcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6ICclZS4gJWInLFxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiAnJWInXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRGF0ZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnU25vdyBkZXB0aCAobSknXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtaW46IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyRm9ybWF0OiAnPGI+e3Nlcmllcy5uYW1lfTwvYj48YnI+JyxcbiAgICAgICAgICAgICAgICBwb2ludEZvcm1hdDogJ3twb2ludC54OiVlLiAlYn06IHtwb2ludC55Oi4yZn0gbSdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHBsb3RPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgc3BsaW5lOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2VyaWVzOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdXaW50ZXIgMjAxMi0yMDEzJyxcbiAgICAgICAgICAgICAgICAvLyBEZWZpbmUgdGhlIGRhdGEgcG9pbnRzLiBBbGwgc2VyaWVzIGhhdmUgYSBkdW1teSB5ZWFyXG4gICAgICAgICAgICAgICAgLy8gb2YgMTk3MC83MSBpbiBvcmRlciB0byBiZSBjb21wYXJlZCBvbiB0aGUgc2FtZSB4IGF4aXMuIE5vdGVcbiAgICAgICAgICAgICAgICAvLyB0aGF0IGluIEphdmFTY3JpcHQsIG1vbnRocyBzdGFydCBhdCAwIGZvciBKYW51YXJ5LCAxIGZvciBGZWJydWFyeSBldGMuXG4gICAgICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgICAgICBbRGF0ZS5VVEMoMTk3MCwgOSwgMjEpLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzAsIDEwLCA0KSwgMC4yOF0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcwLCAxMCwgOSksIDAuMjVdLFxuICAgICAgICAgICAgICAgICAgICBbRGF0ZS5VVEMoMTk3MCwgMTAsIDI3KSwgMC4yXSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzAsIDExLCAyKSwgMC4yOF0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcwLCAxMSwgMjYpLCAwLjI4XSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzAsIDExLCAyOSksIDAuNDddLFxuICAgICAgICAgICAgICAgICAgICBbRGF0ZS5VVEMoMTk3MSwgMCwgMTEpLCAwLjc5XSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzEsIDAsIDI2KSwgMC43Ml0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcxLCAxLCAzKSwgMS4wMl0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcxLCAxLCAxMSksIDEuMTJdLFxuICAgICAgICAgICAgICAgICAgICBbRGF0ZS5VVEMoMTk3MSwgMSwgMjUpLCAxLjJdLFxuICAgICAgICAgICAgICAgICAgICBbRGF0ZS5VVEMoMTk3MSwgMiwgMTEpLCAxLjE4XSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzEsIDMsIDExKSwgMS4xOV0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcxLCA0LCAxKSwgMS44NV0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcxLCA0LCA1KSwgMi4yMl0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcxLCA0LCAxOSksIDEuMTVdLFxuICAgICAgICAgICAgICAgICAgICBbRGF0ZS5VVEMoMTk3MSwgNSwgMyksIDBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdXaW50ZXIgMjAxMy0yMDE0JyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcwLCA5LCAyOSksIDBdLFxuICAgICAgICAgICAgICAgICAgICBbRGF0ZS5VVEMoMTk3MCwgMTAsIDkpLCAwLjRdLFxuICAgICAgICAgICAgICAgICAgICBbRGF0ZS5VVEMoMTk3MCwgMTEsIDEpLCAwLjI1XSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzEsIDAsIDEpLCAxLjY2XSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzEsIDAsIDEwKSwgMS44XSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzEsIDEsIDE5KSwgMS43Nl0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcxLCAyLCAyNSksIDIuNjJdLFxuICAgICAgICAgICAgICAgICAgICBbRGF0ZS5VVEMoMTk3MSwgMywgMTkpLCAyLjQxXSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzEsIDMsIDMwKSwgMi4wNV0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcxLCA0LCAxNCksIDEuN10sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcxLCA0LCAyNCksIDEuMV0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcxLCA1LCAxMCksIDBdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdXaW50ZXIgMjAxNC0yMDE1JyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcwLCAxMCwgMjUpLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzAsIDExLCA2KSwgMC4yNV0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcwLCAxMSwgMjApLCAxLjQxXSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzAsIDExLCAyNSksIDEuNjRdLFxuICAgICAgICAgICAgICAgICAgICBbRGF0ZS5VVEMoMTk3MSwgMCwgNCksIDEuNl0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcxLCAwLCAxNyksIDIuNTVdLFxuICAgICAgICAgICAgICAgICAgICBbRGF0ZS5VVEMoMTk3MSwgMCwgMjQpLCAyLjYyXSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzEsIDEsIDQpLCAyLjVdLFxuICAgICAgICAgICAgICAgICAgICBbRGF0ZS5VVEMoMTk3MSwgMSwgMTQpLCAyLjQyXSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzEsIDIsIDYpLCAyLjc0XSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzEsIDIsIDE0KSwgMi42Ml0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcxLCAyLCAyNCksIDIuNl0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcxLCAzLCAyKSwgMi44MV0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcxLCAzLCAxMiksIDIuNjNdLFxuICAgICAgICAgICAgICAgICAgICBbRGF0ZS5VVEMoMTk3MSwgMywgMjgpLCAyLjc3XSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzEsIDQsIDUpLCAyLjY4XSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzEsIDQsIDEwKSwgMi41Nl0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcxLCA0LCAxNSksIDIuMzldLFxuICAgICAgICAgICAgICAgICAgICBbRGF0ZS5VVEMoMTk3MSwgNCwgMjApLCAyLjNdLFxuICAgICAgICAgICAgICAgICAgICBbRGF0ZS5VVEMoMTk3MSwgNSwgNSksIDJdLFxuICAgICAgICAgICAgICAgICAgICBbRGF0ZS5VVEMoMTk3MSwgNSwgMTApLCAxLjg1XSxcbiAgICAgICAgICAgICAgICAgICAgW0RhdGUuVVRDKDE5NzEsIDUsIDE1KSwgMS40OV0sXG4gICAgICAgICAgICAgICAgICAgIFtEYXRlLlVUQygxOTcxLCA1LCAyMyksIDEuMDhdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG5cdH1cbn1cbiJdfQ==
