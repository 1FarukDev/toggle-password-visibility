function togglePassword(){
    let myPassword = document.getElementById('myPassword');
    if(myPassword.type === "password"){
        myPassword.type = "text"

    }
    else{
        myPassword.type = "password"
    }
}