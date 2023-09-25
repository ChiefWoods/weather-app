import Storage from "./Storage.js";

export const Utility = (() => {
  const initialize = () => {
    getForecast('auto:ip').then(forecast => {
      changeDocumentTitle(forecast.location);
    })

    if (!Storage.isMetric()) {
      Storage.setSystem(true);
    }
  }

  const createText = (element, className, content = null) => {
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

  return {
    initialize,
    createText,
    createImg,
    getForecast,
    changeDocumentTitle
  }
})();
