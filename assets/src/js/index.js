
import _ from 'lodash';


class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.alto} says hello.`;
    }
};

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack', new Rectangulo(12, 10).greet()], ' ');

    return element;
}

document.body.appendChild(component());

import '../css/index.scss'; 