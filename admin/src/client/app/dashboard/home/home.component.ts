import { Component } from '@angular/core';
import { ChatChannelService } from "../../services/chat.channel.service";
import { WebSocketService, Message } from "../../services/websocket.service";

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'timeline-cmp',
	templateUrl: 'timeline.html',
	styleUrls: ['timeline.css'],
})
export class TimelineComponent { }

@Component({
	moduleId: module.id,
	selector: 'chat-cmp',
	templateUrl: 'chat.html'
})
export class ChatComponent {}

@Component({
	moduleId: module.id,
	selector: 'notifications-cmp',
	templateUrl: 'notifications.html'
})
export class NotificationComponent { }

@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html'
})
export class HomeComponent {
	private options: Object;
	private cpu_data: Array<Object> = [];
	chatSubscribed:boolean = false;

	constructor(private chatChannelService:ChatChannelService, private webSocketService:WebSocketService,) {
		this.webSocketService.start('wss://localhost:' + location.port + '/api/v1');
		this.chatChannelService.subscribed.subscribe( ( data:boolean ) => {
			this.chatSubscribed = data;
		});

		this.chatChannelService.observableData.subscribe((message: Message) => {
				if (message.controller === 'system' && message.method === 'get_cpu_load_online') {
					this.cpuLoadUpdate(message.data);
				}
			},
			(err: ErrorEvent) => {
				console.log('Error: ' + err.message);
			});

		this.options = {
			chart: {
				events: {
					load: function () {
						// set up the updating of the chart each second
						var series = this.series[0];
						setInterval(function () {
							var x = (new Date()).getTime(), // current time
								y = Math.round(Math.random() * 100);
							series.addPoint([x, y], true, true);
						}, 1000);
					}
				}
			},
			title: {text: 'CPU Load exchange rate over time'},
			rangeSelector: {
				buttons: [{
					count: 1,
					type: 'minute',
					text: '1M'
				}, {
					count: 5,
					type: 'minute',
					text: '5M'
				}, {
					type: 'all',
					text: 'All'
				}],
				inputEnabled: false,
				selected: 0
			},
			xAxis: {
				type: 'datetime'
			},
			yAxis: {
				title: {
					text: 'Percent rate'
				}
			},
			legend: {
				enabled: false
			},
			series: [{
				type: 'area',
				name: 'CPU Load',
				data: this.cpu_data
			}]
		};

		this.sendMessage(<Message> {
			controller: 'system',
			method: 'get_cpu_load_online',
			data: '',
		});
	}

	private cpuLoadUpdate(message: Object) {
		this.cpu_data.push(message);
	}

	private sendMessage(message: Message) :void{
		this.chatChannelService.send(message);
	}
}
