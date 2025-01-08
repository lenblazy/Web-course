var btn = document.getElementById("go-button");

function buttonClick() {
  alert("You clicked the button");
  btn.removeEventListener("click", buttonClick);
}


btn.addEventListener("click", buttonClick);