let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  const slidesContainer = document.querySelector('.slides');
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100; // Adjust based on the slide width
  slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Auto-slide every 5 seconds
setInterval(() => {
  showSlide(currentSlide + 1);
}, 10000);

// Optionally, you can add navigation buttons to manually control the slides
