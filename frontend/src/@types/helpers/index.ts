export type Truthy<T> = Exclude<T, false | undefined | null | '' | 0>;

export type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

export type TruthyObject<T> = {
  [K in keyof T]: Exclude<T[K], null>;
};
