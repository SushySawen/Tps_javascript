//chaque objet du menu est sous la forme d'un Onglet
//l'onglet aura un nom un lien, et potentiellement un dropdown
class Onglet{

  constructor(nom, lien, dropdown = null){
    this.nom = nom;
    this.lien = lien;
    this.dropdown = dropdown;
  }

  mettreEnFormeOnglet(){
    var li = document.createElement('li');

    if (this.dropdown == null) {
      li.setAttribute('class', 'dropdown');
      var lienOnglet = document.createElement('a');
      lienOnglet.setAttribute('class', 'dropbtn');
      lienOnglet.setAttribute('href', this.lien);
      lienOnglet.innerHTML = this.nom;// ('<a href="'+this.lien+'">'++'</a>');
      li.appendChild(lienOnglet);
      return li;
    }
    li.setAttribute('class', 'dropdown');
    var lienOnglet2 = document.createElement('a');
    lienOnglet2.setAttribute('href', "javascript:void(0)");
    lienOnglet2.innerHTML = this.nom;
    lienOnglet2.setAttribute('class', "dropbtn");
    //var lienOnglet = document.createTextNode('<a href="javascript:void(0)" class="dropbtn">'+this.nom+'</a>')
    li.appendChild(lienOnglet2);
    li.appendChild(this.mettreEnFormeDropdown());
    
    return li;

  }

  mettreEnFormeDropdown(){
    var div = document.createElement('div');
    div.setAttribute('class', 'dropdown-content menuDiv');
      
    //div.className('dropdown-content');
    this.dropdown.forEach(droppedElem => {
      var lienDrop = document.createElement('a');
      lienDrop.setAttribute('href', "#");
      lienDrop.innerHTML = droppedElem;
      div.appendChild(lienDrop);
      //div.appendChild(document.createTextNode('<a href="#">'+droppedElem+'</a>'));      
    });
    return div;
  }

}

var menu = [new Onglet("Menu", '#', ['Connexion', 'Recherche', 'Réservation', 'Promotions']),
          new Onglet("Services", '#', ['Information', 'Location', 'Assistance']),
          new Onglet("Destination", './destinations.html'),
          new Onglet("Voyage virtuel audio", './audio.html'),
          new Onglet("Voyage virtuel vidéo", './video.html'),
          new Onglet("Contact", './contact.html')
        ];

window.onload = function(){
  var ulMenu = document.getElementById('ulMenu');
  menu.forEach(onglet => {
    ulMenu.appendChild(onglet.mettreEnFormeOnglet());
  });
}