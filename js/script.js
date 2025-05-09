function OpenDropdown(){
    if(dropdown.style.display === "none"){
        dropdown.style.display = "flex";
    }
    else{
        dropdown.style.display = "none";
    }
    window.onclick = function(event) {
    if (!event.target.closest('.dropdown-button')) {
        if (dropdown.style.display === "flex") {
          dropdown.style.display = "none";
        }
      }
    }
};

function changeslide(newslide){
  function slides(newslide){
    slides = document.getElementsByClassName("slide");
    if (newslide > slides.length) {slideIndex = 1}
    if (newslide < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
  slides(slideIndex+=newslide);
}

