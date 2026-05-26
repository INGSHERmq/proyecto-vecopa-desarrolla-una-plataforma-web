import { PrismaClient } from '@prisma/client';
import { seedCategories } from './categories';
import { seedProducts } from './products';
import { seedTables } from './tables';
import { seedUsers } from './users';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // Seed categories
  console.log('📂 Seeding categories...');
  await seedCategories(prisma);

  // Seed products
  console.log('🍕 Seeding products...');
  await seedProducts(prisma);

  // Seed tables
  console.log('🪑 Seeding tables...');
  await seedTables(prisma);

  // Seed users
  console.log('👤 Seeding users...');
  await seedUsers(prisma);

  console.log('✅ Database seed completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });