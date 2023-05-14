//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}
//Level 100
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML = "";
  episodeList.forEach((element) => {
    //creating DOM elements
    let divElement = document.createElement("div");
    let headerElement = document.createElement("h3");
    let imgElement = document.createElement("img");
    let pElement = document.createElement("p");
    let aElement = document.createElement("a");

    //giving them a class
    divElement.classList.add("single-container");

    //assigning values to DOM elements
    headerElement.innerHTML = `${element.name} - S${String(
      element.season
    ).padStart(2, "0")}E${String(element.number).padStart(2, "0")}`;
    aElement.href = element.url;
    imgElement.src = element.image.medium;
    pElement.innerHTML = element.summary;
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
