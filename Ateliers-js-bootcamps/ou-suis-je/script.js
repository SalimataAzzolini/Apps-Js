/*FONCTION PRINCIPALE GEOLOCALISATION*/

function geolocalisation() {
  // Récupération des éléments du DOM

  let position = document.querySelector(".position");
  let latitudeLongitude = document.querySelector(".latitudeLongitude");

  let sauvegarde = document.querySelector(".sauvegarde");

  let saveText = document.querySelector(".saveText");

  let exPosition = document.querySelector(".exPosition");

  let supprimer = document.querySelector(".supprimer");

  let givePosition = document.querySelector(".givePosition");

  userClick(
    position,
    latitudeLongitude,
    sauvegarde,
    saveText,
    exPosition,
    givePosition,
    supprimer
  );
}

/**
 * Création de la fonction quand l'utilisateur clique sur le bouton
 */

function userClick(
  position,
  latitudeLongitude,
  sauvegarde,
  saveText,
  exPosition,
  givePosition,
  supprimer
) {
  /** Création d'un écouteur evenement qui au click va donner la position à l'utilisateur */

  position.addEventListener("click", function () {
    /*Code universel permettant de recuperer une position*/

    navigator.geolocation.getCurrentPosition(function (position) {
      /** Création d'un li pour la latidude et la longitude et rempli avec les donnes universels position.coords.latitude */

      latitude = document.createElement("li");
      latitude.innerHTML = position.coords.latitude;
      latitudeLongitude.appendChild(latitude);

      longitude = document.createElement("li");
      longitude.innerHTML = position.coords.longitude;
      latitudeLongitude.appendChild(longitude);

      /** Création d'un écouteur evenement qui au click va permettre à l'utilisateur de sauvegarder sa position*/

      sauvegarde.addEventListener("click", function () {
        localStorage.setItem("latitude", position.coords.latitude);
        localStorage.setItem("longitude", position.coords.longitude);

        /** Création d'un paragraphe pour afficher à l'utilisateur que sa position est bien enrégistré et p mis
         * comme enfant du paragraphe saveText crée depuis le html*/

        let savePosition = document.createElement("p");
        savePosition.innerHTML = "Votre position est bien sauvegardé";

        saveText.appendChild(savePosition);
      });

      /** Création d'un écouteur evenement qui au click va permettre à l'utilisateur de savoir où il était*/

      exPosition.addEventListener("click", function () {});

      /** Création d'un écouteur evenement qui au click va permettre à l'utilisateur de supprimer sa position enrégistré avant*/

      supprimer.addEventListener("click", function () {
        localStorage.removeItem("@latitude", position.coords.latitude);
        localStorage.removeItem("@longitude", position.coords.longitude);
      });
    });
  });
}

geolocalisation();
