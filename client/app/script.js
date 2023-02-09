/*
This broke idk why
if (localStorage.getItem("repo")) {
  repo = JSON.parse(localStorage.getItem("repo"));
  if (repo.apps.length === 1) {
    createApp(repo.app.appName, repo.app.appIcon, repo.app.appId, repo.app.appUrl);
  } else {
    repo.apps.forEach(function(app) {
      createApp(app.appName, app.appIcon, app.appId, app.appUrl);
    });
  }
};
*/

var windows = [];
createApp("Browser", "assets/images/apps/chromium.png", "browser", "/browser");
createApp("Weather", "assets/images/apps/weather.png", "weather", "/weather");
createApp("Terminal", "assets/images/apps/terminal.png", "term", "/terminal");
createApp("Calculator", "assets/images/apps/calculator.png", "calculator", "/calculator");
//createApp("Tunee", "assets/images/apps/tunee.png", "tunee", "/tunee");
createApp("Settings", "assets/images/apps/settings.png", "settings", "/settings");

function addNotification(app, title, content) {
  var notification = document.createElement("div");
  var notificationAppName = document.createElement("h1");
  notificationAppName.innerText = app;
  var notificationTitle = document.createElement("h2");
  notificationTitle.innerText = title;
  var notificationContent = document.createElement("p");
  notificationContent.innerText = content;
  notification.append(notificationContent);
  notification.append(notificationTitle);
  notification.append(notificationAppName);
  document.body.append(notification);
  console.log(notification);
}

function loop() {
  var date = new Date();
  var sec = date.getSeconds();
  setTimeout(() => {
    setInterval(() => {
      datetime();
    }, 60 * 500);
  }, (60 - sec) * 1000);
}

function setTime(date, time) {
  document.getElementById('time').innerHTML = (time);
  document.getElementById('date').innerHTML = (date);
}

function datetime() {
  const val = new Date();
  let min = val.getMinutes();
  let vmin = min.toString();
  let hours = val.getHours();
  let day = val.getDate();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months[val.getMonth()].substr(0, 3);
  let weekday = weekdays[val.getDay()].substr(0, 3);
  let sess = "AM";
  if (hours == 0) {
    hours = 12;
    sess = "AM";
  } else if (hours > 12) {
    hours = hours - 12;
    sess = "PM";
  }
  if (vmin.length == 1) {
    const time = hours + ":0" + min + " " + sess;
    const date = weekday + ", " + month + " " + day;
    setTime(date, time);
  } else {
    const time = hours + ":" + min + " " + sess;
    const date = weekday + ", " + month + " " + day;
    setTime(date, time);
  }
}

datetime();
loop();

function createApp(name, image, id, src, height, width) {
  let img = document.createElement("img");
  let p = document.createElement("p");
  let tbarapp = document.createElement("img");
  let appImage = document.createElement("img");
  img.src = image;
  appImage.src = image;
  tbarapp.src = image;
  img.alt = "Open " + name + " app";
  appImage.alt = "Open " + name + " app";
  tbarapp.onclick = () => window_open(src, image, name, id, height, width);
  appImage.onclick = () => {
    window_open(src, image, name, id, height, width);
    document.getElementById("apps-container").style.display = "none";
  }
  p.innerText = name;
  document.getElementById("tbarapps").appendChild(tbarapp);
  document.getElementById("apps-container").appendChild(appImage);
  windows.push(src);
}

function window_open(src, image, text, id, height, width) {
  let app = document.createElement("div");
  let appMain = document.createElement("div");
  let bar = document.createElement("div");
  let brand = document.createElement("div");
  let brandImage = document.createElement("img");
  let p = document.createElement("p");
  let min = document.createElement("img");
  let restore = document.createElement("img");
  let close = document.createElement("img");
  let square = document.createElement("img");
  let buttons = document.createElement("div");
  if (height) {
    app.style.height = height + "%";
  } if (width) {
    app.style.width = width + "%";
  }
  app.style.backgroundColor = "white";
  restore.style.display = "none";
  app.classList.add("os-window");
  bar.classList.add("window-bar");
  brand.classList.add("brand");
  buttons.classList.add("buttons");
  min.classList.add("modify");
  min.classList.add("minimize");
  restore.classList.add("modify");
  restore.classList.add("restore");
  close.classList.add("modify");
  close.classList.add("close")
  square.classList.add("modify");
  square.classList.add("maximize");
  min.src = "assets/images/icons/minimize.png";
  restore.src = "assets/images/icons/restore.png";
  close.src = "assets/images/icons/close.png";
  square.src = "assets/images/icons/square.png";
  min.onclick = () => minimize_window(app);
  close.onclick = () => close_window(app);
  restore.onclick = () => restore_window(app);
  square.onclick = () => maximise_window(app);
  appMain.innerHTML = "<iframe src=" + src + "></iframe>";
  brandImage.src = image;
  p.innerText = text;
  app.appendChild(bar);
  app.appendChild(appMain);
  bar.appendChild(brand);
  bar.appendChild(buttons);
  brand.appendChild(p);
  buttons.appendChild(min);
  buttons.appendChild(restore);
  buttons.appendChild(square);
  buttons.appendChild(close);
  document.body.appendChild(app);
  dragElement(app, bar);
}

function close_window(app) {
  app.parentElement.removeChild(app)
}

function minimize_window(app) {
  app.parentElement.removeChild(app);
}

function maximise_window(app) {
  app.setAttribute("data-restoreX", app.style.left);
  app.setAttribute("data-restoreY", app.style.top);
  app.setAttribute("data-restoreW", app.style.width);
  app.setAttribute("data-restoreH", app.style.height);
  app.style.height = "100vh";
  app.style.width = "100vw";
  app.style.top = "";
  app.style.left = "";
  app.querySelector(".maximize").style.display = "none";
  app.querySelector(".restore").style.display = "inline";
}

function restore_window(app) {
  app.style.left = app.getAttribute("data-restoreX");
  app.style.top = app.getAttribute("data-restoreY");
  app.style.height = app.getAttribute("data-restoreH");
  app.style.width = app.getAttribute("data-restoreW");
  app.querySelector(".restore").style.display = "none";
  app.querySelector(".maximize").style.display = "inline";
}

function dragElement(element, elementHead) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (elementHead) {
    element.onmousedown = dragMouseDown;
  } else {
    element.onmousedown = dragMouseDown;
  };

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  };

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  };
};

function expandApps() {
  document.getElementById("apps-container").style.display = "block";
  document.body.addEventListener("click", function(e) {
    if (e.target === document.getElementById("apps-container") || e.target.parentElement === document.getElementById("apps-container")) {
      document.getElementById("apps-container").style.display = "none";
      document.body.removeEventListen("click");
    }
  })
}

window.addEventListener('message', (message) => {
  if (windows.includes(message.source)) {
    eval(message.value);
  } else if (message.value.settingChanged === true) {
    alert(message.value.setting + " changed to " + message.value.value);
  }
});