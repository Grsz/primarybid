import { GraphQLError } from 'graphql';
import { v4 as uuid } from 'uuid';

export class GeneralError extends GraphQLError {
  constructor(message: string, extensions?: Record<string, unknown>) {
    super(message, {
      extensions: { id: uuid(), isHandled: true, ...(extensions || {}) },
    });
  }
}
