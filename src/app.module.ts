import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [ProductModule, UserModule, SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
