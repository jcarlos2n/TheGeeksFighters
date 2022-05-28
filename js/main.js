
//Funcion que cambia de pantalla
const changeLCD = (nextLcd) => {
    let fin = document.getElementById(nextLcd);
    fin.style.display = "flex";

    let arrayLCD = ["home", "select", "versus", "fight", "winner"];

    for (let i of arrayLCD) {
        if (i != nextLcd) {
            document.getElementById(i).style.display = "none";
        }
    }
}

//Seleccionar jugador Multijugador
let versus1 = document.getElementById("vs1");
let versus2 = document.getElementById("vs2");
let pelea1 = document.getElementById("spaceP1");
let pelea2 = document.getElementById("spaceP2");
let jugador = [];
const choose = (elegido) => {
    switch (elegido) {
        case "1":
            jugador.push(players[elegido]);
            break;
        case "2":
            jugador.push(players[elegido]);
            break;
        case "3":
            jugador.push(players[elegido]);
            break;
        case "4":
            jugador.push(players[elegido]);
            break;
    }
    if (jugador.length == 2) {
        console.log(jugador)

        //CAMBIO A PANTALLA DE VERSUS
        setTimeout(() => {
            versus1.innerHTML = `<img src="img/${jugador[0].apodo}.png" class="img-fluid foto3" alt="PLAYER1">`;
            versus2.innerHTML = `<img src="img/${jugador[1].apodo}.png" class="img-fluid foto3" alt="PLAYER2">`;
            changeLCD("versus");
            //CAMBIO DE PANTALLA A PELEA
            setTimeout(() => {
                pelea1.innerHTML = `<img src="img/${jugador[0].apodo}.png" class="img-fluid foto3" alt="PLAYER1">`;
                pelea2.innerHTML = `<img src="img/${jugador[1].apodo}.png" class="img-fluid foto3" alt="PLAYER2">`;
                changeLCD("fight");
            }, 1000);
        }, 1000)
    }
};
//Controles JUGADOR 1
let contador = 0;
let contador2 = 0;
let ganador = document.getElementById("ganador1");
const ataque1 = () => {
    if (contador == 0) {
        jugador[1].vida = jugador[1].vida - jugador[0].ataque;
        contador++;
        console.log("Lanzaste ataque para dejar a " + jugador[1].nombre + " a " + jugador[1].vida + " de vida.");
        //Es para la funcion de defensa, hemos incremetado el contador para que cuando termine el timepo vuelva a ser 0, asi si pulsas el
        //boton antes de ese tiempo defiendes, si no, recibes el daño.
        setTimeout(() => {
            contador = 0;
        }, 1000);
        if (jugador[1].vida <= 0) {
            console.log("has ganado");
            ganador.innerHTML = `<img src="img/${jugador[0].apodo}.png" class="img-fluid foto3" alt="PLAYER1">`;
            changeLCD("winner");
        };
    } else {
        console.log("No puedes atacar mientras atacas")
    };


};
const defense1 = () => {
    if (contador2 == 1) {
        contador2 = 0;
        jugador[0].vida = jugador[0].vida + jugador[1].ataque;
        console.log("bp " + jugador[0].vida);
    } else {
        console.log("No pudiste esquivarlo");
    };
};
//Controles Jugador 2
const ataque2 = () => {
    if (contador2 == 0) {
        jugador[0].vida = jugador[0].vida - jugador[1].ataque;
        contador2++;
        console.log("Lanzaste ataque para dejar a " + jugador[0].nombre + " a " + jugador[0].vida + " de vida.");
        setTimeout(() => {
            contador2 = 0;
        }, 1000);
        if (jugador[0].vida <= 0) {
            console.log("Has ganado" + jugador[0].nombre);
            ganador.innerHTML = `<img src="img/${jugador[1].apodo}.png" class="img-fluid foto3" alt="PLAYER1">`;
            changeLCD("winner");
        };
    } else {
        console.log("No puedes atacar mientras atacas");
    };

};
const defense2 = () => {
    if (contador == 1) {
        contador = 0;
        jugador[1].vida = jugador[1].vida + jugador[0].ataque;
        console.log("Esquivaste el ataque, tu vida sigue siendo de " + jugador[1].vida);
    } else {
        console.log("No pudiste esquivarlo");
    };
};
