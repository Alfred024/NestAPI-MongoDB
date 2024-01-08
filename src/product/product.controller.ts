//Nest modules 
import { 
    Controller, 
    Get, Post, Patch, Delete,
    Body, Param, ParseUUIDPipe,   
} from '@nestjs/common';
//Service
import { ProductService } from './product.service';
//DTO
import { PostProductDto, PatchProductDto, } from './dto/product-dto';

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
    getProductById(@Param('id', new ParseUUIDPipe({version: '4'})) id : string){
        return this.productService.findById(id);
    }

    @Post()
    postProduct(@Body() body : PostProductDto ){
        return this.productService.createProduct(body);
    }

    @Patch(':id')
    patchProduct(
        @Param('id', ParseUUIDPipe) id : string,
        @Body() body : PatchProductDto )
    {
        return this.productService.updateProduct(id, body);
    }

    @Delete(':id')
    deleteProductById(@Param('id', ParseUUIDPipe) id : string){
        return this.productService.deleteProduct(id);
    }
}
