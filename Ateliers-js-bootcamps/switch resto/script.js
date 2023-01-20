const plat = 20;
const BNA = 5; 
const BA = 8; 


let age = prompt ("Saisir votre age");
console.log ("age"); 

let credit = prompt ("Saisir votre credit");
console.log ("credit"); 

let choix = prompt ("Saisir votre choix"); 


switch (choix) {
    case "plat": 
        if (credit >= plat){
            console.log ("commande accepté il vous reste $ {credit}"); 

        } else {
            console.log ("commande refusée crédit insuffisant !"); 
        }

        break; 

    case "BNA":
        if (credit >= BNA) {
            console.log ("commande accepté il vous reste $ {credit}"); 
    
        } else {
            console.log ("commande refusée crédit insuffisant !"); 
        }
        break;

    case "BA": 
        if (credit < BA) {
            console.log ("vous n'avez pas assez de credit"); 

        } else if (age < 18) {
            console.log ("Vous n'avez pas l'âge de commander de l'alcool"); 

        } else {
            console.log ("commande acceptée"); 
        }
        break; 

    default : 
        console.log ("Je n'ai pas compris votre choix");
        break; 
}