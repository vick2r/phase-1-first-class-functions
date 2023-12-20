const chai = "chai";
const spies = "chai-spies";

const gimmeSomething = () => ("I got something!");

function receivesAFunction (gimmeSomething) {
    return gimmeSomething();
}

const returnsANamedFunction = () => receivesAFunction;

const returnsAnAnonymousFunction = () => function () {
    return ("I am anonymoose!")
}