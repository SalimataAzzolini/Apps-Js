let array = ["From Scratch", 33, ["javascript", "html", "css"], true];

console.log(array[0][4]); // on log ici l element position zero et son element a lui position 4

for (i = 0; i < array.length; i++) {
  console.log(array[i]);
  console.log("Element numéro : " + [i] + " est un " + typeof array[i]); // type of aray on enumere les type d element contenu dans array1
}

const numbers = [21, 45, 1, 22, 44, 7]
numbers.sort(); // permet de trier le tableau


// ****************************************
const input = document.getElementById("input");
const video = document.getElementById("video");
let link = ""; // on declare une variable url vide 

input.addEventListener("input", (e) => {
  changeLink(e.target.value); 

  if (link) {
    video.innerHTML = `
      <iframe
        width="654"
        height="491"
        src=${link}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
  }
});
// fonction pour changern notre lien 
const changeLink = (linkToChange) => { // en param le lien a change
  embed = linkToChange.replace("watch?v=", "embed/"); // ici on remplace watcht?v= par embed/
  link = embed.split("&")[0]; // split pour casser le tableu : ici split a chaque fois qu'il voir un & et il ne garde que le crochet o la partie de gauche
};
