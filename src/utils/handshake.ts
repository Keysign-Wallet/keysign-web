// eslint-disable-next-line @typescript-eslint/naming-convention
declare const tnb_keysign: undefined | { requestHandshake: (successCallback: () => void) => void };

export const checkKeysign = (successCallback: () => void, failureCallback: () => void) => {
  console.log('Loggin tnb_keysign');
  console.log(tnb_keysign);
  if (tnb_keysign) tnb_keysign.requestHandshake(successCallback);
  else failureCallback();
};
