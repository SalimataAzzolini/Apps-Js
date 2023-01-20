
 objetPro.presentation = function () {
  return `Mon prénom: ${this.firstName} Mon nom: ${this.lastName} Mon Email: ${this.email} Mon Téléphone: ${this.tel}`;

}


// /* ------------EXO PARTIE 1 ----------------*/

// // function principale () {

// //   let formQuery = document.querySelector(".formulaireContact");
  
// //   let contactClient = document.querySelector (".contactClient")

// // click (formQuery, contactClient)

// // };


// // function click (formQuery, contactClient) {

// //   // Création d'un even sur le formulaire globale

// //     formQuery.addEventListener("submit", function (e) {

// //  // Blocage du rechargement de la page grace au parametre (e)
// //       e.preventDefault();
    
// //   // Récupération des données du formulaires grace a la technique new formData
    
// //           let form = new FormData(formQuery);

// //   // Création d'un objet client et remplissage de ses propriétes avec  le form.get et aujout d'une méthode présentation
// //         let objet = { 
// //               firstName : form.get (`firstName`),
// //               lastName : form.get (`lastName`),
// //               email : form.get (`email`),
// //               tel : form.get (`tel`),
          
// //               presentation : function (){

// //   // Mis en place de return a la place de consollog pour afficher la phrase ci dessous dans sur le site 
// //               return ("Je suis" + " "+ this.firstName + " " + " Mon email est <br/>" +" "+ this.lastName + " " + this.email + " " + this.tel);

// //           }
// //   // Rappel de la méthode de l'objet    
// //         }; objet.presentation ();

// //  // Création d'une variable avec la fonction presentation de mon objet afin d'afficher les propriétes 
// //  // sur la page et mis comme enfant de la dic contact client

// //         let maPresentation = document.createElement ("p"); 
// //         maPresentation.innerText = objet.presentation (); 
// //         contactClient.appendChild (maPresentation); 

// //  // Création d'un élément button pour supprimer un contact

// //         let deleteButton = document.createElement("button");
// //         deleteButton.innerText = "Supprimer"; 

// //     // Faire apparaitre le bouton dans le parent p en l'attribuant comme enfant

// //        maPresentation.appendChild(deleteButton); 


// //     // Ecouteur d'even au niveau de mon bouton

// //        deleteButton.addEventListener ("click", function (){

// //         let result = confirm("Etes-vous sur de vouloir supprimer ?"); 

// //             if (result) {
// //               alert ("Contact supprimer");
// //               maPresentation.remove(); 

// //             } else {
// //               alert ("Noté"); 
// //             }

        
// //        }); 

// //     // Vider le champ formQuery après le remplissage du formulaire

// //     formQuery.reset()

// //    // Sauvegarde des contacts dans le local Storage

// //     localStorage.setItem ("Presentation", objet.presentation()); 

// //     }); 

// // }

// // principale (); 






// /*CREATION D'UNE CLASSE AVEC LES INSTANCES*/

// // class objet {
// //   constructor(firstName, lastName, email, tel) {
// //     this.firstName = firstName
// //     this.lastName = lastName
// //     this.email = email
// //     this.tel = tel

// //     this.presentation = function () {

// //       console.log("Je suis" + " " + this.firstName + " " + this.lastName)
// //     }
// //   }
// // }

// // let contactPersonnel = new objet (firstName, lastName, email, tel);








// /*EXEMPLE CREATION OBJECT*/

// // let sali =  {
// // nom : "Azzolini",
// // prenom : "Salimata",
// // age : 27,
// // formation : "developpeur",

// // maPresentation : function (){

// //     console.log("Je suis" + " "+ this.nom + " " + this.prenom);
// //     }
// // }
// // sali.maPresentation(); 

// // sali.nom = "SOW"; 
// // console.log(sali.nom);




                    // /*EXEMPLE CREATION TABLEAU*/

// // let tableau = ["type1", "type2", "type3", "type4", "type5", "type6"]; 
// // console.log(tableau);

// // tableau.push ("type7"); 
// // console.log(tableau);

// // let typeAsupprimer = tableau.indexOf("type5"); 
// // console.log(typeAsupprimer);

// // tableau.splice(typeAsupprimer, 1); 
// // console.log(tableau);



// /*EXEMPLES*/

// // let nom = document.createElement ("p"); 
// //         nom.innerHTML = form.get (`firstName`);
// //         contactClient.appendChild (nom);  

// //         let prenom = document.createElement ("p"); 
// //         prenom.innerHTML = form.get (`lastName`);
// //         contactClient.appendChild (prenom); 

// //         let mail = document.createElement ("p"); 
// //         mail.innerHTML = form.get (`email`);
// //         contactClient.appendChild (mail);  

// //         let tel = document.createElement ("p"); 
// //         tel.innerHTML = form.get (`tel`);
// //         contactClient.appendChild (tel);  


                              /*EXEMPLE CREATION TABLEAU*/



// let tableau = ["type1", "type2", "type3", "type4", "type5", "type6"]; 
// console.log(tableau);

// tableau.push ("type7"); 
// console.log(tableau);

// let typeAsupprimer = tableau.indexOf("type5"); 
// console.log(typeAsupprimer);

// tableau.splice(typeAsupprimer, 1); 
// console.log(tableau);



                                          /*EXEMPLES*/

// let nom = document.createElement ("p"); 
//         nom.innerHTML = form.get (`firstName`);
//         contactClient.appendChild (nom);  

//         let prenom = document.createElement ("p"); 
//         prenom.innerHTML = form.get (`lastName`);
//         contactClient.appendChild (prenom); 

//         let mail = document.createElement ("p"); 
//         mail.innerHTML = form.get (`email`);
//         contactClient.appendChild (mail);  

//         let tel = document.createElement ("p"); 
//         tel.innerHTML = form.get (`tel`);
//         contactClient.appendChild (tel);  















// /*------------------EXEMPLE FONCTION EXOO --------*/


// /**
//  * OBJET CONSTRUCTEUR AVEC FONCTIONS
//  */

// /**
//  *
//  * @param {*} puissance
//  * @param {*} marque
//  * Création de notre fonction CONSTRUCTRICE
//  * AVEC PARAMETRE POUR LA MARQUE ET LA PUISSANCE
//  */
// function VoitureProto(puissance, marque) {
//   this.marque = marque;
//   this.puissance = puissance;
//   this.roues = 4;

//   this.functionProto = function () {
//     console.log("Votre voiture est une " + this.marque);
//   };
// }

// function ChoixCouleur(puissance, marque, couleur) {
//   //Appel de la fonction constructeur à l'intérieur de ChoixCouleur
//   VoitureProto.call(this, puissance, marque);
//   this.couleur = couleur;
// }

// // Création de mon nouvel objet à partir du de la fonction constructeur ChoixCouleur
// let voitureCouleur = new ChoixCouleur(150, "Porsche", "Rouge");

// console.log("voitureCouleur", voitureCouleur);




/*EXEMPLE CARNET CONTACT PARTIE 2*/


/*PARTIE ELSE DANS MON OBJECT CONTACT PERSO*/

//  /* Création d'une variable pour lui attribuer comme valeur innerText objetPerso*/

//         let presentationPerso = document.createElement ("p"); 

//         presentationPerso.innerText = `Mon prénom: ${objetPerso.firstName} \n Mon nom: ${objetPerso.lastName} \n Mon Email: ${objetPerso.email} \n Mon Téléphone: ${objetPerso.tel} \n Catégorie : ${objetPerso.typeContact} \n Adresse personnel : ${objetPerso.AdressePersonnel} \n`;

//         contactClient.appendChild (presentationPerso); 

        
//          /* Création d'un élément button pour supprimer le contact et l'attribuer comme enfant de du p contact*/

//          let deleteButton = document.createElement("button");

//         deleteButton.innerText = "SUPPRIMER"; 

//         presentationPerso.appendChild (deleteButton); 
        
//          // Ecouteur d'even au niveau de mon bouton pour supprimer le contact

//         deleteButton.addEventListener ("click", function (){

//             presentationPerso.remove (); 
//         })




                                /*PARTIE ELSE DANS MON OBJECT CONTACT PRO */

        //   /* Création d'une variable pour lui attribuer comme valeur innerText objetPro*/

        //   let presentationPro = document.createElement ("p"); 

        //   presentationPro.innerText = `Mon prénom: ${objetPro.firstName} \n Mon nom: ${objetPro.lastName} \n Mon Email: ${objetPro.email} \n Mon Téléphone: ${objetPro.tel} \n Catégorie : ${objetPro.typeContact} \n Adresse ${objetPro.AdresseProfessionnel} \n`;
    
        //   contactClient.appendChild (presentationPro); 


        //  /* Création d'un élément button pour supprimer le contact et l'attribuer comme enfant de du p contact*/

        //  let deleteButton = document.createElement("button");

        // deleteButton.innerText = "SUPRIMER"; 

        // presentationPro.appendChild (deleteButton); 

        //  // Ecouteur d'even au niveau de mon bouton pour supprimer le contact

        //  deleteButton.addEventListener ("click", function () {

        //       presentationPro.remove (); 
        //  })