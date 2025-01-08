var btn = document.getElementById("go-button");

function buttonClick() {
  alert("You clicked the button");
  btn.removeEventListener("click", buttonClick);
  document.getElementById("text").innerHTML = "Don't do it";
}


btn.addEventListener("click", buttonClick);