let clicks = 0;
let clickerButton = document.getElementById("clicker");

clickerButton.addEventListener("click", function() {
  clicks += 1;
  console.log("Total clicks:", clicks);
});
let clickCountElement = document.getElementById("click-count");

clickerButton.addEventListener("click", function() {
  clicks += 1;
  clickCountElement.innerText = clicks;
});
