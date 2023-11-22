const contacts = document.querySelector("#contacts");

const state = {
  persons: [],
};

getData();

function getData() {
  fetch("https://dummy-apis.netlify.app/api/contact-suggestions?count=8") //count auf 8 setzen, um 8 verschiedene daten für personen zu erhalten
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData);
      state.persons = jsonData; //jsonData = array => in state.persons array geladen
      renderData();
    });
}

function renderData() {
  for (let person of state.persons) {
    //for() => sind bereits in dem array, also ab hier mit keys ansprechen
    const unorderedList = document.querySelector("ul"); //zugriff auf <ul>

    let list = document.createElement("li");
    unorderedList.appendChild(list);

    let personContainer = document.createElement("div");
    personContainer.classList.add("personContainer");
    list.appendChild(personContainer);
    // banner.style.backgroundImage = `url(${person.backgroundImage})`; //banner einfügen
    personContainer.style.backgroundImage =
      "url(" + person.backgroundImage + ")";

    let contentContainer = document.createElement("div");
    contentContainer.classList.add("contentContainer");
    personContainer.appendChild(contentContainer);

    let personImg = document.createElement("img");
    personImg.classList.add("personImg");
    contentContainer.appendChild(personImg);
    personImg.src = person.picture;

    let title = document.createElement("p");
    contentContainer.appendChild(title);
    title.classList.add("personFont");

    let firstName = document.createElement("p");
    contentContainer.appendChild(firstName);
    firstName.classList.add("personFont");

    let lastName = document.createElement("p");
    contentContainer.appendChild(lastName);
    firstName.classList.add("personFont");

    firstName.innerText =
      person.name.title + " " + person.name.first + " " + person.name.last;

    let profession = document.createElement("p");
    contentContainer.appendChild(profession);
    profession.innerText = person.title;
    profession.classList.add("professionFont");

    let mutualConnections = document.createElement("p");
    mutualConnections.classList.add("mutualConnections");
    contentContainer.appendChild(mutualConnections);
    mutualConnections.innerText = person.mutualConnections;

    let btnConnect = document.createElement("button");
    btnConnect.classList.add("btnConnect");
    btnConnect.innerText = "Connect";
    contentContainer.appendChild(btnConnect);

    let btnClose = document.createElement("button");
    btnClose.classList.add("btnClose");
    btnClose.innerText = "X";
    personContainer.appendChild(btnClose);
  }
}
