import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './controllers/app.controller';
import { TsInterfaceCheckerController } from './controllers/ts-interface-checker.controller';
import { ZodController } from './controllers/zod.controller';

@Module({
  imports: [],
  controllers: [AppController, ZodController, TsInterfaceCheckerController],
  providers: [AppService],
})
export class AppModule {}
