import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import {
  CreateStreamDto,
  CreateStreamTargetDto,
  LivepeerCreateStreamDto,
} from 'src/dto';
import { CreateStreamSchema, streamTargetSchema } from 'src/schema';

export class ValidatorPipe
  implements PipeTransform<CreateStreamDto, LivepeerCreateStreamDto>
{
  public transform(
    query: CreateStreamDto,
    metadata: ArgumentMetadata,
  ): LivepeerCreateStreamDto {
    const result = CreateStreamSchema.validate(query, {
      convert: true,
    });

    if (result.error) {
      const errorMessages = result.error.details.map((d) => d.message).join();
      throw new BadRequestException(errorMessages);
    }

    const validLivepeerCreateDto = result.value;
    return {
      userId: process.env.CREATOR_ID,
      name: validLivepeerCreateDto.stream_name,
      creatorId: process.env.CREATOR_ID,
      playbackPolicy: {
        type: validLivepeerCreateDto.type,
        webhookId: validLivepeerCreateDto.webhookId || '',
        webhookContext: validLivepeerCreateDto.webhookContext || '',
      },
      multistream: validLivepeerCreateDto.multistream,
    } as LivepeerCreateStreamDto;
  }
}

export class CreateStreamTargetPipe
  implements PipeTransform<CreateStreamTargetDto, CreateStreamTargetDto>
{
  public transform(
    value: CreateStreamTargetDto,
    metadata: ArgumentMetadata,
  ): CreateStreamTargetDto {
    const result = streamTargetSchema.validate(value, {
      convert: true,
    });

    if (result.error) {
      const errorMessages = result.error.details.map((d) => d.message).join();
      throw new BadRequestException(errorMessages);
    }

    const validDto = result.value;

    return {
      url: validDto.url,
      name: validDto.name,
      disabled: validDto.disabled,
      userId: validDto.userId,
    } as CreateStreamTargetDto;
  }
}
