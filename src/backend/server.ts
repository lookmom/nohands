import fastify from 'fastify';

import { IsItFridayYet, IsItFridayYetAnswer } from '@src/shared-interfaces/isItFridayYet';

const server = fastify({ logger: true });

const WEEKDAY_INDEX_FRIDAY = 5;

server.get('/api/v1/is-it-friday-yet', async (request, reply): Promise<IsItFridayYet> => {
  reply.header('Access-Control-Allow-Origin', '*');
  const weekDayIndex = new Date().getDay();
  const itIsFriday = weekDayIndex === WEEKDAY_INDEX_FRIDAY;

  return {
    answer: itIsFriday ? IsItFridayYetAnswer.YES : IsItFridayYetAnswer.NO,
  };
});

server.listen({ host: '127.0.0.1', port: 3000 }).then(() => {
  const addressInfo = server.server.address();
  if (typeof addressInfo === 'string') return;

  const { address, port } = addressInfo;
  console.log(`Listening on http://${address}:${port}/api/v1/is-it-friday-yet`);
});
