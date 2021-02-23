



class Deck{


    constructor(){

        let deck = new Array();

        for (let i = 1; i <= 52; i++) {
            deck.push(i);
        }
    
        this.Cards = deck;
    }

    GetCard(){
        
        var randomIndex = Math.floor(Math.random() * this.Cards.length);
        return this.Cards.splice(randomIndex, 1);
    }

    GetCardVal(card){

        if(card >= 1 && card <= 4){

            return 14
        }
        else if(card >= 5 && card <= 8){

            return 13
        }
        else if(card >= 9 && card <= 12){

            return 12
        }
        else if(card >= 13 && card <= 16){

            return 11
        }

        else if( card >= 17 && card <= 20 ){
            return 10
        }
        else if(card >= 21 && card <= 24){

            return 9
        }
        else if(card >= 25 && card <= 28){

            return 8
        }
        else if(card >= 29 && card <= 32){

            return 7
        }
        else if(card >= 33 && card <= 36){

            return 6
        }
        else if(card >= 37 && card <= 40){

            return 5
        }
        else if(card >= 41 && card <= 44){

            return 4
        }
        else if(card >= 45 && card <= 48){

            return 3
        }
        else if(card >= 49 && card <= 52){

            return 2
        }
        



    }



}