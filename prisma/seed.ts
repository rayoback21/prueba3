import { PrismaClient } from '@prisma/client';

// inicializa el Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Crear un cliente
  const post1 = await prisma.invoice.upsert({
    where: { name:'Clientes'},
    update: {},
    create: {
      name: 'VentasClientes',
      age: '25',
      gender: 'Masculine and Feminine',
      email: 'cliente@example.com',
      lastSeen: 'Almacenes JUan El Juri',
    },
  });

  // Crear una factura y conectarla al cliente existente
  const post2 = await prisma.invoice.upsert({
    where: { name : 'Gestiones'},
    update: {},
    create: {
     name : 'EjemploClient',
      age: '25',
      gender: 'Masculine and Feminine',
      email: 'cliente@example.com',
      lastSeen: 'Manuel vega',
    },
  });
  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });