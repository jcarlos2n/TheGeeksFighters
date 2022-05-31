class Personaje {
    constructor(newApodo,newNombre,newVida,newAtaque){
        this.apodo = newApodo;
        this.nombre = newNombre;
        this.vida = newVida;
        this.ataque = newAtaque;
    }
    atack(enemigo){
        enemigo.vida=enemigo.vida - this.ataque;
    }
}
let personaje1 = new Personaje("lisa","Lisa",100, 10);
let personaje2 = new Personaje("ralph","Ralph",100, 10);
let personaje3 = new Personaje("martin","Martin",100, 10);
let personaje4 = new Personaje("milhouse","Milhouse",100, 10);

//Diccionario de Jugadores
 let players = {
     "1": personaje1,
     "2": personaje2,
     "3": personaje3,
     "4": personaje4
 }