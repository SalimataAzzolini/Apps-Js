/**
 *
 * INTRODUCTION FONCTION FACON 1
 */

addition(1, 2);

addition(5, 5);

function addition(nb1, nb2) {
  console.log("P1", nb1);
  console.log("P2", nb2);
  let resultat = nb1 + nb2;

  if (resultat > 0) {
    console.log("Supérieur a 0 " + resultat);
  } else {
    console.log("Inférieur à 0 " + resultat);
  }
}

/**
 *
 * INTRODUCTION FONCTION FACON 2
 */

function addition(nb1, nb2) {
  console.log("P1", nb1);
  console.log("P2", nb2);
  let resultat = nb1 + nb2;

  if (resultat > 0) {
    return "Supérieur a 0 " + resultat;
  } else {
    return "Inférieur à 0 " + resultat;
  }
}

console.log(addition(2, 2));