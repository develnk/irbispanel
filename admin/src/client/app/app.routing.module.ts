import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignupRoutes } from './signup/index';
import { DashboardRoutes } from './dashboard/dashboard.routes';
import { CanDeactivateGuard } from "./can-deactivate-guard.service";
import { SelectivePreloadingStrategy }   from './selective-preloading-strategy';

import { LoginComponent } from './login/index';

export const appRoutes: Routes = [
	...SignupRoutes,
	...DashboardRoutes,
	{ path: 'login', component: LoginComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{ preloadingStrategy: SelectivePreloadingStrategy }
		)
	],
	exports: [
		RouterModule
	],
	providers: [
		CanDeactivateGuard,
		SelectivePreloadingStrategy
	]
})
export class AppRoutingModule {}
