import { PrismaClient } from '@prisma/client';

export const seedProducts = async (prisma: PrismaClient) => {
  const products = [
    {
      name: 'Hamburguesa Clásica',
      description: 'Hamburguesa con carne, lechuga, tomate y cebolla',
      price: 8.99,
      categoryId: 1,
      image: 'https://via.placeholder.com/400x300',
      available: true,
    },
    {
      name: 'Pizza Margarita',
      description: 'Pizza con tomate, mozzarella y albahaca',
      price: 12.99,
      categoryId: 1,
      image: 'https://via.placeholder.com/400x300',
      available: true,
    },
    {
      name: 'Coca Cola',
      description: 'Refresco de cola de 500ml',
      price: 2.99,
      categoryId: 1,
      image: 'https://via.placeholder.com/400x300',
      available: true,
    },
    {
      name: 'Ensalada César',
      description: 'Ensalada con pollo, lechuga, parmesano y crutones',
      price: 7.99,
      categoryId: 2,
      image: 'https://via.placeholder.com/400x300',
      available: true,
    },
    {
      name: 'Tiramisú',
      description: 'Postre italiano tradicional',
      price: 5.99,
      categoryId: 4,
      image: 'https://via.placeholder.com/400x300',
      available: true,
    },
    {
      name: 'Café Americano',
      description: 'Café expreso con agua caliente',
      price: 2.99,
      categoryId: 5,
      image: 'https://via.placeholder.com/400x300',
      available: true,
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { name: product.name },
      update: product,
      create: product,
    });
  }

  console.log(`✅ Seeded ${products.length} products`);
};