class Product {

    #id;

    constructor(name, description, priceHT, vta, stock) {
        this.name = name;
        this.description = description;
        this.pripriceHT = priceHT;
        this.vta = vta;
        this.stock = stock;
        this.inStock = true;
    }

        getId () {
         
            return  this.#id;
        }

        getPriceTTC () {

            return (this.pripriceHT * this.vta).toFixed(2) + "€";
        }

        isTosell(){

            if (this.stock === 0){
                this.inStock = false;
            }
        }

  
}

class VirtualProduct extends Product{

    #code;

    constructor(name, description, priceHT, vta, stock, type, size){

     super (name, description, priceHT, vta, stock);

    this.type = type;
    this.size = size;   
    }
 
    getCode(){
        return "Pour télécharger, utiliser ce code : CODE";
    }

    getSize(){
        return this.size + 'go';
    }
    
}