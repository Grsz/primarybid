import { contextFunction } from '../graphql/server';

type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

export type Context = Awaited<ReturnType<typeof contextFunction>>;
