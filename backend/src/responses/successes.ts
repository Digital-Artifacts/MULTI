import { HttpException, HttpStatus } from '@nestjs/common';

export class SuccessResponse extends HttpException {
  constructor(message = 'Successful', data?: any) {
    super({ message, data }, HttpStatus.OK);

    delete this.message;
    delete this.name;
  }
}
