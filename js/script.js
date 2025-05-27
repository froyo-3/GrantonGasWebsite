// dropdown menu
function OpenDropdown() {
  if (dropdown.style.display === "none") {
    dropdown.style.display = "flex";
  }
  else {
    dropdown.style.display = "none";
  }
  window.onclick = function (event) {
    if (!event.target.closest('.dropdown-button')) {
      if (dropdown.style.display === "flex") {
        dropdown.style.display = "none";
      }
    }
  }
};

// image carosel functionality
function changeimgslide(newslide) {
  function slides(newslide) {
    slides = document.getElementsByClassName("img-slide");
    if (newslide > slides.length) { imgslideIndex = 1 }
    if (newslide < 1) { imgslideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[imgslideIndex - 1].style.display = "block";
  }
  slides(imgslideIndex += newslide);
}

// automatic switching of slides
function autoSlides() {
  let i;
  let slides = document.getElementsByClassName("img-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  imgslideIndex++;
  if (imgslideIndex > slides.length) { imgslideIndex = 1 }
  slides[imgslideIndex - 1].style.display = "block";

  setTimeout(autoSlides, 5000);
}

// changes the page selector slides
function changeslide(newslide) {
  function slides(newslide) {
    slides = document.getElementsByClassName("slide");
    if (newslide > slides.length) { slideIndex = 1 }
    if (newslide < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
  slides(slideIndex += newslide);
}

// makes page selector slides all the same height bcos css is useless
function slideHeight() {
  let slides = document.getElementsByClassName("slide");
  largestHeight = 0;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.height = "";
  }
  for (i = 0; i < slides.length; i++) {
    if (slides[i].offsetHeight > largestHeight) {
      largestHeight = slides[i].offsetHeight;
    }
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.height = (largestHeight + 50) + "px";
  }
}