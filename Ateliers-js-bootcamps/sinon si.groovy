
CONSTANTE Plat = 20
CONSTANTE BNA = 5
CONSTANTE BA = 8



VARIABLE AGE = LIRE_SAISIE_CLAVIER(27)

Quel âge avez vous ?

Réponse : 27

VARIABLE CREDIT = LIRE_SAISIE_CLAVIER (200)

Combien de crédit avez-vous ?

Réponse: 200


SI (CREDIT < 5) { 
    AFFICHER Vous n'avez pas assez de crédit
} SINON {

        Tant que credit >= "5" && choix ! =exit {


                VARIABLE CHOIX = LIRE_SAISIE_CLAVIER (Plat)

                -------------------------------
                Que voulez vous prendre ?
                '
                -Plat (20€)
                -BNA (5€)
                -BA (8€)
                -SORTIR
                '
                ------------------------------
                                
                            
                    Réponse : Plat 

                    SI (CHOIX == Plat) {

                        SI (CREDIT >= PLAT) {

                            CREDIT = CREDIT - PLAT
                            AFFICHER `Commande Acceptée il vous reste ${CREDIT} `    

                        } SINON {

                            AFFICHER Commande refusée crédit insuffisant !    

                        }

                    } SINON SI ( CHOIX == BNA) {

                        SI (CREDIT >= BNA) {

                            CREDIT = CREDIT - BNA
                            AFFICHER `Commande Acceptée il vous reste ${CREDIT} `    

                        } SINON {

                            AFFICHER Commande refusée crédit insuffisant !    

                        }

                    } SINON SI ( CHOIX == BA) {

                        SI ( CREDIT < BA ) {
                            AFFICHER Vous n'avez pas assez de crédit pour commander !

                        } SINON SI (AGE < 18) {
                            AFFICHER Vous n'avez pas l'âge de commander de l'alcool

                        } SINON { 
                            
                            CREDIT = CREDIT - BA
                            AFFICHER Commande accepté
                        }

                    } SINON {

                        AFFICHER Je n'ai pas compris votre choix veuillez réessayer.    

                    }

        A BIENTOT 

        }










    
---------------

SCHEMA ALGORITHME


SI
    SI
    SINON
SINON SI
    SI
    SINON
SINON SI
    SI
    SINON SI
    SINON
SINON
