console.log('work')


// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -59.968322, lng: 30.317350};
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

// function initMap() {
//   const myLatLng = { lat: -25.363, lng: 131.044 };
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: myLatLng,
//   });
//   new google.maps.Marker({
//     position: myLatLng,
//     map,
//     title: "Hello World!",
//   });
// }



// function initMap() {
//     var coordinates = {lat: 59.968341981799256, lng: 30.317198608327054},

//         map = new google.maps.Map(document.getElementById('map'), {
//             center: coordinates
//         });
// }

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







// 59.968341981799256, 30.317198608327054

// console.log(Links)
// console.log(Links.length)

// for ( link of Links) {
// // for (let i=0;i<=Links.length; i++ ) {
//   link.addEventListener('click',function (evt) {
//     evt.preventDefault;
//   })
// }

//   link.addEventListener('click',function (evt) {
//     evt.preventDefault;
//   })
// }


// let SliderControls = document.querySelectorAll('.label-slider')
// let SliderControls = document.getElementsByTagName('input');
// console.log(SliderControls)
// for (Slider of SliderControls) {
//   Slider.addEventListener('click',function (evt) {
//     evt.preventDefault;
//   })
// }
