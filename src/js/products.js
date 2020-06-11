alert("Product 2");
class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
};

console.log(Rectangulo.name);
// output: "Rectangulo"

console.log(new Rectangulo().greet())

export default () => {
    
    console.log('Product 2 Button Clicked: Here\'s "some text"!');
};