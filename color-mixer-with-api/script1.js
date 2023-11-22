const ranges = document.querySelectorAll('input[type="range"]');
const colorLabel = document.querySelector("#color-value");
const body = document.querySelector("body");
//anfangsfarbe setzen
let rgb;
const r = document.getElementById("#red").value;
const g = document.getElementById("#green").value;
const b = document.getElementById("#blue").value;
setColor();

for (let i = 0; i < ranges.length; ++i) {
  let range = ranges[i];
  //Zeile 1-6 wird mit dem Laden des scripts ausgeführt, ab Zeile 8 wird der Code mit jedem User-Klick in die Farb-Slider ausgeführt
  range.addEventListener("click", function () {
    let val = Number(range.value);
    switch (i) {
      case 0:
        r = val;
        break;
      case 1:
        g = val;
        break;
      case 2:
        b = val;
        break;
    }
    setColor(r, g, b);
  });
}
function setColor(r, g, b) {
  //* 256 schiebt den Wert in der HEX-Darstellung 2 Stellen nach links
  //Die Formel 256 * 256 * r + 256 * g + 1 * b nimmt die RGB-Werte und kombiniert sie zu einem einzigen Wert,
  //der die RGB-Farbe repräsentiert.
  //rgb = 256 * 256 * r + 256 * g + 1 * b;
  //der berechnete ganzzahlwert wird in einen Hexadezimalwert umgewandelt und mit einer # vorgestellt => gibt gültigen Hexadezimalcode
  //toString(16)-methode wird verwendet, um den dezimalen rgb-wert in einen hexadezimalwert umzuwandeln
  //in der Hexadezimalnotation werden zahlen von 0 bis 15 durch die zeichen 0 bis F dargestellt => 16 mögliche Werte
  // let hex = "#" + rgb.toString(16);
  // colorLabel.innerText = "#" + rgb.toString(16);
  // body.style.backgroundColor = "#" + rgb.toString(16);
  body.style.backgroundColor = "rgb(" + [r, g, b].join(",") + ")";
}
