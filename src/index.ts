import idx from 'idx';

let thing = {a: {b: {c: 'd'}}};

idx(thing, thing => thing.a.b.c)