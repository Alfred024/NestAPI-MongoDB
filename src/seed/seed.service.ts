import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { ProductService } from 'src/product/product.service';
import { PRODUCTS_SEED } from './data/product.seed';
import { USERS_SEED } from './data/user.seed';


@Injectable()
export class SeedService {
  
  constructor(
    readonly usersService : UserService,
    readonly productsService : ProductService,
  ){}

  execSeed() {
    this.usersService.fillUsersWithSeedData(USERS_SEED);
    this.productsService.fillProductsWithSeedData(PRODUCTS_SEED);
    return `SEED executed`;
  }
}
