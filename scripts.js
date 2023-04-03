const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_confirmation = document.getElementById("password_confirmation");

form.addEventListener("submit", (e) => {
 e.preventDefault();
checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailvalue = email.value;
    const passwordvalue = password.value;
    const password_confirmationvalue = password_confirmation.value;

    if (usernameValue == '') {
        setErrorfor(username, "O nome de usuário é obrigatório.");
    }
    else {
      setSuccessfor (username);
    }
    }
function setErrorfor (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    
    small.innerText = message;
    
    formControl.className = "form_control error";

}
    function setSuccessfor (input){
    const formControl = input.parentElement;


formControl.className = "form_control success";
    }