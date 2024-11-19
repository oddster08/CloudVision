import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as { prisma?: PrismaClient }

// Prevent multiple instances of Prisma Client in development
export const prisma = globalForPrisma.prisma || new PrismaClient({
  log: ['query', 'error', 'warn'],
})

// Attach Prisma to global object in non-production environments
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}