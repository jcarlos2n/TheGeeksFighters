
let ballUlti1 = document.getElementById("chargeUlti1");
let ballUlti2 = document.getElementById("chargeUlti2");
let versus1 = document.getElementById("vs1");
let versus2 = document.getElementById("vs2");
let pelea1 = document.getElementById("spaceP1");
let pelea2 = document.getElementById("spaceP2");
let dato1 = document.getElementById("name1");
let dato2 = document.getElementById("name2");
let life1 = document.getElementById("barr1");
let life2 = document.getElementById("barr2");
let date1 = document.getElementById("date1");
let date2 = document.getElementById("date2");
let contador = 0;
let contador2 = 0;
let ulti1 = 0;
let ulti2 = 0;
let jugador = [];
//Funcion que cambia de pantalla
const changeLCD = (nextLcd) => {
    let fin = document.getElementById(nextLcd);
    fin.style.display = "flex";

    let arrayLCD = ["intro","home", "select", "selectSingle","controller", "versus", "fight", "winner"];

    for (let i of arrayLCD) {
        if (i != nextLcd) {
            document.getElementById(i).style.display = "none";
        }
    }
};
const change = () =>{
    setTimeout(() => {
        changeLCD("home")
    }, 5000);
}
window.onload = change();

//Seleccionar jugador Multijugador
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
    };
    if (jugador.length == 2) {
        //CAMBIO A PANTALLA DE VERSUS
        setTimeout(() => {
            changeLCD("controller");
            setTimeout(() => {
                versus1.innerHTML = `<img src="img/${jugador[0].apodo}.gif" class="foto3" alt="PLAYER1">`;
                date1.innerHTML = `<p class="dates">Name:<br>${jugador[0].nombre}</p><p class="dates">Life:<br>${jugador[0].vida}</p><p class="dates">Damage:<br>${jugador[0].ataque}</p><p class="dates">UltiDamage:<br>${jugador[0].ulti}</p>`;
                versus2.innerHTML = `<img src="img/${jugador[1].apodo}.gif" class="foto5" alt="PLAYER2">`;
                date2.innerHTML = `<p class="dates">Name:<br>${jugador[1].nombre}</p><p class="dates">Life:<br>${jugador[1].vida}</p><p class="dates">Damage:<br>${jugador[1].ataque}</p><p class="dates">UltiDamage:<br>${jugador[1].ulti}</p>`;
                changeLCD("versus");
                //CAMBIO DE PANTALLA A PELEA
                setTimeout(() => {
                    pelea1.innerHTML = `<img src="img/${jugador[0].apodo}.gif" class="foto3" alt="PLAYER1">`;
                    dato1.innerHTML = `<p class="nombre">${jugador[0].nombre}</p>`;
                    life1.innerHTML = `<progress id="vida1" max="${jugador[0].maxVida}" value="${jugador[0].vida}" ></progress>`;
                    pelea2.innerHTML = `<img src="img/${jugador[1].apodo}.gif" class="foto5" alt="PLAYER2">`;
                    dato2.innerHTML = `<p class="nombre">${jugador[1].nombre}</p>`;
                    life2.innerHTML = `<progress id="vida2" max="${jugador[1].maxVida}" value="${jugador[1].vida}" ></progress>`;
                    changeLCD("fight");
                }, 7000);
            }, 8000);
        }, 1000);
        
    };
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
                changeLCD("controller");
                setTimeout(() => {
                    versus1.innerHTML = `<img src="img/${jugador[0].apodo}.gif" class="foto3" alt="PLAYER1">`;
                    date1.innerHTML = `<p class="dates">Name:<br>${jugador[0].nombre}</p><p class="dates">Life:<br>${jugador[0].vida}</p><p class="dates">Damage:<br>${jugador[0].ataque}</p><p class="dates">UltiDamage:<br>${jugador[0].ulti}</p>`;
                    versus2.innerHTML = `<img src="img/${jugador[1].apodo}.gif" class="foto5" alt="PLAYER2">`;
                    date2.innerHTML = `<p class="dates">Name:<br>${jugador[1].nombre}</p><p class="dates">Life:<br>${jugador[1].vida}</p><p class="dates">Damage:<br>${jugador[1].ataque}</p><p class="dates">UltiDamage:<br>${jugador[1].ulti}</p>`;
                    changeLCD("versus");
                    //CAMBIO DE PANTALLA A PELEA
                    setTimeout(() => {
                        pelea1.innerHTML = `<img src="img/${jugador[0].apodo}.gif" class="foto3" alt="PLAYER1">`;
                        dato1.innerHTML = `<p class="nombre">${jugador[0].nombre}</p>`;
                        life1.innerHTML = `<progress id="vida1" max="${jugador[0].maxVida}" value="${jugador[0].vida}" ></progress>`;
                        dato2.innerHTML = `<p class="nombre">${jugador[1].nombre}</p>`;
                        pelea2.innerHTML = `<img src="img/${jugador[1].apodo}.gif" class="foto5" alt="PLAYER2">`;
                        life2.innerHTML = `<progress id="vida2" max="${jugador[1].maxVida}" value="${jugador[1].vida}" ></progress>`;
                        changeLCD("fight");
                        let a = setInterval(() => {
                            let randomA = Math.floor(Math.random() * (4 - 1) + 1);
                            let randomB = Math.floor(Math.random() * (2 - 1) + 1);
                            if (randomA == 1 || randomA == 3) {
                                ataque(2);
                            };
                            if ((contador == 1 && randomA == 2) || (contador == 1 && randomB == 2)) {
                                defense(2);
                            };
                            if (randomB == 1 && ulti2 >= 3) {
                                ultimate(2)
                            };
                            if (jugador[0].vida <= 0 || jugador[1].vida <= 0) {
                                clearInterval(a);
                            };
                            console.log(randomA);
                        }, 1000);
                    }, 7000);
                }, 8000);
            }, 1000);
            
        };
    };
};
//Controles JUGADORES
let ganador = document.getElementById("ganador1");
const ataque = (atacante) => {
    if (atacante == 1) {
        if (contador == 0) {
            contador++;
            pelea1.innerHTML = `<img src="img/${jugador[0].apodo}1.gif" class="foto3" alt="PLAYER1">`;
            //Es para la funcion de defensa, hemos incremetado el contador para que cuando termine el timepo vuelva a ser 0, asi si pulsas el
            //boton antes de ese tiempo defiendes, si no, recibes el daño.
            setTimeout(() => {
                pelea1.innerHTML = `<img src="img/${jugador[0].apodo}.gif" class="foto3" alt="PLAYER1">`;
                if (contador == 1) {
                    jugador[0].atack(jugador[1]);
                    life2.innerHTML = `<progress id="vida2" max="${jugador[1].maxVida}" value="${jugador[1].vida}" ></progress>`;
                    contador = 0;
                } else {
                    contador = 0;
                };
                if (jugador[1].vida <= 0) {
                    ganador.innerHTML = `<img src="img/${jugador[0].apodo}.gif" class="foto3" alt="PLAYER1">`;
                    changeLCD("winner");
                    setTimeout(() => {
                        changeLCD("home");
                        jugador[0].vida = jugador[0].maxVida;
                        jugador[1].vida = jugador[1].maxVida;
                        jugador = [];
                        contador = 0;
                        contador2 = 0;
                    }, 4000);
                };
            }, 800);

        } else {
            console.log("No puedes atacar mientras atacas");
        };
    } else if (atacante == 2) { //Controles Jugador 2
        if (contador2 == 0) {
            pelea2.innerHTML = `<img src="img/${jugador[1].apodo}1.gif" class="foto5" alt="PLAYER2">`;
            contador2++;
            setTimeout(() => {
                pelea2.innerHTML = `<img src="img/${jugador[1].apodo}.gif" class="foto5" alt="PLAYER2">`;
                if (contador2 == 1) {
                    jugador[1].atack(jugador[0]);
                    life1.innerHTML = `<progress id="vida1" max="${jugador[0].maxVida}" value="${jugador[0].vida}" ></progress>`;
                    contador2 = 0;
                } else {
                    contador2 = 0;
                };
                if (jugador[0].vida <= 0) {
                    ganador.innerHTML = `<img src="img/${jugador[1].apodo}.gif" class="foto5" alt="PLAYER1">`;
                    changeLCD("winner");
                    setTimeout(() => {
                        changeLCD("home");
                        jugador[0].vida = jugador[0].maxVida;
                        jugador[1].vida = jugador[1].maxVida;
                        jugador = [];
                        contador = 0;
                        contador2 = 0;
                    }, 4000);
                };
            }, 800);

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
        if (ulti1 >= 3) {
            ballUlti1.innerHTML = `<div class="chargeUlti"></div>`;
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
        if (ulti2 >= 3) {
            ballUlti2.innerHTML = `<div class="chargeUlti"></div>`;
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
                    if (jugador[1].vida <= 0) {
                        ganador.innerHTML = `<img src="img/${jugador[0].apodo}.gif" class="foto3" alt="PLAYER1">`;
                        changeLCD("winner");
                        setTimeout(() => {
                            changeLCD("home");
                            jugador[0].vida = jugador[0].maxVida;
                            jugador[1].vida = jugador[1].maxVida;
                            jugador = [];
                            contador = 0;
                            contador2 = 0;
                        }, 4000);
                    };
                } else {
                    contador = 0;
                };
            }, 400);
        } else { };
        if (ulti1 < 3) {
            ballUlti1.innerHTML = ``;
        };
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
                    if (jugador[0].vida <= 0) {
                        ganador.innerHTML = `<img src="img/${jugador[1].apodo}.gif" class="foto5" alt="PLAYER1">`;
                        changeLCD("winner");
                        setTimeout(() => {
                            changeLCD("home");
                            jugador[0].vida = jugador[0].maxVida;
                            jugador[1].vida = jugador[1].maxVida;
                            jugador = [];
                            contador = 0;
                            contador2 = 0;
                        }, 4000);
                    };
                } else {
                    contador2 = 0;
                };
            }, 400);
        } else { };
        if (ulti2 < 3) {
            ballUlti2.innerHTML = ``;
        };

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