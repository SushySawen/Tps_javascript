window.addEventListener("load", demarrer);

function demarrer(){
  var France = ['Paris', 'Marseille', 'Lyon', 'Grenoble'];
  var Italie = ['Venise', 'Rome', 'Milan', 'Turin'];
  var EtatUnis = ['New York', 'Washington', 'Las Vegas', 'Chicago'];
  var Canada = ['Quebec', 'Toronto', 'Montreal', 'Vancouver'];


  function verifier() {
    event.preventDefault();
    var nom = document.getElementById("nomPays").value;
    if (France.indexOf(nom) != -1) {
      alert("Bienvenue en France !");
    }
    else if (Italie.indexOf(nom) != -1) {
      alert("Bienvenue en Italie !");
    }
    else if (EtatUnis.indexOf(nom) != -1) {
      alert("Bienvenue aux EtatUnis !");
    }
    else if (Canada.indexOf(nom) != -1) {
      alert("Bienvenue au Canada !");
    }
  }

  document.getElementById("buttonSubmit").addEventListener("click", verifier);
}
