
document.getElementById("formnew").addEventListener("submit", function(event) {
    const age = document.getElementById("age1").value.trim();

    if(age.length < 18){
        alert("You Need To Be At Least 18 Years Old To Continue");
        event.preventDefault();
    }
});