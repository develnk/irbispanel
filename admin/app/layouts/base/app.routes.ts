import { provideRouter, RouterConfig } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from '../../pages/login/components/login';
import { SignupComponent } from '../../pages/signup/components/signup';
import { DashboardComponent } from '../dashboard/components/dashboard';
import { BlankPageComponent } from '../../pages/blank-page/components/blank_page';
import { NG2Component } from '../../pages/component/components/component';
import { GridComponent } from '../../pages/grid/components/grid';
import { BSElementComponent } from '../../pages/bootstrap-element/components/bs_element';
import { FormComponent } from '../../pages/forms/components/forms';
import { TableComponent } from '../../pages/tables/components/tables';
import { ChartComponent } from '../../pages/charts/components/charts';
import { HomeComponent } from '../../pages/home/components/home';
import { SysInfoComponent } from '../../pages/sysinfo/components/sysinfo';

export const routes: RouterConfig = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '/home', component: HomeComponent },
      { path: '/chart', component: ChartComponent },
      { path: '/table', component: TableComponent },
      { path: '/forms', component: FormComponent },
      { path: '/element', component: BSElementComponent},
      { path: '/grid', component: GridComponent },
      { path: '/component', component: NG2Component },
      { path: '/sysinfo', component: SysInfoComponent},
      { path: '/blank-page', component: BlankPageComponent }
    ]
  },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
