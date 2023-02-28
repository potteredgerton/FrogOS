/*

//Display settings
const displayBrightnessInput = document.getElementById('display-brightness-input');

displayBrightnessInput.addEventListener('change', event => {
  localStorage.setItem("brightness", event.value);
  window.parent.postMessage({
    settingChanged: true,
    setting: "brightness",
    value: event.value
  })
});

*/

document.getElementById("startup").addEventListener("keydown", (e) => {
  if (e.key != "Enter") return;
  e.preventDefault();
  setBootScript();
})

const setBootScript = () => {
  localStorage.setItem("bootscript", document.getElementById("startup").value);
}