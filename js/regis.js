function regex() {
    let regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$");
    if(!$("#password").val().match(regex)){
        $("#password")[0].setCustomValidity('Password must contain at least 8 characters, including uppercase, lowercase and number');
    }
}

function validate(){
    if($("#password").val() == $("#confirm-password").val()){
        $("#confirm-password")[0].setCustomValidity('');
    }else{
        $("#confirm-password")[0].setCustomValidity('Passowrd must match');
    }
}