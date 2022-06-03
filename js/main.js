
//Funcion que cambia de pantalla
const changeLCD = (nextLcd) => {
    let fin = document.getElementById(nextLcd);
    fin.style.display = "flex";

    let arrayLCD = ["home", "select", "selectSingle", "versus", "fight", "winner"];

    for (let i of arrayLCD) {
        if (i != nextLcd) {
            document.getElementById(i).style.display = "none";
        }
    }
};
const vida = (id, newVida) => {
    animateprogress(id, newVida)
};
//Seleccionar jugador Multijugador
let versus1 = document.getElementById("vs1");
let versus2 = document.getElementById("vs2");
let pelea1 = document.getElementById("spaceP1");
let pelea2 = document.getElementById("spaceP2");
let dato1 = document.getElementById("name1");
let dato2 = document.getElementById("name2");
let life1 = document.getElementById("barr1");
let life2 = document.getElementById("barr2");
let ulti1 = 0;
let ulti2 = 0;
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
            versus1.innerHTML = `<img src="img/${jugador[0].apodo}.gif" class="foto3" alt="PLAYER1">`;
            versus2.innerHTML = `<img src="img/${jugador[1].apodo}.gif" class="foto5" alt="PLAYER2">`;
            changeLCD("versus");
            //CAMBIO DE PANTALLA A PELEA
            setTimeout(() => {
                pelea1.innerHTML = `<img src="img/${jugador[0].apodo}.gif" class="foto3" alt="PLAYER1">`;
                dato1.innerHTML = `<p class="nombre">${jugador[0].nombre}</p>`;
                life1.innerHTML = `<progress id="vida1" max="${jugador[0].maxVida}" value="${jugador[0].vida}" ></progress>`
                pelea2.innerHTML = `<img src="img/${jugador[1].apodo}.gif" class="foto5" alt="PLAYER2">`;
                dato2.innerHTML = `<p class="nombre">${jugador[1].nombre}</p>`;
                life2.innerHTML = `<progress id="vida2" max="${jugador[1].maxVida}" value="${jugador[1].vida}" ></progress>`
                changeLCD("fight");
            }, 1000);
        }, 1000)
    }
};
//SELECCIONAR JUGADOR SINGLE PLAYER
const choose1 = (elegido) => {
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
    };
    let random = `${Math.floor(Math.random() * (4 - 1) + 1)}`;
    while (random === elegido) {
        random = `${Math.floor(Math.random() * (4 - 1) + 1)}`;
        console.log(random)
        if (random != elegido) {

            console.log(jugador);
        }
    };
    if (jugador.length == 1) {
        jugador.push(players[random]);
        if (jugador.length == 2) {
            console.log(jugador);
            //CAMBIO A PANTALLA DE VERSUS
            setTimeout(() => {
                versus1.innerHTML = `<img src="img/${jugador[0].apodo}.gif" class="foto3" alt="PLAYER1">`;
                versus2.innerHTML = `<img src="img/${jugador[1].apodo}.gif" class="foto5" alt="PLAYER2">`;
                changeLCD("versus");
                //CAMBIO DE PANTALLA A PELEA
                setTimeout(() => {

                    pelea1.innerHTML = `<img src="img/${jugador[0].apodo}.gif" class="foto3" alt="PLAYER1">`;
                    pelea2.innerHTML = `<img src="img/${jugador[1].apodo}.gif" class="foto5" alt="PLAYER2">`;
                    changeLCD("fight");
                    let a = setInterval(() => {
                        let randomA = Math.floor(Math.random() * (3 - 1) + 1);
                        if (randomA == 2) {
                            ataque(2);
                        } else if (randomA == 1) {
                            defense(2);
                        };
                        if (jugador[0].vida <= 0 || jugador[1].vida <= 0) {
                            clearInterval(a);
                        };
                    }, 1000);
                }, 900);
            }, 1000)
        }
    };
};

//Controles JUGADORES
let contador = 0;
let contador2 = 0;
let ganador = document.getElementById("ganador1");
const ataque = (atacante) => {
    if (atacante == 1) {
        if (contador == 0) {
            console.log("Lanzaste ataque para dejar a " + jugador[1].nombre + " a " + jugador[1].vida + " de vida.");
            contador++;
            pelea1.innerHTML = `<img src="img/${jugador[0].apodo}1.gif" class="foto3" alt="PLAYER1">`;
            //Es para la funcion de defensa, hemos incremetado el contador para que cuando termine el timepo vuelva a ser 0, asi si pulsas el
            //boton antes de ese tiempo defiendes, si no, recibes el daño.
            setTimeout(() => {
                pelea1.innerHTML = `<img src="img/${jugador[0].apodo}.gif" class="foto3" alt="PLAYER1">`;
                if (contador == 1) {
                    jugador[0].atack(jugador[1]);
                    life2.innerHTML = `<progress id="vida2" max="${jugador[1].maxVida}" value="${jugador[1].vida}" ></progress>`
                    contador = 0;
                } else {
                    contador = 0;
                }
            }, 800);
            if (jugador[1].vida <= 0) {
                console.log("has ganado");
                ganador.innerHTML = `<img src="img/${jugador[0].apodo}.gif" class="foto3" alt="PLAYER1">`;
                changeLCD("winner");
            };
        } else {
            console.log("No puedes atacar mientras atacas");
        };
    } else if (atacante == 2) { //Controles Jugador 2
        if (contador2 == 0) {
            pelea2.innerHTML = `<img src="img/${jugador[1].apodo}1.gif" class="foto5" alt="PLAYER2">`;
            contador2++;
            console.log("Lanzaste ataque para dejar a " + jugador[0].nombre + " a " + jugador[0].vida + " de vida.");
            setTimeout(() => {
                pelea2.innerHTML = `<img src="img/${jugador[1].apodo}.gif" class="foto5" alt="PLAYER2">`;
                if (contador2 == 1) {
                    jugador[1].atack(jugador[0]);
                    life1.innerHTML = `<progress id="vida1" max="${jugador[0].maxVida}" value="${jugador[0].vida}" ></progress>`
                    contador2 = 0;
                } else {
                    contador2 = 0;
                }
            }, 800);
            if (jugador[0].vida <= 0) {
                console.log("Has ganado " + jugador[1].nombre);
                ganador.innerHTML = `<img src="img/${jugador[1].apodo}.gif" class="foto5" alt="PLAYER1">`;
                changeLCD("winner");
            };
        } else {
            console.log("No puedes atacar mientras atacas");
        }
    };
};
const defense = (defensor) => {
    if (defensor == 1) {
        if (contador2 == 1) {
            contador2 = 0;
            ulti1++;
            pelea1.innerHTML = `<img src="img/${jugador[0].apodo}.gif" class="foto6" alt="PLAYER2"><div class="esquiva">Esquivaste</div>`;
            console.log("Esquivaste el ataque " + jugador[0].nombre);
            setTimeout(() => {
                pelea1.innerHTML = `<img src="img/${jugador[0].apodo}.gif" class="foto3" alt="PLAYER2">`;
            }, 200);
        } else {
            console.log("No pudiste esquivarlo");
        };
    } else if (defensor == 2) {
        if (contador == 1) {
            defensaIA = 0;
            contador = 0;
            ulti2++;
            pelea2.innerHTML = `<img src="img/${jugador[1].apodo}.gif" class="foto7" alt="PLAYER2"><div class="esquiva">Esquivaste</div>`;
            console.log("Esquivaste el ataque " + jugador[1].nombre);
            setTimeout(() => {
                pelea2.innerHTML = `<img src="img/${jugador[1].apodo}.gif" class="foto5" alt="PLAYER2">`;
            }, 200);
        } else {
            console.log("No pudiste esquivarlo");
            defensaIA = 0;
        };
    }

};
const ultimate = (atacante1) => {
    if (atacante1 == 1) {
        if (ulti1 >= 3) {
            ulti1 = 0;
            contador++;
            pelea1.innerHTML = `<img src="img/${jugador[0].apodo}2.gif" class="foto3" alt="PLAYER1">`;
            setTimeout(() => {
                pelea1.innerHTML = `<img src="img/${jugador[0].apodo}.gif" class="foto3" alt="PLAYER1">`;
                if (contador == 1) {
                    contador = 0;
                    jugador[0].atackUlti(jugador[1]);
                    life2.innerHTML = `<progress id="vida2" max="${jugador[1].maxVida}" value="${jugador[1].vida}" ></progress>`;
                } else {
                    contador = 0;
                };
            }, 400);
        } else { }
    } else if (atacante1 == 2) {
        if (ulti2 >= 3) {
            ulti2 = 0;
            contador2++;
            pelea2.innerHTML = `<img src="img/${jugador[1].apodo}2.gif" class="foto5" alt="PLAYER2">`;
            setTimeout(() => {
                pelea2.innerHTML = `<img src="img/${jugador[1].apodo}.gif" class="foto5" alt="PLAYER1">`;
                if (contador2 == 1) {
                    contador2 = 0; 
                    jugador[1].atackUlti(jugador[0]);
                    life1.innerHTML = `<progress id="vida1" max="${jugador[0].maxVida}" value="${jugador[0].vida}" ></progress>`;
                }else {
                    contador2 = 0;
                }
            }, 400);
        } else { };
    }
}
//CONTROLES POR TECLADO

//Le decimos a la maquina que funcion va a ejecutar la presion de la teclas
document.addEventListener("keydown", move);
//"e" es la variable por defecto para meter parametros por teclado
function move(e) {
    switch (e.key) {
        //Controles Jugador 1
        case "w":
        case "W":
            ataque(1);
            break;
        case "s":
        case "S":
            defense(1);
            break;
        case "a":
        case "A":
            ultimate(1);
            break;
        //Controles jugador 2
        case "ArrowUp":
            ataque(2);
            break;
        case "ArrowDown":
            defense(2);
            break;
        case "ArrowRight":
            ultimate(2);
            break;
    }
};
console.log(ulti1);