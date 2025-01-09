var btn = document.getElementById("go-button");

function buttonClick() {
  alert("You clicked the button");
  btn.removeEventListener("click", buttonClick);
  

  var customText = document.getElementsByClassName("my-input");
  var textArea = document.getElementsByClassName("my-textarea");
  var result = document.getElementById("text");

  result.innerHTML = "Hello " + customText[0].value + "<br />";
  result.innerHTML += "Message " + textArea[0].value;
}


btn.addEventListener("click", buttonClick);

var hobbies = ["reading", "coding", "gaming", "swimming", "running"];

hobbies.push("dancing");
console.log(hobbies.shift());
hobbies.unshift("singing");

var indexNum = hobbies.indexOf("gaming");

hobbies.splice(indexNum, 1);  



hobbies.forEach(function(hobby, index) {
  console.log("i like", hobby, index);
});

function getPhraseLen(p1, p2) {
  var l = p1.length;

  if (typeof p2 !== "undefined") {
    l += p2.length;
  }

  return l;
}