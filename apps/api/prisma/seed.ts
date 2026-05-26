import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');
  
  // Create a test category
  const category = await prisma.category.create({
    data: {
      name: 'Test Category',
      description: 'A test category',
      color: '#3B82F6',
    },
  });

  // Create a test product
  const product = await prisma.product.create({
    data: {
      name: 'Test Product',
      description: 'A test product',
      price: 9.99,
      categoryId: category.id,
      available: true,
    },
  });

  // Create a test table
  const table = await prisma.table.create({
    data: {
      number: 1,
      capacity: 4,
      status: 'AVAILABLE',
    },
  });

  // Create a test user
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      password: 'hashedpassword',
      name: 'Test User',
      role: 'CAJERO',
    },
  });

  console.log('✅ Database seed completed!');
  console.log('Created:', { category, product, table, user });
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });