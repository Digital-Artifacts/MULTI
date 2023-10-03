import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { GetUserStreamsDto } from 'src/dto';
import { GetUserStreamsSchema } from 'src/schema';

export class QueryValidatorPipe implements PipeTransform {
  public transform(query: GetUserStreamsDto, metadata: ArgumentMetadata) {
    const result = GetUserStreamsSchema.validate(query, {
      convert: true,
    });

    if (result.error) {
      const errorMessages = result.error.details.map((d) => d.message).join();
      throw new BadRequestException(errorMessages);
    }

    return query;
  }
}
