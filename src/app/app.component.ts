import {Component} from '@angular/core';
import {HeaderComponent} from './app-components/header/header.component';

@Component({
    selector: 'app-root',
    // selector: 'div#root',
    standalone: true,
    imports: [HeaderComponent],
    templateUrl: './app.component.html',
    // template: '<h1>Its works</h1>',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'angular-20250519';
}
