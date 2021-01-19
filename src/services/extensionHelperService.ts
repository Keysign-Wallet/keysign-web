// eslint-disable-next-line @typescript-eslint/naming-convention
declare const tnb_keysign:
  | undefined
  | { requestHandshake: (successCallback: () => void, errCallback: () => any) => void };

export default class ExtensionHelperService {
  static checkIfExtensionExists(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      tnb_keysign.requestHandshake(
        () => resolve(true),
        () => {
          return reject(new Error('Handshake failed'));
        }
      );
    });
  }

  static validateKSLogin(accountNumber: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      tnb_keysign.requestVerify(accountNumber, (res) => {
        console.log(res);
        resolve(res);
      });
    });
  }
}
