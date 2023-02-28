// Get brightness value from local storage
const brightness = localStorage.getItem('brightness');

// Set body element's style.filter property to adjust brightness
if (brightness) {
  document.body.style.filter = `brightness(${brightness}%)`;
} else {
  document.body.style.filter = `brightness(100%)`;
}

//Boot script
//This is dangerous. Be careful when running untrusted code
var bootScript = localStorage.getItem("bootscript");
if (bootScript) {
  eval(bootScript);
}