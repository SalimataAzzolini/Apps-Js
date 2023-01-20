const btn = document.querySelector('#btn')
const img = document.getElementById('img')
// au click on affiche l image
btn.addEventListener('click', (e) => {
  img.classList.toggle("show")
})

const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

// On ajoute un event a la div mouseEvent 
mouseEvent.addEventListener("mousemove", (e) => {
  console.log(e); 
  horizontal.innerHTML = e.x; // valeur de e.x dans la console
  vertical.innerHTML = e.y;
  // Onstyle de gauche a droite la div et on ajoute une condition d arret
  mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";

  if (e.x > 600 ) {
    document.body.style.filter =  'blur(3px)';
  } else {
    document.body.style.filter = 'none';
  }
});


// formulaire exemple 

const input = document.getElementById('input');

input.addEventListener('input', (e) => {
  console.log(e.target.value);
  vertical.innerHTML = e.target.value
})

// Recuperation des div class theme
const theme = document.querySelectorAll('.theme')

// Ici theme nousrenvoie un tableau de 3 elements 
theme.forEach((item) =>
  item.addEventListener("click", (e) => { // au click on recupere l event dans un e 
    console.log(e.target.id);
    
    // on remove dabord le theme actuel avant de lui donner un autre 
    document.body.classList.remove('darkTheme', 'yellowTheme', 'greenTheme') 
    switch (e.target.id) {
      case "dark":
        // classlist du body si case dark on met darktheme
        document.body.classList.add("darkTheme");
        break;
      case "yellow":
        document.body.classList.add("yellowTheme");
        break;
      case "green":
        document.body.classList.add("greenTheme");
        break;
      default:
        null;
    }
  })
);