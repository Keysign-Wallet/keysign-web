const ENC_SECRET_KEY = 'my_secret_123#a';
export default class EncryptionService {
  static encryptData(object: any) {
    const data = JSON.stringify(object);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const encrypted = CryptoJS.AES.encrypt(data, ENC_SECRET_KEY);
    return encrypted;
  }

  static decryptData(encrypted: any) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const decrypted = CryptoJS.AES.decrypt(encrypted, ENC_SECRET_KEY);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const object = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    return object;
  }
}
