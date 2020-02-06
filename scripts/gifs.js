// GET RON SWANSON GIFS

let gifArray;

let createGif = gif => {
  let newGif = document.createElement("img");
  newGif.setAttribute("src", gif);
  newGif.className = "dad-img__gif";
  return newGif;
};

let gifContainer = document.querySelector(".dad-img");
let generateGif = gif => {
  gifContainer.style.backgroundImage = `url(${gif})`;
};

let renderGif = () => {
  axios
    .get(
      "http://api.giphy.com/v1/gifs/search?q=ron+swanson+smile&api_key=BPTzghnRIwGhboq6hdzvOl1oZ1bAcykE&limit=50&rating=g"
    )
    .then(response => {
      gifArray = response.data;
      let randomGif = gifArray.data[Math.floor(Math.random() * 51)];
      generateGif(randomGif.images.downsized_large.url);
    });
};

renderGif();
