let map;
const coordinates = {  lat: 59.968322, lng: 30.317359};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 59.968466, lng: 30.321725 },
    zoom: 16,
  });
  new google.maps.Marker({
    position: coordinates,
    map,
    title: 'Мы здесь!',
    // content:'<h1 class='blog-content-link'>mifomen</h1>',
    icon: 'img/location-map-pin.png',
    draggable: false
  });
}

let bodyBg = document.querySelector('.page-body')
let sliderOneLabel = document.querySelector('.slider-1')
let sliderTwoLabel = document.querySelector('.slider-2')
let sliderThreeLabel = document.querySelector('.slider-3')
let sliderOneTitle = document.querySelector('.slider-title-1')
let sliderTwoTitle = document.querySelector('.slider-title-2')
let sliderThreeTitle = document.querySelector('.slider-title-3')

sliderOneLabel.addEventListener('click',function (evt) {
  // evt.preventDefault();
  // self.checked = true;
  //  sliderTwoLabel.checked = false;
  //  sliderThreeLabel.checked = false;
  bodyBg.classList.remove('page-bg-2')
  bodyBg.classList.remove('page-bg-3')
  bodyBg.classList.add('page-bg-1')
  sliderOneTitle.classList.remove('visually-hidden')
  sliderThreeTitle.classList.add('visually-hidden')
  sliderTwoTitle.classList.add('visually-hidden')
})

sliderTwoLabel.addEventListener('click',function (evt) {
  // evt.preventDefault();
  //  sliderOneLabel.checked = false;
  //  sliderTwoLabel.checked = true;
  //  sliderThreeLabel.checked = false;
  bodyBg.classList.remove('page-bg-1')
  bodyBg.classList.remove('page-bg-3')
  bodyBg.classList.add('page-bg-2')
  sliderOneTitle.classList.add('visually-hidden')
  sliderThreeTitle.classList.add('visually-hidden')
  sliderTwoTitle.classList.remove('visually-hidden')
})

sliderThreeLabel.addEventListener('click',function (evt) {
  // evt.preventDefault();
  //  sliderOneLabel.checked = false;
  //  sliderTwoLabel.checked = false;
  //  sliderThreeLabel.checked = true;
  bodyBg.classList.remove('page-bg-2')
  bodyBg.classList.remove('page-bg-1')
  bodyBg.classList.add('page-bg-3')
  sliderOneTitle.classList.add('visually-hidden')
  sliderThreeTitle.classList.remove('visually-hidden')
  sliderTwoTitle.classList.add('visually-hidden')
})

let CloseFeedBackBtn = document.querySelector('.feedback-close-btn')
let feedbackModal = document.querySelector('.feedback-modal');
let feedbackFormSubmitBtn = feedbackModal.querySelector('.feedback-btn')

CloseFeedBackBtn.addEventListener('click', function (evt) {
  feedbackModal.classList.remove('feedback-modal-active');
  bodyBg.classList.remove('feedback-bg');
  feedbackModal.classList.remove('feedback-modal-error');
})

let OpenFeedBackBtn = document.querySelector('.location-link')
OpenFeedBackBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add('feedback-modal-active');
  bodyBg.classList.add('feedback-bg');
})

window.addEventListener('keydown', function(key){
  if(key.keyCode === 27) {
    key.preventDefault();
    if(feedbackModal.classList.contains('feedback-modal-active')) {
     feedbackModal.classList.remove('feedback-modal-active');
     bodyBg.classList.remove('feedback-bg');
     feedbackModal.classList.remove('feedback-modal-error');
   }
 }
});

let feedbackFormNameInput = feedbackModal.querySelector('#feedback-name-input');
let feedbackFormEmailInput = feedbackModal.querySelector('#feedback-email-input');
let feedbackFormMessageInput = feedbackModal.querySelector('#feedback-message');

feedbackFormSubmitBtn.addEventListener('click', function(evt){
  if(!feedbackFormNameInput.value || !feedbackFormEmailInput.value || !feedbackFormMessageInput.value){
    evt.preventDefault();
    feedbackModal.classList.remove('feedback-modal-error');
    feedbackModal.offsetWidth = feedbackModal.offsetWidth;
    feedbackModal.classList.add('feedback-modal-error');
  }
});
