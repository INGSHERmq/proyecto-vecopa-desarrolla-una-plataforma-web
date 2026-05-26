import { PrismaClient } from '@prisma/client';

export const seedCategories = async (prisma: PrismaClient) => {
  const categories = [
    { name: 'Bebidas', description: 'Refrescos, jugos, agua', color: '#3B82F6' },
    { name: 'Aperitivos', description: 'Entradas y snacks', color: '#10B981' },
    { name: 'Platos Principales', description: 'Platos fuertes', color: '#F59E0B' },
    { name: 'Postres', description: 'Dulces y postres', color: '#EF4444' },
    { name: 'Cafés', description: 'Cafés y bebidas calientes', color: '#8B5CF6' },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { name: category.name },
      update: category,
      create: category,
    });
  }

  console.log(`✅ Seeded ${categories.length} categories`);
};