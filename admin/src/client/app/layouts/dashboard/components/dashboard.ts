import { NgModule }             from '@angular/core';
import { CommonModule }                    from '@angular/common';
import { TopNavComponent }                 from '../../../shared/topnav/topnav';
import { SidebarComponent }                from '../../../shared/sidebar/sidebar';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ TopNavComponent, SidebarComponent ]
})
export class DashboardComponent {}
