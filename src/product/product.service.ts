import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class ProductService{
    private products: Product[] = [
        {id: uuidv4(), product: 'Chancla', price: 20, category: 'clothes'},
        {id: uuidv4(), product: 'Chamarrin', price: 500, category: 'clothes'},
        {id: uuidv4(), product: 'Tenis', price: 1000, category: 'clothes'},
        {id: uuidv4(), product: 'Gorro', price: 200, category: 'clothes'},
    ];

    findAll(){
        return this.products;
    }

    findById(id: string){
        const product = this.products.find(product => product.id === id);
        if(!product) throw new NotFoundException(`Product with id: ${id} not found.`);
        return product;
    }
}
