import { uncorrectDataErrorCode, uncorrectDataErrorName } from './error-codes';

export default class UncorrectDataError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = uncorrectDataErrorCode;
    this.name = uncorrectDataErrorName;
  }
}
