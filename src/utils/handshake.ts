export const checkKeysign = (successCallback: () => void, failureCallback: () => void) => {
  if (tnb_keysign) tnb_keysign.requestHandshake(successCallback);
  else failureCallback();
};
