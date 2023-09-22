import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStreamTargetDto, LivepeerCreateStreamDto } from 'src/dto';
import { ValidatorPipe, CreateStreamTargetPipe } from 'src/validator/pipe';
import { CoreService } from './core.service';
import { StreamTargets } from '@prisma/client';

@Controller('core')
export class CoreController {
  constructor(private coreService: CoreService) { }

  @Get('/stream')
  async createStream(
    @Body(new ValidatorPipe()) createStreamDto: LivepeerCreateStreamDto,
  ): Promise<any> {
    await this.coreService.createStream(createStreamDto);
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

  // @Post('/user')
  // async createUser(@Body() username: any) {
  //   await this.coreService.createUser(username);
  // }
}
