import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './layouts/base/base';
import { AppRoutes } from './app.routes';
import { AppService } from './app.service';


@NgModule({
  imports:[
    BrowserModule,
    AppRoutes
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    AppService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
