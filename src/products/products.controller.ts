import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import * as productsService_1 from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: productsService_1.ProductsService) {}

  @Get()
  getAll(): productsService_1.Product[] {
    return this.productsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): productsService_1.Product {
    const product = this.productsService.findOne(Number(id));
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  @Post()
  create(
    @Body()
    body: {
      name: string;
      price: number;
    },
  ): productsService_1.Product {
    return this.productsService.create(body);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    body: {
      name?: string;
      price?: number;
    },
  ): productsService_1.Product {
    const product = this.productsService.update(Number(id), body);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  @Delete(':id')
  remove(@Param('id') id: string): { deleted: boolean } {
    const deleted = this.productsService.remove(Number(id));
    if (!deleted) {
      throw new NotFoundException('Product not found');
    }
    return { deleted };
  }
}
