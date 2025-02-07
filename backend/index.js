import Fastify from 'fastify';
import dotenv from 'dotenv';
import fastifyJwt from '@fastify/jwt';
import { PrismaClient } from '@prisma/client';

dotenv.config();
const fastify = Fastify({ logger: true });
const prisma = new PrismaClient();

fastify.get('/', async (req, res) => {
  return { message: 'Lightweight API Running!' };
});

fastify.listen({ port: 3001 }, () => {
  console.log('Backend running on http://localhost:3001');
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
