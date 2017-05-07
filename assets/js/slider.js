var text = document.getElementsByClassName("slider-text");
var max = 0;
for (var i = 0; i < text.length; i++) {
    if (text[i].offsetHeight > max) { max = text[i].offsetHeight; }
}
document.getElementById('slides').style.height = max + "px";


x = (document.getElementById('slider').offsetHeight - 52) / 2 - 20;


var y = document.getElementsByClassName("icon-circle");
var i;
for (i = 0; i < y.length; i++) {
    y[i].style.marginTop = x + "px";
}




var slides = document.querySelectorAll('#slides .slide');
var dots = document.querySelectorAll('#dots .slider-dot');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 6000, 1);


function nextSlide(n) {
    if (Math.abs(n) == 2) {
        clearInterval(slideInterval);
        n = n / 2;
    }
    slides[currentSlide].className = 'slide';
    dots[currentSlide].className = 'slider-dot';
    currentSlide = Math.abs((currentSlide + n) % slides.length);
    slides[currentSlide].className = 'slide showing';
    dots[currentSlide].className = 'slider-dot active-dot';

}
