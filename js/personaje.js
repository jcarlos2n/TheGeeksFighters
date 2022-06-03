class Personaje {
    constructor(newApodo,newNombre,newVida,maxVida,newAtaque,newUlti){
        this.apodo = newApodo;
        this.nombre = newNombre;
        this.vida = newVida;
        this.ataque = newAtaque;
        this.maxVida = maxVida;
        this.ulti = newUlti;
    }
    atack(enemigo){
        enemigo.vida=enemigo.vida - this.ataque;
    }
    atackUlti(enemigo1){
        enemigo1.vida = enemigo1.vida - this.ulti;
    }
}
let personaje1 = new Personaje("ryu","Ryu",250,250, 20, 40);
let personaje2 = new Personaje("akuma","Akuma",220,220, 25, 45);
let personaje3 = new Personaje("ken","Ken",350,350, 10,35);
let personaje4 = new Personaje("scorpion","Scorpion",150,150, 30,55);

//Diccionario de Jugadores
 let players = {
     "1": personaje1,
     "2": personaje2,
     "3": personaje3,
     "4": personaje4
 }