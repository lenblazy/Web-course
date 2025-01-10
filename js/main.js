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

  constructor(name, height, weight) {
    console.log("Animal created named", name);
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  nameLength() {
    return this.name.length;
  }

}

// Animal.planet = "Earth";

// var dog = new Animal("Fido", 12, 20);
// var fish = new Animal("Goldie", 2, 0.5);

// console.log(fish.nameLength());
// console.log(dog.constructor.planet);

class Dog extends Animal {
  constructor(name, height, weight, barkVolume, leashColor) {
    super(name, height, weight);

    this.barkVolume = barkVolume;
    this.leashColor = leashColor;
  }

  bark() {
    if (this.barkVolume > 50) {
      console.log(this.name + " barks loudly");
    } else {
      console.log(this.name + " barks softly");
    }
  }
  
}

var king = new Dog("King", 12, 20, 60, "red");
king.bark();