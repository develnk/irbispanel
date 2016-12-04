import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { TopNavComponent }      from './shared/topnav/topnav';
import { SidebarComponent }     from './shared/sidebar/sidebar';
import { AppRoutes } from './app.routes';
import { AppService } from './app.service';


@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    AppRoutes
  ],
  declarations: [
    AppComponent,
    // TopNavComponent,
    // SidebarComponent
  ],
  providers: [{
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
