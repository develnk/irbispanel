import { NgModule, CUSTOM_ELEMENTS_SCHEMA }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { TopNavComponent }      from './shared/topnav/topnav';
import { SidebarComponent }     from './shared/sidebar/sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';
import {LoginComponent} from "./pages/login/components/login";
import {SignupComponent} from "./pages/signup/components/signup";
import {DashboardComponent} from "./layouts/dashboard/components/dashboard";
import {HomeComponent} from "./pages/home/components/home";
import {ChartComponent} from "./pages/charts/components/charts";
import {TableComponent} from "./pages/tables/components/tables";
import {NG2Component} from "./pages/component/components/component";
import {FormComponent} from "./pages/forms/components/forms";
import {BSElementComponent} from "./pages/bootstrap-element/components/bs_element";
import {GridComponent} from "./pages/grid/components/grid";
import {SysInfoComponent} from "./pages/sysinfo/components/sysinfo";
import {BlankPageComponent} from "./pages/blank-page/components/blank_page";

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    Ng2BootstrapModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    ChartComponent,
    TableComponent,
    FormComponent,
    BSElementComponent,
    GridComponent,
    NG2Component,
    SysInfoComponent,
    BlankPageComponent
    // TopNavComponent,
    // SidebarComponent
  ],
  providers: [{
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
  }],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
