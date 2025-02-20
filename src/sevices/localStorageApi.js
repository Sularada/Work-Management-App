class LocaleStorageApi {
  static get(input) {
    if (JSON.parse(localStorage.getItem(`${input}`)) == null) {
      localStorage.setItem(`${input}`, JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem(`${input}`));
  }
  static set(input, data) {
    localStorage.setItem(`${input}`, JSON.stringify(data));
    location.reload();
  }
  static employeeSet(data) {
    localStorage.setItem(`employee`, JSON.stringify(data));
    location.reload();
  }
  static employeeGet() {
    if (JSON.parse(localStorage.getItem(`employee`)) == null) {
      localStorage.setItem(`employee`, JSON.stringify(["Select Employee"]));
    }
    return JSON.parse(localStorage.getItem(`employee`));
  }
}
export default LocaleStorageApi;
