import LoggerService from '../services/loggerService';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const tnb_keysign: undefined | { requestHandshake: (successCallback: () => void) => void };

export const checkKeysign = (successCallback: () => void, failureCallback: () => void) => {
  LoggerService.log('Login tnb_keysign');
  LoggerService.log(tnb_keysign);
  if (tnb_keysign) tnb_keysign.requestHandshake(successCallback);
  else failureCallback();
};

export const checkValidSignInPair = (signingKey: string, accountNumber: string): boolean => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return tnb.Account.isValidPair(signingKey, accountNumber);
};
