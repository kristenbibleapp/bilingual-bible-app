
// Swipe-to-change-chapter logic added to original app.js structure
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
}, false);

function handleSwipeGesture() {
  const threshold = 50; // min distance for a swipe
  if (touchEndX < touchStartX - threshold) {
    changeChapter('next');
  }
  if (touchEndX > touchStartX + threshold) {
    changeChapter('previous');
  }
}

function changeChapter(direction) {
  const chapterPicker = document.getElementById("chapterPicker");
  if (!chapterPicker || chapterPicker.options.length === 0) return;

  const currentIndex = chapterPicker.selectedIndex;
  if (direction === 'next' && currentIndex < chapterPicker.options.length - 1) {
    chapterPicker.selectedIndex = currentIndex + 1;
    chapterPicker.dispatchEvent(new Event('change'));
  }
  if (direction === 'previous' && currentIndex > 0) {
    chapterPicker.selectedIndex = currentIndex - 1;
    chapterPicker.dispatchEvent(new Event('change'));
  }
}
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipeGesture();
});

function handleSwipeGesture() {
  const chapterPicker = document.getElementById("chapterPicker");
  const currentIndex = chapterPicker.selectedIndex;

  if (touchEndX < touchStartX - 50 && currentIndex < chapterPicker.options.length - 1) {
    chapterPicker.selectedIndex = currentIndex + 1;
    chapterPicker.dispatchEvent(new Event('change'));
  } else if (touchEndX > touchStartX + 50 && currentIndex > 0) {
    chapterPicker.selectedIndex = currentIndex - 1;
    chapterPicker.dispatchEvent(new Event('change'));
  }
}
