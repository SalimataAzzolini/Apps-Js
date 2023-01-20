function * gen(a, b ) {

    for (let i = a; i < b ; i++) {
        yield b%a;
    }

}
const g = gen(13,45);
console.log(g.next());
