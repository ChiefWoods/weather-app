import { Header } from './Header.js';
import { Main } from './Main.js';
import { Section } from './Section.js';
import { Footer } from './Footer.js';
import Storage from './Storage.js';

export const Utility = (() => {
  importAllBackgrounds(require.context('../images', false, /\.jpg$/));
  const weatherIcons = importAllIcons(require.context('../icons', true, /\.png$/));

  const weatherCodes = {
    'cloudy': [1006, 1009],
    'foggy': [1030, 1135, 1147],
    'rain': [1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246, 1249, 1252],
    'snowy': [1114, 1117, 1168, 1171, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1255, 1258, 1261, 1264],
    'sunny': [1000, 1003, 1063, 1066, 1069, 1072, 1087],
    'thunder': [1273, 1276, 1279, 1282]
  }

  const initialize = () => {
    addCSSTemplate();
    getForecast('auto:ip').then(forecast => {
      changeDocumentTitle(forecast.location);
      changeBackground(forecast.current.condition.code, forecast.location.localtime);
      document.body.append(
        Header.createHeader(),
        Main.createMain(forecast),
        Section.createSection(forecast),
        createOverlay(),
        Footer.createFooter()
      );
    })

    if (!Storage.isMetric()) {
      Storage.setSystem(true);
    }
  }

  const createText = (element, className, content = '') => {
    const text = document.createElement(element);
    text.classList.add(...className);
    text.textContent = content;

    return text;
  }

  const createImg = (src, className, alt) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add(...className);
    img.alt = alt;

    return img;
  }

  const getForecast = async (locationName) => {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=dfd6961846f943ac97273304232604&q=${locationName}&days=7`)
    const forecast = await response.json();
    return forecast;
  }

  const addCSSTemplate = () => {
    const link = document.createElement('link');
    link.href = 'https://chiefwoods.github.io/footer-template/template.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.head.appendChild(link);
  }

  const changeDocumentTitle = location => {
    document.title = `${location.name}, ${location.region || location.country} | Weather App`;
  }

  const changeBackground = (code, localtime) => {
    let weather = Object.keys(weatherCodes).find(weather => weatherCodes[weather].includes(code));

    if (weather === 'sunny') {
      const hour = new Date(localtime).getHours();

      if (hour >= 19 || hour <= 7) {
        weather = 'night';
      }
    }

    document.body.style.backgroundImage = `url('images/${weather}.jpg')`;
  }

  const getImgSrc = icon => {
    const arr = icon.split('/');
    const parentFolder = arr[arr.length - 2];
    return weatherIcons[parentFolder][truncateNum(icon)];
  }

  const createOverlay = () => {
    const div = createText('div', ['overlay']);
    const p = createText('p', null, 'Fetching data...');

    div.append(p);

    return div;
  }

  function importAllBackgrounds(r) {
    r.keys().forEach(r);
  }

  function importAllIcons(r) {
    const icons = {
      'day': {},
      'night': {},
    };

    r.keys().forEach(item => {
      const parentFolder = item.split('/')[1];
      icons[parentFolder][truncateNum(item)] = r(item);
    })
    return icons;
  }

  function truncateNum(item) {
    const start = item.lastIndexOf('/') + 1;
    const end = item.lastIndexOf('.');
    return parseInt(item.slice(start, end));
  }

  return {
    initialize,
    createText,
    createImg,
    getForecast,
    changeDocumentTitle,
    changeBackground,
    getImgSrc,
    toggleOverlay
  }
})();
