import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const statuses = await prisma.status.createMany({
    data: [{ description: 'Finalizado' }, { description: 'Por Terminar' }],
  });
  const types_incidents = await prisma.type_incidents.createMany({
    data: [
      { description: 'Ambientales' },
      { description: 'Eléctricos' },
      { description: 'Equipos' },
      { description: 'Personal' },
      { description: 'Comunicación' },
      { description: 'Externos' },
    ],
  });
  const type_users = await prisma.typeusers.createMany({
    data: [
      { description: 'Usuario' },
      { description: 'Administrador' },
      { description: 'Supervisor' },
    ],
  });

  const room = await prisma.room.createMany({
    data: [
      { name: 'A1' },
      { name: 'A2' },
      { name: 'A3' },
      { name: 'A4' },
      { name: 'A5' },
      { name: 'A6' },
      { name: 'A7' },
      { name: 'A8' },
      { name: 'A9' },
      { name: 'A10' },
      { name: 'B1' },
      { name: 'B2' },
      { name: 'B3' },
      { name: 'B4' },
      { name: 'B5' },
      { name: 'B6' },
      { name: 'B7' },
      { name: 'B8' },
      { name: 'B9' },
      { name: 'B10' },
    ],
  });

  const user = await prisma.users.createMany({
    data: [
      {
        username: 'Pedro',
        email: 'pedromolinawanoaa@gmail.com',
        password: 'abc123aA-',
        type_user_id: 1,
      },
      {
        username: 'Sebastian',
        email: 'sebastianllamuca@gmail.com',
        password: 'abc123aA-',
        type_user_id: 1,
      },
    ],
  });
  console.log(statuses, types_incidents, type_users, user, room);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
