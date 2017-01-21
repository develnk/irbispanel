import { Routes } from '@angular/router';

import { HomeRoutes } from './home/index';
import { ChartRoutes } from './charts/index';
import { BlankPageRoutes } from './blank-page/index';
import { TableRoutes } from './tables/index';
import { FormRoutes } from './forms/index';
import { GridRoutes } from './grid/index';
import { BSComponentRoutes } from './bs-component/index';
import { BSElementRoutes } from './bs-element/index';
import { SysInfoRoutes } from "./sysinfo/sysinfo.routes";
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from "../auth-guard.service";

export const DashboardRoutes: Routes = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
        canLoad: [AuthGuard],
    	children: [
	    	...HomeRoutes,
	    	...ChartRoutes,
	    	...BSComponentRoutes,
        	...TableRoutes,
	    	...BlankPageRoutes,
        	...FormRoutes,
        	...GridRoutes,
			...SysInfoRoutes,
        	...BSElementRoutes
    	]
  	}
];
