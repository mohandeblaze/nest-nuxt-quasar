import { NestFactory } from '@nestjs/core';
import { resolve } from 'path';
import { AppModule } from './app.module';
import { NotFoundExceptionFilter } from './notfoundexception.filter';

const { Nuxt, Builder } = require('nuxt');

const config = require(resolve(__dirname, '../nuxt.config.js'));

config.dev = process.env.NODE_ENV !== 'production';

export const nuxt = new Nuxt(config);

async function bootstrap() {
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  const server = await NestFactory.create(AppModule);
  server.useGlobalFilters(new NotFoundExceptionFilter());
  await server.listen(3000);
}

bootstrap();
