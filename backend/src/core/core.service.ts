import { Injectable } from '@nestjs/common';
import { StreamTargets } from '@prisma/client';
import { ILivepeerService } from 'src/abstracts';
import { CreateStreamTargetDto, LivepeerCreateStreamDto } from 'src/dto';
import { transformLivepeerResponse } from 'src/dto/helpers.transformers';
import { StreamService } from 'src/frameworks/prisma/service/stream.service';
import { ConflictException, ExceptionHandler } from 'src/responses/errors';

@Injectable()
export class CoreService {
  constructor(
    private streamService: StreamService,
    private livepeerService: ILivepeerService,
  ) { }

  async createUser(username: any): Promise<any> {
    const res = await this.streamService.createUser({
      username: username.username,
    });
    return res;
  }

  async createStreamTarget(
    createStreamTargetDto: CreateStreamTargetDto,
  ): Promise<StreamTargets> {
    try {
      // Check if a stream target with given data exists for user
      const streamTarget = await this.streamService.StreamTarget({
        name: createStreamTargetDto.name,
        url: createStreamTargetDto.url,
        userUserId: createStreamTargetDto.userId,
      });

      if (streamTarget) throw new ConflictException();
    } catch (error) {
      ExceptionHandler(error);
    }

    try {
      // delete the userId key from the dto, as its not needed
      delete createStreamTargetDto.userId;

      // make request to livepeer to create new multistream target
      const livepeerCreateStreamTargetResponse =
        await this.livepeerService.createStreamTarget(createStreamTargetDto);

      // store livepeer response on the db
      const createResponse = await this.streamService.createStreamTarget({
        targetId: livepeerCreateStreamTargetResponse.id,
        name: createStreamTargetDto.name,
        url: createStreamTargetDto.url,
        userUserId: livepeerCreateStreamTargetResponse.userId,
        createdAt: livepeerCreateStreamTargetResponse.createdAt.toString(),
      });
      return createResponse;
    } catch (error) {
      ExceptionHandler(error);
    }
  }

  async createStream(createStreamDto: LivepeerCreateStreamDto): Promise<any> {
    let streamTargets: any;
    try {
      // check if stream with same name already exists
      const stream = await this.streamService.Stream({
        name: createStreamDto.name,
        User: {
          userId: createStreamDto.userId,
        },
      });

      if (stream) throw new ConflictException();

      // check if multistream target exists for the user
      streamTargets = await this.streamService.streamTargetsForUser(
        {
          OR: [
            {
              userId: createStreamDto.userId,
            },
            {
              multistreamTargets: {
                every: {
                  OR: createStreamDto.multistream.targets.map((elem) => ({
                    name: {
                      contains: elem.name,
                    },
                  })),
                },
              },
            },
          ],
        },
        {
          multistreamTargets: {
            where: {
              name: {
                in: createStreamDto.multistream.targets.map(
                  (elem) => elem.name,
                ),
              },
            },
          },
        },
      );

      // transform client request to include multistream information
      delete createStreamDto.userId;
      delete createStreamDto.multistream.targets;
      createStreamDto.multistream.targets =
        streamTargets.multistreamTargets.map(
          (target: { targetId: string; profile: string }) => ({
            id: target.targetId,
            profile: target.profile,
          }),
        );
    } catch (error) {
      ExceptionHandler(error);
    }

    try {
      const response = await this.livepeerService.createStream(createStreamDto);

      const data = await transformLivepeerResponse(
        response,
        streamTargets.multistreamTargets,
      );

      const createEntry = await this.streamService.createStream(data);
      return createEntry;
    } catch (error) {
      ExceptionHandler(error);
    }
  }
}
