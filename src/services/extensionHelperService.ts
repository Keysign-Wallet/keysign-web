export default class ExtensionHelperService {
  static validateKSLogin(accountNumber: string): Promise<boolean> {
    return new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      tnb_keysign.requestVerify(accountNumber, (res) => {
        resolve(res);
      });
    });
  }
}
