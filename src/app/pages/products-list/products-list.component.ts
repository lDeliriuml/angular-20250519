import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {CardComponent} from './card/card.component';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    readonly count = signal(0);

    readonly product = computed(() => productsMock[this.count()]);

    constructor() {
        setInterval(() => {
            this.count.update(count => count + 1);
        }, 1000);
    }
}
