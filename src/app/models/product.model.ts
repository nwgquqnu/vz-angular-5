import { Category } from './category.enum';
import { Product as IProduct } from './product';

export class Product implements IProduct {
    description: string;
    isAvailable = true;
    ingredients: string[];
    equivalents: string[];
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public category: Category,
    ) {}
}
