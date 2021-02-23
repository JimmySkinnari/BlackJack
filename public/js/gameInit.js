
window.onload = () => {

    
    UpdateUserLabels();
    var game = new Game();

   
    
    
    $(".bet").click(function (){

        let loggedInUser1 = JSON.parse(localStorage.getItem("LoggedInUser"));

        game.NewGame();

        $( "#player-cards").empty();
        $( "#dealer-cards").empty();

        let amount = parseInt(this.id);   //check what button is clicked (amount beted).
        game.Start(amount);

        MakeBet(loggedInUser1, amount);

       $("#10").hide();
       $("#50").hide();
       $("#100").hide();
       $("#add-money").hide();
       $("#winner").hide();

        GetGameUI();
        UpdateUserLabels();

    });


    $("#add-money").click( () => {

        let loggedInUser1 = JSON.parse(localStorage.getItem("LoggedInUser"));
        AddMoney(loggedInUser1, 500.00);
        location.reload();

    });


    $("#hitButton").click( () => {
        
        game.Hit();

    });


    $("#standButton").click( () => {

        game.Stand();

    });

    $("#hitButton").hide();
    $("#standButton").hide();
}

function GetGameUI(){


    $("#hitButton").show();
    $("#standButton").show();

}

function MakeBet(user, amount){

    if(user.Balance < amount){

        alert('You dont have enough money')
    }
    else{

        let username = user.Username;
        let password = user.Password;
        let user1 = new User(username, password);

        user1.Balance = user.Balance;
        user1.UpdateBalance(amount);
        localStorage.setItem("LoggedInUser", JSON.stringify(user1));
    }
}


function AddMoney(user, amount){


    let username = user.Username;
    let password = user.Password;
    let user1 = new User(username, password);

    user1.Balance = user.Balance;

    user1.InsertMoney(amount);

    localStorage.setItem("LoggedInUser", JSON.stringify(user1));

}

function UpdateUserLabels(){

    let loggedInUser = JSON.parse(localStorage.getItem("LoggedInUser"));

    document.querySelector("#user").innerText = "Logged in as: " + loggedInUser.Username;
    document.querySelector("#user-balance").innerText = "Balance: " + loggedInUser.Balance;
}