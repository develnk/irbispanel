import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginRoutingModule }      from './login/login-routing.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { ChatChannelService }   from "./services/chat.channel.service";
import { WebSocketService } from "./services/websocket.service";
import { Globals } from './globals';

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		ChartModule,
		LoginRoutingModule,
		AppRoutingModule,
		LoginModule,
		SignupModule,
		DashboardModule,
		SharedModule.forRoot()
	],
	declarations: [AppComponent],
	providers: [{
		provide: APP_BASE_HREF,
		useValue: '<%= APP_BASE %>',
	    },
		ChatChannelService,
		WebSocketService,
		Globals
	],
	bootstrap: [AppComponent]

})
export class AppModule { }
