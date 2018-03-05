import { User } from './user.model';
import { CartItem } from '../../models/cart-item.model';

export class Order {
    constructor(
        public id: number,
        public user: User,
        public items: CartItem[],
        public totalValue: number
    ) {}
}
