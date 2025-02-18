class LocaleStorageApi {
  static get(input) {
    return JSON.parse(localStorage.getItem(`${input}`));
  }
  static set(input, data) {
    localStorage.setItem(`${input}`, JSON.stringify(data));
    location.reload();
  }
}
export default LocaleStorageApi;
