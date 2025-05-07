import AppModule from '~/application/modules/app.module.ts';

import { Bootstraper } from '@zxxxro/anemics';

async function bootstrap() {
  const app = Bootstraper.create(AppModule);
  await app.update()
}

bootstrap();