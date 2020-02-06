let randomJoke;

// CREATE NEW JOKE SPAN
let createJokeSpan = input => {
  let jokeText = document.createElement("span");
  jokeText.textContent = input;
  jokeText.className = "dad-joke";
  return jokeText;
};

let speechBubble = document.querySelector(".speech-bubble");
let generateJoke = input => {
  speechBubble.appendChild(createJokeSpan(input));
};

let renderNewJoke = () => {
  axios
    .get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "text/plain"
      }
    })
    .then(response => {
      let randomJoke = response.data;
      generateJoke(`"${randomJoke}"`);
    });
};

renderNewJoke();
