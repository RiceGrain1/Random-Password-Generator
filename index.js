
// Character object for later use and selection of choosing which kind of characters you want.
//
// let characters = {
//     letters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
//     numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
//     specialCharacters: [ "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
//     "/"]
// };

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passBlankSpace1 = document.getElementById("passwordblank1") 
const passBlankSpace2 = document.getElementById("passwordblank2") 
const genBtnEl = document.getElementById("generationbtn")

genBtnEl.addEventListener("click", displayPass1) 
genBtnEl.addEventListener("click", displayPass2) 

function clickDetected() {
    console.log("Click")
}

let pass1 = []
function randomCharacters1() {
for (let i = 0; i < 15; i++) {
    let randomNum = Math.floor(Math.random() * characters.length)  
    console.log(characters[randomNum])
    pass1.push(characters[randomNum])
}
}

function displayPass1() {
    randomCharacters1()
    for (let i = 0; i < pass1.length; i++) {
        passBlankSpace1.textContent += pass1[i]
    }
    
}

displayPass1()

let pass2 = []
function randomCharacters2() {
    for (let i = 0; i < 15; i++) {
        let randomNum = Math.floor(Math.random() * characters.length)  
        pass2.push(characters[randomNum])
}
}
randomCharacters2()

function displayPass2() {
    randomCharacters2()
    for (let i = 0; i < pass1.length; i++) {
        passBlankSpace2.textContent += pass2[i]
    }
}
displayPass2()

console.log(pass1)
console.log(pass2)
