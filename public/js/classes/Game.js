

// Build HTML for endscreen
// CSS and style for everything




class Game{

    constructor(){

       this.Deck = new Deck();
       this.Player = new Player();
       this.Dealer = new Dealer();

       this.Winner;

       this.Participants = [this.Player, this.Dealer]

       this.GameIsOver = false;
       this.WinnerName = "";

       this.Amount = 0;
    }

    Start(amount){

        this.Amount = amount;

        // First round.
        this.GetCard(this.Player);
        this.GetCard(this.Player);
        this.GetCard(this.Dealer);

        this.CheckForWinner(this.Player)

        
    }

    NewGame(){

        this.Deck = new Deck();
        this.Player = new Player();
        this.Dealer = new Dealer();
 
        this.Winner;
 
        this.Participants = [this.Player, this.Dealer]
 
        this.GameIsOver = false;
        this.WinnerName = "";
 
        this.Amount = 0;
    }

    Hit(){

        this.GetCard(this.Player);
        this.CheckForWinner(this.Player);

        if(this.Winner != null){

            this.GameOver();
        }

    }

    Stand(){

        do{

           this.GetCard(this.Dealer);
        
        }while(this.Dealer.Points <= 16)   // Dealer stops only on 16 or above.


        if(this.CheckForWinner(this.Dealer) != true){

            if(this.Player.Points < this.Dealer.Points){

                this.Winner = this.Dealer;
            }
            else{

                this.Winner = this.Player;
            }

        }
        this.GameOver();
        
    }
    GetCard(participator){

        let card = this.Deck.GetCard();
        this.PrintCard(participator, card);   
        this.UpdateScore(participator, card);
        $("#player-score").text("player points: " + this.Player.Points);
        $("#dealer-score").text("dealer points: " + this.Dealer.Points);
        
    }


    UpdateScore(participator, card){

        let value = this.Deck.GetCardVal(card);
        participator.Cards.push(value);
        participator.Points += value;

        console.log(participator.Name + "score = " + participator.Points)
    }

    CheckForWinner(participator){

        if(participator.Points == 21){

            this.Winner = participator;
            
            if(this.Winner.Name = "player"){

                this.PayWinner(this.Player);


            }
            return true;
        }
        else if (participator.Points > 21){

            if(this.HasAces(participator) != true){

                if(participator.Name == "player")
                {

                    this.Winner = this.Dealer;
                }
                else{   
                    this.Winner = this.Player;
                    this.PayWinner(this.Player);
                }
            }
            return true;
        }

        return false;
    }

    Sum(cards){    // Returns Sum of an array

        var sum = 0;
        cards.forEach(cardVal => {
            sum += cardVal;
        });

        return sum;
    }

    HasAces(participator){ // Check if user has aces and if so, re-evaluates hand.

        participator.Cards.forEach(cardVal => {
            if(cardVal == 14){
                cardVal = 1;
            }
        });

        if(this.Sum(participator.Cards) < 21){

            this.UpdateParticipatorScore(participator);
            return true;
        }
        else{

            return false;
        }
    }

    PrintCard(participator, card){

        let img = document.createElement('img');
        img.src ="img/" + card + ".png";

        var divID = "#" + participator.Name + '-cards'
        document.querySelector(divID).appendChild(img);
    }

    PayWinner(){

        let loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));

        let user = new User(loggedInUser.Username, loggedInUser.Password);
        let username = user.Username;
        let password = user.Password;
        let user1 = new User(username, password);

        user1.Balance = loggedInUser.Balance;
        user1.InsertMoney(this.Amount * 2)
        localStorage.setItem("LoggedInUser", JSON.stringify(user1));

        console.log("user betted " + this.Amount + " and get total " + (this.Amount * 2))
        
    }    

    UpdateParticipatorScore(participator){

        if(participator.Name == "Dealer"){

            this.Dealer.Score = participator.Score;
        }
        else if(participator.Name == "Player"){

            this.Player.Score = participator.Score;
        }
    }

    GameOver(){

        this.HideAndShowButtons();
        $("#winner").text("the winner is " + this.Winner.Name);
        $("#winner").show();
    }

    HideAndShowButtons(){

        $("#hitButton").hide();
        $("#standButton").hide();

        $("#10").show();
        $("#50").show();
        $("#100").show();
        $("#add-money").show();
    }
      
}