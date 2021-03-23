"use strict";

const featuresCandle1 = {
  aries: false,
  cancer: false,
  gemini: false,
  leo: false,
  taurus: false,
  aquarius: false,
  libra: false,
  pices: false,
  sagittarius: false,
  scorpio: false,
  virgo: false,
  capricorn: false,
};

const candles = {
  first_candle: false,
  second_candle: false,
  third_candle: false,
  fourth_candle: false,
};

document.addEventListener("DOMContentLoaded", start);
console.log("DOMContentLoaded");

async function start() {
  let response = await fetch("candle/box4done-01.svg");
  let mySvgData = await response.text();
  document.querySelector("#candle").innerHTML = mySvgData;
  // register toggle-clicks
  document
    .querySelectorAll(".option_zodiac")
    .forEach((option) => option.addEventListener("click", toggleOption));

  dropDownMenu();
  userInteraction();
}

function userInteraction() {
  /* mouseover on all buttons*/
  document.querySelectorAll(".button").forEach((button) =>
    button.addEventListener("mouseover", () => {
      console.log("mouseover");
      button.style.backgroundColor = "#cfcfcf";
      button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#EEE";
      });
    })
  );

  /* mouseout on all buttons*/
  document.querySelectorAll("a").forEach((a) =>
    a.addEventListener("mouseover", () => {
      console.log("mouseover");
      a.style.backgroundColor = "#cfcfcf";
      a.addEventListener("mouseout", () => {
        a.style.backgroundColor = "white";
      });
    })
  );

  /* toggle on fragrance button button*/
  document.querySelector("#button_fragrance").addEventListener("click", () => {
    console.log("toggle fragrance choises");
    const fragranceChoises = document.querySelector(
      "#option_fragrance_choises"
    );
    fragranceChoises.classList.toggle("hide");
  });

  /* toggle on color button */
  document.querySelector("#button_color").addEventListener("click", () => {
    console.log("toggle color choises");
    const colorChoises = document.querySelector("#option_color_choises");
    colorChoises.classList.toggle("hide");
  });

  /* toggle on zodiac button */
  document.querySelector("#button_zodiac").addEventListener("click", () => {
    console.log("toggle zodiac choises");
    const zodiacChoises = document.querySelector("#option_zodiac_choises");
    zodiacChoises.classList.toggle("hide");
  });

  /* toggle on number button*/
  document.querySelector("#button_number").addEventListener("click", () => {
    console.log("toggle number of candles choises");
    const numberChoises = document.querySelector("#option_number_choises");
    numberChoises.classList.toggle("hide");
  });
}

/* navigation menu / burger menu */
function dropDownMenu() {
  // JavaScript der styrer burgermenu
  let burger = document.querySelector(".burger");
  let nav = document.querySelector(".nav_links");

  // Lytter efter click på burgermenu
  burger.addEventListener("click", () => {
    // Viser/skjuler menuen
    nav.classList.toggle("nav_active");
    // Tilføjer/fjerner animation på burgermenu
    burger.classList.toggle("toggle");
  });
  // Lytter efter klik på logo, og går til forsiden
  document.querySelector("#logo").addEventListener("click", () => {
    location.href = "index.html";
  });
}

function toggleOption(event) {
  const target = event.currentTarget;
  const feature = target.dataset.feature;

  // TODO: Toggle feature in "model"
  featuresCandle1[feature] = !featuresCandle1[feature];

  // TODO: - mark target as chosen (add class "chosen")

  // - un-hide the feature-layer(s) in the #product-preview;
  document.querySelector(`[data-feature="${feature}"`).classList.remove("hide");
}
