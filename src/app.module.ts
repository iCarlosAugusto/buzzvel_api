import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_PIPE } from '@nestjs/core';
import { PrismaService } from './common/prisma.service';
import { TaskRepository } from './repositories/task.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    TaskRepository,
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
