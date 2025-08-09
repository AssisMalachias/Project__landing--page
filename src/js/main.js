const track = document.querySelector('.carousel__track');
const dotsContainer = document.querySelector('.carousel__dots');
const slides = Array.from(track.children);
let currentIndex = 0;

// Criar bolinhas
slides.forEach((_, index) => {
  const dot = document.createElement('button');
  if(index === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
  dot.addEventListener('click', () => {
    goToSlide(index);
  });
});

function goToSlide(index) {
  track.style.transform = `translateX(-${index * 100}vw)`;
  dotsContainer.querySelectorAll('button').forEach(dot => dot.classList.remove('active'));
  dotsContainer.children[index].classList.add('active');
  currentIndex = index;
}

// Auto play
setInterval(() => {
  let nextIndex = (currentIndex + 1) % slides.length;
  goToSlide(nextIndex);
}, 5000);