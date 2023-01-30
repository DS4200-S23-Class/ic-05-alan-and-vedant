let clicks = 0

function buttonClicked() {
    clicks += 1
    console.log(clicks)
    let newText = "Number of times button clicked: " + clicks;
    let buttonDiv = document.getElementById("button-div");
    buttonDiv.innerHTML = newText;
}