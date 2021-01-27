export const checkValidSignInPair = (signingKey: string, accountNumber: string): boolean => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return Account.isValidPair(signingKey, accountNumber);
};
