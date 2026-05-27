import { PrismaClient } from '@prisma/client';

export const seedProducts = async (prisma: PrismaClient) => {
  // Query all category records to get their real string IDs
  const beb = await prisma.category.findUnique({ where: { name: 'Bebidas' } });
  const ape = await prisma.category.findUnique({ where: { name: 'Aperitivos' } });
  const pri = await prisma.category.findUnique({ where: { name: 'Platos Principales' } });
  const pos = await prisma.category.findUnique({ where: { name: 'Postres' } });
  const caf = await prisma.category.findUnique({ where: { name: 'Cafés' } });

  if (!beb || !ape || !pri || !pos || !caf) {
    throw new Error('Categories must be seeded before seeding products.');
  }

  const products = [
    {
      name: 'Hamburguesa Clásica',
      description: 'Hamburguesa con carne, lechuga, tomate y cebolla',
      price: 8.99,
      categoryId: pri.id,
      image: 'https://via.placeholder.com/400x300',
      available: true,
      stock: 25,
    },
    {
      name: 'Pizza Margarita',
      description: 'Pizza con tomate, mozzarella y albahaca',
      price: 12.99,
      categoryId: pri.id,
      image: 'https://via.placeholder.com/400x300',
      available: true,
      stock: 15,
    },
    {
      name: 'Coca Cola',
      description: 'Refresco de cola de 500ml',
      price: 2.99,
      categoryId: beb.id,
      image: 'https://via.placeholder.com/400x300',
      available: true,
      stock: 50,
    },
    {
      name: 'Ensalada César',
      description: 'Ensalada con pollo, lechuga, parmesano y crutones',
      price: 7.99,
      categoryId: ape.id,
      image: 'https://via.placeholder.com/400x300',
      available: true,
      stock: 20,
    },
    {
      name: 'Tiramisú',
      description: 'Postre italiano tradicional',
      price: 5.99,
      categoryId: pos.id,
      image: 'https://via.placeholder.com/400x300',
      available: true,
      stock: 12,
    },
    {
      name: 'Café Americano',
      description: 'Café expreso con agua caliente',
      price: 2.99,
      categoryId: caf.id,
      image: 'https://via.placeholder.com/400x300',
      available: true,
      stock: 30,
    },
  ];

  for (const product of products) {
    const existing = await prisma.product.findFirst({
      where: { name: product.name },
    });
    if (existing) {
      await prisma.product.update({
        where: { id: existing.id },
        data: {
          description: product.description,
          price: product.price,
          categoryId: product.categoryId,
          image: product.image,
          available: product.available,
          stock: product.stock,
        },
      });
    } else {
      await prisma.product.create({
        data: product,
      });
    }
  }

  console.log(`✅ Seeded ${products.length} products`);
};