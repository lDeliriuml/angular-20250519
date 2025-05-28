import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {NgOptimizedImage} from '@angular/common';
import {productsMock} from '../../../shared/products/products.mock';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, NgOptimizedImage],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
    productList: Product[] = productsMock;
}
