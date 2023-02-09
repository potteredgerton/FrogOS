// Get brightness value from local storage
const brightness = localStorage.getItem('brightness');

// Set body element's style.filter property to adjust brightness
if (brightness) {
  document.body.style.filter = `brightness(${brightness}%)`;
} else {
  document.body.style.filter = `brightness(100%)`;
}