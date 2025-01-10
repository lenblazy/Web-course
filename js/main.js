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

  function printBoth() {
    return p1 + " " + p2;
  }

  return printBoth();
}

function getParams(params) {
  var l = params.phrase.length;

  if (typeof params.anotherPhrase !== "undefined") {
    l += params.anotherPhrase.length;
  }

  return l;
}

var p1 = "Hello";
var p2 = "World";

var computed = getParams({phrase: p1, anotherPhrase: p2});
console.log(computed);

var numbers = [3,8,7,9,6,1,12,5,14,2,19,16,18,11,10,15,13,17,20];

numbers.sort(function(a, b) { return a - b });
var currentNum = 1;
for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] !== currentNum) {
    console.log("Missing Number ", currentNum);
    break;
  }
  currentNum++;
}

class Animal {

}

var dog = new Animal();