export const removeTypenames = <T>(data: T): T =>
  JSON.parse(JSON.stringify(data), (key, value) =>
    key === '__typename' ? undefined : value,
  );
