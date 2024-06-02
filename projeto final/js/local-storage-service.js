class LocalStorageService {
  constructor(namespace) {
    this.namespace = namespace;
  }

  setItem(key, value) {
    const namespacedKey = this._getNamespacedKey(key);
    const stringValue = JSON.stringify(value);
    localStorage.setItem(namespacedKey, stringValue);
  }

  getItem(key) {
    try {
      const namespacedKey = this._getNamespacedKey(key);
      const stringValue = localStorage.getItem(namespacedKey);
      return JSON.parse(stringValue);
    } catch (error) {
      console.error(`Error getting item ${key} from localStorage`, error);
      return null;
    }
  }

  removeItem(key) {
    try {
      const namespacedKey = this._getNamespacedKey(key);
      localStorage.removeItem(namespacedKey);
    } catch (error) {
      console.error(`Error removing item ${key} from localStorage`, error);
    }
  }

  clear() {
    try {
      Object.keys(localStorage)
        .filter(key => key.startsWith(this.namespace))
        .forEach(key => localStorage.removeItem(key));
    } catch (error) {
      console.error(`Error clearing items from localStorage`, error);
    }
  }

  _getNamespacedKey(key) {
    return `${this.namespace}:${key}`;
  }
}

export default LocalStorageService;