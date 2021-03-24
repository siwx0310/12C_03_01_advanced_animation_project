"use strict";

const features = {
  aries: false,
  aries2: false,
  aries3: false,
  aries4: false,
  cancer: false,
  cancer2: false,
  cancer3: false,
  cancer4: false,
  gemini: false,
  gemini2: false,
  gemini3: false,
  gemini4: false,
  leo: false,
  leo2: false,
  leo3: false,
  leo4: false,
  taurus: false,
  taurus2: false,
  taurus3: false,
  taurus4: false,
  aquarius: false,
  aquarius2: false,
  aquarius3: false,
  aquarius4: false,
  libra: false,
  libra2: false,
  libra3: false,
  libra4: false,
  pices: false,
  sagittarius: false,
  sagittarius2: false,
  sagittarius3: false,
  sagittarius4: false,
  scorpio: false,
  scorpio2: false,
  scorpio3: false,
  scorpio4: false,
  virgo: false,
  virgo2: false,
  virgo3: false,
  virgo4: false,
  capricorn: false,
  capricorn2: false,
  capricorn3: false,
  capricorn4: false,
};

let fragrance1 = document.querySelector("#fragrance1");
let fragrance2 = document.querySelector("#fragrance2");
let fragrance3 = document.querySelector("#fragrance3");
let candle1 = document.querySelector("#candle1");
let candle2 = document.querySelector("#candle2");
let candle3 = document.querySelector("#candle3");
let candle4 = document.querySelector("#candle4");
let buttoncandl = document.querySelector("button");

const leoFragrance = ["ROSEMARY", "ORANGE", "JASMINE"];
const virgoFragrance = ["LAVENDER", "SANDALWOOD", "MINT"];
const libraFragrance = ["ROSE", "ELDERFLOWER", "SPRUCE"];
const scorpioFragrance = ["ORANGE", "PATCHOULI", "GINGER"];
const sagittariusFragrance = ["SANDALWOOD", "CORIANDER", "BASIL"];
const capricornFragrance = ["JASMINE", "SAGE", "EUCALYPTUS"];
const aquariusFragrance = ["ORANGE", "MINT", "LEMON"];
const picesFragrance = ["LAVENDER", "SAGE", "CEDAR"];
const ariesFragrance = ["ELDERFLOWER", "GINGER", "CORIANDER"];
const taurusFragrance = ["ROSE", "SPRUCE", "PATCHOULI"];
const geminiFragrance = ["LAVENDER", "CITRUS", "BASIL"];
const cancerFragrance = ["JASMINE", "SANDALWOOD", "EUCALYPTUS"];

const LEMON = ["#fcd360", "#fcba00", "#b08202"];
const ROSEMARY = ["#636659", "#afbbb3", "#97a389"];
const ORANGE = ["#ffd97a", "#ffb600", "#c28a00"];
const JASMINE = ["#ffd97a", "#ffb600", "#c28a00"];
const LAVENDER = ["#f2ccff", "#dd78ff", "#9d37bf"];
const SANDALWOOD = ["#8d5851", "#b8917b", "#ccb2a3"];
const MINT = ["#a3ccb5", "#6ce6a1", "#6ee6da"];
const ROSE = ["#ffbdd1", "#fa87aa", "#fa87aa"];
const ELDERFLOWER = ["#fff0bd", "#ffe17a", "#fff8ed"];
const SPRUCE = ["#79ba96", "#3b7856", "#70917f"];
const PATCHOULI = ["#c2939a", "#fcb8c2", "#d19784"];
const GINGER = ["#ffad61", "#ff8f26", "#bf6930"];
const CORIANDER = ["#8da259", "#blc18e", "#486a4f"];
const BASIL = ["#6cc25f", "#2c7d1f", "#1ba305"];
const SAGE = ["#6cd9b3", "#6cd984", "#6cd9ca"];
const EUCALYPTUS = ["#6cd9b3", "#6cd984", "#6cd9ca"];
const CEDAR = ["#ffad61", "#ff8f26", "#bf6930"];
const CITRUS = ["#fcd360", "#fcba00", "#b08202"];

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");

let first_candle = false;
let second_candle = false;
let third_candle = false;
let fourth_candle = false;

document.addEventListener("DOMContentLoaded", start);
console.log("DOMContentLoaded");

async function start() {
  let response = await fetch("candle/box4done-01.svg");
  let mySvgData = await response.text();
  document.querySelector("#candle").innerHTML = mySvgData;
  // register toggle-clicks
  document
    .querySelectorAll(".option_zodiac")
    .forEach((option) => option.addEventListener("click", toggleOptionZodiac));

  dropDownMenu();
  userInteractionOnButtons();
}

function userInteractionOnButtons() {
  /* mouseover on all buttons*/
  document.querySelectorAll(".buttons").forEach((button) =>
    button.addEventListener("mouseover", () => {
      // console.log("mouseover");
      button.style.backgroundColor = "#cfcfcf";
      button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "#EEE";
      });
    })
  );

  /* mouseout on all buttons*/
  document.querySelectorAll("a").forEach((a) =>
    a.addEventListener("mouseover", () => {
      // console.log("mouseover");
      a.style.backgroundColor = "#cfcfcf";
      a.addEventListener("mouseout", () => {
        a.style.backgroundColor = "white";
      });
    })
  );

  /* toggle on zodiac button */
  document.querySelector("#button_zodiac").addEventListener("click", () => {
    //console.log("toggle zodiac choises");
    const zodiacChoises = document.querySelector("#option_zodiac_choises");
    zodiacChoises.classList.toggle("hide");
  });

  document.querySelector("#first_candle").addEventListener("click", () => {
    if (first_candle != true) {
      first_candle = true;
      console.log(`1 = ${first_candle}`);

      document.querySelector("#first_zodiac_label").classList.remove("hide");
      document.querySelector("#first_candle").style.backgroundColor = "#32a852";
    } else {
      document.querySelector("#first_zodiac_label").classList.add("hide");
      document.querySelector("#first_candle").style.backgroundColor = "#EEE";
      first_candle = false;
      console.log(`1 = ${first_candle}`);
    }
  });

  document.querySelector("#second_candle").addEventListener("click", () => {
    if (second_candle != true) {
      second_candle = true;
      console.log(`2 = ${second_candle}`);

      document.querySelector("#second_zodiac_label").classList.remove("hide");
      document.querySelector("#second_candle").style.backgroundColor =
        "#32a852";
    } else {
      second_candle = false;
      console.log(`2 = ${second_candle}`);

      document.querySelector("#second_zodiac_label").classList.add("hide");
      document.querySelector("#second_candle").style.backgroundColor = "#EEE";
    }
  });

  document.querySelector("#third_candle").addEventListener("click", () => {
    if (third_candle != true) {
      third_candle = true;
      console.log(`3 = ${third_candle}`);

      document.querySelector("#third_zodiac_label").classList.remove("hide");
      document.querySelector("#third_candle").style.backgroundColor = "#32a852";
    } else {
      third_candle = false;
      console.log(`3 = ${third_candle}`);

      document.querySelector("#third_zodiac_label").classList.add("hide");
      document.querySelector("#third_candle").style.backgroundColor = "#EEE";
    }
  });

  document.querySelector("#fourth_candle").addEventListener("click", () => {
    if (fourth_candle != true) {
      fourth_candle = true;
      console.log(`4 = ${fourth_candle}`);

      document.querySelector("#fourth_zodiac_label").classList.remove("hide");
      document.querySelector("#fourth_candle").style.backgroundColor =
        "#32a852";
    } else {
      fourth_candle = false;
      console.log(`4 = ${fourth_candle}`);

      document.querySelector("#fourth_zodiac_label").classList.add("hide");
      document.querySelector("#fourth_candle").style.backgroundColor = "#EEE";
    }
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

function toggleOptionZodiac(event) {
  const target = event.currentTarget;
  const feature = target.dataset.feature;

  // TODO: Toggle feature in "model"
  features[feature] = !features[feature];

  if (features[feature] === true) {
    // TODO: - mark target as chosen (add class "chosen")

    // - un-hide the feature-layer(s) in the #product-preview;
    console.log(`${feature}`);
    document
      .querySelector(`[data-feature="${feature}"`)
      .classList.remove("hide");

    // TODO: display selected zodiac feature fragrance
    if (feature.includes("leo")) {
      console.log("feature = leo");
      fragrance1.innerHTML = `${leoFragrance[0]}`;
      fragrance1.setAttribute("data-feature", "fragrance1leo");
      fragrance2.innerHTML = `${leoFragrance[1]}`;
      fragrance2.setAttribute("data-feature", "fragrance2leo");
      fragrance3.innerHTML = `${leoFragrance[2]}`;
      fragrance3.setAttribute("data-feature", "fragrance3leo");
    } else if (feature.includes("virgo")) {
      console.log("feature = virgo");
      fragrance1.innerHTML = `${virgoFragrance[0]}`;
      fragrance2.innerHTML = `${virgoFragrance[1]}`;
      fragrance3.innerHTML = `${virgoFragrance[2]}`;
    } else if (feature.includes("libra")) {
      console.log("feature = libra");
      fragrance1.innerHTML = `${libraFragrance[0]}`;
      fragrance2.innerHTML = `${libraFragrance[1]}`;
      fragrance3.innerHTML = `${libraFragrance[2]}`;
    } else if (feature.includes("scorpio")) {
      console.log("feature = scorpio");
      fragrance1.innerHTML = `${scorpioFragrance[0]}`;
      fragrance2.innerHTML = `${scorpioFragrance[1]}`;
      fragrance3.innerHTML = `${scorpioFragrance[2]}`;
    } else if (feature.includes("sagittarius")) {
      console.log("feature = sagittarius");
      fragrance1.innerHTML = `${sagittariusFragrance[0]}`;
      fragrance2.innerHTML = `${sagittariusFragrance[1]}`;
      fragrance3.innerHTML = `${sagittariusFragrance[2]}`;
    } else if (feature.includes("capricorn")) {
      console.log("feature = capricorn");
      fragrance1.innerHTML = `${capricornFragrance[0]}`;
      fragrance2.innerHTML = `${capricornFragrance[1]}`;
      fragrance3.innerHTML = `${capricornFragrance[2]}`;
    } else if (feature.includes("aquarius")) {
      console.log("feature = aquarius");
      fragrance1.innerHTML = `${aquariusFragrance[0]}`;
      fragrance2.innerHTML = `${aquariusFragrance[1]}`;
      fragrance3.innerHTML = `${aquariusFragrance[2]}`;
    } else if (feature.includes("pices")) {
      console.log("feature = pices");
      fragrance1.innerHTML = `${picesFragrance[0]}`;
      fragrance2.innerHTML = `${picesFragrance[1]}`;
      fragrance3.innerHTML = `${picesFragrance[2]}`;
    } else if (feature.includes("aries")) {
      console.log("feature = aries");
      fragrance1.innerHTML = `${ariesFragrance[0]}`;
      fragrance2.innerHTML = `${ariesFragrance[1]}`;
      fragrance3.innerHTML = `${ariesFragrance[2]}`;
    } else if (feature.includes("taurus")) {
      console.log("feature = taurus");
      fragrance1.innerHTML = `${taurusFragrance[0]}`;
      fragrance2.innerHTML = `${taurusFragrance[1]}`;
      fragrance3.innerHTML = `${taurusFragrance[2]}`;
    } else if (feature.includes("gemini")) {
      console.log("feature = gemini");
      fragrance1.innerHTML = `${geminiFragrance[0]}`;
      fragrance2.innerHTML = `${geminiFragrance[1]}`;
      fragrance3.innerHTML = `${geminiFragrance[2]}`;
    } else if (feature.includes("cancer")) {
      console.log("feature = cancer");
      fragrance1.innerHTML = `${cancerFragrance[0]}`;
      fragrance2.innerHTML = `${cancerFragrance[1]}`;
      fragrance3.innerHTML = `${cancerFragrance[2]}`;
    }

    /* toggle on fragrance button button*/
    document
      .querySelector("#button_fragrance")
      .addEventListener("click", () => {
        //console.log("toggle fragrance choises");
        const fragranceChoises = document.querySelector(
          "#option_fragrance_choises"
        );
        fragranceChoises.classList.toggle("hide");

        //fragrance1.addEventListener("click", fragranceColor);
        document
          .querySelector("#fragrance1")
          .addEventListener("click", displayFragrance1);
        document
          .querySelector("#fragrance2")
          .addEventListener("click", displayFragrance2);
        document
          .querySelector("#fragrance3")
          .addEventListener("click", displayFragrance3);
      });
  } else {
    document.querySelector(`[data-feature=${feature}`).classList.add("hide");
  }
}

function displayFragrance1() {
  console.log("display fragrance");

  if (first_candle === true) {
    candle1.innerHTML = `${fragrance1.innerHTML}`;
    color1.setAttribute("fill", `${ELDERFLOWER[0]}`);
    color2.setAttribute("fill", `${ELDERFLOWER[1]}`);
    color3.setAttribute("fill", `${ELDERFLOWER[2]}`);
  } else if (second_candle === true) {
    candle2.innerHTML = `${fragrance1.innerHTML}`;
    color1.setAttribute("fill", `${fragrance1[0]}`);
    color2.setAttribute("fill", `${fragrance1[1]}`);
    color3.setAttribute("fill", `${fragrance1[2]}`);
  } else if (third_candle === true) {
    candle3.innerHTML = `${fragrance1.innerHTML}`;
    color1.setAttribute("fill", `${fragrance1[0]}`);
    color2.setAttribute("fill", `${fragrance1[1]}`);
    color3.setAttribute("fill", `${fragrance1[2]}`);
  } else if (fourth_candle === true) {
    candle4.innerHTML = `${fragrance1.innerHTML}`;
    color1.setAttribute("fill", `${fragrance1[0]}`);
    color2.setAttribute("fill", `${fragrance1[1]}`);
    color3.setAttribute("fill", `${fragrance1[2]}`);
  } else {
    console.log("none of the candles has been chosen");
  }
  fragranceColor();
}

function displayFragrance2() {
  console.log("display fragrance");
  if (first_candle === true) {
    candle1.innerHTML = `${fragrance2.innerHTML}`;
    color1.setAttribute("fill", `${fragrance2.innerHTML[0]}`);
    color2.setAttribute("fill", `${fragrance2.innerHTML[1]}`);
    color3.setAttribute("fill", `${fragrance2.innerHTML[2]}`);
  } else if (second_candle === true) {
    candle2.innerHTML = `${fragrance2.innerHTML}`;
    color1.setAttribute("fill", `${fragrance2.innerHTML[0]}`);
    color2.setAttribute("fill", `${fragrance2.innerHTML[1]}`);
    color3.setAttribute("fill", `${fragrance2.innerHTML[2]}`);
  } else if (third_candle === true) {
    candle3.innerHTML = `${fragrance2.innerHTML}`;
    color1.setAttribute("fill", `${fragrance2.innerHTML[0]}`);
    color2.setAttribute("fill", `${fragrance2.innerHTML[1]}`);
    color3.setAttribute("fill", `${fragrance2.innerHTML[2]}`);
  } else if (fourth_candle === true) {
    candle4.innerHTML = `${fragrance2.innerHTML}`;
    color1.setAttribute("fill", `${fragrance2.innerHTML[0]}`);
    color2.setAttribute("fill", `${fragrance2.innerHTML[1]}`);
    color3.setAttribute("fill", `${fragrance2.innerHTML[2]}`);
  } else {
    console.log("none of the candles has been chosen");
  }
  fragranceColor();
}

function displayFragrance3() {
  console.log("display fragrance");
  if (first_candle === true) {
    candle1.innerHTML = `${fragrance3.innerHTML}`;
    color1.setAttribute("fill", `${fragrance3.innerHTML[0]}`);
    color2.setAttribute("fill", `${fragrance3.innerHTML[1]}`);
    color3.setAttribute("fill", `${fragrance3.innerHTML[2]}`);
  } else if (second_candle === true) {
    candle2.innerHTML = `${fragrance3.innerHTML}`;
    color1.setAttribute("fill", `${fragrance3.innerHTML[0]}`);
    color2.setAttribute("fill", `${fragrance3.innerHTML[1]}`);
    color3.setAttribute("fill", `${fragrance3.innerHTML[2]}`);
  } else if (third_candle === true) {
    candle3.innerHTML = `${fragrance3.innerHTML}`;
    color1.setAttribute("fill", `${fragrance3.innerHTML[0]}`);
    color2.setAttribute("fill", `${fragrance3.innerHTML[1]}`);
    color3.setAttribute("fill", `${fragrance3.innerHTML[2]}`);
  } else if (fourth_candle === true) {
    candle4.innerHTML = `${fragrance3.innerHTML}`;
    color1.setAttribute("fill", `${fragrance3.innerHTML[0]}`);
    color2.setAttribute("fill", `${fragrance3.innerHTML[1]}`);
    color3.setAttribute("fill", `${fragrance3.innerHTML[2]}`);
  } else {
    console.log("none of the candles has been chosen");
  }
}

function fragranceColor() {
  console.log("fragrance color 1");

  /* toggle on color button */
  document.querySelector("#button_color").addEventListener("click", () => {
    console.log("toggle color choises");
    const colorChoises = document.querySelector("#option_color_choises");
    colorChoises.classList.remove("hide");
  });

  document.querySelector(".color1").addEventListener("click", setColorOne);
  document.querySelector(".color2").addEventListener("click", setColorTwo);
  document.querySelector(".color3").addEventListener("click", setColorThree);
  document.querySelector(".color4").addEventListener("click", setColorFour);
}

function setColorOne() {
  console.log("color1");
  document.querySelector("#light_x5F_one").style.fill = color1.getAttribute(
    "fill"
  );
}

function setColorTwo() {
  console.log("color2");
  document.querySelector("#light_x5F_one").style.fill = color2.getAttribute(
    "fill"
  );
}

function setColorThree() {
  console.log("color3");
  document.querySelector("#light_x5F_one").style.fill = color3.getAttribute(
    "fill"
  );
}

function setColorFour() {
  console.log("color4");
  document.querySelector("#light_x5F_one").style.fill = color4.getAttribute(
    "fill"
  );
}
