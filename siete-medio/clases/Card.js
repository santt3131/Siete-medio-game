export default class Card{
   
    constructor(){
    }

   static get symbol(){
       return SYMBOL;
   }

   static get numeroCarta(){
       return NUMEROCARTA;
   }

}

const NUMEROCARTA = ["1","2","3","4","5","6","7",
"10","11","12"];


const SYMBOL = {
    ESPADAS: "e",//espadas
    BASTOS: "b",//trebol-bastos
    ORO : "o",//diamante-oro
    CORAZON: "c"//copas-corazon
}
