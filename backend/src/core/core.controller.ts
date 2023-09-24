import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import {
  CreateStreamTargetDto,
  GetUserStreamsDto,
  LivepeerCreateStreamDto,
} from 'src/dto';
import { ValidatorPipe, CreateStreamTargetPipe } from 'src/validator/pipe';
import { CoreService } from './core.service';
import { StreamTargets, Stream } from '@prisma/client';

@Controller('core')
export class CoreController {
  constructor(private coreService: CoreService) { }

  @Get('/stream')
  async getStreams(
    @Query('username') getUserStreamsDto: GetUserStreamsDto,
  ): Promise<any> {
    return await this.coreService.getStream(getUserStreamsDto);
  }

  @Post('/stream')
  async createStream(
    @Body(new ValidatorPipe()) createStreamDto: LivepeerCreateStreamDto,
  ): Promise<any> {
    return await this.coreService.createStream(createStreamDto);
  }

  @Post('/stream-target')
  async createStreamTarget(
    @Body(new CreateStreamTargetPipe())
    createStreamTargetDto: CreateStreamTargetDto,
  ): Promise<StreamTargets> {
    const res = await this.coreService.createStreamTarget(
      createStreamTargetDto,
    );
    return res;
  }

  @Post('/user')
  async createUser(@Body() username: any) {
    return await this.coreService.createUser(username);
  }
}
