window.addEventListener("load", demarrer);

function demarrer(){

  var nombreADeviner = nombreAuHasard(11);

  var valeur = prompt("Devinez un nombre entre 0 et 10");
  var nombreDessai = 0;

  while (valeur != nombreADeviner && nombreDessai < 3) {
    if (valeur < nombreADeviner) {
        valeur = prompt("La valeur est supérieure");
        nombreDessai++;
    } else {
      valeur = prompt ("La valeur est inferieure");
      nombreDessai++;
    }
  }

  if (nombreDessai<3) {
    alert("Felicitations !");
  } else {
    alert ("Vous avez perdu !");
  }
}

function nombreAuHasard(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
