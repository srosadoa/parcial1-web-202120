const { response } = require("express");

const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');

var playerSizeIn;
var playerName;
var playerSurname;
var playerSizeMt;
var nombre1 = " ";
var apellido1 = " ";
var nombre2 = " ";
var apellido2 = " ";
var textoNoFound =" ";


enterButton.addEventListener('click', (event) => {
  //Implementar lógica del button submit
  alert('Implementar lógica del button submit');
  getresults(123);
  event.preventDefault();
});
/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api?input=${heightRef}`);
  const data = await resp.json();
  console.log('data from back', data);
  //printValues(data);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

fetch(
  "https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players"
).then((response) => response.json()).then((data) => {
  playerName = data[0].values;
  playerSizeMt = data[1].values;
  playerSizeIn = data[2].values;
  playerSurname = data[3].values;

});

function calculoEstaturas(playerName, playerSurname, playerSizeIn, inputText) {
  var estatura = parseInt(inputText);
  var duplaEncontrada = false;
  for (let i = 0; i < playerSizeIn.length; i++) {
    const jugador1 = playerSizeIn[i];
    let j = 1;
    while (j < playerSizeIn.length) {
      const jugador2 = playerSizeIn[j];
      if ((jugador1 + jugador2 === estatura) && duplaEncontrada) {
        nombre1 = playerName[i];
        apellido1 = playerSurname[i];
        nombre2 = playerName[j];
        apellido2 = playerSurname[j];
        duplaEncontrada = true;
      }
      j++;
    }
  }
  if (duplaEncontrada = false) {
    textoNoFound = "No matches found";
  }
}
function mostrarResultados() {

}
