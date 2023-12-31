import { Utility } from './Utility.js';
import Storage from './Storage.js';
import { format } from 'date-fns';
import feelsLike from '../icons/thermometer-lines.svg';
import precipitation from '../icons/weather-pouring.svg';
import humidity from '../icons/water-percent.svg';
import windSpeed from '../icons/weather-windy.svg';

export const Main = (() => {
  const createMain = forecast => {
    const main = document.createElement('main');
    const isMetric = Storage.isMetric();

    main.append(
      createCurrentInfo(forecast, isMetric),
      createCurrentDetail(forecast, isMetric)
    );

    return main;
  }

  const createCurrentInfo = (forecast, isMetric) => {
    const div = Utility.createText('div', ['current-info']);

    const error = Utility.createText('p', ['error']);
    error.innerHTML = 'Location not found.<br>Search must be in the form of "City", "City, State" or "City, Country".';

    const container = document.createElement('div');

    const location = Utility.createText('p', ['current-location'], getLocation(forecast.location));
    const day = Utility.createText('p', ['current-day'], getDay(forecast.location.localtime));
    const time = Utility.createText('p', ['current-time'], getTime(forecast.location.localtime));
    const temp = Utility.createText('p', ['current-temp'], getTemp(forecast.current, isMetric));
    const img = Utility.createImg(Utility.getImgSrc(forecast.current.condition.icon), ['current-condition'], forecast.current.condition.text);
    const condition = Utility.createText('p', ['condition-text'], forecast.current.condition.text);

    container.append(location, day, time, temp, img, condition);
    div.append(error, container);

    return div;
  }

  const createCurrentDetail = (forecast, isMetric) => {
    const ul = Utility.createText('ul', ['current-detail']);

    ul.append(
      createDetailLi('Feels Like', forecast.current, isMetric),
      createDetailLi('Precipitation', forecast.current, isMetric),
      createDetailLi('Humidity', forecast.current, isMetric),
      createDetailLi('Wind Speed', forecast.current, isMetric)
    );

    return ul;
  }

  const createDetailLi = (detail, current, isMetric) => {
    const li = document.createElement('li');

    const img = (() => {
      const imgSrc = detail === 'Feels Like'
        ? feelsLike
        : detail === 'Precipitation'
          ? precipitation
          : detail === 'Humidity'
            ? humidity
            : windSpeed;
      return Utility.createImg(imgSrc, ['detail-icon'], detail);
    })();

    const title = Utility.createText('p', ['detail-title'], detail);

    const text = (() => {
      const content = detail === 'Feels Like'
        ? isMetric
          ? `${Math.round(current.feelslike_c)} °C`
          : `${Math.round(current.feelslike_f)} °F`
        : detail === 'Precipitation'
          ? isMetric
            ? `${current.precip_mm} mm`
            : `${current.precip_in} in`
          : detail === 'Humidity'
            ? `${current.humidity} %`
            : isMetric
              ? `${current.wind_kph} km/h`
              : `${current.wind_mph} mph`;
      return Utility.createText('p', ['detail-text'], content);
    })();

    li.append(img, title, text);

    return li;
  }

  const displayError = () => {
    const error = document.querySelector('.error');
    error.style.visibility = 'visible';
  }

  const hideError = () => {
    const error = document.querySelector('.error');
    error.style.visibility = 'hidden';
  }

  const getLocation = location => {
    return `${location.name}, ${location.country}`;
  }

  const getDay = localtime => {
    const [year, month, day] = localtime.split(' ')[0].split('-');
    return format(new Date(year, month - 1, day), 'EEEE, dd MMMM');
  }

  const getTime = localtime => {
    const [hours, minutes] = localtime.split(' ')[1].split(':');
    return format(new Date().setHours(hours, minutes), 'h:mm a');
  }

  const getTemp = (current, isMetric) => {
    return `${isMetric ? `${Math.round(current.temp_c)} °C` : `${Math.round(current.temp_f)} °F`}`;
  }

  return {
    createMain,
    displayError,
    hideError
  }
})();
