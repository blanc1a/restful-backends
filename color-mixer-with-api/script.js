const headerArea = document.querySelector("#headerArea");
const body = document.querySelector("body");
const r = document.querySelector("#red");
const g = document.querySelector("#green");
const b = document.querySelector("#blue");
const hexaCode = document.querySelector("#hexaCode");
const button = document.querySelector("#button");

//objekt, welches mit leeren arrays initialisiert wird
const state = {
  color: [],
  clrR: [],
  clrG: [],
  clrB: [],
};

backgroundClr(); //function, welche aufgerufen wird, um die background-color anhand der values der input-tags zu setzen

//headerArea.addEventListener("click", backgroundClr); //eventListener, der die function backgroundColor aufruft, sobald auf die headerArea geklickt wird

function backgroundClr() {
  const rangeRed = document.getElementById("red").value;
  const rangeGreen = document.getElementById("green").value;
  const rangeBlue = document.getElementById("blue").value;
  //setzt die hintergrundfarbe anhand der values der input-tags
  body.style.backgroundColor =
    "rgb(" + [rangeRed, rangeGreen, rangeBlue].join(",") + ")";
  //ruft die convertToHex function auf, um die RGB values in eine hexadezimal-color zu konvertieren
  convertToHex(rangeRed, rangeGreen, rangeBlue);

  console.log("Scheiß Fehler1");
}

function convertToHex(r, g, b) {
  //rgb-werte werden von dezimal (=basis 10) zu hexadezimal (=basis 16) konvertiert
  r = Number(r).toString(16);
  g = Number(g).toString(16);
  b = Number(b).toString(16);

  hexaCode.innerText = "#" + r + g + b; //setzt den Text des html-elements für den hexacode auf den gewünschten color-code

  console.log("Scheiß Fehler2");
}

button.addEventListener("click", changeColor);

function changeColor() {
  //fetcht die farbinformationen von der API
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData);
      //updatet den inhalt des state-objektes mit den farbinformationen der API
      state.color = jsonData.color;
      state.clrR = jsonData.rgb.r;
      state.clrG = jsonData.rgb.g;
      state.clrB = jsonData.rgb.b;

      console.log("Scheiß Fehler3");

      //setzt backgroundcolor und hexacode auf zufällig gelieferte farbwerte
      body.style.backgroundColor =
        "rgb(" + [state.clrR, state.clrG, state.clrB].join(",") + ")";

      hexaCode.innerText = state.color;

      //damit slider sich wieder mitbewegen, den value übergeben
      r.value = state.clrR;
      g.value = state.clrG;
      b.value = state.clrB;
    });
}
