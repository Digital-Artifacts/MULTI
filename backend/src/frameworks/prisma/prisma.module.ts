import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { StreamService } from './service/stream.service';

@Module({
  providers: [StreamService, PrismaService],
  exports: [StreamService],
})
export class PrismaDataServiceModule { }
