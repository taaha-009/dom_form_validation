document.getElementById("formnew").addEventListener("submit", function(event) {
    const password = document.getElementById("password1").value.trim();

    if(password.length < 8){
        alert("Password requires to be at least 8 characters long");
        event.preventDefault();
    }
});


document.getElementById("formnew").addEventListener("submit", function(event) {
    const password = document.getElementById("password1").value.trim();

    if(password.length < 8){
        alert("Password requires to be at least 8 characters long");
        event.preventDefault();
    }
});


function myFunction() {
    let input = document.getElementById("inp");

    if(!input.checkValidity()){
        document.getElementById("result").innerHTML = input.validationMessage;
    }
    else{
        document.getElementById("result").innerHTML = "Input is alright";
    }
}