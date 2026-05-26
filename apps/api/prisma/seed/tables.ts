import { PrismaClient } from '@prisma/client';

export const seedTables = async (prisma: PrismaClient) => {
  const tables = [
    { number: 1, capacity: 4, status: 'AVAILABLE' },
    { number: 2, capacity: 2, status: 'AVAILABLE' },
    { number: 3, capacity: 6, status: 'OCCUPIED' },
    { number: 4, capacity: 4, status: 'AVAILABLE' },
    { number: 5, capacity: 8, status: 'RESERVED' },
    { number: 6, capacity: 2, status: 'AVAILABLE' },
    { number: 7, capacity: 4, status: 'AVAILABLE' },
    { number: 8, capacity: 6, status: 'OCCUPIED' },
    { number: 9, capacity: 4, status: 'AVAILABLE' },
    { number: 10, capacity: 2, status: 'AVAILABLE' },
  ];

  for (const table of tables) {
    await prisma.table.upsert({
      where: { number: table.number },
      update: table,
      create: table,
    });
  }

  console.log(`✅ Seeded ${tables.length} tables`);
};