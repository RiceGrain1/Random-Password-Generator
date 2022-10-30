const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];

const genPassBtn = document.getElementById("generationbtn")
const passwordBlankOne = document.getElementById("passwordblank1")
const passwordBlankTwo = document.getElementById("passwordblank2")



let randoCha = []
let pass1 = ""
let pass2 = ""

function randomCharacters(pass) {
    if (pass === pass1) {
        for (let i = 0; i < 15; i++) {
            let randomNumber = Math.floor(Math.random() * characters.length)
            pass1 += (characters[randomNumber])
            console.log(characters[randomNumber])
        }
        passwordBlankOne.textContent = pass1
        pass1 = " "
    } else if (pass === pass2) {
        for (let i = 0; i < 15; i++) {
            let randomNumber = Math.floor(Math.random() * characters.length)
            pass2 += (characters[randomNumber])
            console.log(characters[randomNumber])
        }
        passwordBlankTwo.textContent = pass2
        pass2 = " "
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

/* WIP code to copy text from a text box on click look her for reference: 
https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function myFunction() {
    // Get the text field
    var copyText = passwordBlankOne

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}

passwordBlankOne.addEventListener("click", myFunction)
*/

/* try this solution to copy text: 
https://discord.com/channels/684009642984341525/1025753909358239744/1025761560662130739

function copyit() {

  // the conent of the passwordOneEl
  const textToCopy = passwordOneEl.textContent; 

  // note that writing to the clipboard is asynchronous
  // and returns a  promise.  If the promise succeeds it
  // calls the first function, if the promise
  // fails it calls the second function
  navigator.clipboard.writeText(textToCopy).then( 
    function () { // this is the succeed case
      console.log('Async: Copying to clipboard was successful!');
    },
    function (err) { // this is the fail case
      console.error('Async: Could not copy text: ', err);
    }
  );
}
*/