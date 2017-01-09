import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SysInfoComponent } from './sysinfo.component';

@NgModule({
    imports: [
        RouterModule
    ],
    declarations: [SysInfoComponent],
    exports: [SysInfoComponent]
})

export class SysInfoModule { }
