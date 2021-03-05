//----------VARIABLES
const wordList = ["mural", "coutellerie", "complice", "coffre", "effacer", "frelon", "tissage", "figurines", "collectif", "gauche"];
let userScore = 7;
let wordChoice = getRandomWord();
let splitWordArray = splitWord();
let hiddenWord = hideTheWord();
let letterFound = 0;
let alreadyGuessed = [];
let userGuess = [];
let menuInput = "";
//----------FUNCTIONS

//Chose the random word in the word list
function getRandomWord() {
    let wordChoice = wordList[Math.floor(Math.random()*wordList.length)];
    return wordChoice;
};

//Split word into array
function splitWord() {
    let splitWordArray = Array.from(wordChoice);
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

//Game function
function game(){
    userScore = 7;
    wordChoice = getRandomWord();
    splitWordArray = splitWord();
    hiddenWord = hideTheWord();
    letterFound = 0;
    alreadyGuessed = [];
    userGuess = [];
    do {
        var userGuess = prompt(`Veuillez rentrer une lettre qui selon vous se trouve dans le mot à deviner !
        \nIl vous reste ${userScore} tentatives.\nLes lettres déjà testées sont : ${alreadyGuessed}\n${hiddenWord}`).toLowerCase();
        //Check user input so that it's only one letter
        while (userGuess.length !== 1 || isNaN(userGuess) === false) {
            userGuess = prompt(`Attention à ne rentrer qu'une seule lettre !\nSinon c'est de la triche...\nLes lettres déjà testées sont : ${alreadyGuessed}`).toLowerCase();
        };
        //Check if user guess is correct
        if (splitWordArray.includes(userGuess)) {
            for (var i = 0; i < splitWordArray.length; i ++) {
                if (userGuess === splitWordArray[i]){
                    hiddenWord[i] = splitWordArray[i]; 
                    //To avoid cheating. Gives +1 only if it's a new guess.
                    if (alreadyGuessed.includes(userGuess) === false) {
                        letterFound +=1;
                    }
                }
            }  
        }
        //If user guess is not correct, remove one point/life
        else {
            userScore -= 1;
        }
        //To avoid having alreadyGuessed field, full of spam
        if (alreadyGuessed.includes(userGuess) === false){
            alreadyGuessed += userGuess + " / ";
        }
        if (letterFound === splitWordArray.length){
            alert(`Félicitation tu as trouvé le mot qui était : ${wordChoice}`);
            menu();
        }
        else if (userScore === 0) {
            alert(`Désolé, tu as fini pendu...\nLe mot était : ${wordChoice}`);
            menu();
        }
    } while (userScore > 0);
};

//Show the menu and the 3 choices possible (Play the game, Read the rules, Quit)
function menu(){
    let menuChoice = ["j", "r", "q"];
    var menuInput = prompt(`Bienvenue dans le menu. Veuillez entrer la lettre correspondant à votre choix\nJ = Jouer\nR = Afficher les règles\nQ = Quitter`).toLowerCase();
    do {
        if (menuInput === "j") {
            game();
        }
        else if (menuInput === "r") {
            alert(`Règles du jeu :\nLe but du jeu est simple, vous devez trouver toutes les lettres composant le mot caché.\nAttention, vous n'avez le droit qu'à 7 vies et chaque mauvaise lettre vous enlève une vie !`);
            menu();
        }
        else if (menuInput === "q"){
            break;
        }
        else {
            menu();
        }
    } while (menuChoice.includes(menuInput) === false)
};

//----------GAME START
alert(`Bienvenue, nous allons maintenant jouer au jeu du Pendu !`);
menu();
