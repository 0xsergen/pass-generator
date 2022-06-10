const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const passLengthEl = document.getElementById("pass-length");
const passAmount = 2;
let pass1El = document.getElementById("pass1-el");
let pass2El = document.getElementById("pass2-el");
// each password 15 characters long
// two rand pass when clicked.

function randCharacter() {
  let char = Math.floor(Math.random() * characters.length);
  return characters[char];
}

function passGenerator() {
  let passwords = ["", ""];
  let passLength = passLengthEl.value;
  for (let i = 1; i <= passLength; i++) {
    passwords[0] += randCharacter();
    passwords[1] += randCharacter();
  }
  console.log(passwords);
  pass1El.value = passwords[0];
  pass2El.value = passwords[1];
  return passwords;
}

function copyPassword(element) {
  let chosenPass = document.getElementById(`pass${element}-el`);
  console.log(chosenPass.value);
  navigator.clipboard.writeText(chosenPass.value);
  let oldText = chosenPass.value;
  chosenPass.value = "Copied!";
  setTimeout(() => {
    chosenPass.value = oldText;
  }, 1000);
}
