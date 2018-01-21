import { Category } from './category.enum';

export class Product {
    description: string;
    isAvailable = true;
    ingredients: string[];
    equivalents: string[];
    constructor(
        public name: string,
        public price: number,
        public category: Category,
    ) {}
}
