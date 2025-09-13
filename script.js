const slides = document.querySelectorAll('.slides-wrapper img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
let autoSlideInterval;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  if (index < 0) currentIndex = slides.length - 1;
  else if (index >= slides.length) currentIndex = 0;
  else currentIndex = index;
  slides[currentIndex].classList.add('active');
}

// Manual navigation
prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
  resetAutoSlide();
});
nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
  resetAutoSlide();
});

// Auto slide every 7 seconds
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 7000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Start automatic sliding
startAutoSlide();

// --- Function to set aspect ratio dynamically ---
function setAspectRatio(width, height) {
  const wrapper = document.getElementById('slides-wrapper');
  const paddingPercent = (height / width) * 100;
  wrapper.style.paddingTop = `${paddingPercent}%`;
}

// Example usage: 20:9
setAspectRatio(24, 9);


