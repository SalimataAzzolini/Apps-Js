// Prototype général de nos produits

class ProtoBNA {
    // Création de la fonction constructeur à l'intérieur de ma classe
  
    constructor(quantite, prixAchatHT, prixVenteHT, margeHT, prixVenteTTC) {
      this.quantite = quantite;
      this.prixAchatHT = prixAchatHT;
      this.prixVenteHT= prixVenteHT;
      this.margeHT = margeHT;
      this.prixVenteTTC = prixVenteTTC; 
    }
  }
  
  // // Prototype Boisson Non Alcoolisé : BNA
  
//   class ProtoBNA extends  ProtoProduit {

//     constructor(quantite, prixAchatHT, prixVenteHT, margeHT, prixVenteTTC) {

//       // On rappel les paramètres de la class ProtoCotact

//       super (quantite, prixAchatHT, prixVenteHT, margeHT, prixVenteTTC);
//     }
//   }
  
  // // Prototype Personnel
  
  class ProtoBA extends ProtoBNA {
    constructor (quantite, prixAchatHT, prixVenteHT, margeHT, prixVenteTTC, degres) {

      // On rappel les paramètres de la class ProtoCotact
      super (quantite, prixAchatHT, prixVenteHT, margeHT, prixVenteTTC);
  
      this.degres = degres;
    
    }
  }
  