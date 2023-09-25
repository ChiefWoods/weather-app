export default class Storage {
  static isMetric() {
    return JSON.parse(localStorage.getItem('isMetric'));
  }

  static setSystem(isMetric) {
    localStorage.setItem('isMetric', JSON.stringify(isMetric));
  }

  static toggleSystem() {
    this.setSystem(!this.isMetric());
  }
}
