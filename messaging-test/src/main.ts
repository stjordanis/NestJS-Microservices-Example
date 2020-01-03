import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: { retryAttempts: 5, retryDelay: 3000, host: '0.0.0.0',port: 3001},
  });
  await app.listenAsync();
}
bootstrap();
