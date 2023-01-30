let clicks = 0

function buttonClicked() {
    clicks += 1
    let newText = "Number of times button clicked: " + clicks;
    let buttonDiv = document.getElementById("button-div");
    buttonDiv.innerHTML = newText;

}