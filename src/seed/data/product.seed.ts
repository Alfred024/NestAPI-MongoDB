import { Product } from "src/product/interfaces/product.interface";
import { v4 as uuidv4 } from 'uuid';

export const PRODUCTS_SEED : Product[] = [
    {id: uuidv4(), product: 'Chancla', price: 20, category: 'clothes'},
    {id: uuidv4(), product: 'Chamarrin', price: 500, category: 'clothes'},
    {id: uuidv4(), product: 'Tenis', price: 1000, category: 'clothes'},
    {id: uuidv4(), product: 'Gorro', price: 200, category: 'clothes'},
    {id: uuidv4(), product: 'Celular', price: 200, category: 'electronics'},
];
