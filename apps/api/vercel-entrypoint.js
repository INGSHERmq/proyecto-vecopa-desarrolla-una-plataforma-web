// This is the main entry point for the Vercel serverless function
import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';

export async function handler(event, context) {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'],
    credentials: true,
  });

  await app.init();
  
  const httpAdapter = app.getHttpAdapter();
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({ message: 'API is running' }),
  };
}