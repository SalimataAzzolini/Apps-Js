const calcul = new Function ("a", "b", "c", "return (a + b + c)/3");
console.log(calcul(2, 3, 5));


const tab = new Array ("a", "b", "c", "d");
console.log(tab);

const user = new Object();

user.name = "Azzoli";
user.firstname = "Sali";
user.bonjour = new Function(console.log("Bonjour"));
/* user.bonjour = () => (console.log("Bonjour")); */

console.log(user);

const message = new Error('What’s going on ? And I say heyyyyyy');

/* console.log(message); */

