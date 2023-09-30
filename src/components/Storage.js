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

  static getForecast() {
    return JSON.parse(sessionStorage.getItem('forecast'));
  }

  static setForecast(forecast) {
    sessionStorage.setItem('forecast', JSON.stringify(forecast));
  }

  static isHourly() {
    return JSON.parse(localStorage.getItem('isHourly'));
  }

  static setHourly(isHourly) {
    localStorage.setItem('isHourly', JSON.stringify(isHourly));
  }

  static toggleHourly() {
    this.setHourly(!this.isHourly());
  }
}
