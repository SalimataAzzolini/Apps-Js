
/** Fonction principale */

function tamagotchi() {
    let EN = 10;
    let FAIM = 0;
    let JOIE = 5;
  
    /**
     * Appel de la fonction choose Action
     */
    chooseAction(EN, FAIM, JOIE);
  }
  
  /**
   * Création de la fonction avec la boucle
   */
  
  function chooseAction(EN, FAIM, JOIE) {
    let action;
  
    while (FAIM <= 5 && JOIE >= 0 && EN >= 0 && action != "3") {
      action = prompt(
        "Que souhaitez-vous faire? \n 1 - jouer | \n  2 - nourrir | \n  3-Sortir du jeu"
      );
  
      if (action == "1") {
        EN -= 2;
        FAIM++;
        JOIE++;
        autopsie(FAIM, EN, JOIE);
      } else if (action == "2") {
        FAIM--;
        JOIE--;
        EN += 2;
        autopsie(FAIM, EN, JOIE);
      } else if (action == "3") {
        alert("A bientôt !");
      } else {
        alert("Erreur veuillez recommencer !");
      }
    }
  }
  
  /*
   * Etat du tamagotchi après choix de l'action
   */
  
  function autopsie(FAIM, EN, JOIE) {
    console.log("4", EN, FAIM, JOIE);
    if (FAIM > 5) {
      alert("Votre tamagotchi est mort de faim !");
      restart();
    } else if (EN < 0) {
      alert("Votre tamagotchi est mort de fatigue !");
      restart();
    } else if (JOIE < 0) {
      alert("Votre tamagotchi s'est suicidé !");
      restart();
    } else {
      tamagochiStatut(FAIM, EN, JOIE);
    }
  }
  
  /** Rappel du statut  */

  function tamagochiStatut(FAIM, EN, JOIE) {
    if (FAIM >= 4 && FAIM <= 5) {
      alert(
        "Votre Tamagotchi a les caractéristiques suivantes:  \n  Energie = " +
          EN +
          "; \n  Faim = " +
          FAIM +
          "; \n  Joie =" +
          JOIE +
          " \n  Votre tamagotchi a faim, pensez à le nourrir!"
      );
    } else if (EN >= 0 && EN <= 2) {
      alert(
        "Votre Tamagotchi a les caractéristiques suivantes:  \n Energie = " +
          EN +
          "; \n Faim = " +
          FAIM +
          "; \n Joie =" +
          JOIE +
          " \n Votre tamagotchi est épuisé, veillez à ce qu'il se repose!"
      );
    } else if (JOIE >= 0 && JOIE <= 1) {
      alert(
        "Votre Tamagotchi a les caractéristiques suivantes:  \n Energie = " +
          EN +
          ";  \n Faim = " +
          FAIM +
          "; \n Joie =" +
          JOIE +
          " \n Votre tamagotchi est très triste, jouer lui ferait du bien!"
      );
    } else {
      alert(
        "Votre Tamagotchi a les caratéristiques suivantes: \n Energie = " +
          EN +
          "; \n Faim = " +
          FAIM +
          "; \n Joie =" +
          JOIE
      );
    }
  }
  
  /** Voulez-vous recommencer */
  
  function restart() {
    let restart = prompt("Voulez-vous recommencer? 1/  Oui | 2/  Non");
  
    if (restart == "1") {
      tamagotchi();
    } else if (restart == "2") {
      alert("A bientôt");
    } else {
      alert("Cette action n'est pas autorisée, veuillez recommencer");
    }
  }
  
  /**
   * Appel de ma fonction principal
   */
  
  tamagotchi();









// let EN = 10; 
// let FAIM = 0; 
// let JOIE = 5; 
// let choix; 

// function JouerNourrir() {
  
// choix = prompt (" 1/Jouer \n 2/Nourrir \n 3/Sortir"); 

//         if (choix == "Jouer") {
//             EN -= 2; 
//             FAIM += 1; 
//             JOIE += 1;

//         alert (`Vous avez encore ${EN} ${FAIM} ${JOIE}`);

//         console.log(`alors ${EN} ${FAIM} ${JOIE}`);

//         }
//         else if (choix == "Nourrir") {
//             EN += 2; 
//             FAIM -= 1; 
//             JOIE -= 1;

//         alert (`Vous avez encore ${EN} ENERGIE ${FAIM} ${JOIE} `);

//         console.log(`alors ${EN} ${FAIM} ${JOIE}`);


//         } else if (choix == "Sortir") {

//             alert ("Vous partez dommage !");

//             console.log("aurevoir");

//         }else {
//             console.log("Veuillez choisir quelque chose");
//         }

//     }

// while (FAIM <= 5 && JOIE > 0 && EN > 0  && choix != "Sortir") {

//         JouerNourrir(); 
// }

