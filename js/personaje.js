class Personaje {
    constructor(newApodo,newNombre,newVida,maxVida,newAtaque){
        this.apodo = newApodo;
        this.nombre = newNombre;
        this.vida = newVida;
        this.ataque = newAtaque;
        this.maxVida = maxVida;
    }
    atack(enemigo){
        enemigo.vida=enemigo.vida - this.ataque;
    }
}
let personaje1 = new Personaje("ryu","Ryu",100,100, 10);
let personaje2 = new Personaje("akuma","Akuma",100,100, 10);
let personaje3 = new Personaje("ken","Ken",100,100, 10);
let personaje4 = new Personaje("scorpion","Scorpion",100,100, 10);

//Diccionario de Jugadores
 let players = {
     "1": personaje1,
     "2": personaje2,
     "3": personaje3,
     "4": personaje4
 }