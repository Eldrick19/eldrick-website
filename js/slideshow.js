var slideIndex = 0;
var timerStart = false;
showSlides();
var timer = setInterval(showSlides, 7000);

// Next/previous controls
function plusSlides(n) {
  showSlides(n);
  clearInterval(timer);
  timer = setInterval(showSlides, 7000);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if(n == -1){
    slideIndex--;
    if(slideIndex < 1){
      slideIndex = slides.length;
    }
  } else {slideIndex++;} 
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
}