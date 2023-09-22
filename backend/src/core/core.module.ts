import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CoreService } from './core.service';
import { LivepeerModule } from 'src/frameworks/livepeer/livepeer.module';
import { PrismaDataServiceModule } from 'src/frameworks/prisma/prisma.module';

@Module({
  imports: [LivepeerModule, PrismaDataServiceModule],
  controllers: [CoreController],
  providers: [CoreService],
})
export class CoreModule { }
