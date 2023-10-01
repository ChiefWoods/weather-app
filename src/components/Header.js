import { Utility } from './Utility.js';
import { Main } from './Main.js';
import { Section } from './Section.js';
import Storage from './Storage.js';
import search from '../icons/magnify.svg';

export const Header = (() => {
  const createHeader = () => {
    const header = document.createElement('header');

    header.append(createSearch(), createSwitch());

    return header;
  }

  const createSearch = () => {
    const form = document.createElement('form');

    const input = Utility.createText('input', ['search-input']);
    input.type = 'text';
    input.placeholder = 'Search Location or Zip Code';

    const button = Utility.createText('button', ['search-button']);
    addSearchHandler(button);

    const searchIcon = Utility.createImg(search, '', 'Search');

    button.append(searchIcon);
    form.append(input, button);

    return form;
  }

  const createSwitch = () => {
    const div = document.createElement('div');
    const toggleCelcius = Utility.createText('span', ['toggle-text'], '°C');

    const label = Utility.createText('label', ['toggle']);
    label.htmlFor = 'measurement';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'measurement';
    input.checked = !Storage.isMetric();

    const slider = Utility.createText('div', ['slider']);
    addToggleHandler(slider);

    label.append(input, slider);

    const toggleFahrenheit = Utility.createText('span', ['toggle-text'], '°F');

    div.append(toggleCelcius, label, toggleFahrenheit);

    return div;
  }

  const addSearchHandler = button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      Utility.toggleOverlay();
      const searchInput = button.previousElementSibling;
      Utility.getForecast(searchInput.value)
        .then(forecast => {
          updateForecast(forecast);
        })
        .catch(() => {
          Main.displayError();
        })
        .finally(() => {
          searchInput.value = '';
          Utility.toggleOverlay();
        })
    })
  }

  const addToggleHandler = slider => {
    slider.addEventListener('click', e => {
      e.stopPropagation();
      Storage.toggleSystem();
      const forecast = Storage.getForecast();
      document.querySelector('main').replaceWith(Main.createMain(forecast));
      document.querySelector('section').replaceWith(Section.createSection(forecast, Storage.isHourly()));
    })
  }

  const updateForecast = forecast => {
    Storage.setForecast(forecast);
    Utility.changeDocumentTitle(forecast.location);
    Utility.changeBackground(forecast.current.condition.code, forecast.location.localtime);
    document.querySelector('main').replaceWith(Main.createMain(forecast));
    document.querySelector('section').replaceWith(Section.createSection(forecast, Storage.isHourly()));
    Main.hideError();
  }

  return { createHeader }
})();
