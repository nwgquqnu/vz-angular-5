import { CartItem } from './cart-item.model';

export class CartCountChangedEvent {
    constructor(
        public item: CartItem,
        public newCount: number
    ) { }
}
