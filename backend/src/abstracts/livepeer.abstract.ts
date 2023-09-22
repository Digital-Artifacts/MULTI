import { LivepeerCreateStreamDto } from 'src/dto';

export abstract class ILivepeerService {
  abstract createStream(createStreamDto: LivepeerCreateStreamDto): Promise<any>;

  abstract createStreamTarget(createStreamTargetDto: any): Promise<any>;
}
