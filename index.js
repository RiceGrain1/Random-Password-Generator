const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];

const genPassBtn = document.getElementById("generationbtn")
const passwordBlankOne = document.getElementById("passwordblank1")
const passwordBlankTwo = document.getElementById("passwordblank2")

let randoCha = []
let pass1 = ""
let pass2 = ""


/*pass1 = " " and pass2 = "  " have to be different values in order for the if statement to work properly. It was not working originally because it was checking the value of each variable and they both had the same value of "" initially defined.*/
function randomCharacters(pass) {
    if (pass === pass1) {
        for (let i = 0; i < 15; i++) {
            let randomNumber = Math.floor(Math.random() * characters.length)
            pass1 += (characters[randomNumber])
            console.log(characters[randomNumber])
        }
        passwordBlankOne.textContent = pass1
        pass1 = "  "
    } else if (pass === pass2) {
        for (let i = 0; i < 15; i++) {
            let randomNumber = Math.floor(Math.random() * characters.length)
            pass2 += (characters[randomNumber])
            console.log(characters[randomNumber])
        }
        passwordBlankTwo.textContent = pass2
        pass2 = " "
        console.log("second half of if statement run")
    } else {
        console.log("you broke something")
    }
}

genPassBtn.addEventListener("click", () => {
    randomCharacters(pass1)
    randomCharacters(pass2)
})

/*From Async Clipboard API sectionhttps://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript?noredirect=1&lq=1
 */
function CopyDivToClipboard(specifiedBlank) {
    console.log("copy function has been invoked")
    navigator.clipboard.writeText(specifiedBlank.textContent).then
}

passwordBlankOne.addEventListener("click", () => {
    CopyDivToClipboard(passwordBlankOne)
})

passwordBlankTwo.addEventListener("click", () => {
    CopyDivToClipboard(passwordBlankTwo)
})