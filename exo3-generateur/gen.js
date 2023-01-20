function * gen(a, b ) {

    for (let i = a; i <= b ; i++) {
        yield i;
    }

}
const g = gen(3,6);
console.log([...g]);
/* console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());  */