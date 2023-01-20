/**
 * 
 * @param {*} nom 
 * @param {*} prenom 
 * @param {*} email 
 * @param {*} pseudo 
 * @param {*} age 
 */

function User (nom, prenom, email, pseudo, age ){
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.pseudo = pseudo;
    this.age = age
}

let person1 = new User('sow', 'sali', 'salisow@gmail.com', 'lysa', '12');
let person2 = new User('azzzo', 'fred', 'fred@gmail.com', 'fredou', '34');

console.log(person1);
console.log(person2);

User.prototype.role = 'visiteur';
console.log(person1.role);


User.prototype.enableNSFW = function (){
    return this.age>=18;
   /*  if(this.age >= 18){
        return true;
    } else{
        return false;
    } */
}

User.prototype.randomizeName = function (){
  
}

console.log(person1.randomizeName());

