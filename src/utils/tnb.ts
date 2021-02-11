declare const tnb: any;

export const checkValidSignInPair = (signingKey: string, accountNumber: string): boolean => {
  return tnb.Account.isValidPair(signingKey, accountNumber);
};

export const createAccount = (accountNumber?: string, signingKey?: string) => {
  return new tnb.Account(signingKey, accountNumber);
};
