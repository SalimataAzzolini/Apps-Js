/**
 * Récupération des éléments du DOM
 */

// Récupération du formulaire
let formQuery = document.querySelector("#contactForm");
// Récupération de ma contactDiv
let contactDivQuery = document.querySelector(".contactDiv");

// Création de mon tableau contact à vide
let contactArray = [];

// Création de l'addEventListener du formulaire

formQuery.addEventListener("submit", function (e) {
  // BLOQUAGE DU RECHARGEMENT DE LA PAGE
  e.preventDefault();

  // Récupération des données du formulaire

  let data = new FormData(formQuery);

  // Variable de mon formulaire
  let firstName = data.get("firstname");
  let lastName = data.get("lastname");
  let email = data.get("email");
  let phone = data.get("phone");
  let workAdress = data.get("workAdress");
  let homeAdress = data.get("homeAdress");

  if (!firstName || !lastName || !email || !phone) {
    alert("Veuillez remplir tout les champs");
  } else {
    // Création de l'objet contact vide

    let contact;
    console.log(data.get("selectType"));

    if (data.get("selectType") == "pro") {
      contact = new ProtoContactPro(
        firstName,
        lastName,
        email,
        phone,
        workAdress
      );
    } else {
      contact = new ProtoContactPerso(
        firstName,
        lastName,
        email,
        phone,
        homeAdress
      );
    }

    // On envoie l'objet contact dans le tableau contactArray
    contactArray.push(contact);

    // Créer un localStorage avec la valeur de contactArray
    localStorage.setItem("@contactArray", JSON.stringify(contactArray));

    // Appel de la fonction showContact

    showContact();
  }

  formQuery.reset();
});

/**
 * FONCTION SHOW CONTACT POUR AFFICHER LES ELEMENTS DANS LE SITE
 * */

function showContact() {
  /*CREATION D'UNE VARIABLE QUI VA SE REMPLIR AVEC LES SAISI UTILISATEUR*/

  let content = "";

  contactArray.forEach(function (element) {
    console.log(element.type);

    if (element.type == "pro") {
      content += `<p> Prénom: ${element.firstName} 
     </p> Nom: ${element.lastName}</p> 
     </p> E-mail: ${element.email}</p> 
     </p> Téléphone: ${element.phone}</p> 
     </p> Adresse: ${element.workAdress}</p>  
       
     <br/> <button class="deleteButton">Supprimer </button>`;
    } else {
      content += `<p> Prénom: ${element.firstName} 
     </p> Nom: ${element.lastName}</p> 
     </p> E-mail: ${element.email}</p> 
     </p> Téléphone: ${element.phone}</p> 
     </p> Adresse: ${element.homeAdress}</p>  
       
     <br/> <button class="deleteButton">Supprimer </button>`;
    }

    contactDivQuery.innerHTML = content;
  });

  deleteContact();
}

// Suppression de mon paragraphe
function deleteContact() {
  let deleteButtonQuery = document.querySelectorAll(".deleteButton");

  // Création de l'add event listener qui va supprimer mon paragraphe

  // Pour chaque element de mon tableau je déclenche la fonction anonyme

  deleteButtonQuery.forEach(function (buttonDeletes, index) {
    buttonDeletes.addEventListener("click", function () {
      console.log("deletebuttonQuery", deleteButtonQuery);

      // Supprimer un élément du tableau arrayContact
      contactArray.splice(index, 1);

      localStorage.setItem("@contactArray", JSON.stringify(contactArray));

      // Ré affichage du tableau contactArray
      showContact();
    });
  });
}

/********************************************************************************
 * CREATION DE MES FONCTIONS OU CLASS CONSTRUCTRICE
 ********************************************************************************/

// Prototype général

// function ProtoContact(firstName, lastName, email, phone) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.phone = phone;
// }

// // Prototype Professionnel

// function ProtoContactPro(firstName, lastName, email, phone, workAdress) {
//   // Appel de notre prototype général ProtoContact
//   ProtoContact.call(this, firstName, lastName, email, phone);
//   this.workAdress = workAdress;
//   this.type = "pro";
// }

// // Prototype Personnel
// function ProtoContactPerso(firstName, lastName, email, phone, homeAdress) {
//   // Appel de notre prototype général ProtoContact
//   ProtoContact.call(this, firstName, lastName, email, phone);
//   this.homeAdress = homeAdress;
//   this.type = "perso";
// }

// Prototype général

class ProtoContact {
  // Création de la fonction constructeur à l'intérieur de ma classe

  constructor(firstName, lastName, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }
}

// // Prototype Professionnel

class ProtoContactPro extends ProtoContact {
  constructor(firstName, lastName, email, phone, workAdress) {
    // On rappel les paramètres de la class ProtoCotact
    super(firstName, lastName, email, phone);

    this.workAdress = workAdress;
    this.type = "pro";
  }
}

// // Prototype Personnel

class ProtoContactPerso extends ProtoContact {
  constructor(firstName, lastName, email, phone, homeAdress) {
    // On rappel les paramètres de la class ProtoCotact
    super(firstName, lastName, email, phone);

    this.homeAdress = homeAdress;
    this.type = "perso";
  }
}
