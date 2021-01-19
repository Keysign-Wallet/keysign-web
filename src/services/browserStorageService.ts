export default class BrowserStorageService {
  static setItem(key: string, data: any) {
    localStorage.setItem(key, data);
  }

  static clearItem(key: string) {
    localStorage.removeItem(key);
  }

  static clearStorage() {
    localStorage.clear();
  }

  static getItem(key: string) {
    localStorage.getItem(key);
  }
}
