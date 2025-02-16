const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

let profileEditBotton = document.querySelector(".profile__edit-btn");
let modalCloseBotton = document.querySelector(".modal__close-btn");
let editProfileModal = document.querySelector(".modal");
let formElement = document.querySelector(".modal__form");

let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");

let modalName = document.querySelector("#modal-name-input");
let modalDescription = document.querySelector("#modal-description-input");

let cardTemplate = document.querySelector("#card-template").content;

let cardsList = document.querySelector("cards__list");

function getCardElement(data) {
  // cardTemplate is the content of the template element.
  const cardTemplate = document.querySelector("#card-template").content;

  // cardElement is the element we want to add to the DOM.
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  // Populate the cloned element with card data.
  cardElement.querySelector(".card__image").src = data.link;
  cardElement.querySelector(".card__image").alt = data.name + "  Image";
  cardElement.querySelector(".card__title").textContent = data.name;

  return cardElement;
}

function openModal() {
  modalName.value = profileName.textContent;
  modalDescription.value = profileDescription.textContent;
  editProfileModal.classList.add("modal_opened");
}

function closeModal() {
  editProfileModal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = modalName.value;
  profileDescription.textContent = modalDescription.value;
  closeModal();
}

profileEditBotton.addEventListener("click", openModal);
modalCloseBotton.addEventListener("click", closeModal);
formElement.addEventListener("submit", handleProfileFormSubmit);

for (let i = 0; i < initialCards.length; i++) {
  const cardslist = document.querySelector(".cards__list");
  cardslist.append(getCardElement(initialCards[i]));
}
