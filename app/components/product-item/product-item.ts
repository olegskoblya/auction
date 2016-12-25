/**
 * Created by OSkoblya on 13.12.2016.
 */

import {Component, Input} from '@angular/core';
import {Product} from '../../services/product-service';

@Component({
    selector: 'auction-product-item',
    styleUrls:['app/components/product-item/product-item.css'],
    templateUrl: 'app/components/product-item/product-item.html'
})
export default class ProductItemComponent {
    @Input() product: Product;
}