import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ip-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {
    constructor() {
        console.log('Environment config');
    }
}
