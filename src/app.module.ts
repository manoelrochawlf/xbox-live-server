import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { jogosModule } from './jogos/jogos.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [jogosModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
