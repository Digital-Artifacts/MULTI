import { Module } from '@nestjs/common';
import { ILivepeerService } from 'src/abstracts';
import { LivepeerService } from './livepeer.service';

@Module({
  providers: [
    {
      provide: ILivepeerService,
      useClass: LivepeerService,
    },
  ],
  exports: [ILivepeerService],
})
export class LivepeerModule { }
