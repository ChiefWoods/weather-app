import Utility from "./Utility.js";
import search from "../icons/magnify.svg";

export default (() => {
  /**
   * Create the header element.
   * @returns {HTMLElement} The header element.
   */
  const createHeader = () => {
    const header = document.createElement("header");

    const form = document.createElement("form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      form.dispatchEvent(
        new CustomEvent("search", {
          bubbles: true,
          detail: {
            query: searchInput.value,
          },
        }),
      );

      searchInput.value = "";
    });

    const searchInput = Utility.createText("input", ["search-input"]);
    searchInput.type = "text";
    searchInput.placeholder =
      window.innerWidth < 768
        ? "Search Location"
        : "Search Location or Zip Code";

    const searchBtn = Utility.createText("button", ["search-btn"]);
    searchBtn.type = "submit";
    searchBtn.append(Utility.createImg(search, ["search-icon"], "Search"));

    form.append(searchInput, searchBtn);

    const toggleContainer = Utility.createText("div", ["toggle"]);

    const toggle = Utility.createText("input", []);
    toggle.type = "checkbox";
    toggle.id = "units";
    toggle.checked = Utility.isImperial();

    toggle.addEventListener("change", (e) => {
      localStorage.setItem("isImperial", JSON.stringify(e.target.checked));

      e.target.dispatchEvent(
        new CustomEvent("toggle", {
          bubbles: true,
        }),
      );
    });

    const label = Utility.createText("label", []);
    label.htmlFor = "units";

    toggleContainer.append(toggle, label);

    header.append(form, toggleContainer);

    return header;
  };

  return {
    createHeader,
  };
})();
