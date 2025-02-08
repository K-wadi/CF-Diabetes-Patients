import Fastify from 'fastify';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();
const fastify = Fastify({ logger: true });
const prisma = new PrismaClient();

fastify.get('/', async (req, res) => {
  return { message: 'Lightweight API Running!' };
});

const PORT = process.env.PORT || 3001;
fastify.listen({ port: PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server running at ${address}`);
});
