import { Utility } from './Utility.js';
import Storage from './Storage.js';
import { format } from 'date-fns';

export const Section = (() => {
  const createSection = (forecast, isHourly) => {
    const section = document.createElement('section');
    const isMetric = Storage.isMetric();

    section.append(
      createOptions(),
      isHourly
        ? createForecastHourly(forecast, isMetric)
        : createForecastDaily(forecast, isMetric)
    )

    return section;
  }

  const createOptions = () => {
    const div = Utility.createText('div', ['forecast-options']);

    const hourly = Utility.createText('button', ['hourly-button'], 'Hourly');
    hourly.disabled = Storage.isHourly();
    addHourlyHandler(hourly);

    const daily = Utility.createText('button', ['daily-button'], 'Daily');
    daily.disabled = !Storage.isHourly();
    addDailyHandler(daily);

    div.append(hourly, daily);

    return div;
  }

  const createForecastHourly = (forecast, isMetric) => {
    const ul = Utility.createText('ul', ['forecast-hourly']);

    const currentHour = forecast.current.last_updated.split(' ')[1].split(':')[0];
    const firstTwoDays = [forecast.forecast.forecastday[0], forecast.forecast.forecastday[1]];
    const firstTwoDaysHours = firstTwoDays.flatMap(dayObj => dayObj.hour);
    const index = firstTwoDaysHours.findIndex(hourObj => hourObj.time.split(' ')[1].split(':')[0] === currentHour);
    const twentyFourHours = firstTwoDaysHours.slice(index, index + 24);
    const liArr = [];

    for (const hourObj of twentyFourHours) {
      const isNow = hourObj.time.split(' ')[1].split(':')[0] === currentHour;
      liArr.push(createHourlyLi(hourObj, isMetric, isNow));
    }

    ul.append(...liArr);

    return ul;
  }

  const createHourlyLi = (hourObj, isMetric, isNow) => {
    const li = document.createElement('li');

    const time = Utility.createText('p', ['hourly-time'], isNow ? 'Now' : formatTime(hourObj.time.split(' ')[1]));
    const img = Utility.createImg(Utility.getImgSrc(hourObj.condition.icon), ['forecast-icons'], hourObj.condition.text);
    const temp = Utility.createText('p', ['hourly-temp'], getTempHourly(hourObj, isMetric));

    li.append(time, img, temp);

    return li;
  }

  const createForecastDaily = (forecast, isMetric) => {
    const ul = Utility.createText('ul', ['forecast-daily']);

    const todayDate = forecast.location.localtime.split(' ')[0];
    const weekDays = [forecast.forecast.forecastday[0], forecast.forecast.forecastday[1], forecast.forecast.forecastday[2]];
    const liArr = [];

    for (const dayObj of weekDays) {
      const isToday = dayObj.date === todayDate;
      liArr.push(createDailyLi(dayObj, isMetric, isToday));
    }

    ul.append(...liArr);

    return ul;
  }

  const createDailyLi = (dayObj, isMetric, isToday) => {
    const li = document.createElement('li');

    const day = Utility.createText('p', ['daily-day'], isToday ? 'Today' : formatDay(dayObj.date));
    const img = Utility.createImg(Utility.getImgSrc(dayObj.day.condition.icon), ['forecast-icons'], dayObj.day.condition.text);
    const tempMax = Utility.createText('p', ['daily-temp-max'], getMaxTemp(dayObj, isMetric));
    const tempMin = Utility.createText('p', ['daily-temp-min'], getMinTemp(dayObj, isMetric));

    li.append(day, img, tempMax, tempMin);

    return li;
  }

  const addHourlyHandler = button => {
    button.addEventListener('click', () => {
      Storage.setHourly(true);
      toggleDisabled();
      document.querySelector('.forecast-daily').replaceWith(createForecastHourly(Storage.getForecast(), Storage.isMetric()));
    })
  }

  const addDailyHandler = button => {
    button.addEventListener('click', () => {
      Storage.setHourly(false);
      toggleDisabled();
      document.querySelector('.forecast-hourly').replaceWith(createForecastDaily(Storage.getForecast(), Storage.isMetric()));
    })
  }

  const toggleDisabled = () => {
    const hourly = document.querySelector('.hourly-button');
    const daily = document.querySelector('.daily-button');

    hourly.disabled = !hourly.disabled;
    daily.disabled = !daily.disabled;
  }

  const formatTime = timeStr => {
    const hour = parseInt(timeStr.split(':')[0]);
    const period = hour >= 12 ? 'pm' : 'am';
    return `${hour > 12 ? hour - 12 : hour === 0 ? 12 : hour} ${period}`;
  }

  const formatDay = dateStr => {
    return format(new Date(dateStr), 'EEE');
  }

  const getTempHourly = (hourObj, isMetric) => {
    return `${isMetric ? `${Math.round(hourObj.temp_c)} °C` : `${Math.round(hourObj.temp_f)} °F`}`;
  }

  const getMaxTemp = (dayObj, isMetric) => {
    return `${isMetric ? `${Math.round(dayObj.day.maxtemp_c)} °C` : `${Math.round(dayObj.day.maxtemp_f)} °F`}`;
  }

  const getMinTemp = (dayObj, isMetric) => {
    return `${isMetric ? `${Math.round(dayObj.day.mintemp_c)} °C` : `${Math.round(dayObj.day.mintemp_f)} °F`}`;
  }

  return { createSection }
})();
