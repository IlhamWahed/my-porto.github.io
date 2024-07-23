const headerEl = document.getElementById("header");
let characters = 0;
let text = "Hi I'm Ilham";
let speed = 300;

function autoName() {
  if (characters < text.length) {
    headerEl.innerHTML += text.charAt(characters);
    characters++;
    setTimeout(autoName, speed);
  }
  headerEl.style.color = "#007bb5";
}

autoName();
