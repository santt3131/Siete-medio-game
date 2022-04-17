import './style.css'
/*import Deck from './clases/Deck.js';
import Hand from './clases/Hand.js';

const deckCards = new Deck();
const player1 = new Hand();


document.getElementById("dealPlayer1").addEventListener("click", () => {
    dealPlayer1()
  });

const dealPlayer1 = () => {
    console.log('presiono repartir');
    let deckCard= deckCards.deal();
    player1.addCard(deckCard);
    console.log('la carta retirada es', deckCard);
}



*/


//OKKK
/*
const deckCards = new Deck();

//New Game- Nuevo mazo, primer jugador y banca
const player1 = new Hand();
const player2 = new Hand();
const banca = new Hand();

//Se reparte una carta al jugador y una a la banca
player1.addCard(deckCards.deal());
player2.addCard(deckCards.deal());
banca.addCard(deckCards.deal());

//El jugador pide carta hasta los 7.5
while (player1.countPointsSevenHalf()<= 4) {//para pararse
    //console.log('El jugado ha pedido una carta');
    player1.addCard(deckCards.deal());
}

//El jugador 2 pide carta hasta los 7.5
while (player1.countPointsSevenHalf()<= 4) {//para pararse
    //console.log('El jugado ha pedido una carta');
    player1.addCard(deckCards.deal());
}


//Le toca a la banca
//Si el jugador no se ha pasado entonces
if (player1.countPointsSevenHalf()<= 7.5) {
    while (banca.countPointsSevenHalf() <= 7.5 &&
        banca.countPointsSevenHalf() < player1.countPointsSevenHalf()) {
        //console.log('La banca ha pedido una carta');
        banca.addCard(deckCards.deal());    
    }
}

//Resultados
let puntosPlayer1 = 0;
puntosPlayer1 = player1.countPointsSevenHalf();
let puntosPlayer2 = 0;
puntosPlayer2 = player2.countPointsSevenHalf();
let puntosBanca = 0;
puntosBanca = banca.countPointsSevenHalf();

if (puntosPlayer1 <= 7.5 && puntosPlayer1 > puntosPlayer2 &&
    (puntosBanca > 7.5 || puntosPlayer1 > puntosBanca)) {
    console.log('Gana el Jugador 1');
    console.log(`Jugador1: ${puntosPlayer1}`);
    console.log(`Jugador2: ${puntosPlayer2}`);
    console.log(`Banca: ${puntosBanca}`);
}else if (puntosPlayer2 <= 7.5 &&
    (puntosBanca > 7.5 && puntosPlayer1 > 7.5 || puntosPlayer2 > puntosBanca)) {
    console.log('Gana el Jugador 2');
    console.log(`Jugador1: ${puntosPlayer1}`);
    console.log(`Jugador2: ${puntosPlayer2}`);
    console.log(`Banca: ${puntosBanca}`);
}else if (puntosBanca <= 7.5){
    console.log('Gana la Banca');
    console.log(`Jugador1: ${puntosPlayer1}`);
    console.log(`Jugador2: ${puntosPlayer2}`);
    console.log(`Banca: ${puntosBanca}`);
}else if (puntosPlayer1 === puntosPlayer2){
    console.log('Jugador 1 y Jugador 2 empataron');
    console.log(`Jugador1: ${puntosPlayer1}`);
    console.log(`Jugador2: ${puntosPlayer2}`);
    console.log(`Banca: ${puntosBanca}`);
}else{
    console.log('Nadie gana , jugador y banca se han pasado el 7 1/2');
    console.log(`Jugador1: ${puntosPlayer1}`);
    console.log(`Jugador2: ${puntosPlayer2}`);
    console.log(`Banca: ${puntosBanca}`);
}
*/


module.exports = Deck;
module.exports = Hand;