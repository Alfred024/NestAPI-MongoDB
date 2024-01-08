import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        {"id": 1, "product": 'Chancla', "price": 20},
        {"id": 2, "product": 'Chamarrin', "price": 500},
        {"id": 3, "product": 'Tenis', "price": 1000},
        {"id": 4, "product": 'Gorro', "price": 200},
    ];

    findAll(){
        return this.products;
    }

    findById(id: number){
        const product = this.products.find(product => product.id === id);
        if(!product) throw new NotFoundException(`Product with id: ${id} not found.`);
        return product;
    }
}
