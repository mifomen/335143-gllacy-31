console.log('work')


function initMap() {
    var coordinates = {lat: 47.212325, lng: 38.933663},

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates
        });
}


// let Links= document.getElementsByTagName('a');
// console.log(Links)
// for ( link of Links) {
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
