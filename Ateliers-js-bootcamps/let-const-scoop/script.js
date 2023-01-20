
/**
 * Création de la fonction principal déclaration de a et c et vérification de !a && !c
 *
 * Appel de la fonction compare avec comme valeur de paramètre a et c
 */

 function principal() {
    let a = prompt("Choisissez la valeur de a");
  
    const c = prompt("Choisissez la valeur de c");
  
    if (!a || !c) {
      alert("Veuillez remplir les champs");
    } else {
      compare(a, c);
    }
  }
  
  /**
   *
   * @param {Number} p1 Valeur de la variable a
   * @param {Number} p2
   *
   */


  /** Creation de la fonction compare */
  
  function compare(p1, p2) {
    let b = prompt("Choisissez la valeur de b");
  
    if (!b) {
      alert("Veuillez remplir B");
    } else {
      if (p1 > p2) {
        p1 = p2;
        alert(" A est supérieur à C. Nouvelle valeur de a :" + p1);
      } else {
        p1 = b;
        alert(" A est inférieur à C. Nouvelle valeur de a :" + p1);
      }
    }
  }
  
  principal();
  











// /*creation des variables et constantes tecnique sans les null*/

// let a = prompt("donnez une valeur à A de 1 - 10 ?");
// console.log ("donnez une valeur à A =", a); 

// const c = prompt("donnez une valeur à C de 1 - 10 ?");
// console.log ("donnez une valeur à C =", c); 



// function comparation () {
 
//     let b = prompt("donnez une valeur à B de 1 - 10 ?");
//     console.log ("donnez une valeur à B =", b); 

//     if (a > c) {
     
//         a = c;

//         console.log (a);
//         alert (`A est superieur a C Le nombre A devient ${c}`); 

//     } else {
//         a = b;
//         alert (`A est inferieur à C, Le nombre A devient ${b}`); 
//     }

// }

// comparation (); 