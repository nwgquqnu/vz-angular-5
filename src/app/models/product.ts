import { Category } from './category.enum';

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;

    ingredients?: string[];
    equivalents?: string[];
}
