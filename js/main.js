var btn = document.getElementById("go-button");

function buttonClick() {
  alert("You clicked the button");
  btn.removeEventListener("click", buttonClick);
  document.getElementById("text").innerHTML = "Don't do it";
}


btn.addEventListener("click", buttonClick);

var hobbies = ["reading", "coding", "gaming", "swimming", "running"];

hobbies.push("dancing");
console.log(hobbies.shift());
hobbies.unshift("singing");

hobbies.forEach(function(hobby, index) {
  console.log("i like", hobby, index);
});