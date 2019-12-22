window.addEventListener("load", demarrer);

function demarrer(){

  document.getElementById("buttonSubmit").addEventListener("click", afficherListeVilles);
}

var France = ['Paris', 'Marseille', 'Lyon', 'Grenoble'];
var Italie = ['Venise', 'Rome', 'Milan', 'Turin'];
var EtatUnis = ['New York', 'Washington', 'Las Vegas', 'Chicago'];
var Canada = ['Quebec', 'Toronto', 'Montreal', 'Vancouver'];


  function verifier() {
    //éviter que le form s'envoie vide
    event.preventDefault();
    var nomPays;
    var nom = document.getElementById("nomPays").value;
    if (France.indexOf(nom) != -1) {
      alert("Bienvenue en France !");
      nomPays = "France";
    }
    else if (Italie.indexOf(nom) != -1) {
      alert("Bienvenue en Italie !");
      nomPays = "Italie";
    }
    else if (EtatUnis.indexOf(nom) != -1) {
      alert("Bienvenue aux EtatUnis !");
      nomPays = "EtatUnis";
    }
    else if (Canada.indexOf(nom) != -1) {
      alert("Bienvenue au Canada !");
      nomPays = "Canada";
    }
    return nomPays;
  }

function afficherListeVilles(){
  var nomPays = verifier();
  let liste = document.createElement('ul');
  liste.setAttribute('id', 'listeId');

  if(nomPays == 'France'){
  France.forEach(element => {
    var li = document.createElement('li');
    var ville = document.createTextNode(element);
    li.appendChild(ville);
    liste.appendChild(li);
  }
);}
  if(nomPays == 'EtatUnis'){
  EtatUnis.forEach(element => {
    var li = document.createElement('li');
    var ville = document.createTextNode(element);
    li.appendChild(ville);
    liste.appendChild(li);
  }
  );}
  if(nomPays == 'Italie'){
  Italie.forEach(element => {
    var li = document.createElement('li');
    var ville = document.createTextNode(element);
    li.appendChild(ville);
    liste.appendChild(li);
  }
  );}
  if(nomPays == 'Canada'){
  Canada.forEach(element => {
    var li = document.createElement('li');
    var ville = document.createTextNode(element);
    li.appendChild(ville);
    liste.appendChild(li);
  }
  );}
  var texte = document.createTextNode("Vous pouvez aussi visiter ces villes");
  var div = document.getElementById("liste ville");
  div.appendChild(texte);
  div.appendChild(liste);

  toggleText();
}

function toggleText()
{
   if (document.getElementById('buttonSubmit').textContent == "Choisir une destination")
   {
       document.getElementById('buttonSubmit').textContent = "Ajouter une destination";
       document.getElementById('buttonSubmit').removeEventListener('click', afficherListeVilles);
       document.getElementById('buttonSubmit').addEventListener('click', ajouterVille);
   }

}

function ajouterVille(){
  event.preventDefault();
  var nom = document.getElementById("nomPays").value;
  var ville = document.createTextNode(nom);
  var liste = document.getElementById('listeId');

  if (confirm("Voulez-vous ajouter cette ville ?")) {
    var li = document.createElement('li');
    li.appendChild(ville);
    liste.appendChild(li);
  }


  var div = document.getElementById('liste ville');
  div.appendChild(liste);
}
