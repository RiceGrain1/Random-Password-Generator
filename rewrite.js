const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];

let genPassBtn = document.getElementById("generationbtn")
const passwordBlankOne = document.getElementById("passwordblank1")
const passwordBlankTwo = document.getElementById("passwordblank2")
genPassBtn.addEventListener("click", setPass1)


let randoCha = []
let test = ""

function randomCharacters() {
    for (let i = 0; i < 15; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        test += (characters[randomNumber])
        console.log(characters[randomNumber])
    }
}






function setPass1() {
    randomCharacters()
    passwordBlankOne.textContent = test
    test = " "
}