const product = {
    name: 'car',
    buyPrice: 15000,
    sellPrice: 20000,
    description: 'suv'
};

Object.defineProperty(product, "id", {
    configurable: false,
    enumerable: true,
    writable: false,
    value: 123,
});

Object.defineProperty(product, "marge", {
    configurable: true,
    enumerable: false,
    get() {
        return this.sellPrice - this.buyPrice;
    },
    set(newMarge) {
        this.sellPrice = newMarge + this.buyPrice;
    },
});

Object.defineProperty(product, "ref", {
    configurable: false,
    enumerable: false,
    writable: false,
    value : "belle voiture"
});

const product1 = {
    id: 123,
    name: "car",
    sellPrice: 23400,
    buyPrice: 15000,
    ref: "ref1",
    description: "sportive",
};

// get on reteurn car on l'affiche par contre set on return rien 
const productProxy = new Proxy(product1, {
    get(obj, prop) {
        switch (prop) {
            case "sellprice":
            case "buyprice":
                return obj[prop].toFixed(2) + "€";
                break;
            case "description":
                if (obj[prop].length > 100) {
                 return  obj[prop].slice(0, 96) + "...";   
                }
                return obj[prop];
                break;

            default:
                break;
        }
    },
    set(obj, prop, val) {
        if (prop === "sellprice" || prop === "buyPrice") {
            if (val <= 0) {
                throw new Error("Le prix ne peut être négatif");
            } else {
                obj[prop] = val;
            }
        }

        if (prop === "sellprice" && val > obj.sellPrice){
            throw new Error('pas possible');
        }
        obj[prop] = val;
    },
});