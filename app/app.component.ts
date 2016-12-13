/**
 * Created by OSkoblya on 09.12.2016.
 */

import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `<h1>Hello {{name}}!</h1>`
})
export class AppComponent {
    name: string;

    constructor() {
        this.name = 'Angular 2';
    }
}