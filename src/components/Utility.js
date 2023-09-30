import { Header } from './Header.js';
import { Main } from './Main.js';
import { Section } from './Section.js';
import { Footer } from './Footer.js';
import Storage from './Storage.js';

export const Utility = (() => {
  const weatherIcons = importAllIcons(require.context('../icons', true, /\.png$/));

  const initialize = () => {
    getForecast('auto:ip').then(forecast => {
      changeDocumentTitle(forecast.location);
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

  const changeDocumentTitle = location => {
    document.title = `${location.name}, ${location.region || location.country} | Weather App`;
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
    getImgSrc
  }
})();
