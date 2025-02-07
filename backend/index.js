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

fastify.listen({ port: PORT }, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
