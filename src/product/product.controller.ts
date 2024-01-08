import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor (
        readonly productService: ProductService
    ){}

    @Get()
    getProducts(){
        return this.productService.findAll();
    }

    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) id :number){
        return this.productService.findById(id);
    }

    @Post()
    postProduct(@Body() body : any ){
        return body;
    }

    @Patch()
    patchProduct(
        @Param('id', ParseIntPipe) id : number,
        @Body() body : any )
    {
        return body;
    }

    @Delete(':id')
    deleteProductById(@Param('id', ParseIntPipe) id : number){
        return {'message': 'deleting...'};
    }
}
