const textarea = document.getElementById('term');

function print(i) {
  textarea.value += i + "\nC:\\>";
}

function print2(i) {
  textarea.value += i;
}

let greeting = 'FrogOS\n';

print2(greeting + "\nC:\\>");

textarea.addEventListener("keydown", async (event) => {
  if (event.code !== "Enter") {
    return;
  }
  event.preventDefault();
  let command = textarea.value.substr(textarea.value.lastIndexOf(">") + 1).toLowerCase().split(" ")[0];
  let params = " " + textarea.value.substr(textarea.value.lastIndexOf(">") + 1).toLowerCase().split(" ")[1];
  if (command == "ping") {
    print("\npong");
  }
  if (command == "pong") {
    print("\nping");
  }
  if (command == "print") {
    print("\n" + params);
  }
  if (command = "curl") {
    await fetch(params)
      .then((response) => response.text())
      .then((data) => console.log("\n" + data));
  }
  //Help command
  if (command == "help" && !params) {
    print('\n\nFor a more in-depth description type "help" followed by a commands name.\n\nPrint\nPrint any text into the console.\n\nColor\nChanges text and background colors of the terminal');
  }
})

setTimeout(() => {
    console.log = (a) => {
    print(a);
    console.dir(a);
  }
}, 1000);