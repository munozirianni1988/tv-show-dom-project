//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  //rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  episodeList.forEach((element) => {
    //creating DOM elements
    let divElement = document.createElement("div");
    let headerElement = document.createElement("h3");
    let imgElement = document.createElement("img");
    let pElement = document.createElement("p");

    //giving them a class
    divElement.classList.add("single-container");

    //assigning values to DOM elements
    headerElement.innerHTML = `${element.name} - S${String(
      element.season
    ).padStart(2, "0")}E${String(element.number).padStart(2, "0")}`;
    imgElement.src = element.image.medium;
    pElement.innerHTML = element.summary;
    divElement.appendChild(headerElement);
    divElement.appendChild(imgElement);
    divElement.appendChild(pElement);
    rootElem.appendChild(divElement);
  });
}

window.onload = setup;
