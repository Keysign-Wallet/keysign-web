export default class BrowserStorageService {
  static setItem(key: string, data: any) {
    sessionStorage.setItem(key, data);
  }

  static clearItem(key: string) {
    sessionStorage.removeItem(key);
  }

  static clearStorage() {
    sessionStorage.clear();
  }

  static getItem(key: string) {
    return sessionStorage.getItem(key);
  }
}
