/**
 * 
 * @param {*string} name 
 * @param {*string} description 
 * @param {*number} prixHT 
 * @param {*number} stock 
 */
function Product (name, description, prixHT, stock, canSale ){
    this.name = name;
    this.description = description;
    this.prixHT = prixHT;
    this.stock = stock;

    
}
// DECLARATION DES PROTOTYPES
//TVA
Product.prototype.vta = 0.2;

//TAUX DE REMISE
Product.prototype.discount = 0;

// CALCUL PRIX TTC
Product.prototype.getPriceTTC = function (){  
   return this.prixHT + (this.prixHT * this.vta); 
  
}

// PRODUIT EN VENTE
Product.prototype.onSale = function (){
    return this.stock > 0;
}

//VERIF AGE
Product.prototype.enableToSale = function (age){
    return age>= 18;
}


Product.prototype.getDiscountPrice = function (){
    if(this.discount === 0){
        console.log('Pas de remise');
    }
    return this.getPriceTTC() - (this.getPriceTTC() * this.discount);
}

// Message 
Product.prototype.getMessage  = function (age) {
    if (age < 18 ) {
        console.log(
            "Le produit " +
                this.name +
                " est vendu au prix de " +
                this.prixHT +
                " € soit " +
                this.getPriceTTC() +
                " € TTC. Vous devez avoir 18 ans pour l'acheter. Une remise de " +
                this.discount * 100 +
                " % est disponible."
        );
    } else {
        console.log(
            "Le produit " +
                this.name +
                " est vendu au prix de " +
                this.prixHT +
                " € soit " +
                this.getPriceTTC() +
                " € TTC. Une remise de " +
                this.discount * 100 +
                " % est disponible."
        );
    }
};

let tongue = new Product("chaussure", 'tongue', 10, 0);

let basket =  new Product ('basket nike', 'running', 95, 50);
basket.discount = 0.2;

/* console.log(tongue.getPriceTTC()); */

/* console.log(tongue.onSale());

console.log(tongue.enableToSale(18)); */
console.log(tongue.getDiscountPrice());
/* console.log(basket.getPriceTTC());
console.log(basket.getDiscountPrice()); */
