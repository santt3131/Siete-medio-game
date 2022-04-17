import Card from './Card.js';

 //Mazo
export default class Deck {
    constructor(){
        this.deck = [];
        this.newDeckAgain();
        this.shuffle();
    }

    newDeckAgain(){
        for (let symbol in Card.symbol) {
            for (let numero in Card.numeroCarta) {
               this.deck = [...this.deck , 
                `${Card.symbol[symbol]}${Card.numeroCarta[numero]}`];
            }
        }
    }

    shuffle(){
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
      
        return this.deck;
    }

    //retirar carta
    deal(){
        return this.deck.pop();
    }

}

