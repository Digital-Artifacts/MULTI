import { Injectable } from '@nestjs/common';
import { ILivepeerService } from 'src/abstracts';
import RestService from 'src/abstracts/rest-service.abstract';
import { headers } from 'src/config/config';
import { CreateStreamTargetDto, LivepeerCreateStreamDto } from 'src/dto';
import { ExceptionHandler } from 'src/responses/errors';

@Injectable()
export class LivepeerService extends RestService implements ILivepeerService {
  constructor() {
    super(process.env.LIVEPEER_BASE_URL, headers());
  }

  async createStream(createStreamDto: LivepeerCreateStreamDto): Promise<any> {
    try {
      const createStream = await this.post('/stream', createStreamDto);
      const response = createStream.data;
      return response;
    } catch (error) {
      console.warn(error);
      throw error;
    }
  }

  async createStreamTarget(
    createStreamTargetDto: CreateStreamTargetDto,
  ): Promise<any> {
    try {
      const createStreamTarget = await this.post(
        '/multistream/target',
        createStreamTargetDto,
      );

      const response = createStreamTarget.data;
      return response;
    } catch (error) {
      ExceptionHandler(error);
    }
  }
}
