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

  // async createUser(username: any): Promise<any> {
  //   const res = await this.streamService.createUser({
  //     username: username.username,
  //   });
  // }
  //

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
    try {
      // check if stream with same name already exists
      const stream = await this.streamService.Stream({
        name: createStreamDto.name,
        User: {
          userId: createStreamDto.userId,
        },
      });

      if (stream) throw new ConflictException();

      const multistream = createStreamDto.multistream;
      console.log(multistream);
      console.log({
        OR: multistream.targets.map((elem) => {
          elem.name;
        }),
      });
      return;

      // check if multistream target exists for the user
      const streamTargets = await this.streamService.streamTargetsForUser(
        {
          AND: [
            {
              userId: createStreamDto.userId,
            },
            {
              multistreamTargets: {
                every: {
                  OR: [
                    {
                      name: {
                        contains: 'twitch',
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
        {
          multistreamTargets: {
            where: {
              name: {
                in: ['createStreamDto.multistream.targets.map((elem) => elem)'],
              },
            },
          },
        },
      );

      console.log(streamTargets);
      const multistreamTargets = await this.streamService.streamForUser({
        userId: createStreamDto.creatorId,
      });
    } catch (error) {
      ExceptionHandler(error);
    }

    // try {
    //   const response = await this.livepeerService.createStream(createStreamDto);
    //   console.log(response);
    //
    //   const data = await transformLivepeerResponse(response.data[0]);
    //
    //   const createEntry = await this.streamService.createStream(data);
    //   console.log(createEntry);
    //   return createEntry;
    // } catch (error) {
    //   ExceptionHandler(error);
    // }
  }
}
