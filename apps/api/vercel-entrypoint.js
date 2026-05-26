const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/src/app.module');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();