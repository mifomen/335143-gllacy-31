let map;
const coordinates = { lat: 59.968322, lng: 30.317359 };
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.968466, lng: 30.321725 },
    zoom: 16,
  });
  new google.maps.Marker({
    position: coordinates,
    map,
    title: "Мы здесь!",
    // content:'<h1 class='blog-content-link'>mifomen</h1>',
    icon: "img/location-map-pin.png",
    draggable: false,
  });
}

let bodyBg = document.querySelector(".page-body");
let sliderOneLabel = document.querySelector(".slider-1");
let sliderTwoLabel = document.querySelector(".slider-2");
let sliderThreeLabel = document.querySelector(".slider-3");
let sliderOneTitle = document.querySelector(".slider-title-1");
let sliderTwoTitle = document.querySelector(".slider-title-2");
let sliderThreeTitle = document.querySelector(".slider-title-3");

if (sliderOneLabel) {
  sliderOneLabel.addEventListener("click", function (evt) {
    // evt.preventDefault();
    // self.checked = true;
    //  sliderTwoLabel.checked = false;
    //  sliderThreeLabel.checked = false;
    bodyBg.classList.remove("page-bg-2");
    bodyBg.classList.remove("page-bg-3");
    bodyBg.classList.add("page-bg-1");
    sliderOneTitle.classList.remove("visually-hidden");
    sliderThreeTitle.classList.add("visually-hidden");
    sliderTwoTitle.classList.add("visually-hidden");
  });
}

if (sliderTwoLabel) {
  sliderTwoLabel.addEventListener("click", function (evt) {
    // evt.preventDefault();
    //  sliderOneLabel.checked = false;
    //  sliderTwoLabel.checked = true;
    //  sliderThreeLabel.checked = false;
    bodyBg.classList.remove("page-bg-1");
    bodyBg.classList.remove("page-bg-3");
    bodyBg.classList.add("page-bg-2");
    sliderOneTitle.classList.add("visually-hidden");
    sliderThreeTitle.classList.add("visually-hidden");
    sliderTwoTitle.classList.remove("visually-hidden");
  });
}

if (sliderThreeLabel) {
  sliderThreeLabel.addEventListener("click", function (evt) {
    // evt.preventDefault();
    //  sliderOneLabel.checked = false;
    //  sliderTwoLabel.checked = false;
    //  sliderThreeLabel.checked = true;
    bodyBg.classList.remove("page-bg-2");
    bodyBg.classList.remove("page-bg-1");
    bodyBg.classList.add("page-bg-3");
    sliderOneTitle.classList.add("visually-hidden");
    sliderThreeTitle.classList.remove("visually-hidden");
    sliderTwoTitle.classList.add("visually-hidden");
  });
}
let CloseFeedBackBtn = document.querySelector(".feedback-close-btn");
if (document.querySelector(".feedback-modal")) {
  const feedbackModal = document.querySelector(".feedback-modal");
  const feedbackFormSubmitBtn = feedbackModal.querySelector(".feedback-btn");

  CloseFeedBackBtn.addEventListener("click", function (evt) {
    feedbackModal.classList.remove("feedback-modal-active");
    bodyBg.classList.remove("feedback-bg");
    feedbackModal.classList.remove("feedback-modal-error");
  });

  let OpenFeedBackBtn = document.querySelector(".location-link");
  OpenFeedBackBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.add("feedback-modal-active");
    bodyBg.classList.add("feedback-bg");
  });

  window.addEventListener("keydown", function (key) {
    if (key.keyCode === 27) {
      key.preventDefault();
      if (feedbackModal.classList.contains("feedback-modal-active")) {
        feedbackModal.classList.remove("feedback-modal-active");
        bodyBg.classList.remove("feedback-bg");
        feedbackModal.classList.remove("feedback-modal-error");
      }
    }
  });

  let feedbackFormNameInput = feedbackModal.querySelector(
    "#feedback-name-input"
  );
  let feedbackFormEmailInput = feedbackModal.querySelector(
    "#feedback-email-input"
  );
  let feedbackFormMessageInput =
    feedbackModal.querySelector("#feedback-message");

  feedbackFormSubmitBtn.addEventListener("click", function (evt) {
    if (
      !feedbackFormNameInput.value ||
      !feedbackFormEmailInput.value ||
      !feedbackFormMessageInput.value
    ) {
      evt.preventDefault();
      feedbackModal.classList.remove("feedback-modal-error");
      feedbackModal.offsetWidth = feedbackModal.offsetWidth;
      feedbackModal.classList.add("feedback-modal-error");
    }
  });
}

// let data
// async function exampleFetch(URL) {
//     const response = await fetch(URL);
//     const json = await response.json();
//     console.log(json);
//     return json
//     dota =  json
// }

// const DATA_URL = 'js/data.json';
// data = exampleFetch(DATA_URL)

import { data } from "./data.js";
console.log(data);
let wrapper;
if (document.querySelector(".js-add-items")) {
  wrapper = document.querySelector(".js-add-items");
}
const showItems = (item) => {
  const wrapper = document.querySelector(".js-add-items");
  const itemCard = document.createElement("li");
  itemCard.classList.add("catalog-list-item");

  const cardImg = document.createElement("img");
  cardImg.src = `img/${item.src}`;
  cardImg.style.width = "267";
  cardImg.style.height = "267";
  cardImg.alt = `${item.name}`;

  const cardPrice = document.createElement("p");
  cardPrice.classList.add("item-price");
  cardPrice.innerHTML = `${item.price} <img alt="знак рубля" class="value" src="img/ruble-icon.svg" height="31" width="31"><span class="item-weight">/кг</span>`;
  itemCard.appendChild(cardPrice);
  itemCard.appendChild(cardImg);

  const itemCardTitle = document.createElement("h3");
  itemCardTitle.classList.add("item-text-wrapper");

  const itemCartTitleLink = document.createElement("a");
  itemCartTitleLink.href = "blank.html";
  itemCartTitleLink.classList.add("item-description");
  itemCartTitleLink.innerHTML = `${item.name}`;

  itemCardTitle.appendChild(itemCartTitleLink);

  itemCard.appendChild(itemCardTitle);

  const itemFastSee = document.createElement("a");
  itemFastSee.classList.add("item-show");
  itemFastSee.href = "blank.html";
  itemFastSee.textContent = "Быстрый просмотр";
  itemCard.appendChild(itemFastSee);

  wrapper.appendChild(itemCard);
};

if (document.querySelector(".js-add-items")) {
  document.querySelector(".js-add-items").innerHTML = "";
}

if (document.querySelector('.js-add-items')) {
  data.forEach(item => {
      showItems(item);
  })
}

const allTypeIceCream = document.querySelectorAll(
  ".filter-item-fill-body input"
);

// <li class="catalog-list-item">
//          <div>
//            <img  class="item-image" src="img/products-icecream-1.png" width="267" height="267" alt="Сливочное с апельсиновым джемом и цитрусовой стружкой">
//            <p class="item-price">
// 310 <img alt="знак рубля" class="value" src="img/ruble-icon.svg" height="31" width="31"><span class="item-weight">/кг</span></p>
//          </div>
//          <h3 class="item-text-wrapper">
//            <a href="blank.html" class="item-description">Сливочное с апельсиновым джемом и цитрусовой стружкой</a>
//          </h3>
//          <a  class="item-show" href="blank.html">Быстрый просмотр</a>
//        </li>
// }

const deletePreventDefault = (selector) => {
  const basktets = document.querySelectorAll(selector);
  for (let basktet of basktets) {
    basktet.addEventListener("click", (evt) => {
      evt.preventDefault();
    });
  }
};

deletePreventDefault(".nav-menu-basket *");
deletePreventDefault(".login-link *");
deletePreventDefault(".link-for-search *");
deletePreventDefault(".basket *");
deletePreventDefault(".nav-menu-search *");

const deleteItemInBaskts = document.querySelectorAll(".basket-close-btn");
const costBasket = document.querySelector(".js-total-cost");

for (let deleteItemInBaskt of deleteItemInBaskts) {
  deleteItemInBaskt.addEventListener("click", (evt) => {
    evt.preventDefault();
    costBasket.textContent -= parseInt(
      evt.target.parentNode.querySelector(".basket-item-cost span").textContent,
      10
    );
    evt.target.parentNode.remove();
  });
}

const icecreamFilters = document.querySelectorAll(
  ".filter-item-fill-body input"
);
// const

for (const icecreamFilter of icecreamFilters) {
  icecreamFilter.addEventListener("change", (evt) => {
    console.log(
      `${evt.target.name} ${evt.target.name.length} ${evt.target.checked}`
    );
    data.forEach((item) => {

        if (evt.target.name === "syrup" && evt.target.chacked === true) {
          wrapper.innerHTML=""
          showItems(item);
          return;
        }
        if (evt.target.name === "chocolates") {
          wrapper.innerHTML=""
          showItems(item);
          return;
        }
        if (evt.target.name === "sugar") {
          wrapper.innerHTML=""
          showItems(item);
          return;
        }
        if (evt.target.name === "fruits") {
          wrapper.innerHTML=""
          showItems(item);
          return;
        }
        if (evt.target.name === "jam") {
          wrapper.innerHTML=""
          showItems(item);
          return;
        }
        // if (evt.target.name.checked === false) {
        //   wrapper.innerHTML = "";
        //   showItems(item);
        //   return;
        // }
      // || item.sugar === evt.target.name || item.fruits === evt.target.name || item.jam === evt.target.name ) {
    });
  });
}
