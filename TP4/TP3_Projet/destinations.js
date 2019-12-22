class Destination{

  constructor(nom, image, circuit, prix){
    this.nom = nom;
    this.image = image;
    this.circuit = circuit;
    this.prix = prix;
  }

  mettreEnFormeDest(){
    return "<tr id="+this.nom+">" 
      +"<td>" +this.nom +" "+ this.image +"</td>"
      +"<td> " + this.circuit + "</td>"
      +"<td> " + this.prix + "</td>"
      +'<td>'
        +'<button type="button" name="button">Decouvrir</button>'
        +'<button class="edit" type="button" name="editer">Editer</button>'
        +'<button class="delete" type="button" name="supprimer">Supprimer</button>'
      +'</td>'
    +'</tr>'
    
  }
}

var destinations = [new Destination("Italie",'<img src="italie.png" alt="italie" width="100 px">',
"partir d'un coté et revenir de l'autre", "très peu cher"),
                    new Destination("France", '<img src="france.png" alt="france" width="100 px">',
                  "faire tout le tour", "très cher")];


function afficherDestination(){
  $("#tableau tbody").empty();
  var tableau = $("#tableau tbody");
  
console.log(destinations);

  destinations.forEach(destination => {
    tableau.append(destination.mettreEnFormeDest());
    var btnDel = tableau[0].lastChild.lastChild.childNodes[2];
    var btnEdit = tableau[0].lastChild.lastChild.childNodes[1];
    

    btnEdit.setAttribute("id", tableau[0].lastChild.id);
    btnEdit.addEventListener("click", function () {
      editerDestination(this);
   });
    btnDel.setAttribute("id", tableau[0].lastChild.id);
    btnDel.addEventListener("click", function () {
       supprimerDestination(this);
    });
  });
}


function enregistrerDestination(){
  console.log("Enregistrer Destination");
  console.log(destinations);
  var nomValue = document.getElementById("nom").value;
  var imageValue = document.getElementById("image").value;
  var circuitValue = document.getElementById("circuit").value;
  var prixValue = document.getElementById("prix").value;
  nouvelleDestination = new Destination(nomValue, imageValue, circuitValue, prixValue);
  destinations.push(nouvelleDestination);
  afficherDestination();
}

function editerDestination(btn){
  $('#editDest').css("display", "block");
  $('#saveDest').css("display", "none");

  var destinationVoulue = destinations.filter(destination => destination.nom == btn.id)[0];
  var image = destinationVoulue.image.split('"')[1];
  $('#nom').val(destinationVoulue.nom);
  $('#nom').disabled = true;
  $('#circuit').val(destinationVoulue.circuit);
  $('#image').val(image);
  $('#prix').val(destinationVoulue.prix);

  $('#editDest')[0].addEventListener("click", function (event) {
    event.preventDefault();
    var listeDestinations= [];
    destinations.forEach(destination => { listeDestinations.push(destination.nom)});
    var index = listeDestinations.indexOf(destinationVoulue.nom);

    var destModified = destinations;
    //Modifier les valeurs
    destModified[index].image = document.getElementById("image").value;
    destModified[index].prix = document.getElementById("prix").value;
    destModified[index].circuit = document.getElementById("circuit").value;

    console.log($('#'+btn.id));
    // Modifier image
    $('#'+btn.id)[0].cells[0].lastChild.src = document.getElementById("image").value;
    // Modifier circuit
    $('#'+btn.id)[0].cells[1].innerText = document.getElementById("circuit").value;
    // Modifier prix
    $('#'+btn.id)[0].cells[2].innerText = document.getElementById("prix").value;
    
    $('#editDest').css("display", "none");
    $('#saveDest').css("display", "block");
  });

}

function supprimerDestination(btn){
  $("#"+btn.id).remove();
  destinations = destinations.filter(destination => destination.nom != btn.id);
}

$(document).ready(function(){
  console.log("Ready");
  document.getElementById("formulaire").addEventListener("submit", function (event) {
    // preventDefault prevent the form submission, avoid the refreshing.
    event.preventDefault();
    enregistrerDestination();
  });
  afficherDestination();
})
