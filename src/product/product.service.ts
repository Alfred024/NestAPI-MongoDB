import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { v4 as uuidv4 } from 'uuid';
import { PostProductDto, PatchProductDto } from './dto/product-dto';


@Injectable()
export class ProductService{
    private products: Product[] = [];

    findAll(){
        return this.products;
    }

    findById(id: String){
        const product = this.products.find(product => product.id === id);
        if(!product) throw new NotFoundException(`Product with id: ${id} not found.`);
        return product;
    }

    createProduct( postProductDto : PostProductDto ){
        const newProduct = {
            'id': uuidv4(),
            ...postProductDto,
        } 

        this.products.push(newProduct);
        return {
            'message': 'Product succesfully creted',
            'newProduct': newProduct
        }
    }

    updateProduct( id: String, patchProductDto : PatchProductDto){
        let productToUpdate = this.findById(id);
        this.products = this.products.map((product) =>{
            if(product.id === id){
                productToUpdate = {
                    ...productToUpdate,
                    ...patchProductDto, id
                }
                return productToUpdate;
            }
            return product;
        }); 
        return productToUpdate;
    }

    deleteProduct( id : String){
        const productToDelete = this.findById(id);
        this.products = this.products.map((product) =>{
            if(product.id != productToDelete.id){
                return product;
            }
        });
        return productToDelete;
    }

    fillProductsWithSeedData(products : Product[]){
        this.products = products;
    }
}
