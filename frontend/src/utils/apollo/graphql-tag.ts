export const getNamesFromGqlTags = (...gqlTags: any[]) => {
  return gqlTags.map((tag) => {
    return tag.definitions[0]?.name?.value;
  });
};
