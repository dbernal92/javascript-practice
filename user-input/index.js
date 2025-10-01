// Declare variable
let username;

// When the submit button is clicked
document.getElementById("mySubmit").onclick = function (){
    // Set variable to what is entered in input
    username = document.getElementById("myText").value;
    // Updates H1 header
    document.getElementById("myH1").textContent = `Welcome back, ${username}!`
}