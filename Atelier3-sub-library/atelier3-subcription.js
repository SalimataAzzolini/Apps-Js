// ******* CONSTRUCTEUR SUBDESCRIPTION *********

function Subscription( formuleName, duration )
{
    this.formuleName = formuleName;
    this.annualPrice = this.monthPrice * 12;
    this.duration = duration;
    this.subDateStart = new Date();
}

// ************** PROTOTYPES ***************************

Subscription.prototype.copyRight = 'Tout droit reserve';

Subscription.prototype.subDateEnd = new Date('20/01/2100');

Subscription.prototype.duration = 12;

Subscription.prototype.status = true;


// ******************** Nouvel objet instancie **************

let subcription1 = new Subscription (1, 'test', 10, 12, true);
console.log(subcription1);



// *************  ACCESSEURS  *****************
// mettre dans le constructeur
Object.defineProperty(subcription1, "id", {
    configurable: false,
    enumerable: false,
    writable: true,
    value: new Date().getTime(),
});

Object.defineProperty(subcription1, "monthPrice", {
    configurable: true,
    enumerable: true,
    get() {
        return this.annualPrice / 12;
    },
    set(newMonthPrice) {
        this.annualPrice = newMonthPrice * 12;
    },
});


Object.defineProperty(subcription1, "annualPrice", {
    configurable: true,
    enumerable: true,
    get() {
        return this.annualPrice = this.monthPrice * this.duration;
    },
    set(newMonthPrice) {
        this.duration * newMonthPrice;
    },
});

Object.defineProperty(subcription1, "subDateStart", {
    configurable: false,
    enumerable: true,
    writable: true,
    value: new Date()
});

Object.defineProperty(subcription1, "engageDateEnd", {
    configurable: false,
    enumerable: true,
    get() {
        return this.engageDateEnd = this.subDateStart.setMonth(this.subDateStart.getMonth() + this.duration);
    },
});


//  ************ PROXY ************

const subscriptionProxy = new Proxy(subcription1, {
    get(obj, prop) {
        if(obj.status === false) 
        {
            if(prop === "formuleName" || prop === "engageDateEnd") {
                return obj[prop];
            }
            return undefined;
        }

        switch (prop) 
        {
            case "id" : 
            obj[prop] = undefined;

            case "annualPrice":
            case "monthPrice":
                return obj[prop].toFixed(2) + "€";

            case "copyRight" : 
            return "MENTIONS LEGALES SUJETTES A MODIFICATION:" + obj[prop]

            default:
            Reflect.get(...arguments);
            
                
        }
    },

    set(obj, prop, val) 
    {
      
        if (prop === "monthPrice" && val < 0 ){
            throw new Error('pas possible');
        }

        if (prop === "annualPrice" && val < 200){
            throw new Error('pas assez possible');
        }

        if (prop === "monthPrice" && val < 200 / 12){
            throw new Error('pas assez possible');
        }

        if (prop === "formuleName"){
            if(val.length < 12){
                throw new Error('Name bust be 12 caracter')
            }
        }
    },
});

console.log(subscriptionProxy.copyRight);



// ***************** FONCTION CREATE *****************

function createSubscription(){

}