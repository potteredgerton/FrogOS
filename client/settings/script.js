var repoInput = document.getElementById("repoinput");

function getJSON(url) {
  var response;
  var xmlHttp;

  response = '';
  xmlHttp = new XMLHttpRequest();

  if (xmlHttp != null) {
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    response = xmlHttp.responseText;
  }

  return response;
}

function repo() {
  localStorage.setItem("repo", getJSON(repoInput.value));
}


// Display settings
const displayBrightnessInput = document.getElementById('display-brightness-input');

displayBrightnessInput.addEventListener('change', event => {
  localStorage.setItem("brightness", event.value);
  window.parent.postMessage({
    settingChanged: true,
    setting: "brightness",
    value: event.value
  })
});

const wallpapers = document.querySelectorAll(".wallpaper");

wallpapers.forEach((element) => {
  element.addEventListener("click", (e) => {
    window.parent.postMessage()
  })
})