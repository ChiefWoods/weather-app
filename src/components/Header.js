import { Utility } from "./Utility.js";
import Storage from "./Storage.js";
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
    const toggleCelcius = Utility.createText('span', ['toggle-text'], '&#176C');

    const label = Utility.createText('label', ['toggle']);
    label.htmlFor = 'measurement';

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'measurement';

    const slider = Utility.createText('div', ['slider']);
    addToggleHandler(slider);

    label.append(input, slider);

    const toggleFahrenheit = Utility.createText('span', ['toggle-text'], '&#176F');

    div.append(toggleCelcius, label, toggleFahrenheit);

    return div;
  }

  const addSearchHandler = button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      const searchInput = button.previousElementSibling;
      Utility.getForecast(searchInput.value).then(forecast => {
        forecast.location
          ? Utility.changeDocumentTitle(forecast.location)
          : document.querySelector('.error').style.visibility = 'visible';
      })
      searchInput.value = '';
    })
  }

  const addToggleHandler = slider => {
    slider.addEventListener('click', e => {
      e.stopPropagation();
      Storage.toggleSystem();
    })
  }

  return { createHeader }
})();
