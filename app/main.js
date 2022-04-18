import './style.css'
import  Deck  from "./node_modules/siete-medio/clases/Deck.js";
import  Hand  from "./node_modules/siete-medio/clases/Hand.js";


const deckCards = new Deck();
const player1 = new Hand();
const player2 = new Hand();
const banca = new Hand();
let arrayTotalScores= [false,false,false];//must fill by 3

let scorePlayer1 = 0;
let scorePlayer2 = 0;
let scoreBanca = 0;

let winner;

//PLAYER1
//Button Pedir Carta - Player1
document.getElementById("dealPlayer1").addEventListener("click", () => {
    dealPlayer('player1');
    countPointPlayer('player1');
});

//PLAYER2
document.getElementById("dealPlayer2").addEventListener("click", () => {
    dealPlayer('player2');
    countPointPlayer('player2');
});

//BANCA
document.getElementById("dealBanca").addEventListener("click", () => {
    dealPlayer('banca');
    countPointPlayer('banca');

});

//FIRST CARD HIDDEN
document.getElementById("startGame").addEventListener("click", ()=>{
  //Player 1
  let deckCardP1= deckCards.deal();
  player1.addCard(deckCardP1);
  firstCards(deckCardP1,"P1");
  //Player2
  let deckCardP2= deckCards.deal();
  player2.addCard(deckCardP2);
  firstCards(deckCardP2,"P2");
  //Banca
  let deckCardBanca= deckCards.deal();
  banca.addCard(deckCardBanca);
  firstCards(deckCardBanca,"Banca");

  /*enable buttons */
  document.getElementById("dealPlayer1").disabled = false;
  document.getElementById("dealPlayer1").setAttribute("class","");

  document.getElementById("stopPlayer1").disabled = false;

  document.getElementById("dealPlayer2").disabled = false;
  document.getElementById("dealPlayer2").setAttribute("class","");

  document.getElementById("stopPlayer2").disabled = false;
  document.getElementById("dealBanca").disabled = false;
  document.getElementById("dealBanca").setAttribute("class","");
  document.getElementById("stopBanca").disabled = false;

  document.getElementById("startGame").disabled = true;
  document.getElementById("startGame").setAttribute("class","wrapper pointer-events-none");
});

const firstCards = (deckCard,player)=>{
  //To show
  const firstCard = document.createElement("img");
  firstCard.setAttribute('src',`./node_modules/siete-medio/img/${deckCard}.png`);
  document.querySelector("#back"+player).appendChild(firstCard);

  //to Hidden
  const firstCardHidden = document.createElement("img");
  firstCardHidden.setAttribute('src',`./node_modules/siete-medio/img/r0.png`);
  document.querySelector("#front"+player).appendChild(firstCardHidden);
}

const dealPlayer = (player) => {
  let deckCard= deckCards.deal();
  if(player === 'player1'){
    player1.addCard(deckCard);
  }else if(player === 'player2'){
    player2.addCard(deckCard);
  }else{
    banca.addCard(deckCard);
  }
  showCardDeal(deckCard,player);
}

//Deal Card Player
const showCardDeal = (deckCard,player) =>{
  const img = document.createElement("img");
  img.setAttribute('src',`./node_modules/siete-medio/img/${deckCard}.png`);
  let playerImg = 'img'+player.toString().charAt(0).toUpperCase() + player.slice(1);
  document.getElementById(playerImg).appendChild(img);
}

const titleScore1 = (player)=>{
  const h1 = document.createElement("h1");
  h1.append("Ha perdido!");
  let playerName = player.toString().charAt(0).toUpperCase() + player.slice(1);
  document.getElementById("titleScore"+playerName).appendChild(h1);
  document.getElementById("deal"+playerName).disabled = true;
  document.getElementById("stop"+playerName).disabled = true;
}

const countPointPlayer= (player)=>{
  let score = 0;
  if(player === 'player1'){
    score = player1.countPointsSevenHalf();
    scorePlayer1 = player1.countPointsSevenHalf();
  }else if(player === 'player2'){
    score = player2.countPointsSevenHalf();
    scorePlayer2 = player2.countPointsSevenHalf();
  }else{
    score = banca.countPointsSevenHalf();
    scoreBanca = banca.countPointsSevenHalf();
  }

/*   const h1 = document.createElement("h1");
  h1.append(score);
  let nameById = player.toString().charAt(0).toUpperCase() + player.slice(1);
  document.getElementById("score".concat(nameById)).innerHTML = '';
  document.getElementById("score".concat(nameById)).appendChild(h1); */

  if(player === 'player1' && score > 7.5){
    titleScore1('player1');
    arrayTotalScores[0]= true;
  }else if(player === 'player2' && score > 7.5){
    titleScore1('player2');
    arrayTotalScores[1]= true;
  }else if(player === 'banca' && score > 7.5){
    titleScore1('banca');
    arrayTotalScores[2]= true;
  }
}

//STOP
document.getElementById("stopPlayer1").addEventListener("click", () => {
  document.getElementById("dealPlayer1").disabled = true;
  arrayTotalScores[0]= true;
  window.alert("Jugador 1, se ha plantado");
});

document.getElementById("stopPlayer2").addEventListener("click", () => {
  document.getElementById("dealPlayer2").disabled = true;
  arrayTotalScores[1]= true;
  window.alert("Jugador 2, se ha plantado");
});

document.getElementById("stopBanca").addEventListener("click", () => {
  document.getElementById("dealBanca").disabled = true;
  arrayTotalScores[2]= true;
  window.alert("Banca, se ha plantado");
});


//SCORE FINAL

document.getElementById("finalScore").addEventListener("click", () => {
  if(!arrayTotalScores.includes(false)){
    //finish
    results();
  }else{
    //no finish
    window.alert("Juego aún continua, cada jugador se tiene que plantar");
  }
});

const results = () =>{
  //p1 7
  //p2 6.5
  //banca 9


  if (scorePlayer1 <= 7.5  &&
    (scoreBanca > 7.5 ||( scorePlayer1 > scoreBanca && scorePlayer1 > scorePlayer2))) {
    winner = 'Gana el Jugador 1';
  }else if (scorePlayer2 <= 7.5 &&
    (scoreBanca > 7.5  ||( scorePlayer2 > scoreBanca && scorePlayer2 > scorePlayer1))) {
    winner = 'Gana el Jugador 2';
  }else if (scoreBanca <= 7.5){
    winner = 'Gana la Banca';
  }else if (scorePlayer1 === scorePlayer2){
    winner = 'Jugador 1 y Jugador 2 empataron';
  }else if (scorePlayer1 > 7.5  && scorePlayer2>7.5 && scoreBanca > 7.5){
    winner = 'Nadie gana , jugador y banca se han pasado el 7 1/2';
  }
  
  //PUT Score in the header 
  const h1Player1 = document.createElement("h1");
  let puntos ="Puntos ";
  h1Player1.append(puntos + scorePlayer1);
  document.getElementById("scorePlayer1").appendChild(h1Player1);

  const h1Player2 = document.createElement("h1");
  h1Player2.append(puntos + scorePlayer2);
  document.getElementById("scorePlayer2").appendChild(h1Player2);

  const h1Banca = document.createElement("h1");
  h1Banca.append(puntos + scoreBanca);
  document.getElementById("scoreBanca").appendChild(h1Banca);

  const h1Winner = document.createElement("h1");
  h1Winner.append('Resultado Final : 🏆 ', winner);
  document.getElementById("winnerTotal").appendChild(h1Winner);
  window.alert('🏆 ' +winner);

  //One time 
  document.getElementById("finalScore").disabled = true;

  //Reset
  document.getElementById("startGame").style.visibility = "hidden";
  document.getElementById("finalScore").style.visibility = "hidden";
  document.getElementById("resetGame").style.visibility = "visible";

}

/*Reset game*/
document.getElementById("resetGame").addEventListener("click", () => {
  location.reload();
});