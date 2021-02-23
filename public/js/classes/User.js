

class User{

    constructor(username, password){

        this.Username = username;
        this.Password = password;
        this.Balance = 0;
    }


    Search(searchvalue)
    {
        let service = new UserService();
        
        //Gör en sökning mot datakällan
        service.Search(searchvalue);               
    }

    Login(){

        let service = new UserService();
        service.Login(this);
    }


    UpdateBalance(amount){

        if(this.Balance - amount >= 0){

            this.Balance -= amount;

            let service = new UserService();
            service.UpdateBalance(this);
        }
        else{
            alert("You dont have enough money to withdraw " + amount);
        }
    }

    InsertMoney(amount){

        this.Balance += amount;
        let service = new UserService();
        service.UpdateBalance(this);
    }

    
   validateName(){

        let service = new UserService();
        service.GetUserByName(this);
   }

   AddUser(){

    let service = new UserService();
    service.AddNew(this);
   }
    
}