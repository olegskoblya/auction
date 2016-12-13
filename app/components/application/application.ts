/**
 * Created by OSkoblya on 12.12.2016.
 */

import {Component, ViewEncapsulation} from '@angular/core';
import {Product, ProductService} from '../../services/product-service';

@Component({
    selector: 'auction-application',
    templateUrl: 'app/components/application/application.html',
    styleUrls: ['app/components/application/application.css'],
    encapsulation: ViewEncapsulation.None
})
export default class ApplicationComponent {
    products: Array<Product> = [];

    constructor(private productService: ProductService) {
        this.products = this.productService.getProducts();
    }
}