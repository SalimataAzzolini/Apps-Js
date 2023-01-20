
// Déclaration de nos variable

const nombreADeviner = 8;
let essai = 10;

let choixNombre;
let choixJouer = "Rejouer";

while (choixNombre != nombreADeviner && essai > 0 && choixNombre != "Sortir") {
  choixNombre = prompt(
    "Quel numéro voulez-vous choisir ? (Entre 1 et 10) \n Tapez 'Sortir' pour quitter le jeu"
  );
    if (choixNombre > nombreADeviner) {
        essai--;
        alert("C'est moins il vous reste " + essai + " essai");

    } else if (choixNombre < nombreADeviner) {
        essai--;
        alert("C'est plus il vous reste " + essai + " essai");

    } else if (choixNombre == nombreADeviner) {
        alert("Félicitations vous avez trouvé !");

    } else if (choixNombre == "Sortir") {
        alert("Au revoir !");

    } else {
        alert("Recommencez s'il vous plaît");
    }
}


/* Exemple Boucle dans une boucle */

//Création de la boucle//


        //     while (choix2 ="rejouer") {

        //      const NB = 7;
        //      let choix;
        //      let essai = 10;
        //      let choix2 = "rejouer";

            //     while (choix!=7 && essai >0 && choix !="sortir") {
                
            //     choix = prompt(`veuillez choisir un chiffre`);

            //     //Les Conditions//

            //     if (choix == 7) {
            //         console.log(`Vous avez gagné!`);

            //         } else if (choix !=7){ 
            //            essai--
            //            console.log(`Veuillez recommencer, il vous reste, ${essai} essais`);

            //         } else if (choix !="sortir") {
            //            console.log(`Au revoir`);
        
            //          } else {
            //         console.log(`Louppé!`);
            //          }
            //        }
            // 
            // choix2 = prompt (`voulez-vous rejouer?`);
        // } 









/* EXEMPLE CREATION MOI */

// const NBADEVINER = 8; 

// let ESSAI = 10; 

// let CHOIX; 



/*creation de la boucle for*/

// while (CHOIX != NBADEVINER && ESSAI > 0){
//     CHOIX = prompt("Quel nombre choisissez-vous ?");

//     if (CHOIX == 8){
//         console.log ("Vous avez gagné");
//         alert ("vous avez gagné") 

//     } else if (CHOIX != NBADEVINER) {
//         ESSAI --
//         console.log (`Veuillez réessayer, il vous reste ${ESSAI} essai`);
//         alert ("Veuillez réessayer il vous reste des essais") 

//     } else {
//         console.log ("Loupé"); 
//     }

// }




// /*creation de la boucle for*/


for (let ESSAI = 10; ESSAI > 0; ESSAI--) {
    CHOIX = prompt("Quel nombre choisissez-vous ?");

    if (CHOIX == 8){
        console.log ("Vous avez gagné");
        alert ("vous avez gagné"); 

    } else if (CHOIX != NBADEVINER) {
        ESSAI --
        console.log (`Veuillez réessayer, il vous reste ${ESSAI} essai`);
        alert ("Veuillez réessayer il vous reste des essais"); 

    } else {
        console.log ("Loupé"); 
    }
}





/*mettre des numero aléatoires*/

// const numero = (Math.floor((Math.random() * 10) + 1))
//     console.log ("numéro a deviner: " + numero)

// let guess = 10

// let choix

// while (choix != numero && guess > 0)

//     {choix = prompt("guess the number: ")
        
//         if (choix != numero)
//             {
//                 guess = guess - 1
//                 console.log (`Non! Réessayer! \n Il vous reste: ${guess} essais`)
//             }
        
//         else if (choix == numero)
//             {
//                 alert ("GAGNANT!!!")
//             }    

//         else {
//             console.log("je n'ai pas compris votre choix. Réessayer")
//         }
        
// }

