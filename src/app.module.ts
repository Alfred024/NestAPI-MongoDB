// Modules of the APP
import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
// Module for serve static file
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
// Module for DB
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';

// B.D's no relacional: product, user, order, sale, shopping_cart

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    // MongoDriver
    MongooseModule.forRoot('mongodb://localhost:27017/ecommerce'),
    // Api modules
    ProductModule, UserModule, OrderModule, PokemonModule
  ],
})
export class AppModule {}
