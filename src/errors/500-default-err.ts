import { defaultErrorCode, defaultErrorName } from './error-codes';

export default class DefaultError extends Error {
  statusCode: Number;

  constructor(message: string) {
    super(message);
    this.statusCode = defaultErrorCode;
    this.name = defaultErrorName;
  }
}
