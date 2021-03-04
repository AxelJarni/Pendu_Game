// VARIABLES
const wordList = ["pierre", "feuille", "ciseaux", "puit"];
let wordChoice = getRandomWord();
let splitWordArray = splitWord();
let hiddenWord = hideTheWord();
let userGuess = getUserGuess();

// FUNCTIONS

//Chose the random word in the word list
function getRandomWord() {
    let wordChoice = wordList[Math.floor(Math.random()*wordList.length)];
    return wordChoice;
};

//Split word into array
function splitWord() {
    let splitWordArray = wordChoice.split("");
    return splitWordArray;
};

//Turn splitWordArray into an Array of underscore
function hideTheWord(){
    let hiddenWord = [];
    for (i = 0; i < wordChoice.length; i++) {
        hiddenWord[i] = "_";
    }
    return hiddenWord;
};

//Get the letter guessed by user and make sure it's only 1 letter long and not a number
function getUserGuess() {
    let userGuess = prompt("Veuillez rentrer une lettre que selon vous se trouve dans le mot à deviner !").toLowerCase();

    while(userGuess.length !== 1 || isNaN(userGuess) == false) {
        userGuess = prompt("Attention à ne rentrer qu'une seule lettre !\nSinon c'est de la triche...").toLowerCase();
    };
    return userGuess;
};


// GAME CODE

alert("Bienvenue, nous allons maintenant jouer au jeu du Pendu !");

getUserGuess();