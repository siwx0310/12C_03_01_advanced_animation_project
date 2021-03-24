"use strict";

const featuresCandle1 = {
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

  /* toggle on color button */
  document.querySelector("#button_color").addEventListener("click", () => {
    //console.log("toggle color choises");
    const colorChoises = document.querySelector("#option_color_choises");
    colorChoises.classList.toggle("hide");
  });

  /* toggle on zodiac button */
  document.querySelector("#button_zodiac").addEventListener("click", () => {
    //console.log("toggle zodiac choises");
    const zodiacChoises = document.querySelector("#option_zodiac_choises");
    zodiacChoises.classList.toggle("hide");
  });

  /* toggle on number button*/
  document.querySelector("#button_number").addEventListener("click", () => {
    //console.log("toggle number of candles choises");
    const numberChoises = document.querySelector("#option_number_choises");
    numberChoises.classList.toggle("hide");
  });

  document.querySelector("#first_candle").addEventListener("click", () => {
    if (candles[first_candle] != true) {
      console.log("first candle = true");
      candles[first_candle] = true;
      document.querySelector("#first_zodiac_label").classList.remove("hide");
      document.querySelector("#first_candle").style.backgroundColor = "#32a852";
    } else {
      console.log("first candle = false");
      document.querySelector("#first_zodiac_label").classList.add("hide");
      document.querySelector("#first_candle").style.backgroundColor = "#EEE";
      candles[first_candle] = false;
    }
  });

  document.querySelector("#second_candle").addEventListener("click", () => {
    if (candles[second_candle] != true) {
      console.log("second candle = true");
      candles[second_candle] = true;
      document.querySelector("#second_zodiac_label").classList.remove("hide");
      document.querySelector("#second_candle").style.backgroundColor =
        "#32a852";
    } else {
      console.log("second candle = false");
      candles[second_candle] = false;
      document.querySelector("#second_zodiac_label").classList.add("hide");
      document.querySelector("#second_candle").style.backgroundColor = "#EEE";
    }
  });

  document.querySelector("#third_candle").addEventListener("click", () => {
    if (candles[third_candle] != true) {
      console.log("third candle = true");
      candles[third_candle] = true;
      document.querySelector("#third_zodiac_label").classList.remove("hide");
      document.querySelector("#third_candle").style.backgroundColor = "#32a852";
    } else {
      console.log("third candle = false");
      candles[third_candle] = false;
      document.querySelector("#third_zodiac_label").classList.add("hide");
      document.querySelector("#third_candle").style.backgroundColor = "#EEE";
    }
  });

  document.querySelector("#fourth_candle").addEventListener("click", () => {
    if (candles[fourth_candle] != true) {
      console.log("fourth candle = true");
      candles[fourth_candle] = true;
      document.querySelector("#fourth_zodiac_label").classList.remove("hide");
      document.querySelector("#fourth_candle").style.backgroundColor =
        "#32a852";
    } else {
      console.log("fourth candle = false");
      candles[fourth_candle] = false;
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
  featuresCandle1[feature] = !featuresCandle1[feature];

  if (featuresCandle1[feature] === true) {
    // TODO: - mark target as chosen (add class "chosen")

    // - un-hide the feature-layer(s) in the #product-preview;
    console.log(`${feature}`);
    document
      .querySelector(`[data-feature="${feature}"`)
      .classList.remove("hide");

    // TODO: display selected zodiac feature fragrance
    if (feature === "leo") {
      console.log("feature = leo");
      fragrance1.innerHTML = `${leoFragrance[0]}`;
      fragrance2.innerHTML = `${leoFragrance[1]}`;
      fragrance3.innerHTML = `${leoFragrance[2]}`;
    } else if (feature === "virgo") {
      console.log("feature = virgo");
      fragrance1.innerHTML = `${virgoFragrance[0]}`;
      fragrance2.innerHTML = `${virgoFragrance[1]}`;
      fragrance3.innerHTML = `${virgoFragrance[2]}`;
    } else if (feature === "libra") {
      fragrance1.innerHTML = `${libraFragrance[0]}`;
      fragrance2.innerHTML = `${libraFragrance[1]}`;
      fragrance3.innerHTML = `${libraFragrance[2]}`;
    } else if (feature === "scorpio") {
      fragrance1.innerHTML = `${scorpioFragrance[0]}`;
      fragrance2.innerHTML = `${scorpioFragrance[1]}`;
      fragrance3.innerHTML = `${scorpioFragrance[2]}`;
    } else if (feature === "sagittarius") {
      fragrance1.innerHTML = `${sagittariusFragrance[0]}`;
      fragrance2.innerHTML = `${sagittariusFragrance[1]}`;
      fragrance3.innerHTML = `${sagittariusFragrance[2]}`;
    } else if (feature === "capricorn") {
      fragrance1.innerHTML = `${capricornFragrance[0]}`;
      fragrance2.innerHTML = `${capricornFragrance[1]}`;
      fragrance3.innerHTML = `${capricornFragrance[2]}`;
    } else if (feature === "aquarius") {
      fragrance1.innerHTML = `${aquariusFragrance[0]}`;
      fragrance2.innerHTML = `${aquariusFragrance[1]}`;
      fragrance3.innerHTML = `${aquariusFragrance[2]}`;
    } else if (feature === "pices") {
      fragrance1.innerHTML = `${picesFragrance[0]}`;
      fragrance2.innerHTML = `${picesFragrance[1]}`;
      fragrance3.innerHTML = `${picesFragrance[2]}`;
    } else if (feature === "aries") {
      fragrance1.innerHTML = `${ariesFragrance[0]}`;
      fragrance2.innerHTML = `${ariesFragrance[1]}`;
      fragrance3.innerHTML = `${ariesFragrance[2]}`;
    } else if (feature === "taurus") {
      fragrance1.innerHTML = `${taurusFragrance[0]}`;
      fragrance2.innerHTML = `${taurusFragrance[1]}`;
      fragrance3.innerHTML = `${taurusFragrance[2]}`;
    } else if (feature === "gemini") {
      fragrance1.innerHTML = `${geminiFragrance[0]}`;
      fragrance2.innerHTML = `${geminiFragrance[1]}`;
      fragrance3.innerHTML = `${geminiFragrance[2]}`;
    } else if (feature === "cancer") {
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
      });
  } else {
    document.querySelector(`[data-feature=${feature}`).classList.add("hide");
  }
}
