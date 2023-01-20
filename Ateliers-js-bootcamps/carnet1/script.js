/*Recupération de mes elments html*/

let formQuery = document.querySelector(".formulaireContact");

let typeContactQuery = document.querySelector(".typeContact");

let contactClient = document.querySelector(".contactClient");

// Création de mon tableau contact

let contactArray = [];

/*Création d'une fonction sur le formulaire */

function clickFormulaire() {
  // Création d'un even sur le formulaire globale

  formQuery.addEventListener("submit", function (e) {
    // Blocage du rechargement de la page grace au parametre (e)
    e.preventDefault();

    // Récupération des données du formulaires grace a la technique universel new formData

    let form = new FormData(formQuery);

    /*Creation d'une condition pour contact pro ou perso*/

    if (typeContactQuery.value == "Professionnel") {
      // Création de mon nouvel objet à partir de la fonction constructrice ContactPro
      let objetPro = new ContactPro(
        form.get("firstName"),
        form.get("lastName"),
        form.get("email"),
        form.get("tel"),
        form.get("typeContact"),
        form.get("adresseProfessionnel")
      );
      console.log("objetPro", objetPro);

      // On envoie l'objet contact Pro dans le tableau contactArray

      contactArray.push(objetPro);
      let content = "";
      contactArray.forEach(function (element) {
        content += `<p> Mon prénom: ${element.firstName} <br/> Mon nom: ${element.lastName} <br/> 
          Mon Email: ${element.email} <br/> Mon Téléphone: ${element.tel} <br/> Catégorie : ${element.typeContact} <br/> 
          Adresse entreprise : ${element.AdresseProfessionnel} <br/> <button class="deleteButton">Supprimer </button> </p>`;

        contactClient.innerHTML = content;
      });
    } else {
      let objetPerso = new ContactPerso(
        form.get("firstName"),
        form.get("lastName"),
        form.get("email"),
        form.get("tel"),
        form.get("typeContact"),
        form.get("adressePersonnel")
      );

      console.log("objetPerso", objetPerso);

      // On envoie l'objet contact Perso dans le tableau contactArray

      contactArray.push(objetPerso);
      let content = "";
      contactArray.forEach(function (element) {
        content += `<p> Mon prénom: ${element.firstName} <br/> Mon nom: ${element.lastName} <br/> Mon Email: ${element.email} <br/> 
          Mon Téléphone: ${element.tel} <br/> Catégorie : ${element.typeContact}
           <br/> Adresse personnel :  ${element.AdressePersonnel} <br/>  <button class="deleteButton">Supprimer </button> </p> `;

        contactClient.innerHTML = content;
      });
    }

    formQuery.reset();
  });
}

clickFormulaire();

/* Création de notre fonction CONSTRUCTRICE
 ** AVEC PARAMETRE POUR nom prenom email tel*/

function ProtoContact(firstName, lastName, email, tel, typeContact) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.tel = tel;
  this.typeContact = typeContact;

  this.functionProto = function () {
    console.log("Vous êtes" + this.firstName);
  };
}

/* Création de notre fonction CONSTRUCTRICE Proto contactPro avec appel de la fonction constructrice prototype*/
/* Et ajout de l'element Profesionnel*/

function ContactPro(
  firstName,
  lastName,
  email,
  tel,
  typeContact,
  AdresseProfessionnel
) {
  //Appel de la fonction constructeur à l'intérieur de ContactPro

  ProtoContact.call(this, firstName, lastName, email, tel, typeContact);

  this.AdresseProfessionnel = AdresseProfessionnel;
}

/* Création de notre fonction CONSTRUCTRICE avec appel de la fonction constructrice prototype*/
/* Et ajout de l'element personnel*/

function ContactPerso(
  firstName,
  lastName,
  email,
  tel,
  typeContact,
  AdressePersonnel
) {
  //Appel de la fonction constructeur à l'intérieur de ContactPerso

  ProtoContact.call(this, firstName, lastName, email, tel, typeContact);
  this.AdressePersonnel = AdressePersonnel;
}
