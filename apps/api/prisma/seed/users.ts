import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

export const seedUsers = async (prisma: PrismaClient) => {
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const users = [
    {
      email: 'admin@vecopa.com',
      password: hashedPassword,
      name: 'Administrador',
      role: 'ADMIN',
      phone: '+34912345678',
    },
    {
      email: 'cajero@vecopa.com',
      password: hashedPassword,
      name: 'Cajero Principal',
      role: 'CAJERO',
      phone: '+34987654321',
    },
    {
      email: 'mozo@vecopa.com',
      password: hashedPassword,
      name: 'Mozo Principal',
      role: 'MOZO',
      phone: '+34955555555',
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: user,
      create: user,
    });
  }

  console.log(`✅ Seeded ${users.length} users`);
};