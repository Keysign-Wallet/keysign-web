export const getKeysign = (successCallback, failureCallback) => {
  try {
    window.tnb_keysign.requestHandshake(() => successCallback(window.tnb_keysign));
  } catch (e) {
    failureCallback(e);
  }
};
