import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [MatToolbarModule, MatIconModule, MatButtonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    // encapsulation: ViewEncapsulation.ShadowDom,
})
export class HeaderComponent {
    readonly title = 'angular-20250519';
    // protected title = 'angular-20250519';
    // private title = 'angular-20250519';

    readonly logoUrl = 'favicon.ico';
}
