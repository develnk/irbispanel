import { Component } from '@angular/core';
import { Globals } from "../../globals";
import { LoginData } from "../../login/login.component";
let $ = require('../../../../../node_modules/jquery/dist/jquery.min.js');

@Component({
    moduleId: module.id,
    selector: 'top-nav',
    templateUrl: 'topnav.html',
})
export class TopNavComponent {
	private user: LoginData;

	constructor(private globals: Globals) {
		this.user = globals.USER;
		if (!this.user || !this.user.name) {
			this.user = <LoginData> {
				name: 'Anonymous',
				ses_id: '',
				mail: '',
				status: 1
			}
		}
	}

	changeTheme(color: string): void {
		let link: any = $('<link>');
		link
			.appendTo('head')
			.attr({type : 'text/css', rel : 'stylesheet'})
			.attr('href', 'themes/app-'+color+'.css');
	}

	rtl(): void {
		let body: any = $('body');
		body.toggleClass('rtl');
	}

	sidebarToggler(): void  {
		let sidebar: any = $('#sidebar');
		let mainContainer: any = $('.main-container');
		sidebar.toggleClass('sidebar-left-zero');
		mainContainer.toggleClass('main-container-ml-zero');
	}
}
