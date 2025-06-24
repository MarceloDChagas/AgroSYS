import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import {
  IProductRepository,
  PRODUCT_REPOSITORY,
} from "./repositories/product.repository.interface";
import { CreateProductDto } from "@shared/dto/product/create-product.dto";
import { UpdateProductDto } from "@shared/dto/product/update-product.dto";
import { Product } from "@shared/types/product";
import { EProductStatus } from "@shared/enums/product.enum";

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: IProductRepository
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return await this.productRepository.create(createProductDto);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    return product;
  }

  async findByStatus(status: EProductStatus): Promise<Product[]> {
    return await this.productRepository.findByStatus(status);
  }

  async findByCategory(category: string): Promise<Product[]> {
    return await this.productRepository.findByCategory(category);
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto
  ): Promise<Product> {
    const product = await this.productRepository.update(id, updateProductDto);
    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    return product;
  }

  async remove(id: string): Promise<void> {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Produto com ID ${id} não encontrado`);
    }
    await this.productRepository.delete(id);
  }

  async updateQuantity(id: string, quantity: number): Promise<Product> {
    return await this.update(
      id,
      new UpdateProductDto(undefined, undefined, undefined, quantity)
    );
  }

  async decreaseStock(id: string, quantity: number): Promise<Product> {
    const product = await this.findOne(id);
    const newQuantity = Math.max(0, product.quantity - quantity);
    return await this.updateQuantity(id, newQuantity);
  }

  async increaseStock(id: string, quantity: number): Promise<Product> {
    const product = await this.findOne(id);
    const newQuantity = product.quantity + quantity;
    return await this.updateQuantity(id, newQuantity);
  }
}
