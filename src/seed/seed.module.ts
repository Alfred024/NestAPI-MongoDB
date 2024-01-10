import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ProductModule } from 'src/product/product.module';
import { UserModule } from 'src/user/user.module';


@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ProductModule, UserModule],
})
export class SeedModule {}
