var editor = document.getElementById('editor');
var navItems = document.querySelectorAll(".navItem");

navItems.forEach(item => {
  item.addEventListener("click", function(item) {
    item.target.parentElement.querySelector(".submenu").style.display = "block";
    item.target.parentElement.querySelector(".submenu").addEventListener("click", function(item) {
      item.target.parentElement.style.display = "none";
    })
  })
})

editor.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.keyCode == 66) {
    document.execCommand('bold');
  }
  if (event.ctrlKey && event.keyCode === 83) {
    event.preventDefault();
    saveFile();
  }
});

function saveFile() {
  var text = editor.value;
  var file = new Blob([text], { type: 'text/plain' });
  var fileURL = URL.createObjectURL(file);
  var link = document.createElement('a');
  link.href = fileURL;
  link.download = 'text.txt';
  document.body.append(link);
  link.click();
}