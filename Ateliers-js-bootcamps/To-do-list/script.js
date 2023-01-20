
/* Création de ma fonction principale pour englober tout la to-do liste*/

function principale () {

/* Création de mes variables avec l'element button et l'elment input et l'élement li*/

    let buttonQuery = document.querySelector (".button"); 

    let inputQuery = document.querySelector (".mon-input");

    let ajoutListe = document.querySelector(".ma-liste"); 

    let listeEncours = document.querySelector (".ma-liste-en-cours"); 

    let listeFait = document.querySelector (".ma-liste-fait"); 


    let priorite = document.querySelector (".priorite"); 

   

/* Création d'un even sur le button AJOUTER
** création de ma variable ajoutListe avec la recupération de mon ul liste à faire*/



    buttonQuery.addEventListener ("click", function () {

/** Création d'une variable tache en 'li' permettant la saisi d'élement avec comme valeur input value*/

        let tache = document.createElement ("li");


        console.log("Valeur de tache", tache);


        if (!inputQuery.value){

            alert ("Veuillez saisir quelque chose"); 

        } else{

/** Création d'une variable tache en 'li' permettant la saisi d'élement avec comme valeur input value
** et mis comme enfant de l'ul ajout liste à faire avec un e condition */

            tache.innerText = inputQuery.value; 

            if (priorite.value == "eleve") {

                tache.style.color = "red"; 

            } else if (priorite.value == "moyen") {
                tache.style.color = "blue"; 

            } else if (priorite.value == "faible"){
                tache.style.color = "green"; 
            } else {
                false; 
            }


            ajoutListe.appendChild (tache);

/* la ligne ci-dessous Permet d'enlever la saisi apres validation*/
            
            inputQuery.value = ""; 

        }; 
/*Pour créer le local storage ici*/

/*Creation de ma fonction addEvenListener pour la variable tâche,
** puis affectation de ma variable tache depuis l'ul tache à faire vers tache en cours
*/


        tache.addEventListener ("click",function () {

        listeEncours.appendChild (tache);
            
            
        }); 


/*Creation d'un addEvenListener sur tache
** puis affectation de ma variable tache depuis l'ul tache en cours  vers tache réalisés
*/

        tache.addEventListener ("dblclick", function () {

        listeFait.appendChild (tache); 


        setTimeout(() => {tache.remove();
                },6000);
                
        }); 


        

    }); 
    

}; 

principale(); 



/*Pour barrer un element*/

// tache.style.textDecoration = "line-through"


/*Pour effacer un truc apres cinq second*/

// setTimeout(() => {element.remove();
// },5000);






/*fonction pour supprimer un element et demander a l'utilisateur de confirmé*/

// tache.addEventListener('dblclick', function(){
    
//     if ( confirm( "vous etes sur de vouloir supprimer" ) ) {
//         // Code à éxécuter si le l'utilisateur clique sur "OK"
//         tache.remove();
//     } else {
//         // Code à éxécuter si l'utilisateur clique sur "Annuler" 
//         text = "You canceled!";
//     }

// })







/*Exemples de styles a faire */

// tache.addEventListener('click', function(){
//     tache.style.textDecoration = "line-through";
//     tache.style.color = "red";
// });
// // // fonction pour supprimer ligne
//     tache.addEventListener('dblclick', function(){
//     tache.remove();
// }) 
// })




                /*Exemple exo */

// let buttonQuery = document.querySelector(".buttonClass");
// let inputNameQuery = document.querySelector(".inputName");

// function alertFunction() {
//   alert("J'ai cliqué et la valeur a");
// }
// buttonQuery.addEventListener("click", function () {
//   let a = inputNameQuery.value;

//   console.log("Valeur de a", a);
// });


                /*Exemple 2 */

// function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === '') {
//       alert("You must write something!");
//     } else {
//       document.getElementById("myUL").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";
  
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
  
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//       }
//     }
//   }
  