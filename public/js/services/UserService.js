
class UserService
{
    AddNew(user)
    {       
        $.post("/CheckUsername/", user , (result) => {                   
            if(result[0] == null){                
                $.post("/AddUser/", user, () => {           
                }); 
                alert('user registrated');
            }
            else{
                
               alert('Username is taken');                
            }
        });          
    }

    Login(user){
        
        $.post("/Login/", user, (result) => { 
                     
            if(result[0] != null){           
                user.Balance = result[0].Balance;              
                localStorage.setItem("LoggedInUser", JSON.stringify(user));
                alert("login succeeded");                
                window.location.href = 'game.html';               
            }
            else{                
                alert("Password or username is incorrect.");                
            }
            
        })    
    }

    UpdateBalance(user){
        $.post("/UpdateBalance/", user, () => {             
        });
    }
}

