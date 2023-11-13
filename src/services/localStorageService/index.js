export const localStorageService = {
  getItem: (key) => JSON.parse(window.localStorage.getItem(key)),
};
