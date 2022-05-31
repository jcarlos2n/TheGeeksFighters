
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
                versus1.innerHTML = `<img src="img/${jugador[0].apodo}.png" class="img-fluid foto3" alt="PLAYER1">`;
                versus2.innerHTML = `<img src="img/${jugador[1].apodo}.png" class="img-fluid foto3" alt="PLAYER2">`;
                changeLCD("versus");
                //CAMBIO DE PANTALLA A PELEA
                setTimeout(() => {

                    pelea1.innerHTML = `<img src="img/${jugador[0].apodo}.png" class="img-fluid foto3" alt="PLAYER1">`;
                    pelea2.innerHTML = `<img src="img/${jugador[1].apodo}.png" class="img-fluid foto3" alt="PLAYER2">`;
                    changeLCD("fight");
                    let a = setInterval(() => {
                        let randomA = Math.floor(Math.random() * (3 - 1) + 1);
                        if (randomA == 2) {
                            ataque1(2);
                        } else if (randomA == 1) {
                            defense2();
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

//Controles JUGADOR 1
let contador = 0;
let contador2 = 0;
let ganador = document.getElementById("ganador1");
const ataque1 = (atacante) => {
    if (atacante == 1) {
        if (contador == 0) {
            jugador[0].atack(jugador[1]);
            console.log("Lanzaste ataque para dejar a " + jugador[1].nombre + " a " + jugador[1].vida + " de vida.");
            contador++;
            
            //Es para la funcion de defensa, hemos incremetado el contador para que cuando termine el timepo vuelva a ser 0, asi si pulsas el
            //boton antes de ese tiempo defiendes, si no, recibes el daño.
            setTimeout(() => {
                contador = 0;

            }, 800);
            if (jugador[1].vida <= 0) {
                console.log("has ganado");
                ganador.innerHTML = `<img src="img/${jugador[0].apodo}.png" class="img-fluid foto3" alt="PLAYER1">`;
                changeLCD("winner");
            };
        } else {
            console.log("No puedes atacar mientras atacas");
        };
    } else if (atacante == 2) { //Controles Jugador 2
        if (contador2 == 0) {
            jugador[1].atack(jugador[0]);
            contador2++;
            console.log("Lanzaste ataque para dejar a " + jugador[0].nombre + " a " + jugador[0].vida + " de vida.");
            setTimeout(() => {
                contador2 = 0;
            }, 800);
            if (jugador[0].vida <= 0) {
                console.log("Has ganado " + jugador[1].nombre);
                ganador.innerHTML = `<img src="img/${jugador[1].apodo}.png" class="img-fluid foto3" alt="PLAYER1">`;
                changeLCD("winner");
            };
        } else {
            console.log("No puedes atacar mientras atacas");
        }
    };
};
const defense1 = () => {
    if (contador2 == 1) {
        contador2 = 0;
        jugador[0].vida = jugador[0].vida + jugador[1].ataque;
        console.log("Esquivaste el ataque " + jugador[0].nombre);
    } else {
        console.log("No pudiste esquivarlo");
    };
};

const defense2 = () => {
    if (contador == 1) {
        defensaIA = 0;
        contador = 0;
        jugador[1].vida = jugador[1].vida + jugador[0].ataque;
        console.log("Esquivaste el ataque " + jugador[1].nombre);
    } else {
        console.log("No pudiste esquivarlo");
        defensaIA = 0;
    };
};
//CONTROLES POR TECLADO
//Controles personaje 1
const bottonAW = document.getElementById("buttonW");
const bottonAS = document.getElementById("buttonS");
//Controles personaje 2
const bottonArriba = document.getElementById("buttonUp");
const bottonAbajo = document.getElementById("buttonDown");
//Le decimos a la maquina que funcion va a ejecutar la presion de la teclas
document.addEventListener("keydown", move);
bottonAW.addEventListener("click");
bottonAS.addEventListener("click");
bottonArriba.addEventListener("click");
bottonAbajo.addEventListener("click");
//"e" es la variable por defecto para meter parametros por teclado
function move(e) {
    switch (e.key) {
        case "w":
        case "W":
            ataque1(1);
            break;
        case "s":
        case "S":
            defense1();
            break;
        case "ArrowUp":
            ataque1(2);
            break;
        case "ArrowDown":
            defense2();
            break;
    }
};