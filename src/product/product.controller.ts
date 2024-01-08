//Nest modules 
import { 
    Controller, 
    Get, Post, Patch, Delete,
    Body, Param, ParseIntPipe, ParseUUIDPipe, 
} from '@nestjs/common';
//Service
import { ProductService } from './product.service';
//DTO
import { PostProductDto } from './dto/post-product.dto';

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
