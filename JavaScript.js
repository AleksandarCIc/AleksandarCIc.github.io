function Check(){

    if(document.getElementById("LastName").innerText.length < 1){
        document.getElementById("LastNameSpan").innerText = "  *Your last name is requierd";
    }
    if(document.getElementById("Username").innerText.length < 5){
        document.getElementById("UsernameSpan").innerText = "  *Your username must be longer than 5 charachters";
    }
    if(document.getElementById("Name").innerText.length < 1){
        document.getElementById("NameSpan").innerText = "  *Your Name must be longer than 1 charachters";
    }
    if(document.getElementById("Email").innerText.length < 5){
        document.getElementById("EmailSpan").innerText = "  *Your email must be longer than 5 charachters";
    }
    if(document.getElementById("Password").innerText.length < 8){
        document.getElementById("PasswordSpan").innerText = "  *Your password must be longer than 8 charachters";
    }
    if(!document.getElementById("Password").innerText == document.getElementById("Password2").innerText){
        document.getElementById("PasswordSpan").innerText = "*Your passwords dont match";
    }
 }