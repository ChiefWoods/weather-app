import { Header } from "./Header.js";
import { Main } from "./Main.js";
import { Section } from "./Section.js";
import { Footer } from "./Footer.js";
import Storage from "./Storage.js";

export const Utility = (() => {
  const weatherIcons = importAll(require.context('../icons/', false, /\.png$/));

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

  const importAll = r => {
    return r.keys().map(r);
  }

  const getImgSrc = icon => {
    const iconPath = icon.split('/').slice(-2).join('/');
    return weatherIcons[iconPath];
  }

  const createOverlay = () => {
    const div = createText('div', ['overlay']);
    const p = createText('p', null, 'Fetching data...');

    div.append(p);

    return div;
  }

  return {
    weatherIcons,
    initialize,
    createText,
    createImg,
    getForecast,
    changeDocumentTitle,
    getImgSrc
  }
})();
