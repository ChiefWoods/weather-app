import "./styles.css";
import Utility from "./components/Utility.js";
import Header from "./components/Header.js";
import Current from "./components/Current.js";
import Forecast from "./components/Forecast.js";
import Overlay from "./components/Overlay.js";
import Footer from "./components/Footer.js";

function updateView(retainScroll = false) {
  document.querySelector("main").replaceWith(Current.createCurrent(data));

  Forecast.updateForecastList(data, retainScroll);
}

const body = document.querySelector("#body");
const header = Header.createHeader();
const overlay = Overlay.createOverlay();

body.append(overlay);
Overlay.showSpinner();

let data = await Utility.getForecast()
  .then((data) => {
    if (!data.error) {
      [
        header,
        Current.createCurrent(data),
        Forecast.createForecast(data),
        Footer.createFooter(),
      ].forEach((ele) => {
        body.insertBefore(ele, overlay);
      });

      Overlay.hideOverlay();
      Utility.changeBackground(
        data.current.condition.code,
        data.location.localtime,
      );
      Utility.changeDocumentTitle(data.location);
      return data;
    } else {
      Overlay.showError();
    }
  })
  .catch(Overlay.showError);

body.addEventListener("search", async (e) => {
  Current.hideError();
  Overlay.showSpinner();
  const newData = await Utility.getForecast(e.detail.query);

  if (!newData.error) {
    data = newData;

    updateView();
    Utility.changeBackground(
      data.current.condition.code,
      data.location.localtime,
    );
    Utility.changeDocumentTitle(data.location);
  } else {
    Current.showError(newData.error);
  }

  Overlay.hideOverlay();
});

body.addEventListener("toggle", () => updateView(true));

window.addEventListener("scroll", () => {
  const breakpoint = parseInt(
    getComputedStyle(document.documentElement)
      .getPropertyValue("--main-padding-block")
      .replace(/\D/g, ""),
    10,
  );

  window.scrollY > breakpoint / 2
    ? header.classList.add("shadow")
    : header.classList.remove("shadow");
});
