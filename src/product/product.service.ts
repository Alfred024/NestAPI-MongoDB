import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {

  constructor(
    @InjectModel(Product.name)
    private readonly productModel : Model<Product>
  ){}

  async create(createProductDto: CreateProductDto) {
    try {
      createProductDto.product = createProductDto.product.toLowerCase();
      const newProduct = this.productModel.create(createProductDto);
      return newProduct;
    } catch (error) {
      this.handleExceptions( error );
    }
  }

  async findAll() {
    try {
      return this.productModel.find();
    } catch (error) {
      this.handleExceptions( error );
    }
  }

  async findOne(term: string) {
    let product: Product;

    if ( !isNaN(+term) ) {
      product = await this.productModel.findOne({ no: term });
    }

    // MongoID
    if ( !product && isValidObjectId( term ) ) {
      product = await this.productModel.findById( term );
    }

    // Name
    if ( !product ) {
      product = await this.productModel.findOne({ product: term.toLowerCase().trim() })
    }


    if ( !product ) 
      throw new NotFoundException(`Product with id, product or no "${ term }" not found`);
    

    return product;
  }

  async update(term: string, updateProductDto: UpdateProductDto) {
    const product = await this.findOne( term );
    if ( updateProductDto.product )
      updateProductDto.product = updateProductDto.product.toLowerCase();
    
    try {
      await product.updateOne( updateProductDto );
      return { ...product.toJSON(), ...updateProductDto };
      
    } catch (error) {
      this.handleExceptions( error );
    }
  }

  async remove(id: string) {
    const { deletedCount } = await this.productModel.deleteOne({ _id: id });
    if ( deletedCount === 0 )
      throw new BadRequestException(`Product with id "${ id }" not found`);

    return;
  }

  private handleExceptions( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException(`Product exists in db ${ JSON.stringify( error.keyValue ) }`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Product - Check server logs`);
  }
}
