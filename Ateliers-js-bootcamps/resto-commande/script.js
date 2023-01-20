/* CORRECTION PATIE 3 */

/*************
 * CREATION DE RESTO COMMANDE AVEC FONCTION
 */

//Création de mes fonctions

//
/**
 * Création de la Fonction verifChoix

 */


 function verifChoix(credit) {
  let menu = "Carte:\n";

  if (credit >= 5) {
    menu += "1 - Boisson soft - 5€\n";
  }

  if (credit >= 8) {
    menu += "2 - Boisson alcoolisée - 8€\n";
  }

  if (credit >= 20) {
    menu += "3 - Plat - 20€\n";
  }

  menu += `4 - Terminer
  ----------------
  Budget: ${credit}€
  `;

  return menu;
}

/**
 * Création de la fonction verifCredit

 */
function verifCredit(credit) {
  if (credit >= 33) {
    alert("Vous pouvez encore tout commander");

  } else if (credit >= 13) {
    alert("Vous pouvez commander une BA et une BNA");

  } else if (credit >= 5) {
    alert("Vous pouvez commander une boisson alcoolisée");

  } else {
    alert("Vous ne pouvez rien commander");
  }

}



 // Création de la fonction qui va executer la boucle les fonctions verifChoix et verifCredit sont appelé dedans
/**
 *

 */

function boucleCommande(age, credit, bna, ba, plat) {

  let choix; 

  while (choix != 4 && credit >= 5) {

    /* Modification du paramètre choix et appel de la fonction verifChoix avec comme valeur de paramètre 
    le paramètre credit de la boucleCommande*/

    choix = prompt(verifChoix(credit));

    if (choix == "1") {

        if (credit >= ba && age >= 18) {
          credit = credit - bna;
          alert(
            "Voici votre boisson non alcoolisé il vous reste " +
              credit +
              " euros.");

        //Appel de la fonction verifCredit avec comme valeur de paramètre le paramètre crédit de la boucleCommande

          verifCredit(credit);
        } else if (age <= 18) {
          alert("Vous n'êtes pas majeur vous ne pouvez pas consommer de l'alcool");
          verifCredit(credit);

        } else {
          alert("Commande refusée");
        }

      
    } else if (choix == "2") {
        if (credit >= bna) {
          credit = credit - bna;
          alert(
            "Voici votre boisson alcoolisé il vous reste " + credit + " euros."
          );
          verifCredit(credit);
        } else {
          alert("Commande refusée");
        }

    } else if (choix == "3") {
        if (credit >= plat) {
          credit = credit - plat;
          alert(
            "Voici votre plat bien chaud il vous reste " + credit + " euros."
          );
          verifCredit(credit);
        } else {
          alert("Commande refusée");
        }

    } else {
          if (choix === "4") {
          alert("A bientôt");
        } else if (credit < 5) {
          alert("Vous n'avez pas assez d'argent !");
        } else {
          alert("Veuillez choisir une option");
        }
    }

  }

}

/**
 * Création de la fonction restauCommande
 */

function restauCommande() {
  // Création des variables
  let age = prompt("Quel est votre âge ??");
  let credit = prompt("Quel est votre crédit ?");

  const ba = 8;
  const bna = 5;
  const plat = 20;

  // Appel de la fonction boucleCommande. La valeur de ces paramètres étant les variables ci-dessus
  boucleCommande(age, credit, ba, bna, plat);
}

// Appel de ma fonction

restauCommande();




// /* EXEMPLE FONCTION MANIERE 1*/

// function inscription() {
//   let age = 27;
//   let nom = " Puaud";
//   let prenom = "Arnaud";
//   let mail = "contact@bonnie-and-cloud.com";

//   alert(verifFormulaire(age, nom, prenom, mail));
// }

// function verifFormulaire(age, nom, prenom, mail) {
//   if (!age || !nom || !prenom || !mail) {
//     return "Veuillez remplir tout les champs";
//   } else {
//     return "Merci de votre inscription";
//   }
// }

// /**
//  * Appel de la fonction principale
//  */
// inscription();



// /* EXEMPLE FONCTION MANIERE 2*/

// function inscription() {
//   let age = 27;
//   let nom = " Puaud";
//   let prenom = "Arnaud";
//   let mail = "contact@bonnie-and-cloud.com";

//   verifFormulaire(age, nom, prenom, mail);
// }

// function verifFormulaire(age, nom, prenom, mail) {
//   if (!age || !nom || !prenom || !mail) {
//     alert("Veuillez remplir tout les champs");
//   } else {
//     alert("Merci de votre inscription");
//   }
// }

// /**
//  * Appel de la fonction principale
//  */
// inscription();











/* PATIE 3 FAIS PAR MOI*/

// Création de toute les variables et constante


// let age = prompt("Quel est votre âge ?");
// let credit = prompt("Quel est votre crédit ?");
// const ba = 8;
// const bna = 5;
// const plat = 20;
// let choixClient;

// /**
//  * Création de ma fonction verifChoix avec comme paramètre credit
//  */
// function verifChoix(credit) {
//     if (credit >= 20) {
//       choixClient = prompt ("Que voulez-vous choisir ? 1/ BA 2/BNA 3/ PLAT 4/ Sortir");

//     } else if (credit >= 8) {
//       choixClient = prompt ("Que voulez-vous choisir ? 1/ BA 2/BNA  4/ Sortir");

//     } else if (credit >= 5) {
//       choixClient = prompt ("2/ BNA 4/ Sortir");
      
//     } else {
//       choixClient = prompt ("Vous ne pouvez plus rien commander  4/ Sortir");
//     }

// }


//     /*Creation de ma boucle*/


// while (credit >= 5 && choixClient != "4") {
//   verifChoix(credit);

//   // Création des conditions et des sous conditions
//   if (choixClient == "1") {

//       if (credit >= ba && age >= 18) {
//         credit = credit - ba;
//         alert("Voici votre boisson alcoolisé il vous reste " + credit + " euros.");

//       } else if (age < 18) {
//         alert("Vous n'êtes pas majeur vous ne pouvez pas consommer de l'alcool");

//       } else {
//         alert("Commande refusée");
//       }

//   } else if (choixClient == "2") {

//         if (credit >= bna) {
//           credit = credit - bna;
//           alert("Voici votre boisson non alcoolisé il vous reste " + credit + " euros.");

//         } else {
//           alert("Commande refusée");
//         }

//   } else if (choixClient == "3") {

//         if (credit >= plat) {
//           credit = credit - plat;
//           alert("Voici votre plat bien chaud il vous reste " + credit + " euros.");

//         } else {
//           alert("Commande refusé");
//         }
//   } else {
//         if (choixClient == "4") {
//           alert("A bientôt");
//         } else {
//           alert("Veuillez choisir une options s'il vous plaît");
//         }
//   }
// }













// /**
//  * RESTOCOMMANDE PARTIE 1
//  */

// // Création de mes constantes:
// const plat = 20;
// const BA = 8;
// const BNA = 5;

// // Création de mes variables

// let age = prompt("Quel âge avez-vous ?");
// console.log("age: ", age);

// let credit = prompt("Combien avez vous ?");
// console.log("credit: ", credit);

// let choix; 
// console.log("Choix : ", choix);



// /* Création de ma boucle*/


// if (credit < 5){
//     console.log ("vous n'avez pas assez de crédit"); 

// } else {
//     while (credit >= 5 && choix!= "4") {
//         choix = prompt ( "Que souhaitez vous commander ? 1/BA 2/BNA 3/BA 4/Sortir")
   

//         /**
//          * ETAPES CONDITIONS :
//          */


//         //SI LE CHOIX EST EGALE AU PLAT (CHOIX 1)

//         if (choix == 1 || choix == "Plat") {
        
//             // Verification du crédit du client par rapport au prix du plat
//             if (credit >= plat) {
//                 credit = credit - plat;
//                 console.log("Votre commande est accepté ! Il vous reste " + credit + " €");
//                 console.log(`Votre commande est accepté ! Il vous reste ${credit} €`);
//             } else {
//                 console.log("Crédit insuffisant vous ne pouvez pas commander le plat !");
//             }

//         } else if (choix == 2 || choix == "BA") {
//             if (age < 18) {
//                 console.log("Vous n'êtes pas majeur !");
//             } else if (credit < BA) {
//                 console.log("Vous n'avez pas assez de crédit");
//             } else {
//                 credit = credit - BA;
//                 console.log(`Votre commande est accepté ! Il vous reste ${credit} €`);
//             }

//         } else if (choix == 3 || choix.toLocaleUpperCase() == "BNA") {
//             if (credit >= BNA) {
//                 credit = credit - BNA;
//                 console.log(`Votre commande est accepté ! Il vous reste ${credit} €`);
//             } else {
//                 console.log("Vous n'avez pas assez de crédit");
//             }
//         } else {
//         console.log("Je n'ai pas compris votre choix");
//         }


//     }
// }





/*restau commande partie 3*/

// Création de toute les variables et constante



/* RESTAU COMMANDE PARTIE 2 EXMPLE 2 */


// // Création de toute les variables et constante


// let age = prompt("Quel est votre âge ??");

// let credit = prompt("Quel est votre crédit ?");

// const ba = 8;

// const bna = 5;

// const plat = 20;

// let choixClient;


//     while (credit >= 5 && choixClient != "4") {


//       // Création des conditions et des sous conditions

//       if (choixClient == "1") {
//             if (credit >= ba && age >= 18) {
//               credit = credit - ba;
//               alert(
//                 "Voici votre boisson alcoolisé il vous reste " + credit + " euros."
//               );
//             } else if (age < 18) {
//               alert("Vous n'êtes pas majeur vous ne pouvez pas consommer de l'alcool");
//             } else {
//               alert("Commande refusée");
//             }
//       } else if (choixClient == "2") {
//             if (credit >= bna) {
//               credit = credit - bna;
//               alert(
//                 "Voici votre boisson non alcoolisé il vous reste " + credit + " euros."
//               );
//             } else {
//               alert("Commande refusée");
//             }
//       } else if (choixClient == "3") {
//             if (credit >= plat) {
//               credit = credit - plat;
//               alert("Voici votre plat bien chaud il vous reste " + credit + " euros.");
//             } else {
//               alert("Commande refusé");
//             }
//       } else {
//             if (choixClient == "4") {
//               alert("A bientôt");
//             } else {
//               alert("Veuillez choisir une options s'il vous plaît");
//             }
//           }
//     }

