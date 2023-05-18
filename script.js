//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}
//Level 100
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";
  let counter = 0;
  episodeList.forEach((element) => {
    //creating DOM elements
    let divElement = document.createElement("div");
    divElement.classList.add("single-container");
    divElement.id = "id-div" + counter;
    counter++; // setting IDs to each div element

    let headerElement = document.createElement("h3");
    headerElement.innerHTML = `${element.name} - 
    S${String(element.season).padStart(2, "0")}
    E${String(element.number).padStart(2, "0")}`;

    let imgElement = document.createElement("img");
    imgElement.src = element.image.medium;

    let pElement = document.createElement("p");
    pElement.innerHTML = element.summary;

    let aElement = document.createElement("a");
    aElement.href = element.url;

    //assigning values to DOM elements
    aElement.appendChild(imgElement);
    divElement.appendChild(headerElement);
    divElement.appendChild(aElement);
    divElement.appendChild(pElement);
    rootElem.appendChild(divElement);
  });
}

window.onload = setup;

//Level 200
document.getElementById("search").addEventListener("input", filteredEpisodes);

function filteredEpisodes() {
  const allEpisodes = getAllEpisodes();
  const searchBar = document.getElementById("search").value.toLowerCase();
  const displayNumber = document.getElementById("number-display");
  const filterEpisode = allEpisodes.filter((episode) => {
    if (
      episode.name.toLowerCase().includes(searchBar) ||
      episode.summary.toLowerCase().includes(searchBar)
    ) {
      return episode;
    }
  });
  displayNumber.innerText = filterEpisode.length;
  makePageForEpisodes(filterEpisode);
}

//Level 300
let selectElement = document.createElement("select");
let defaultValue = document.createElement("option");
defaultValue.text = "Select an episode...";
selectElement.appendChild(defaultValue);
let headerElement = document.querySelector("header");

function selectEpisode() {
  const allEpisodes = getAllEpisodes();
  allEpisodes.forEach((episode) => {
    let option = document.createElement("option");
    selectElement.appendChild(option);
    option.text = `S${String(episode.season).padStart(2, "0")}E${String(
      episode.number
    ).padStart(2, "0")}-${episode.name}`;
    option.value = episode.id;

    headerElement.appendChild(selectElement);
  });
}

selectEpisode();

selectElement.addEventListener("change", function () {
  let scrollEpisode = selectElement.selectedIndex - 1;
  let scrollContainer = document.getElementById("id-div" + scrollEpisode);
  scrollContainer.scrollIntoView({ behavior: "smooth" });
});
