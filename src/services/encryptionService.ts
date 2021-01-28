import * as CryptoJS from 'crypto-js';

const ENC_SECRET_KEY = 'rjk=venn4$#*&bcobx9h_xr=7#_0s@k@g91nyr6@5ev+vcf3z&';
export default class EncryptionService {
  static encryptData(object: any) {
    const data = JSON.stringify(object);
    return CryptoJS.AES.encrypt(data, ENC_SECRET_KEY);
  }

  static decryptData(encrypted: any) {
    const decrypted = CryptoJS.AES.decrypt(encrypted, ENC_SECRET_KEY);
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
  }
}
