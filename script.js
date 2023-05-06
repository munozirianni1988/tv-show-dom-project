//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  episodeList.forEach((element) => {
    let headerElement = document.createElement("h3");
    let imgElement = document.createElement("img");
    let pElement = document.createElement("p");
    headerElement.innerHTML = element.name;
    imgElement.src = element.image.medium;
    pElement.innerHTML = element.summary;
    rootElem.appendChild(headerElement);
    rootElem.appendChild(imgElement);
    rootElem.appendChild(pElement);
  });
}

window.onload = setup;
