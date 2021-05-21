import { checkKeysign } from '../utils/handshake';

interface KSLoginResult {
  success: boolean;
  data: {
    accountNumber: string;
    request_id: number;
    result: {
      accountNumber: string;
      verified: true;
    };
    type: string;
  };
}

export default class ExtensionHelperService {
  static checkIfExtensionExists(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      checkKeysign(
        () => resolve(true),
        () => reject(new Error('Handshake failed'))
      );
    });
  }

  static validateKSLogin(accountNumber?: string): Promise<KSLoginResult> {
    return new Promise((resolve) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      tnb_keysign.requestVerify(accountNumber, (res) => {
        resolve(res);
      });
    });
  }

  static transferWithKeysign(accountNumber: string, amount: number, bankUrl: string): Promise<KSLoginResult> {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      tnb_keysign.requestTransfer(
        accountNumber,
        amount,
        (res: any) => {
          if (res.success) {
            resolve(res.data);
          } else {
            reject(res.data);
          }
        },
        bankUrl
      );
    });
  }
}
