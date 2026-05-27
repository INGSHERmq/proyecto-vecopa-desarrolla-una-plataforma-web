import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

export const seedUsers = async (prisma: PrismaClient) => {
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const users: { email: string; password: string; name: string; role: Role; phone: string }[] = [
    {
      email: 'admin@vecopa.com',
      password: hashedPassword,
      name: 'Administrador',
      role: Role.ADMIN,
      phone: '+34912345678',
    },
    {
      email: 'cajero@vecopa.com',
      password: hashedPassword,
      name: 'Cajero Principal',
      role: Role.CAJERO,
      phone: '+34987654321',
    },
    {
      email: 'mozo@vecopa.com',
      password: hashedPassword,
      name: 'Mozo Principal',
      role: Role.MOZO,
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