
window.onload = () => {

    
    localStorage.removeItem("LoggedInUser");


    $("#login").click( () => {

        let username = $("#username").val();
        let password = $("#password").val();

        let user = new User(username, password);

        user.Login();
    });


    $("#sign-up").click( () => {


        $('#recipe-new-modal').modal('hide');
        $('#sign-up-new-modal').modal('show');

    });


    $("#register").click( () => {

        let username = $("#username-new").val();
        let password = $("#password-new").val();

        let user = new User(username, password);

        user.AddUser();

    });

    

    function validatePassword(password1, password2){

        flag = false;
        if(password1 == password2){
    
            flag = true;
        }
    
        return flag;
    }


    // Toggle element hide & show
    function Toggle(x) {
        
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
};
