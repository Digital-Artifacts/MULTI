import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidFormDataException extends HttpException {
  constructor(message = 'Invalid form data!') {
    super(message, HttpStatus.BAD_REQUEST);
  }
}

export class ForbiddenException extends HttpException {
  constructor(message = 'User is forbidden from accessing this resource!') {
    super(message, HttpStatus.FORBIDDEN);
  }
}

export class NotFoundException extends HttpException {
  constructor(
    message = 'The resource you were looking for was not found on this server.',
  ) {
    super(message, HttpStatus.NOT_FOUND);
  }
}

export class ConflictException extends HttpException {
  constructor(message = 'The resource already exists') {
    super(message, HttpStatus.CONFLICT);
  }
}

export class ServerErrorException extends HttpException {
  constructor(message = 'There was a server error!') {
    super(message, HttpStatus.METHOD_NOT_ALLOWED);
  }
}

export const ExceptionHandler = (error: any) => {
  console.error(error);
  throw error;
};
