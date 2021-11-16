export const userHasScopes = (
  userScopes: string[],
  requiredScopes: string[]
): boolean => {
  if (userScopes.length === 0) return false;

  return requiredScopes.every((scope) => userScopes.includes(scope));
};
