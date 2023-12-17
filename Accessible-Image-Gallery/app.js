const thumbnails = document.querySelectorAll(".thumbnails img");
const displayImage = document.getElementById("displayImage");

thumbnails.forEach(function (thumb) {
  thumb.addEventListener("click", function () {
    displayImage.src = thumb.src;
    displayImage.alt = thumb.alt;
  });
});

const images = [
  "CyberpunkScene1.avif",
  "CyberpunkScene2.avif",
  "CyberpunkScene3.avif",
  "CyberpunkScene4.avif",
  "CyberpunkScene5.avif",
];

const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
let currentIndex = 0;

nextButton.addEventListener("click", function () {
  currentIndex++;
  // here is were you change the image
  if (currentIndex === images.length) {
    currentIndex = 0;
  }
  displayImage.src = `./images/${images[currentIndex]}`;
});

// make a previous button with the same functionality

prevButton.addEventListener("click", function () {
  currentIndex--;
  // Again changing the image here
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  displayImage.src = `./images/${images[currentIndex]}`;
});

// Using Arrow Keys to select images.
document.onkeydown = function (e) {
  console.log(e.key);
  if (e.key == "ArrowRight") {
    currentIndex++;
    if (currentIndex === images.length) {
      currentIndex = 0;
    }
    displayImage.src = `./images/${images[currentIndex]}`;
  }
  if (e.key == "ArrowLeft") {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    displayImage.src = `./images/${images[currentIndex]}`;
  }
};