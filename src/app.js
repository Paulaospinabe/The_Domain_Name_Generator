/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  document.getElementById("domain").innerHTML = resultado;
  let resultado = "";
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dominio = [".com", ".org", ".net"];
  for (let k = 0; k <= pronoun.length - 1; k++) {
    for (let l = 0; l <= adj.length - 1; l++) {
      for (let m = 0; m <= noun.length - 1; m++) {
        for (let n = 0; n <= dominio.length - 1; n++) {
          resultado += pronoun[k] + adj[l] + noun[m] + dominio[n] + "</br>";
        }
      }
    }
  }
  document.getElementById("domain").innerHTML = resultado;
};
