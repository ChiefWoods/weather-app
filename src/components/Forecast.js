import { format } from "date-fns";
import Utility from "./Utility.js";

export default (() => {
  let isHourly = true;
  let list;

  /**
   * Create the page section on the forecast.
   * @param {Object} data - The weather data.
   * @returns {HTMLElement} The forecast section.
   */
  const createForecast = (data) => {
    const section = Utility.createText("section", ["forecast"]);

    const btnContainer = Utility.createText("div", ["btn-container"]);

    const hourlyBtn = Utility.createText(
      "button",
      ["hourly-btn", "forecast-btn"],
      "Hourly",
    );
    hourlyBtn.disabled = true;

    hourlyBtn.addEventListener("click", () => {
      hourlyBtn.disabled = true;
      dailyBtn.disabled = false;
      isHourly = true;

      updateForecastList(data);
    });

    const dailyBtn = Utility.createText(
      "button",
      ["daily-btn", "forecast-btn"],
      "Daily",
    );

    dailyBtn.addEventListener("click", () => {
      dailyBtn.disabled = true;
      hourlyBtn.disabled = false;
      isHourly = false;

      updateForecastList(data);
    });

    btnContainer.append(hourlyBtn, dailyBtn);
    section.append(btnContainer, createForecastList(data, true));

    return section;
  };

  /**
   * Create the list of forecast items.
   * @param {Object} data - The weather data.
   * @param {Boolean} isHourly - If the forecast is hourly.
   * @returns {HTMLElement} The list of forecast items.
   */
  const createForecastList = (data, isHourly) => {
    const isImperial = Utility.isImperial();
    list = Utility.createText("ul", ["forecast-list", "scrollbar"]);

    if (isHourly) {
      const currentHour = getHour(data.current.last_updated);

      const firstFortyEightHours = [
        data.forecast.forecastday[0],
        data.forecast.forecastday[1],
      ].flatMap((forecastday) => forecastday.hour);

      const index = firstFortyEightHours.findIndex(
        (hour) => getHour(hour.time) === currentHour,
      );

      list.append(
        ...firstFortyEightHours.slice(index, index + 24).map((hour) => {
          return createForecastItem(
            getHour(hour.time) === currentHour
              ? "Now"
              : formatTime(hour.time.split(" ")[1]),
            hour.condition.icon,
            isImperial,
            isImperial ? hour.temp_f : hour.temp_c,
          );
        }),
      );
    } else {
      list.append(
        ...data.forecast.forecastday.slice(0, 7).map((day) => {
          return createForecastItem(
            day.date === data.location.localtime.split(" ")[0]
              ? "Today"
              : format(new Date(day.date), "EEE"),
            day.day.condition.icon,
            isImperial,
            isImperial ? day.day.maxtemp_f : day.day.maxtemp_c,
            isImperial ? day.day.mintemp_f : day.day.mintemp_c,
          );
        }),
      );
    }

    return list;
  };

  /**
   * Create a forecast item.
   * @param {string} title - The title of the forecast item.
   * @param {string} icon - The icon of the forecast item.
   * @param {boolean} isImperial - If the units are imperial.
   * @param {number} temp - The temperature of the forecast item.
   * @param {number} tempMin - The minimum temperature of the forecast item.
   * @returns {HTMLElement} The forecast item.
   */
  const createForecastItem = (
    title,
    icon,
    isImperial,
    temp,
    tempMin = null,
  ) => {
    const item = Utility.createText("li", ["forecast-item"]);

    item.append(
      Utility.createText("h2", ["forecast-title"], title),
      Utility.createImg(icon, ["forecast-icon"]),
      Utility.createText(
        "p",
        ["forecast-temp"],
        isImperial
          ? `${Math.round(temp)} &#176;F`
          : `${Math.round(temp)} &#176;C`,
      ),
    );

    item.append(
      Utility.createText(
        "p",
        ["forecast-temp-min"],
        tempMin
          ? isImperial
            ? `${Math.round(tempMin)} &#176;F`
            : `${Math.round(tempMin)} &#176;C`
          : "",
      ),
    );

    return item;
  };

  /**
   * Update the list of forecast items.
   * @param {Object} data - The weather data.
   * @param {Boolean} retainScroll - If the scroll should be retained.
   */
  const updateForecastList = (data, retainScroll) => {
    const scrollLeft = retainScroll ? list.scrollLeft : 0;

    document
      .querySelector(".forecast-list")
      .replaceWith(createForecastList(data, isHourly));

    list.scrollLeft = scrollLeft;
  };

  /**
   * Get the hour from the time.
   * @param {string} time - The time.
   * @returns {string} The hour.
   */
  const getHour = (time) => {
    return time.split(" ")[1].split(":")[0];
  };

  /**
   * Format the time.
   * @param {string} time - The time.
   * @returns {string} The formatted time.
   */
  const formatTime = (time) => {
    const hour = parseInt(time.split(":")[0]);
    const period = hour >= 12 ? "pm" : "am";
    return `${hour > 12 ? hour - 12 : hour === 0 ? 12 : hour} ${period}`;
  };

  return {
    createForecast,
    updateForecastList,
  };
})();
