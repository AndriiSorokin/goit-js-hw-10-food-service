import css from "./css/style.css";

import menu from "./menu.json";

import template from "./template.hbs";

const body = document.querySelector("body");

const temp = template(menu);

const checkbox = document.getElementById("theme-switch-toggle");

const menuList = document.querySelector(".js-menu");

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

menuList.insertAdjacentHTML("afterbegin", temp);

// localStorage.setItem("theme", "");

if (localStorage.getItem("theme")) {
  body.classList.add(Theme.DARK);
  checkbox.checked = true;
}
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    body.classList.add(Theme.DARK);
    localStorage.setItem("theme", "DARK");
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.removeItem("theme");
  }
});
