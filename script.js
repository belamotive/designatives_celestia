const openMenuBtn = document.getElementById("menuOpenIcon");
const opened = document.querySelector(".dim");
const navBar = document.querySelector(".navbar");

const openSubMenu = (menu) => {
  let close =
    menu === ".developers"
      ? document.querySelector(".community")
      : document.querySelector(".developers");

  close.style.display = "none";

  let element = document.querySelector(menu);

  element.style.display === "block"
    ? (element.style.display = "none")
    : (element.style.display = "block");

  let menuExpandBox = document.querySelectorAll(".nav-link-expand");

  window.addEventListener("mouseup", function (event) {
    if (
      event.target !=
        menuExpandBox.forEach((menubox) => {
          return menubox;
        }) &&
      event.target.parentNode !=
        menuExpandBox.forEach((menubox) => {
          return menubox;
        })
    ) {
      menuExpandBox.forEach((menubox) => {
        menubox.style.display = "none";
      });
    }
  });
};

function openMenu() {
  opened.style.display === "block"
    ? (opened.style.display = "none")
    : (opened.style.display = "block");

  window.addEventListener("mouseup", function (event) {
    if (event.target != navBar && event.target != openMenuBtn && event.target.parentNode != navBar) {
      opened.style.display = "none";
    }
  });
}

const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");
const episodes = document.getElementsByClassName("episode");

let i = 0;

const next = () => {
  if (i < episodes.length - 1) {
    console.log(i);
    let target = episodes[i + 1];
    target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    previousBtn.disabled = false;
    previousBtn.style.opacity = 1;
  } else {
    nextBtn.style.opacity = 0.3;
    console.log("next");
  }

  i++;

  i === 0 ? (previousBtn.disabled = true) : (previousBtn.disabled = false);
  i < episodes.length - 1
    ? (nextBtn.disabled = false)
    : (nextBtn.disabled = true);

  i < episodes.length - 1
    ? (nextBtn.style.opacity = 1)
    : (nextBtn.style.opacity = 0.3);
};

const previous = () => {
  if (i < episodes.length + 1) {
    console.log(i);
    let target = episodes[i - 1];
    target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    nextBtn.style.opacity = 1;
  } else {
    previousBtn.style.opacity = 0.3;
    console.log("previous");
  }

  i--;

  i === 0 ? (previousBtn.disabled = true) : (previousBtn.disabled = false);

  i === 0 ? (previousBtn.style.opacity = 0.3) : (previousBtn.style.opacity = 1);

  i > 0 ? (nextBtn.disabled = true) : (nextBtn.disabled = false);
};
