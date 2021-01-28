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
}
