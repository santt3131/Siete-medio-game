import './style.css'
import  Deck  from "./node_modules/siete-medio/clases/Deck.js";
import  Hand  from "./node_modules/siete-medio/clases/Hand.js";


const deckCards = new Deck();
const player1 = new Hand();
const player2 = new Hand();
let scorePlayer1 = 0;
let scorePlayer2 = 0;

//PLAYER1
//Button Pedir Carta - Player1
document.getElementById("dealPlayer1").addEventListener("click", () => {
  if(scorePlayer1 <= 7.5){
    dealPlayer('player1');
    countPointPlayer('player1');
  }
});

//PLAYER2
document.getElementById("dealPlayer2").addEventListener("click", () => {
  if(scorePlayer2 <= 7.5){
    dealPlayer('player2');
    countPointPlayer('player2');
  }
});

const dealPlayer = (player) => {
  let deckCard= deckCards.deal();
  if(player === 'player1'){
    player1.addCard(deckCard);
    showCardDeal(deckCard,player);
  }else{
    player2.addCard(deckCard);
    showCardDeal(deckCard,player);
  }

}

//Deal Card Player1
const showCardDeal = (deckCard,player) =>{
  const img = document.createElement("img");
  img.setAttribute('src',`./node_modules/siete-medio/img/${deckCard}.png`);
  let playerAll = player === 'player1'? 'imgPlayer1': 'imgPlayer2';
  //console.log('jugado playerAll es ', playerAll);
  document.getElementById(playerAll).appendChild(img);
}

const titleScore1 = (player)=>{
  const h1 = document.createElement("h1");
  h1.append("Ha perdido!");
  if(player === 'player1'){
    document.getElementById("titleScore1").appendChild(h1);
    document.getElementById("dealPlayer1").disabled = true;
  }else{
    document.getElementById("titleScore2").appendChild(h1);
    document.getElementById("dealPlayer2").disabled = true;
  }
}

const countPointPlayer= (player)=>{
  let score = 0;
  if(player === 'player1'){
    score = player1.countPointsSevenHalf();
  }else{
    score = player2.countPointsSevenHalf();
  }

  const h1 = document.createElement("h1");
  h1.append(score);
  let nameById= 'P'+ player.slice(1);
  document.getElementById("score".concat(nameById)).innerHTML = '';
  document.getElementById("score".concat(nameById)).appendChild(h1);

  if(player === 'player1' && score > 7.5){
    titleScore1('player1');
  }else if(player === 'player2' && score > 7.5){
    titleScore1('player2');
  }
 
}

