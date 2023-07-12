import { ApolloError } from 'apollo-server-errors';

export default class AppError extends ApolloError {
  constructor(code, message) {
    super(message, code);
    Object.defineProperty(this, 'name', { value: 'NotFoundError' });
  }
}