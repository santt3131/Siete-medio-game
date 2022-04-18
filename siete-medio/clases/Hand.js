import Card from './Card.js';

export default class Hand {
    constructor(){
        this.requestCardNumber = 0;
        this.cardMaximum = 15;
        this.cards = [];
        this.points = 0;
    }


    //Métodos
    hands(){
        this.requestCardNumber = 0;
        this.cards = [];
    }

    addCard(card){
        if (this.requestCardNumber >= this.cardMaximum) {
            throw "No puedes solicitar más cartas'"
        }else{
            this.cards[this.requestCardNumber] = card;
            this.requestCardNumber++;
        }
    }

    countPointsSevenHalf(){
        this.points = 0;
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].includes("10") ||
                this.cards[i].includes("11") ||
                this.cards[i].includes("12")
            ) {
                this.points += 0.5;
            }else{
                let cardNumber = this.cards[i].substr(1, this.cards[i].length);
                this.points += parseInt(cardNumber);
            }
        }
        return this.points;
    }

}