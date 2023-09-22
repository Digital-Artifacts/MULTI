import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    CoreModule,
    // ConfigModule.forRoot({
    //   validationSchema: Joi.object({
    //     NODE_ENV: Joi.string()
    //       .valid('dev', 'prod', 'test', 'provision')
    //       .default('dev'),
    //     PORT: Joi.number().default(3000),
    //   }),
    //   validationOptions: {
    //     allowUnknown: false,
    //     abortEarly: false,
    //   },
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
