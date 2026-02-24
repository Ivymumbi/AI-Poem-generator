function generate(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "somehow the world leaned closer to me and I leaned back, without fear",
    autoStart: true,
    delay: 4,
    cursor: null,
  });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generate);
