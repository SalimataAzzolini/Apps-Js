let action; 
let enigme; 
let devinette; 
let histoire; 

let choix;

let nombreVies = 7; 


function jeux () {

    choix = prompt ("1/action \n 2/enigme \n 3/devinette \n 4/chanson \n 5/sortir");


    switch (choix) {


        case "action" :
        
        action = prompt (" Vous êtes dans une chambre noir et vous devez sortir que faites-vous? : \n 1/Ouvrir la porte \n 2/Allumer la lumiere \n 3/Appeler quelq'un \n 4/Crier");
        
                if (choixAction == "Ouvrir la porte" ) {

                alert ("Vous êtes mort , on vous tiré dessus"); 
                console.log ("Vous êtes mort , on vous tiré dessus");

                    
                } else if (choixAction == "Allumer la lumiere") {

                    alert ("Vous êtes vulnérable on sait que vous êtes là"); 


                } else if (choixAction == "Appeler quelq'un") {

                    alert ("Hourra vous êtes sauvé"); 

                } else if (choixAction == "Crier") {

                    alert ("Dommage vous êtes repéré !"); 

                } else {
                    alert ("Veuillez choisir votre destin"); 
                    console.log();
                }


        break; 

        case "enigme" : 

        break; 

        case "devinette" : 

        break; 

        case "histoire" : 

        break; 

    
    }
      
}


while (nombreVies > 7  && choix != "Sortir") {

    jeux ();  
}
