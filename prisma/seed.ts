import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function seed() {
  // Clean the database
  await prisma.cartItem.deleteMany();
  await prisma.variant.deleteMany();
  await prisma.product.deleteMany();
  await prisma.user.deleteMany();

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: hashedPassword
    },
  });

  // Create products with variants
  const products = [
    {
      name: 'Classic T-Shirt',
      description: 'A comfortable cotton t-shirt for everyday wear',
      slug: 'classic-t-shirt',
      variants: [
        {
          sku: 'CTS-BLK-S',
          color: 'Black',
          size: 'S',
          price: 29.99,
          stock: 100,
          image: '/images/classic-tshirt-black.jpg',
        },
        {
          sku: 'CTS-WHT-M',
          color: 'White',
          size: 'M',
          price: 29.99,
          stock: 150,
          image: '/images/classic-tshirt-white.jpg',
        },
      ],
    },
    {
      name: 'Slim Fit Jeans',
      description: 'Modern slim fit jeans with stretch comfort',
      slug: 'slim-fit-jeans',
      variants: [
        {
          sku: 'SFJ-BLU-32',
          color: 'Blue',
          size: '32',
          price: 79.99,
          stock: 75,
          image: '/images/slim-jeans-blue.jpg',
        },
      ],
    },
    {
      name: 'Running Shoes',
      description: 'Lightweight running shoes for maximum comfort',
      slug: 'running-shoes',
      variants: [
        {
          sku: 'RS-BLK-42',
          color: 'Black',
          size: '42',
          price: 129.99,
          stock: 50,
          image: '/images/running-shoes-black.jpg',
        },
        {
          sku: 'RS-RED-43',
          color: 'Red',
          size: '43',
          price: 129.99,
          stock: 35,
          image: '/images/running-shoes-red.jpg',
        },
      ],
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        slug: product.slug,
        variants: {
          create: product.variants,
        },
      },
    });
  }

  console.log('Database seeded successfully');
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
