import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import {
  CreateStreamTargetDto,
  GetUserStreamsDto,
  LivepeerCreateStreamDto,
  PatchStreamDto,
} from 'src/dto';
import { ValidatorPipe, CreateStreamTargetPipe } from 'src/validator/pipe';
import { CoreService } from './core.service';
import { StreamTargets, Stream } from '@prisma/client';
import { QueryValidatorPipe } from 'src/validator/query.pipe';
import { PatchQueryValidatorPipe } from 'src/validator/patch.pipe';

@Controller('core')
export class CoreController {
  constructor(private coreService: CoreService) { }

  @Get('/stream')
  async getStreams(
    @Query(new QueryValidatorPipe()) getUserStreamsDto: GetUserStreamsDto,
  ): Promise<Stream[]> {
    return await this.coreService.getStreams(getUserStreamsDto);
  }

  @Post('/stream')
  async createStream(
    @Body(new ValidatorPipe()) createStreamDto: LivepeerCreateStreamDto,
  ): Promise<Stream> {
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

  @Patch('/stream')
  async patchStream(
    @Query(new PatchQueryValidatorPipe()) patchStreamDto: PatchStreamDto,
  ): Promise<Stream> {
    return this.coreService.patchStream(patchStreamDto);
  }

  @Post('/user')
  async createUser(@Body() username: any) {
    return await this.coreService.createUser(username);
  }
}
