const table = [
    {
        player : 'john',
        role : 'sorcerer',
        score : 250
    },

    {
        player : 'melody',
        role : 'warrior',
        score : 290
    },

    {
        player : 'fred',
        role : 'druid',
        score : 690
    },

    {
        player : 'marty',
        role : 'warrior',
        score : 290
    },

    {
        player : 'amely',
        role : 'warrior',
        score : 300
    },

    {
        player : 'jack',
        role : 'sorcerer',
        score : 487
    },

    {
        player : 'elisabeth',
        role : 'archer',
        score : 387
    },

];

function triRole (){
    return table.sort((a, b) => 
    a.role.localeCompare(b.role, 'fr', {ignorePunctuation: true}));
}


// Pour inverser b - a 
function tri (){
    return table.sort(function (a, b) {
        return a.score - b.score;
      });
}

function * genName() {

    for (let i = 0; i < table.length; i++) {
        yield table[i].player;
      }
    
}

function * genPlayers() {
 
    for (let i = 0; i < table.length; i++) {
        yield table[i];
    }

}

function * genScore() {
 
    for (let i = 0; i < table.length; i++) {
        tri(table);
        yield table[i].player;
    }

}

function * genRole() {
 
    for (let i = 0; i < table.length; i++) {
     triRole(table);
     yield table[i].role;
        
    }

}


/* const g = genName();
console.log([...g]);

const h = genPlayers();
console.log([...h]); */

/* const k = genScore();
console.log([...k]); */


const r = genRole();
console.log([...r]);