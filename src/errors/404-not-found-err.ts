import { notFoundCode, notFoundName } from './error-codes';

export default class NotFoundError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = notFoundCode;
    this.name = notFoundName;
  }
}
