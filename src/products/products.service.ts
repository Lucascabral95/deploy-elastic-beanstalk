import { Injectable } from '@nestjs/common';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'Mechanical Keyboard', price: 120 },
    { id: 2, name: 'Gaming Mouse', price: 60 },
    { id: 3, name: '27" Monitor', price: 350 },
    { id: 4, name: 'USB-C Hub', price: 45 },
    { id: 5, name: 'Webcam HD', price: 80 },
    { id: 6, name: 'Noise Cancelling Headphones', price: 200 },
    { id: 7, name: 'Laptop Stand', price: 35 },
    { id: 8, name: 'External SSD 1TB', price: 150 },
    { id: 9, name: 'Microphone USB', price: 110 },
    { id: 10, name: 'Mouse Pad XL', price: 25 },
    { id: 11, name: 'Ergonomic Chair', price: 450 },
    { id: 12, name: 'Desk Lamp LED', price: 40 },
    { id: 13, name: 'WiFi Router AX', price: 180 },
    { id: 14, name: 'Bluetooth Speaker', price: 90 },
    { id: 15, name: 'Graphics Tablet', price: 220 },
    { id: 16, name: 'Portable Charger', price: 50 },
    { id: 17, name: 'Smartwatch', price: 170 },
    { id: 18, name: 'VR Headset', price: 400 },
    { id: 19, name: 'Racing Wheel', price: 300 },
    { id: 20, name: 'Game Controller', price: 70 },
    { id: 21, name: '4K Capture Card', price: 250 },
    { id: 22, name: 'NAS 2-Bay', price: 500 },
    { id: 23, name: 'Studio Monitor Speakers', price: 320 },
    { id: 24, name: 'Mechanical Numpad', price: 65 },
    { id: 25, name: 'USB Microphone Arm', price: 55 },
    { id: 26, name: 'Cable Management Kit', price: 30 },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  create(data: Omit<Product, 'id'>): Product {
    const id = this.products.length ? Math.max(...this.products.map((p) => p.id)) + 1 : 1;
    const product: Product = { id, ...data };
    this.products.push(product);
    return product;
  }

  update(id: number, data: Partial<Omit<Product, 'id'>>): Product | undefined {
    const product = this.findOne(id);
    if (!product) return undefined;
    Object.assign(product, data);
    return product;
  }

  remove(id: number): boolean {
    const before = this.products.length;
    this.products = this.products.filter((p) => p.id !== id);
    return this.products.length < before;
  }
}
