export default (() => {
  const backgrounds = importAll(
    import.meta.webpackContext("../images", {
      recursive: true,
      regExp: /\.jpg$/,
    }),
  );

  // Codes that correspond to Weather API conditions
  const weatherCodes = {
    cloudy: [1006, 1009],
    foggy: [1030, 1135, 1147],
    rain: [
      1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243,
      1246, 1249, 1252,
    ],
    snowy: [
      1114, 1117, 1168, 1171, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1255,
      1258, 1261, 1264,
    ],
    sunny: [1000, 1003, 1063, 1066, 1069, 1072, 1087],
    thunder: [1273, 1276, 1279, 1282],
  };

  /**
   * Create a text element with the specified element type, class names, and content.
   * @param {string} ele - The type of element to create.
   * @param {string[]} className - The class names to add to the element.
   * @param {string} [content=""] - The content to add to the element.
   * @returns {HTMLElement} The text element.
   */
  const createText = (ele, className, content = "") => {
    const text = document.createElement(ele);
    text.classList.add(...className.filter((name) => name !== ""));
    text.innerHTML = content;

    return text;
  };

  /**
   * Create an image element with the specified source, class names, and alt text.
   * @param {string} src - The source of the image.
   * @param {string[]} className - The class names to add to the image.
   * @param {string} [alt=""] - The alt text of the image.
   * @param {string} [id=""] - The id of the image.
   * @returns {HTMLImageElement} The image element.
   */
  const createImg = (src, className, alt = "", id = "") => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add(...className);
    img.alt = alt;
    img.id = id;

    return img;
  };

  /**
   * Fetch the weather forecast for the specified location.
   * @param {string} [location=null] - The location to fetch the weather forecast for.
   * @returns {Promise} The weather forecast data.
   */
  const getForecast = (location = null) => {
    const url = new URL("https://api.weatherapi.com/v1/forecast.json");

    // eslint-disable-next-line no-undef
    url.searchParams.append("key", process.env.WEATHER_API_KEY);
    url.searchParams.append("q", location ? location : "auto:ip");
    url.searchParams.append("days", 7);

    return fetch(url)
      .then((res) => res.json())
      .catch(console.error);
  };

  /**
   * Change the document title to include the location name and country.
   * @param {Object} [location=null] - The location object.
   */
  const changeDocumentTitle = (location = null) => {
    document.title = `${location ? `${location.name}, ${location.country} | ` : ""}Weather App`;
  };

  /**
   * Change the page background based on the weather code and local time.
   * @param {number} code - The weather code.
   * @param {string} localtime - The local time.
   */
  const changeBackground = (code, localtime) => {
    let weather = Object.keys(weatherCodes).find((weather) =>
      weatherCodes[weather].includes(code),
    );

    if (weather === "sunny") {
      const hour = new Date(localtime).getHours();

      if (hour >= 19 || hour <= 7) {
        weather = "night";
      }
    }

    document.querySelector("#body").style.backgroundImage =
      `url(${backgrounds[weather]})`;
  };

  /**
   * Import all images in the specified directory.
   * @param {Function} r - The webpack context.
   * @returns {Object} The images.
   */
  function importAll(r) {
    const images = {};

    r.keys().forEach((item) => {
      const name = item.split("/")[1].split(".")[0];

      images[name] = r(item);
    });

    return images;
  }

  /**
   * Check local storage for the user's selection of imperial or metric units.
   * @returns {boolean} The user's selection.
   */
  const isImperial = () => {
    return JSON.parse(localStorage.getItem("isImperial"));
  };

  return {
    createText,
    createImg,
    getForecast,
    changeDocumentTitle,
    changeBackground,
    isImperial,
  };
})();
