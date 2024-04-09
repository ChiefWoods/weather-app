import Utility from "./Utility.js";
import { format } from "date-fns";
import feelsLike from "../icons/thermometer-lines.svg";
import precipitation from "../icons/weather-pouring.svg";
import humidity from "../icons/water-percent.svg";
import windSpeed from "../icons/weather-windy.svg";

export default (() => {
  let errorMsg;

  /**
   * Create the page section on the current weather.
   * @param {Object} data - The weather data.
   * @returns {HTMLElement} The current weather section.
   */
  const createCurrent = (data) => {
    const isImperial = Utility.isImperial();

    const main = document.createElement("main");

    errorMsg = Utility.createText("p", ["error-msg"]);

    const info = Utility.createText("section", ["info"]);

    const localTimeSplit = data.location.localtime.split(" ");

    const [year, month, day] = localTimeSplit[0].split("-");
    const currentDay = format(new Date(year, month - 1, day), "EEEE, dd MMMM");

    const [hours, minutes] = localTimeSplit[1].split(":");
    const currentTime = format(new Date().setHours(hours, minutes), "h:mm a");

    info.append(
      Utility.createText(
        "h1",
        ["current-location"],
        `${data.location.name}, ${data.location.country}`,
      ),
      Utility.createText("p", ["current-day"], currentDay),
      Utility.createText("p", ["current-time"], currentTime),
      Utility.createText(
        "p",
        ["current-temp"],
        `${
          isImperial
            ? `${Math.round(data.current.temp_f)} &#176;F`
            : `${Math.round(data.current.temp_c)} &#176;C`
        }`,
      ),
      Utility.createImg(data.current.condition.icon, ["current-icon"]),
      Utility.createText(
        "p",
        ["current-condition"],
        data.current.condition.text,
      ),
    );

    const detail = Utility.createText("ul", ["detail"]);

    detail.append(
      createStat(
        feelsLike,
        "Feels Like",
        `${
          isImperial
            ? `${Math.round(data.current.feelslike_f)} &#176;F`
            : `${Math.round(data.current.feelslike_c)} &#176;C`
        }`,
      ),
      createStat(
        precipitation,
        "Precipitation",
        `${
          isImperial
            ? `${data.current.precip_in} in`
            : `${data.current.precip_mm} mm`
        }`,
      ),
      createStat(humidity, "Humidity", `${data.current.humidity} %`),
      createStat(
        windSpeed,
        "Wind Speed",
        `${
          isImperial
            ? `${data.current.wind_mph} mph`
            : `${data.current.wind_kph} km/h`
        }`,
      ),
    );

    main.append(errorMsg, info, detail);

    return main;
  };

  /**
   * Display an error message.
   * @param {Object} err - The error object.
   */
  const showError = (err) => {
    errorMsg.textContent =
      err.code === 1006
        ? 'Location not found. Search must be in the form of "City", "City, State", "City, Country", ZIP and postcode.'
        : err.message;

    errorMsg.style.visibility = "visible";
  };

  /**
   * Hide the error message.
   */
  const hideError = () => {
    errorMsg.style.visibility = "hidden";
  };

  /**
   * Create a detail item.
   * @param {string} icon - The icon source.
   * @param {string} title - The title text.
   * @param {string} stat - The stat text.
   * @returns {HTMLElement} The detail item.
   */
  const createStat = (icon, title, stat) => {
    const item = Utility.createText("li", ["detail-item"]);

    item.append(
      Utility.createImg(icon, ["detail-icon"]),
      Utility.createText("h2", ["detail-title"], title),
      Utility.createText("h2", ["detail-text"], stat),
    );

    return item;
  };

  return {
    createCurrent,
    showError,
    hideError,
  };
})();
