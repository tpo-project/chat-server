import { PrismaClient } from '@prisma/client';

export async function seedPlayerStatus(client: PrismaClient) {
  return client.playerStatus.createMany({
    data: [
      {
        name: 'Online',
      },
      {
        name: 'Offline',
      },
      {
        name: 'In room',
      },
      {
        name: 'Match finding',
      },
      {
        name: 'In match',
      },
    ],
  });
}
