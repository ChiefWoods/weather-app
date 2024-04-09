import Utility from "./Utility.js";
import loading from "../icons/loading.svg";

export default (() => {
  let overlay;

  /**
   * Create the overlay element.
   * @returns {HTMLElement} The overlay element.
   */
  const createOverlay = () => {
    overlay = Utility.createText("div", ["overlay"]);

    return overlay;
  };

  /**
   * Show the spinner overlay.
   */
  const showSpinner = () => {
    clearOverlay();

    overlay.append(
      Utility.createText("p", [], "Fetching data..."),
      Utility.createImg(loading, ["loading-icon"]),
    );

    overlay.style.display = "flex";
  };

  /**
   * Show the error overlay.
   */
  const showError = () => {
    clearOverlay();

    overlay.append(
      Utility.createText(
        "p",
        [],
        "Unable to fetch data. Please try again later.",
      ),
    );
  };

  /**
   * Clear the overlay.
   */
  const clearOverlay = () => {
    while (overlay.firstChild) {
      overlay.removeChild(overlay.firstChild);
    }
  };

  /**
   * Hide the overlay.
   */
  const hideOverlay = () => {
    overlay.style.display = "none";
  };

  return {
    createOverlay,
    showSpinner,
    showError,
    hideOverlay,
  };
})();
