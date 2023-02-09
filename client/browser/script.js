var url = document.getElementById("url");
var frame = document.getElementById("frame");

url.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    frame.src = url.value;
  }
})

function reloadFrame() {
  frame.src = frame.src;
}

function home() {
  frame.src += "";
}