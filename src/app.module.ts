// Modules of the APP
import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { SeedModule } from './seed/seed.module';
// Module for serve static file
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
// Module for DB
import { MongooseModule } from '@nestjs/mongoose';

// B.D's relacional: product, user, order, sale, sale_detail, transaccion, 
// B.D's no relacional: 

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    // MongoDriver
    MongooseModule.forRoot('mongodb://localhost:27017/ecommerce'),
    // Api modules
    ProductModule, UserModule, SeedModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
