import { Product } from './product';

export class CartItem {
    quantity = 1;
    constructor(
        public product: Product
    ) { }
}
