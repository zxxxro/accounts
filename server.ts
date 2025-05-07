import { Bootstraper } from '@zxxxro/anemics'
import AppModule from '~/application/modules/app.module.ts';


// @todo add a settings system and test with enviroment vars
// @todo add a docker image to the project

// axxxount.com (uai)
// api.axxxount.com/[*]

// zxxxro.com (uai)
// api.zxxxro.com/[email|storage]

// stxxxry.com (uai)
// api.stxxxry.com/[*]



async function bootstrap() {
  const app = Bootstraper.create(AppModule);
  await app.listen({ port: 3001 }, app.handler);
}

bootstrap();
