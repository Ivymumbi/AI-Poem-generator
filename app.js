function generatePoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 4,
    cursor: null,
  });
}

function generate(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "f1fc0cc94o4ea1c9e211223ba7t05bc1";
  let prompt = `user instructions:generate an english poem about${instructionInput.value}`;
  let context =
    "You are a romantic and poem expert and love to write short poems.Your mission is:generate a short poem with six lines in basic html and dont show that you are using html  and sepatare each line with a <br/>. make sure to follow the users instruction.sign the poem with'SheCodes AI'in <strong>element at the bottom and NOT at the top";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(generatePoem);
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generate);
